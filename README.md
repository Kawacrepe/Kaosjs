# Kaosjs

Kaosjs is a [renderless](https://adamwathan.me/renderless-components-in-vuejs/) Vue component library. It only brings functionality to Vue, without styling.

> `!` This library is not ready for production.

# Installation

Install the `kaosjs` library with your package manager:

```console
$ yarn add kaosjs
```

Register it as a Vue plugin:

```js
// main.js
import Vue from 'vue';
import App from './App.vue';
import Kaosjs from 'kaosjs';

Vue.config.productionTip = false;
Vue.use(Kaosjs);

new Vue({
  render: h => h(App),
}).$mount('#app');
```

# TO-DO

- TreeView
- Tags Input
- Tabs
- Storage
- Pagination
