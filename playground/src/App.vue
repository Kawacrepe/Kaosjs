<template>
    <div id="#app" class="w-full">
        <div class="max-w-4xl p-4 mx-auto my-64" style="height: 400px;">
            <div class="p-6 bg-gray-800 rounded shadow-xl">
                <h1>
                    Playground Components
                </h1>
                <div class="flex">
                    <playground-component text="On click" class="ml-2" />
                    <playground-component text="On hover" class="ml-2" trigger="hover" />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import playgroundComponent from './components/playgroundComponent.vue';

export default Vue.extend({
    name: 'App',
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