<script lang="ts" setup>
import { ref } from 'vue';
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
</script>

<template>
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
</template>
