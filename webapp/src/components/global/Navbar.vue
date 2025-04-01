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
  { name: "Kezdőlap", route: 'homeView' },
  { name: "Események", route: 'events' },
  { name: "Képzéseink", route: 'trainings' },
  { name: "Oktatóink", route: 'instructors' },
  { name: "Rólunk", route: 'aboutus' },
  { name: "Kapcsolatak", route: 'contacts' }
]);
</script>
<template>
  <div class="flex flex-row justify-center content-center items-center gap-5 p-2 dark:text-zinc-100">
    <RouterLink to="/homeView">
      <Icon type="home" size="base" class="p-2 rounded-md bg-blue-600 text-zinc-300"></Icon>
    </RouterLink>
    <Theme :icon-only="true"></Theme>
    <RouterLink v-for="(navlink, key) in navlinks" :key="key" :to="`/${navlink.route}`">{{ navlink.name }}</RouterLink>
  </div>
</template>
