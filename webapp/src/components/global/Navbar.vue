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
  { name: "Rólunk", route: 'aboutus/pubinterestdata' },
]);

const mobileMenuOpen = ref(false);
const toggleMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};
</script>
<template>
  <div class=" flex flex-row justify-between items-center p-2 dark:text-zinc-100 w-full ">
    <div class="hidden xl:flex flex-row gap-5 items-center w-full">
      <RouterLink to="/">
        <Icon type="home" size="base" class="p-2 min-w-10 rounded-md bg-blue-600 flex items-center justify-center text-zinc-300" />
      </RouterLink>
      <RouterLink v-for="(navlink, key) in navlinks" :key="key" :to="`/${navlink.route}`">
        {{ navlink.name }}
      </RouterLink>
    </div>
    <div class="xl:hidden flex flex-row justify-between items-center p-2 dark:text-zinc-100 w-full relative">
      <div class="flex items-center gap-4">
        <Icon type="home" size="base" class="p-2 min-w-10 rounded-md bg-blue-600 flex items-center justify-center text-zinc-300" />
        <button @click="toggleMenu">
          <Icon type="menu" size="base" class="text-zinc-300 bg-zinc-700 p-2 min-w-10 rounded-md" />
        </button>
      </div>
      <div
      v-if="mobileMenuOpen"
      class="absolute top-full left-0 right-0 bg-zinc-300 dark:bg-zinc-900 flex flex-col items-start p-4 rounded-md gap-2 z-50"
      >
        <RouterLink
          v-for="(navlink, key) in navlinks"
          :key="key"
          :to="`/${navlink.route}`"
          class="w-full p-2 hover:bg-blue-600 hover:text-zinc-100 active:bg-blue-600/80 duration-200 rounded-md"
          @click="mobileMenuOpen = false"
        >
          {{ navlink.name }}
        </RouterLink>
      </div>
    </div>
    <Theme :icon-only="true" />

  </div>
</template>
