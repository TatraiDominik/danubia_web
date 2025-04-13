<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { usePostStore } from '@/stores/posts';
import Button from '@/components/global/Button.vue';
import Input from '@/components/global/Input.vue';
import type { Post } from '@/types/Post';

const postStore = usePostStore();
const title = ref('');
const content = ref('');
const fbPostLink = ref('');
const igPostLink = ref('');
const imageFile = ref<File | null>(null);

const handleFileSelect = () => {
  const fileInput = document.createElement('input');
  fileInput.type = 'file';
  fileInput.accept = 'image/*';
  fileInput.style.display = 'none';

  fileInput.onchange = (event) => {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
      imageFile.value = target.files[0];
    }
  };

  document.body.appendChild(fileInput);
  fileInput.click();
  document.body.removeChild(fileInput);
};


const handleSubmit = async () => {
  try {
    const postData: Post = {
      title: title.value,
      content: content.value,
      fbPostLink: fbPostLink.value || undefined,
      igPostLink: igPostLink.value || undefined
    };

    await postStore.createPost(postData, imageFile.value || undefined);

    title.value = '';
    content.value = '';
    fbPostLink.value = '';
    igPostLink.value = '';
    imageFile.value = null;

    alert('Az esemény sikeresen feltöltve!');
  } catch (error) {
    console.error('Hiba történt a feltöltés során:', error);
    alert('Hiba történt a feltöltés során. Kérjük, próbálja újra később.');
  }
};
onMounted(async () => {
  await postStore.getAllPosts();
});
</script>

<template>
  <div class="flex flex-row justify-center content-center items-center w-full h-full p-4 bg-zinc-100 dark:bg-zinc-950">
      <div class="flex flex-col justify-center content-center items-center w-full h-full gap-20">
      <h3 class="text-3xl">Események feltöltése</h3>
      <div class="w-1/2 flex flex-col justify-center content-start items-start gap-5">
        <Input v-model="title" placeholder="cím" type="text"/>
        <Input v-model="content" placeholder="tartalom" type="text"/>
        <Input v-model="fbPostLink" placeholder="facebook poszt link" type="text"/>
        <Input v-model="igPostLink" placeholder="instagram poszt link" type="text"/>
        <div class="flex items-center gap-3">
          <Button
            rank="primary"
            size="small"
            icon-position="none"
            text="Kép kiválasztása"
            @click="handleFileSelect"
          ></Button>
          <span v-if="imageFile" class="text-sm">{{ imageFile.name }}</span>
        </div>
      </div>
      <Button
        rank="primary"
        size="normal"
        icon-position="none"
        text="Feltöltés"
        @click="handleSubmit"
      ></Button>
    </div>
    <div class="flex flex-col justify-center content-center items-center w-full h-full gap-10 ">
      <h3>Feltöltött események:</h3>
      <div v-for="post in postStore.posts" :key="post._id" class="flex flex-row justify-center content-center items-center">
        <img v-if="post.media" :src="`http://91.214.112.195:3001/danubia_api/file/${post.media}`" alt="Post image" class="w-full h-1/3 rounded" />
        <div class="flex flex-col">
          <h4 class="text-xl font-bold">{{ post.title }}</h4>
          <p class="">{{ post.content }}</p>
        </div>


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
