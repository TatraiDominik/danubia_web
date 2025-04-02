<script setup lang="ts">
import Icon from './Icon.vue';
import { useThemeStore } from '@/stores/darkMode';
defineProps<{
  iconOnly: boolean
}>()
const themeStore = useThemeStore();
</script>

<template>
  <div @click="themeStore.toggleTheme" class="bg-zinc-900 text-zinc-100 p-2 w-10 h-full gap-2 rounded-md flex flex-row justify-center content-center items-center dark:bg-zinc-100 dark:text-zinc-900 ">
    <h3 v-if="!iconOnly">Téma</h3>
    <div class="flex flex-row justify-center content-center items-center">
      <Icon :type="themeStore.isDarkMode ? 'light_mode': 'dark_mode'" size="base"></Icon>
    </div>
  </div>
</template>
