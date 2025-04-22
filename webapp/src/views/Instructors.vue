<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import Icon from '@/components/global/Icon.vue';
import { useInstructorStore } from '@/stores/instructors';
import type { Instructor } from '@/types/Instructor';
import { marked } from 'marked';

const instructorStore = useInstructorStore();
const loading = ref(true);
const error = ref<string | null>(null);



onMounted(async () => {
  try {
    await instructorStore.getAllInstructors();
    loading.value = false;
  } catch (err) {
    error.value = 'Hiba történt az oktatók betöltése során. Kérjük, próbálja újra később.';
    loading.value = false;
    console.error('Error loading instructors:', err);
  }
});
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold text-center mb-8 dark:text-white">Oktatók</h1>

    <div v-if="loading" class="flex justify-center items-center py-12">
      <Icon type="settings" size="lg" class="animate-spin text-blue-500"></Icon>
    </div>

    <div v-else-if="error" class="text-center py-8">
      <p class="text-red-500">{{ error }}</p>
      <Icon type="settings" size="lg" class="text-red-500 mt-4"></Icon>
    </div>

    <div v-else-if="instructorStore.instructors.length === 0" class="text-center py-12">
      <h3 class="text-xl dark:text-white">Jelenleg nincsenek elérhető oktatók</h3>
      <Icon type="settings" size="lg" class="text-gray-500 mt-4"></Icon>
    </div>

    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div
        v-for="instructor in instructorStore.instructors"
        :key="instructor._id"
        class="bg-zinc-300 dark:bg-zinc-900 rounded-lg shadow-md overflow-hidden"
      >
        <div class="p-6 flex flex-col items-center">
          <div class="w-40 h-40 rounded-full overflow-hidden mb-4">
            <img
              v-if="instructor.pfp"
              :src="`http://91.214.112.195:3001/danubia_api/file/${instructor.pfp}`"
              :alt="instructor.fullName"
              class="w-full h-full object-cover"
            />
            <div v-else class="w-full h-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center">
              <Icon type="person" size="lg" class="text-gray-500 dark:text-gray-400"></Icon>
            </div>
          </div>

          <h3 class="text-xl font-semibold text-center dark:text-white">{{ instructor.fullName }}</h3>
          <p class="text-blue-600 dark:text-blue-400 text-center mt-1">{{ instructor.subject }}</p>

          <div class="mt-4 text-center">
            <p v-if="instructor.locations && instructor.locations.length > 0" class="text-sm text-gray-600 dark:text-gray-300">
              <span class="font-medium">Helyszínek:</span> {{ instructor.locations.join(', ') }}
            </p>
          </div>



        </div>
      </div>
    </div>
  </div>
</template>
