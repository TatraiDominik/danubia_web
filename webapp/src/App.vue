<script setup lang="ts">
import { useThemeStore } from '@/stores/darkMode';
import { RouterLink, RouterView } from 'vue-router';
import Navbar from '@/components/global/Navbar.vue';

const themeStore = useThemeStore();
</script>

<template>
  <div :class="{ dark: themeStore.isDarkMode }" class="min-h-screen flex flex-col justify-start items-start">
    <Navbar class="z-30" />
    <RouterView class="z-20 w-full"/>
  </div>
</template>

<style>

</style>
