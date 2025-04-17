<script lang="ts" setup>
import { RouterLink } from 'vue-router';
import Icon from './Icon.vue';
import Theme from './Theme.vue';
import { ref } from 'vue';
interface NavLink{
  name: string,
  route: string
}
const navlinks = ref<NavLink[]>([
  { name: "Kezdőlap", route: '' },
  { name: "Események", route: 'events' },
  { name: "Képzéseink", route: 'trainings' },
  { name: "Oktatóink", route: 'instructors' },
  { name: "Rólunk", route: 'aboutus/introduction' },
  { name: "Kapcsolatak", route: 'contacts' },
  { name: "Szülők figyelmébe", route: 'forparents' },
  { name: "Közzététel", route: 'aboutus/publication' },
]);

const mobileMenuOpen = ref(false);
const toggleMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};
</script>
<template>
  <div class="flex flex-row justify-between items-center p-2 dark:text-zinc-100 w-full sticky top-0 bg-zinc-100 dark:bg-zinc-950 z-50">
    <!-- Desktop Navigation -->
    <div class="hidden xl:flex flex-row gap-5 items-center w-full">
      <RouterLink to="/" class="flex-shrink-0">
        <Icon type="home" size="base" class="p-2 min-w-10 rounded-md bg-blue-600 flex items-center justify-center text-zinc-300" />
      </RouterLink>
      <div class="flex flex-row flex-wrap gap-4">
        <RouterLink
          v-for="(navlink, key) in navlinks"
          :key="key"
          :to="`/${navlink.route}`"
          class="hover:text-blue-600 transition-colors duration-200 py-1 px-2 rounded-md"
        >
          {{ navlink.name }}
        </RouterLink>
      </div>
    </div>

    <!-- Mobile Navigation -->
    <div class="xl:hidden flex flex-row justify-between items-center w-full relative">
      <div class="flex items-center gap-4">
        <RouterLink to="/" class="flex-shrink-0">
          <Icon type="home" size="base" class="p-2 min-w-10 rounded-md bg-blue-600 flex items-center justify-center text-zinc-300" />
        </RouterLink>
        <button @click="toggleMenu" class="focus:outline-none">
          <Icon type="menu" size="base" class="text-zinc-300 bg-zinc-700 p-2 min-w-10 rounded-md" />
        </button>
      </div>

      <!-- Mobile Menu Dropdown -->
      <div
        v-if="mobileMenuOpen"
        class="absolute top-full left-0 right-0 mt-2 bg-zinc-100 dark:bg-zinc-900 flex flex-col items-start p-4 rounded-md gap-2 z-50 shadow-lg border border-zinc-200 dark:border-zinc-800 max-h-[80vh] overflow-y-auto"
      >
        <RouterLink
          v-for="(navlink, key) in navlinks"
          :key="key"
          :to="`/${navlink.route}`"
          class="w-full p-2 hover:bg-blue-600 hover:text-zinc-100 active:bg-blue-600/80 duration-200 rounded-md text-zinc-900 dark:text-zinc-100"
          @click="mobileMenuOpen = false"
        >
          {{ navlink.name }}
        </RouterLink>
      </div>
    </div>

    <!-- Theme Toggle -->
    <div class="flex-shrink-0">
      <Theme :icon-only="true" />
    </div>
  </div>
</template>
