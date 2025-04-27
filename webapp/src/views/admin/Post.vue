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
const isDeleting = ref(false);
const deletePostId = ref<string | null>(null);
const editingPostId = ref<string | null>(null);
const isEditing = ref(false);

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

const resetForm = () => {
  title.value = '';
  content.value = '';
  fbPostLink.value = '';
  igPostLink.value = '';
  imageFile.value = null;
  editingPostId.value = null;
  isEditing.value = false;
};

const handleSubmit = async () => {
  try {
    const postData: Post = {
      title: title.value,
      content: content.value,
      fbPostLink: fbPostLink.value || undefined,
      igPostLink: igPostLink.value || undefined
    };

    if (isEditing.value && editingPostId.value) {
      await postStore.updatePost(editingPostId.value, postData, imageFile.value || undefined);
      alert('Az esemény sikeresen frissítve!');
    } else {
      await postStore.createPost(postData, imageFile.value || undefined);
      alert('Az esemény sikeresen feltöltve!');
    }

    await postStore.getAllPosts();
    resetForm();
  } catch (error) {
    console.error('Hiba történt a művelet során:', error);
    alert('Hiba történt a művelet során. Kérjük, próbálja újra később.');
  }
};

const startEditing = (post: Post) => {
  if (!post._id) return;

  editingPostId.value = post._id;
  isEditing.value = true;

  title.value = post.title || '';
  content.value = post.content || '';
  fbPostLink.value = post.fbPostLink || '';
  igPostLink.value = post.igPostLink || '';
  imageFile.value = null;


  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const cancelEditing = () => {
  resetForm();
};

const confirmDelete = (postId: string | undefined) => {
  if (!postId) return;

  deletePostId.value = postId;
  isDeleting.value = true;

  if (confirm('Biztosan törölni szeretnéd ezt az eseményt?')) {
    handleDelete();
  } else {
    isDeleting.value = false;
    deletePostId.value = null;
  }
};

const handleDelete = async () => {
  if (!deletePostId.value) return;

  try {
    await postStore.deletePost(deletePostId.value);
    await postStore.getAllPosts();
    alert('Az esemény sikeresen törölve!');
  } catch (error) {
    console.error('Hiba történt a törlés során:', error);
    alert('Hiba történt a törlés során. Kérjük, próbálja újra később.');
  }

  isDeleting.value = false;
  deletePostId.value = null;
};

onMounted(async () => {
  await postStore.getAllPosts();
});
</script>

<template>
  <div class="flex flex-row justify-center content-start items-start w-full h-full py-8 px-4 bg-zinc-100 dark:bg-zinc-950">
    <div class="flex flex-col md:flex-row gap-10 w-full">
      <div class="w-full bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-md">
        <h3 class="text-2xl md:text-3xl font-bold mb-6 text-center dark:text-white">
          {{ isEditing ? 'Esemény szerkesztése' : 'Események feltöltése' }}
        </h3>
        <div class="flex flex-col gap-4">
          <Input v-model="title" placeholder="Cím" type="text"/>
          <Input v-model="content" placeholder="Tartalom" type="text"/>
          <Input v-model="fbPostLink" placeholder="Facebook poszt link" type="text"/>
          <Input v-model="igPostLink" placeholder="Instagram poszt link" type="text"/>
          <div class="flex items-center gap-3 mt-2">
            <Button
              rank="primary"
              size="small"
              icon-position="none"
              text="Kép kiválasztása"
              @click="handleFileSelect"
            ></Button>
            <span v-if="imageFile" class="text-sm dark:text-gray-300 truncate max-w-48">{{ imageFile.name }}</span>
          </div>
          <div class="flex justify-center mt-6 gap-4">
            <Button
              v-if="isEditing"
              rank="secondary"
              size="normal"
              icon-position="none"
              text="Mégse"
              @click="cancelEditing"
            ></Button>
            <Button
              rank="primary"
              size="normal"
              icon-position="none"
              :text="isEditing ? 'Mentés' : 'Feltöltés'"
              @click="handleSubmit"
            ></Button>
          </div>
        </div>
      </div>

      <div class="w-full flex flex-col">
        <h3 class="text-2xl md:text-3xl font-bold mb-6 text-center dark:text-white">Feltöltött események</h3>

        <div class="overflow-y-auto w-full h-full pr-2">
          <div class="flex flex-col gap-4">
            <div v-for="post in postStore.posts" :key="post._id" class="bg-white dark:bg-zinc-900 p-4 rounded-lg shadow-md">
              <div class="flex flex-col gap-3">
                <img
                  v-if="post.media"
                  :src="`http://91.214.112.195:3001/danubia_api/file/${post.media}`"
                  alt="Esemény kép"
                  class="w-full h-32 object-cover rounded-lg"
                />

                <div class="flex flex-col gap-1">
                  <h4 class="text-lg font-bold dark:text-white">{{ post.title }}</h4>
                  <p class="text-gray-700 dark:text-gray-300 text-sm line-clamp-2">{{ post.content }}</p>
                </div>

                <div class="flex justify-between items-center">
                  <div class="flex gap-4">
                    <a
                      v-if="post.fbPostLink"
                      :href="post.fbPostLink"
                      target="_blank"
                      class="text-blue-500 hover:text-blue-700 text-sm"
                    >
                      Facebook
                    </a>
                    <a
                      v-if="post.igPostLink"
                      :href="post.igPostLink"
                      target="_blank"
                      class="text-purple-500 hover:text-purple-700 text-sm"
                    >
                      Instagram
                    </a>
                  </div>

                  <div class="flex gap-2">
                    <Button
                      rank="secondary"
                      size="small"
                      icon-position="none"
                      text="Szerkesztés"
                      @click="startEditing(post)"
                      :disabled="isDeleting"
                      class="bg-blue-600 hover:bg-blue-700 text-white"
                    ></Button>

                    <Button
                      rank="secondary"
                      size="small"
                      icon-position="none"
                      text="Törlés"
                      @click="confirmDelete(post._id)"
                      :disabled="isDeleting"
                      class="bg-red-600 hover:bg-red-700 text-white"
                    ></Button>
                  </div>
                </div>
              </div>
            </div>

            <div v-if="postStore.posts.length === 0" class="text-center text-gray-500 dark:text-gray-400 py-8">
              Nincsenek feltöltött események.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
