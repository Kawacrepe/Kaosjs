<template>
    <div id="#app" class="w-full">
        <div class="max-w-4xl p-4 mx-auto my-64">
            <div class="p-6 bg-gray-800 rounded shadow-xl">
                <h1>
                    Playground Components
                </h1>

                <select-component v-slot="{ itemsAvailable, selectItem, removeItem, selectedItems }" :items="items" defaultKey="name">
                    <list-view :items="itemsAvailable" class="flex items-center justify-start w-full">
                        <li v-for="item in itemsAvailable" :key="item.name" @click="selectItem(item)">
                            {{item}}
                        </li>
                    </list-view>
                    <div v-if="selectedItems">
                                            Selected items
                        <list-view :items="selectedItems" class="flex items-center justify-start w-full">
                            <li v-for="item in selectedItems" :key="item.name" @click="removeItem(item)">
                                {{item}}
                            </li>
                        </list-view>
                    </div>
                </select-component>
                
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import playgroundComponent from './components/playgroundComponent.vue';

export default Vue.extend({
    name: 'App',
    data: () => ({
        items: [
            {name: 'Foo'},
            {name: 'Bar'},
            {name: 'Fizz'},
            {name: 'Foobar'}
        ]
    }),
    components: {
        playgroundComponent,
    }
})
</script>

<style lang="postcss">
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>