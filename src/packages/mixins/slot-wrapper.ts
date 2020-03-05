import { CreateElement } from 'vue';
import { VNode, VNodeData } from 'vue/types/umd';

declare module 'vue/types/vue' {
  interface Vue {
    wrapOptions: wrapOptions;
  }
}

const defaultwrapOptions: wrapOptions = {
  tag: 'div',
  data: {},
  force: false,
};

export interface wrapOptions {
  tag?: string;

  data?: VNodeData;

  force?: boolean;
}

export const wrapSlot = (
  vm: Vue,
  h: CreateElement,
  props: any,
  slotName = 'default',
  wrapOptions: wrapOptions = {},
): VNode => {
  const options: wrapOptions = {
    ...defaultwrapOptions,
    ...(vm.wrapOptions || wrapOptions),
  };

  const slot = vm.$scopedSlots[slotName]
    ? vm.$scopedSlots[slotName]!(props)
    : undefined;

  if (!options.force && slot && slot.length === 1) {
    return slot[0];
  } else {
    return h(options.tag, options.data, [slot]);
  }
};
