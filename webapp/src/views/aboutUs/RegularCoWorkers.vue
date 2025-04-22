<script lang="ts" setup>
import Icon from '@/components/global/Icon.vue';
import { onMounted, ref, computed } from 'vue';
import type { Coworker } from '@/types/Coworker';
import { CoWorkerType } from '@/types/Coworker';
import { useCoworkerStore } from '@/stores/coworkers';
import { marked } from 'marked';

const coworkerStore = useCoworkerStore();
const loading = ref(true);
const error = ref<string | null>(null);

const regularCoworkers = computed(() => {
  return coworkerStore.coworkers.filter(coworker => coworker.type === CoWorkerType.REGULAR);
});

onMounted(async () => {
  try {
    await coworkerStore.getAllCoworkers();
    loading.value = false;
  } catch (err) {
    error.value = 'Hiba történt a munkatársak betöltése során. Kérjük, próbálja újra később.';
    loading.value = false;
    console.error('Error loading coworkers:', err);
  }
});
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold text-center mb-8 dark:text-white">Munkatársak</h1>

    <div v-if="loading" class="flex justify-center items-center py-12">
      <Icon type="settings" size="lg" class="animate-spin text-blue-500"></Icon>
    </div>

    <div v-else-if="error" class="text-center py-8">
      <p class="text-red-500">{{ error }}</p>
      <Icon type="settings" size="lg" class="text-red-500 mt-4"></Icon>
    </div>

    <div v-else-if="regularCoworkers.length === 0" class="text-center py-12">
      <h3 class="text-xl dark:text-white">Jelenleg nincsenek elérhető munkatársak</h3>
      <Icon type="settings" size="lg" class="text-gray-500 mt-4"></Icon>
    </div>

    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div
        v-for="coworker in regularCoworkers"
        :key="coworker._id"
        class="bg-zinc-300 dark:bg-zinc-900 rounded-lg shadow-md overflow-hidden"
      >
        <div class="p-6 flex flex-col items-center">
          <div class="w-40 h-40 rounded-full overflow-hidden mb-4">
            <img
              v-if="coworker.pfp"
              :src="`http://91.214.112.195:3001/danubia_api/file/${coworker.pfp}`"
              :alt="coworker.fullName"
              class="w-full h-full object-cover"
            />
            <div v-else class="w-full h-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center">
              <Icon type="person" size="lg" class="text-gray-500 dark:text-gray-400"></Icon>
            </div>
          </div>

          <h3 class="text-xl font-semibold text-center dark:text-white">{{ coworker.fullName }}</h3>
          <p class="text-blue-600 dark:text-blue-400 text-center mt-1">{{ coworker.occupation }}</p>

          <div class="mt-4 text-center">
            <p v-if="coworker.locations && coworker.locations.length > 0" class="text-sm text-gray-600 dark:text-gray-300">
              <span class="font-medium">Helyszínek:</span> {{ coworker.locations.join(', ') }}
            </p>
          </div>

          <div v-if="coworker.bio" class="mt-4 text-sm text-gray-700 dark:text-gray-300 prose dark:prose-invert max-w-none text-center" v-html="marked.parse(coworker.bio)"></div>

          <div class="mt-4 flex justify-center gap-4">
            <a v-if="coworker.email" :href="`mailto:${coworker.email}`" class="text-blue-600 dark:text-blue-400 hover:underline">
              <Icon type="mail" size="sm" class="mr-1"></Icon>
              <span class="sr-only">Email</span>
            </a>
            <a v-if="coworker.mobile" :href="`tel:${coworker.mobile}`" class="text-blue-600 dark:text-blue-400 hover:underline">
              <Icon type="phone" size="sm" class="mr-1"></Icon>
              <span class="sr-only">Telefon</span>
            </a>
            <a v-if="coworker.facebook" :href="coworker.facebook" target="_blank" rel="noopener noreferrer" class="text-blue-600 dark:text-blue-400 hover:underline">
              <Icon type="facebook" size="sm" class="mr-1"></Icon>
              <span class="sr-only">Facebook</span>
            </a>
            <a v-if="coworker.instagram" :href="coworker.instagram" target="_blank" rel="noopener noreferrer" class="text-blue-600 dark:text-blue-400 hover:underline">
              <Icon type="instagram" size="sm" class="mr-1"></Icon>
              <span class="sr-only">Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
