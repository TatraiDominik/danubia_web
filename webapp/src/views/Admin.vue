<script lang="ts" setup>
  import TabControl from '../components/global/TabControl.vue';
  import { onMounted } from 'vue';
  import { useRoute, useRouter } from 'vue-router';

  const router = useRouter();
  const route = useRoute();

  onMounted(() => {
  if (route.path === '/admin') {
    router.push('/admin/posts');
  }
});
</script>
<template>
<div class="flex flex-col justify-start content-start items-start w-full h-full">
  <TabControl class="mt-5 ml-5" :items="[{
    buttonText: 'Események',
    buttonSize: 'small',
    buttonRank: 'tabItem',
    buttonIconPosition: 'none',
    event: () => router.push('/admin/posts'),
  },
  {
    buttonText: 'Oktatók',
    buttonSize: 'small',
    buttonRank: 'tabItem',
    buttonIconPosition: 'none',
    event: () => router.push('/admin/instructor'),
  },
  {
    buttonText: 'Munkatársak',
    buttonSize: 'small',
    buttonRank: 'tabItem',
    buttonIconPosition: 'none',
    event: () => router.push('/admin/coworker'),
  },
  ]"></TabControl>

    <div class="w-full h-full flex justify-start content-start items-start">
      <RouterView></RouterView>
    </div>
</div>
</template>
