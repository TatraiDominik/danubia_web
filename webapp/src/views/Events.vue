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
<div class="flex flex-col justify-center content-center items-center w-full h-full">
  <h3 class="text-3xl">This is "Events"</h3>

  <div v-if="postStore.posts.length > 0" class="w-full max-w-3xl mt-10">
    <div v-for="post in postStore.posts" :key="post._id" class="mb-6 p-4 border rounded shadow">
      <h4 class="text-xl font-bold">{{ post.title }}</h4>
      <p class="mt-2">{{ post.content }}</p>

      <div class="mt-4 flex gap-4">
        <a v-if="post.fbPostLink" :href="post.fbPostLink" target="_blank" class="text-blue-500">
          Facebook poszt
        </a>
        <a v-if="post.igPostLink" :href="post.igPostLink" target="_blank" class="text-purple-500">
          Instagram poszt
        </a>
      </div>
    </div>
  </div>

  <div v-else class="mt-10">
    <h3 class="text-lg text-red-500">Nincsenek események</h3>
    <Icon type="settings" size="lg" class="text-red-500 mt-4"></Icon>
  </div>
</div>
</template>
