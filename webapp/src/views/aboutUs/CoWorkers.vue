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
        <div class="overflow-y-auto w-full h-full flex flex-col justify-start content-center items-center gap-10">
          <h3 class="text-4xl">Munkatársak</h3>
          <div class="flex flex-col gap-4">
            <div v-for="coworker in coworkerStore.coworkers" :key="coworker._id" class="bg-white dark:bg-zinc-900 p-4 rounded-lg shadow-md">
              <div class="flex flex-col md:flex-row gap-4">
                <div class="flex-shrink-0">
                  <img
                    v-if="coworker.pfp"
                    :src="`http://91.214.112.195:3001/danubia_api/file/${coworker.pfp}`"
                    :alt="coworker.fullName"
                    class="w-24 h-24 object-cover rounded-lg"
                  />
                  <div v-else class="w-24 h-24 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                    <span class="text-gray-500 dark:text-gray-400">Nincs kép</span>
                  </div>
                </div>

                <div class="flex-grow">
                  <h4 class="text-lg font-bold dark:text-white">{{ coworker.fullName }}</h4>
                  <p class="text-blue-600 dark:text-blue-400 text-sm">{{ coworker.subject }}</p>

                  <div class="mt-2 flex flex-wrap gap-2">
                    <span
                      v-for="(location, index) in coworker.locations"
                      :key="index"
                      class="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2 py-0.5 text-xs rounded-full"
                    >
                      {{ location }}
                    </span>
                  </div>

                  <div class="mt-2 flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                    <span v-if="coworker.email">{{ coworker.email }}</span>
                    <span v-if="coworker.mobile">{{ coworker.mobile }}</span>
                  </div>

                  <div v-if="coworker.bio" class="mt-2 text-gray-700 dark:text-gray-300 prose dark:prose-invert max-w-none text-sm" v-html="marked.parse(coworker.bio)"></div>
                </div>
              </div>
            </div>

            <div v-if="coworkerStore.coworkers.length === 0" class="text-center text-gray-500 dark:text-gray-400 py-8">
              Nincsenek munkatársak.
            </div>
          </div>
        </div>
</template>
