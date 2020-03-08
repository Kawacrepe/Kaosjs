import Vue, { VNode, CreateElement, Component } from 'vue';
import {
  updateListeners,
  hasClickedAway,
  UIListener,
} from '../mixins/click-away';
import { wrapSlot, wrapOptions } from '../mixins/slot-wrapper';

const data = Vue.extend({
  data: () => ({
    toggled: false,
  }),

  props: {
    offOnBlur: {
      type: Boolean,
      default: false,
    },

    tag: {
      type: String,
      default: 'div',
    },
  },

  watch: {
    toggled() {
      updateListeners(this.onClickAway as UIListener, this.toggled);
      this.$emit('toggled', { toggled: this.toggled });
    },
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

  methods: {
    onClickAway(event: MouseEvent) {
      if (hasClickedAway(this.$el, event) && this.offOnBlur) {
        this.off();
        this.$emit('click-away', { event });
      }
    },

    on() {
      this.toggled = true;
      this.$emit('on');
    },

    off() {
      this.toggled = false;
      this.$emit('off');
    },

    toggle() {
      this.toggled = !this.toggled;
      this.$emit('toggle', { toggled: this.toggled });
    },
  },

  render(h: CreateElement): VNode {
    return wrapSlot(this, h, {
      toggled: this.toggled,

      on: this.on,
      off: this.off,
      toggle: this.toggle,
    });
  },
});

export const Toggle: Component = {
  name: 'toggle',
  data,
};
