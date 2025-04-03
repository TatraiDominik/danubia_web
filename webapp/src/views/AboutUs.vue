<script lang="ts" setup>
  import TabControl from '../components/global/TabControl.vue';
  import { onMounted } from 'vue';
  import { useRoute, useRouter } from 'vue-router';

  const router = useRouter();
  const route = useRoute();

  onMounted(() => {
  if (route.path === '/aboutus') {
    router.push('/aboutus/introduction');
  }
});
</script>
<template>
<div class="flex flex-col justify-start content-start items-start w-full h-full">
  <TabControl class="mt-5 ml-5" :items="[{
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
    buttonText: 'Közérdekű adatok',
    buttonSize: 'small',
    buttonRank: 'tabItem',
    buttonIconPosition: 'none',
    event: () => router.push('/aboutus/pubinterestdata'),
  },
  ]"></TabControl>

    <div class="w-full h-full flex justify-start content-start items-start">
      <RouterView></RouterView>
    </div>
</div>
</template>
