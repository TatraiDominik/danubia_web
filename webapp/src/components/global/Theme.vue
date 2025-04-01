<script setup lang="ts">
import { useThemeStore } from '@/stores/darkMode';
defineProps<{
  iconOnly: boolean
}>()
const themeStore = useThemeStore();
</script>

<template>
  <div @click="themeStore.toggleTheme" class="bg-zinc-900 text-zinc-100 p-2 h-full gap-2 rounded-md flex flex-row justify-center content-center items-center dark:bg-zinc-100 dark:text-zinc-900 ">
    <h3 v-if="!iconOnly">Téma</h3>
    <div class="flex flex-row justify-center content-center items-center">
      <span class="rounded-l-full bg-zinc-100 w-3 h-6"></span>
      <span class="rounded-r-full bg-zinc-900 w-3 h-6"></span>
    </div>
  </div>
</template>
