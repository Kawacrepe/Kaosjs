import Vue, { VNode, CreateElement, Component } from 'vue';
import { wrapSlot } from '../mixins/slot-wrapper';

const data = Vue.extend({
    data: () => ({
        selectedItems: [] as Array<unknown>,
    }),

    props: {
        items: {
            type: Array,
            required: true,
            default: [],
        },

        defaultKey: {
            type: String,
            default: 'id',
        },

        defaultValue: {
            type: Array,
            default: () => ([])
        },

        tag: {
            type: String,
            default: 'div',
        }
    },

    computed: {
        itemsAvailable(): Array<unknown>{
            return this.items.filter((item) => {
                if(!this.selectedItems.includes(item)) return item
            });
        }
    },

    methods: {
        selectItem(item: Object) {
            this.selectedItems.push(item);
            this.$emit('selectItem');
        },

        removeItem(item: Object) {
            const index = this.selectedItems.indexOf(item, 0);
            if(index > -1) this.selectedItems.splice(index, 1);
            this.$emit('removeItem');
        },
    },

    mounted() {
        this.$emit('mounted', this);
    },

    render(h: CreateElement): VNode {
        return wrapSlot(this, h, {
            selectedItems: this.selectedItems,
            selectItem: this.selectItem,
            removeItem: this.removeItem,
            itemsAvailable: this.itemsAvailable,
        });
    },
});

export const Select: Component = {
    name: 'selectComponent',
    data,
}