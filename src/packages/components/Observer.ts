import Vue, { VNode, CreateElement, Component } from 'vue';
import { wrapOptions, wrapSlot } from "../mixins/slot-wrapper";

const data = Vue.extend({
    data: () => ({
        observer: (null as unknown) as IntersectionObserver | null,
        entry: (null as unknown) as IntersectionObserverEntry | null,
        visible: false,   
    }),
    props: {
        root: {
            type: Element,
            default: null,
        },

        rootMargin: {
            type: String,
            default: '0px',
        },

        threshold: {
            type: Number,
            default: 0,
        },

        onVisible: {
            type: Function,
            required: false,
        },

        onInvisible: {
            type: Function,
            required: false,
        },

        wrap: {
            type: Boolean,
            default: true,
        },

        tag: {
            type: String,
            default: 'div',
        },
    },

    computed: {
        wrapOptions(): wrapOptions {
            return {
                tag: this.tag,
                data: {},
                force: this.wrap,
            };
        },

        observerPayload(): any {
            return {
                element: this.$el,
                context: this,
            };
        },
    },

    mounted() {
        this.$emit('mounted', this);
        this.createObserver();
    },
    beforeDestroy() {
        this.destroyObserver();
    },

    methods: {
        createObserver() {
            if(this.observer) this.destroyObserver();

            this.observer = new IntersectionObserver(
                entries => {
                    this.entry = entries[0];
                    
                    if(entries.length > 1) {
                        this.entry = this.entry ?? entries.find(e => e.isIntersecting);
                    }

                    this.visible = this.entry?.isIntersecting && this.entry.intersectionRatio
                        >= this.threshold;
                    
                    const payload = { entry: this.entry, element: this.entry.target };

                    if(this.visible) {
                        this.$emit('visible', payload);
                        if(this.onVisible) {
                            this.onVisible(payload, this);
                        }
                    } else {
                        this.$emit('invisible', payload);
                        if(this.onInvisible) {
                            this.onInvisible(payload, this);
                        }
                    }
                },
                {
                    root: this.root,
                    rootMargin: this.rootMargin,
                    threshold: this.threshold,
                },
            );

            this.$nextTick(() => {
                if(this.observer) {
                    this.observer.observe(this.$el);
                    this.$emit('observe', {
                        observer: this.observer,
                        ...this.observerPayload,
                    });
                }
            });
        },
        destroyObserver() {
            if(this.observer) {
                this.observer.disconnect();
                this.observer = null;
                this.$emit('disconnect', this.observerPayload);
            }
        },
    },

    render(h: CreateElement): VNode {
        return wrapSlot(this, h, {
            isVisible: this.visible,
            entry: this.entry,
        });
    },
});

export const Observer: Component = {
    name: 'observer',
    data,
}