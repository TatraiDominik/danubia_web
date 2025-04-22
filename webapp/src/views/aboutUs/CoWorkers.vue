<script lang="ts" setup>
import Icon from '@/components/global/Icon.vue';
import { onMounted } from 'vue';
import type { Coworker } from '@/types/Instructor';
import { useCoworkerStore } from '@/stores/coworkers';
import { marked } from 'marked'

const coworkerStore = useCoworkerStore();

onMounted(async () => {
  await coworkerStore.getAllCoworkers();
});
</script>

<template>
  <div class="w-full h-full flex flex-col justify-start content-center items-center gap-10 px-4 py-2">
    <h3 class="text-4xl">Munkatársak</h3>
    <div class="flex flex-col justify-start content-start items-start w-full h-full gap-4">
      <div
        v-for="coworker in coworkerStore.coworkers"
        :key="coworker._id"
        class="bg-white dark:bg-zinc-900 p-4 rounded-lg shadow-md w-fit ml-0 mr-auto md:w-auto md:max-w-full"
      >
        <div class="flex flex-col md:flex-row gap-4 items-start">
          <!-- Kép -->
          <div class="md:mx-0">
            <img
              v-if="coworker.pfp"
              :src="`http://91.214.112.195:3001/danubia_api/file/${coworker.pfp}`"
              :alt="coworker.fullName"
              class="w-48 h-48 md:w-56 md:h-56 object-cover rounded-lg"
            />
            <div
              v-else
              class="w-24 h-24 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center"
            >
              <span class="text-gray-500 dark:text-gray-400">Nincs kép</span>
            </div>
          </div>

          <!-- Adatok -->
          <div class="flex-grow md:min-w-0 w-full md:w-auto">
            <h4 class="text-lg font-bold dark:text-white break-words">{{ coworker.fullName }}</h4>

            <div class="mt-2 flex flex-wrap gap-2">
              <span
                v-for="(location, index) in coworker.locations"
                :key="index"
                class="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2 py-0.5 text-xs rounded-full inline-block"
              >
                {{ location }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div
        v-if="coworkerStore.coworkers.length === 0"
        class="text-center text-gray-500 dark:text-gray-400 py-8 w-full"
      >
        Nincsenek munkatársak.
      </div>
    </div>
  </div>
</template>
