<script lang="ts" setup>
import { ref, onMounted } from 'vue';

const docs = ref<any[]>([]);

const docModules = import.meta.glob('@/assets/docs/**/*', { as: 'url' });

onMounted(async () => {
  for (const path in docModules) {
    const fileName = path.split('/').pop() || '';

    try {
      const fileUrl = await docModules[path]();
      docs.value.push({
        name: fileName,
        path: fileUrl
      });
    } catch (error) {
      console.error(`Hiba a fájl betöltésekor: ${path}`, error);
    }
  }
});
</script>

<template>
  <div class="flex flex-col justify-start content-start items-start gap-10 p-3 sm:p-5 w-full h-full bg-zinc-100 dark:bg-zinc-950 ">
    <h3 class="text-2xl sm:text-3xl">Közzététel</h3>
    <div v-if="docs.length > 0" class="w-full">
      <div v-for="(file, index) in docs" :key="index" class="mb-4">
        <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-zinc-200 p-3 sm:p-4 rounded-lg border border-zinc-300 dark:border-zinc-700 dark:bg-zinc-800 hover:bg-gray-200 dark:hover:bg-zinc-700 transition gap-3">
          <p class="text-base sm:text-lg font-semibold break-words sm:truncate w-full sm:max-w-[60%] md:max-w-[75%]">{{ file.name }}</p>
          <a
            :href="file.path"
            download
            :title="'Letöltés: ' + file.name"
            class="text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition w-full sm:w-auto text-center"
          >
            Letöltés
          </a>
        </div>
      </div>
    </div>
    <div v-else>
      <p class="text-gray-500 dark:text-gray-400">Nincsenek dokumentumok.</p>
    </div>
  </div>
</template>
