<script setup lang="ts">
import { useThemeStore } from '@/stores/darkMode';
import { RouterLink, RouterView } from 'vue-router';
import Navbar from '@/components/global/Navbar.vue';


const themeStore = useThemeStore();
</script>

<template>
  <div :class="{ dark: themeStore.isDarkMode }" class="min-h-screen flex flex-col justify-start items-start ">
    <Navbar />
    <RouterView/>
  </div>
</template>

<style scoped>

</style>
