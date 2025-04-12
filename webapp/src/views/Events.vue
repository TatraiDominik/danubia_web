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
<div class="overflow-y-auto flex flex-col justify-center content-center items-center w-full h-full">
  <h3 class="text-3xl">This is "Events"</h3>

  <div v-if="postStore.posts.length > 0" class="w-full max-w-3xl mt-10">
    <div v-for="post in postStore.posts" :key="post._id" class="mb-6 p-4 border rounded shadow">
      <img v-if="post.media" :src="`http://91.214.112.195:3001/danubia_api/file/${post.media}`" alt="Post image" class="w-full h-48 object-cover mb-4 rounded" />

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

  <div v-else>
    <h3 class="text-lg text-red-500">Nincsenek események</h3>
    <Icon type="settings" size="lg" class="text-red-500 mt-4"></Icon>
  </div>
</div>
</template>
