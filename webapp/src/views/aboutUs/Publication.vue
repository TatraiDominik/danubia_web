
<script lang="ts" setup>
import { ref, onMounted } from 'vue';

// Fájlok tárolása
const docs = ref<any[]>([]);

// Beolvassuk a fájlokat az assets/docs mappából
const docFiles = import.meta.glob('@/assets/docs/**/*', { eager: true });

onMounted(() => {
  // A fájlok beolvasása és feldolgozása
  for (const filePath in docFiles) {
    const file = docFiles[filePath];
    docs.value.push({
      name: filePath.split('/').pop(), // A fájl neve
      path: filePath // A fájl elérési útja
    });
  }
});
</script>
<template>
  <div class="flex flex-col justify-center content-center items-center gap-10 p-5 w-full h-ful dark:bg-zinc-950">
    <h3 class="text-3xl">Közérdekű adatok</h3>
    <div v-if="docs.length > 0" class="w-full max-w-4xl">
      <div v-for="(file, index) in docs" :key="index" class="mb-4">
        <!-- Fájl neve és letöltési link -->
        <div class="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow-md hover:bg-gray-200 transition">
          <p class="text-lg font-semibold text-gray-700 truncate max-w-[75%]">{{ file.name }}</p>
          <a
            :href="file.path"
            download
            :title="'Letöltés: ' + file.name"
            class="text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Letöltés
          </a>
        </div>
      </div>
    </div>
    <div v-else>
      <p class="text-gray-500">Nincsenek dokumentumok.</p>
    </div>
  </div>
</template>

