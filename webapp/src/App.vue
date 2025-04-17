<script setup lang="ts">
import { useThemeStore } from '@/stores/darkMode';
import { RouterLink, RouterView } from 'vue-router';
import Navbar from '@/components/global/Navbar.vue';
import { watch } from 'vue';

const themeStore = useThemeStore();
const updateHtmlClass = () => {
  if (themeStore.isDarkMode) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};
updateHtmlClass();
watch(() => themeStore.isDarkMode, () => {
  updateHtmlClass();
});
</script>

<template>
  <div :class="{ dark: themeStore.isDarkMode }" class="w-full h-full flex flex-col justify-start content-center items-start">
    <Navbar class="z-30" />
    <RouterView class="z-20 w-full h-full"/>
  </div>
</template>

<style>

</style>
