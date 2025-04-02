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
]);
</script>
<template>
  <div class="flex flex-row justify-between content-center items-center p-2 dark:text-zinc-100 w-full">
    <div class="flex flex-row justify-start content-center items-center gap-5 w-full">
      <RouterLink to="/">
        <Icon type="home" size="base" class="p-2 min-w-10 rounded-md bg-blue-600 flex flex-col justify-center content-center items-center text-zinc-300"></Icon>
      </RouterLink>
      <RouterLink v-for="(navlink, key) in navlinks" :key="key" :to="`/${navlink.route}`">{{ navlink.name }}</RouterLink>
    </div>
    <Theme :icon-only="true"></Theme>
  </div>
</template>
