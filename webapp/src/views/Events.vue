<script lang="ts" setup>
import { onMounted } from 'vue';
import Icon from '@/components/global/Icon.vue';
import { usePostStore } from '@/stores/posts';

const postStore = usePostStore();

onMounted(async () => {
  await postStore.getAllPosts();
});
</script>

<template>
<div class="flex flex-col justify-start content-center items-center w-full h-full gap-10">
  <h3 class="text-3xl">Eseményeink</h3>

  <div class="w-5/6">
    <div v-for="post in postStore.posts" :key="post._id" class="mb-6 p-4 border rounded-lg border-zinc-300 dark:border-zinc-700 bg-zinc-200 dark:bg-zinc-900">
      <img v-if="post.media" :src="`http://91.214.112.195:3001/danubia_api/file/${post.media}`" alt="Post image" class="w-full h-48 object-cover mb-4 rounded" />

      <h4 class="text-xl font-bold">{{ post.title }}</h4>
      <p class="">{{ post.content }}</p>

      <div class="flex gap-4">
        <a v-if="post.fbPostLink" :href="post.fbPostLink" target="_blank" class="text-blue-500">
          Facebook poszt
        </a>
        <a v-if="post.igPostLink" :href="post.igPostLink" target="_blank" class="text-purple-500">
          Instagram poszt
        </a>
      </div>
    </div>
  </div>

</div>
</template>
