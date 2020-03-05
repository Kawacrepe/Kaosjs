<template>
    <div id="#app" class="w-full">
        <div class="max-w-4xl p-4 mx-auto my-64" style="height: 400px;">
            Tailwind ok
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: 'App',
})
</script>

<style lang="postcss">
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>