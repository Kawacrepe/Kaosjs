import Vue, { VNode, CreateElement, Component } from 'vue';
import { wrapOptions, wrapSlot } from "../mixins/slot-wrapper";

const data = Vue.extend({
    props: {
        items: {
            type: Array,
            default: [],
        },

        value: {
            type: String,
            default: 'value',
        },

        tag: {
            type: String,
            default: 'ul',
        }
    },

    mounted() {
        this.$emit('mounted', this);
    },

    computed: {
        wrapOptions(): wrapOptions {
            return {
                tag: this.tag,
                data: {},
            };
        },
    },

    render(h: CreateElement): VNode {
        return wrapSlot(this, h, {
            
        });
    },
});

export const ListView: Component = {
    name: 'ListView',
    data,
}