<template>
    <div id="#app" class="w-full">
        <div class="max-w-4xl p-4 mx-auto my-64">
            <div class="p-6 bg-gray-800 rounded shadow-xl">
                <h1>
                    Playground Components
                </h1>
                <p class="mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae
                    beatae corrupti ea quae quam omnis, molestias sit officiis amet minus
                    fugiat aperiam inventore, harum praesentium nihil obcaecati suscipit
                    doloribus aut. Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Ad dolores facere ut eaque possimus eligendi nisi doloremque!
                    Possimus, ratione sint at sapiente natus quibusdam dolorem ab odit,
                    necessitatibus earum cupiditate.
                </p>
        
                <observer
                    v-slot="{ isVisible }"
                    class="flex items-center justify-center w-full"
                    style="margin: 120% 0;"
                >
                    <div class="flex" v-if="isVisible">
                        <playground-component text="On click" class="ml-2" />
                        <playground-component text="On hover" class="ml-2" trigger="hover" />
                    </div>
                </observer>
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