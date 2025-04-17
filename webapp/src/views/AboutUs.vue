<script lang="ts" setup>
import TabControl from '../components/global/TabControl.vue';
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const route = useRoute();

const activeTabIndex = computed(() => {
  const path = route.path;

  if (path.includes('/aboutus/introduction')) return 0;
  if (path.includes('/aboutus/coworkers')) return 1;
  if (path.includes('/aboutus/management')) return 2;
  if (path.includes('/aboutus/applications')) return 3;
  if (path.includes('/aboutus/publication')) return 4;

  return 0;
});

if (route.path === '/aboutus') {
  router.push('/aboutus/introduction');
}
</script>

<template>
<div class="flex flex-col justify-start content-start items-start w-full h-full">
  <TabControl
    class="mt-5 ml-5"
    :activeTabIndex="activeTabIndex"
    :items="[{
      buttonText: 'Bemutatkozás',
      buttonSize: 'small',
      buttonRank: 'tabItem',
      buttonIconPosition: 'none',
      event: () => router.push('/aboutus/introduction'),
    },
    {
      buttonText: 'Munktársak',
      buttonSize: 'small',
      buttonRank: 'tabItem',
      buttonIconPosition: 'none',
      event: () => router.push('/aboutus/coworkers'),
    },
    {
      buttonText: 'Vezetőség',
      buttonSize: 'small',
      buttonRank: 'tabItem',
      buttonIconPosition: 'none',
      event: () => router.push('/aboutus/management'),
    },
    {
      buttonText: 'Pályázatok',
      buttonSize: 'small',
      buttonRank: 'tabItem',
      buttonIconPosition: 'none',
      event: () => router.push('/aboutus/applications'),
    },
    {
      buttonText: 'Közzététel',
      buttonSize: 'small',
      buttonRank: 'tabItem',
      buttonIconPosition: 'none',
      event: () => router.push('/aboutus/publication'),
    },
    ]"
  ></TabControl>
  <RouterView class="w-full h-full" />
</div>
</template>
