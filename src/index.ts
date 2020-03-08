import { VueConstructor } from 'vue/types/umd';
import * as components from './packages/index';

const kaos = {
  install(Vue: VueConstructor) {
    Object.values(components).forEach((component: any) => {
      Vue.use({
        ...component,
        install: (Vue: VueConstructor) => {
          Vue.component(component.name, component.data);
        },
      });
    });
  },
};

export default kaos;
export { components as Components };
