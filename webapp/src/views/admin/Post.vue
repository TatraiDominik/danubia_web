<script lang="ts" setup>
import { ref } from 'vue';
import { usePostStore } from '@/stores/posts';
import Button from '@/components/global/Button.vue';
import Input from '@/components/global/Input.vue';

const postData = ref({
  title: '',
  content: '',
  fbPostLink: '',
  igPostLink: '',
  media: null as File | null,
});

const { createPost } = usePostStore();

const onFileChange = (event: Event) => {
  const fileInput = event.target as HTMLInputElement;
  if (fileInput?.files?.length) {
    postData.value.media = fileInput.files[0];
  }
};

const onSubmit = async () => {
  try {
    await createPost(postData.value);
    alert('Post created successfully!');
  } catch (error) {
    alert('Failed to create post');
  }
};
</script>

<template>
  <div class="flex flex-col justify-center content-center items-center w-full h-hull gap-20">
    <h3 class="text-3xl">Események feltöltése</h3>
    <form @submit.prevent="onSubmit" class="w-[50%] h-[50%] flex flex-col justify-center content-center items-center gap-5">
      <Input v-model="postData.title" placeholder="cím" type="text"/>
      <Input v-model="postData.content" placeholder="tartalom" type="text"/>
      <Input v-model="postData.fbPostLink" placeholder="facebook poszt link" type="text"/>
      <Input v-model="postData.igPostLink"  placeholder="instagram poszt link" type="text"/>
      <input type="file" @change="onFileChange" />
      <Button rank="primary" size="normal" icon-position="none" text="Feltöltés"></Button>
    </form>
  </div>

</template>
