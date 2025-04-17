<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import Button from '@/components/global/Button.vue';
import Input from '@/components/global/Input.vue';
import type { Coworker } from '@/types/Instructor';
import { useCoworkerStore } from '@/stores/coworkers';
import { marked } from 'marked';

const coworkerStore = useCoworkerStore();
const fullName = ref('');
const subject = ref('');
const bio = ref('');
const locations = ref<string[]>([]);
const locationInput = ref('');
const email = ref('');
const mobile = ref('');
const facebook = ref('');
const instagram = ref('');
const imageFile = ref<File | null>(null);
const isDeleting = ref(false);
const deleteCoworkerId = ref<string | null>(null);
const editingCoworkerId = ref<string | null>(null);
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

const addLocation = () => {
  if (locationInput.value.trim()) {
    locations.value.push(locationInput.value.trim());
    locationInput.value = '';
  }
};

const removeLocation = (index: number) => {
  locations.value.splice(index, 1);
};

const resetForm = () => {
  fullName.value = '';
  subject.value = '';
  bio.value = '';
  locations.value = [];
  locationInput.value = '';
  email.value = '';
  mobile.value = '';
  facebook.value = '';
  instagram.value = '';
  imageFile.value = null;
  editingCoworkerId.value = null;
  isEditing.value = false;
};


const handleSubmit = async () => {
  try {
    const coworkerData: Coworker = {
      fullName: fullName.value,
      subject: subject.value,
      bio: bio.value,
      locations: locations.value,
      email: email.value,
      mobile: mobile.value,
      facebook: facebook.value,
      instagram: instagram.value,
      pfp: ''
    };

    if (isEditing.value && editingCoworkerId.value) {
      await coworkerStore.updateCoworker(editingCoworkerId.value, coworkerData, imageFile.value || undefined);
      alert('A munkatárs adatai sikeresen frissítve!');
    } else {
      await coworkerStore.createCoworker(coworkerData, imageFile.value || undefined);
      alert('A munkatárs sikeresen hozzáadva!');
    }

    await coworkerStore.getAllCoworkers();
    resetForm();
  } catch (error) {
    console.error('Hiba történt a művelet során:', error);
    alert('Hiba történt a művelet során. Kérjük, próbálja újra később.');
  }
};

const startEditing = (coworker: Coworker) => {
  if (!coworker._id) return;

  editingCoworkerId.value = coworker._id;
  isEditing.value = true;

  fullName.value = coworker.fullName || '';
  subject.value = coworker.subject || '';
  bio.value = coworker.bio || '';
  locations.value = coworker.locations || [];
  email.value = coworker.email || '';
  mobile.value = coworker.mobile || '';
  facebook.value = coworker.facebook || '';
  instagram.value = coworker.instagram || '';
  imageFile.value = null;

  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const cancelEditing = () => {
  resetForm();
};

const confirmDelete = (coworkerId: string | undefined) => {
  if (!coworkerId) return;

  deleteCoworkerId.value = coworkerId;
  isDeleting.value = true;

  if (confirm('Biztosan törölni szeretnéd ezt a munkatársat?')) {
    handleDelete();
  } else {
    isDeleting.value = false;
    deleteCoworkerId.value = null;
  }
};

const handleDelete = async () => {
  if (!deleteCoworkerId.value) return;

  try {
    await coworkerStore.deleteCoworker(deleteCoworkerId.value);
    await coworkerStore.getAllCoworkers();
    alert('A munkatárs sikeresen törölve!');
  } catch (error) {
    console.error('Hiba történt a törlés során:', error);
    alert('Hiba történt a törlés során. Kérjük, próbálja újra később.');
  }

  isDeleting.value = false;
  deleteCoworkerId.value = null;
};

onMounted(async () => {
  await coworkerStore.getAllCoworkers();
});
</script>

<template>
  <div class="flex flex-row justify-center content-start items-start w-full h-full py-8 px-4 bg-zinc-100 dark:bg-zinc-950">
    <div class="flex flex-col md:flex-row gap-10 w-full">
      <div class="w-full bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-md">
        <h3 class="text-2xl md:text-3xl font-bold mb-6 text-center dark:text-white">
          {{ isEditing ? 'Munkatárs szerkesztése' : 'Munkatárs hozzáadása' }}
        </h3>
        <div class="flex flex-col gap-4">
          <Input v-model="fullName" placeholder="Teljes név" type="text"/>
          <Input v-model="subject" placeholder="Beosztás" type="text"/>
          <div class="flex flex-col gap-1">
            <label class="text-sm text-gray-600 dark:text-gray-300">Bemutatkozás (Markdown támogatott)</label>
            <textarea
              v-model="bio"
              placeholder="Bemutatkozás"
              class="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-zinc-800 text-gray-900 dark:text-white"
              rows="5"
            ></textarea>
          </div>

          <div class="flex flex-col gap-2">
            <label class="text-sm text-gray-600 dark:text-gray-300">Helyszínek</label>
            <div class="flex gap-2">
              <Input v-model="locationInput" placeholder="Helyszín hozzáadása" type="text"/>
              <Button
                rank="secondary"
                size="small"
                icon-position="none"
                text="Hozzáadás"
                @click="addLocation"
              ></Button>
            </div>
            <div v-if="locations.length > 0" class="flex flex-wrap gap-2 mt-2">
              <div
                v-for="(location, index) in locations"
                :key="index"
                class="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full flex items-center gap-2"
              >
                <span>{{ location }}</span>
                <button
                  @click="removeLocation(index)"
                  class="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                >
                  ×
                </button>
              </div>
            </div>
          </div>

          <Input v-model="email" placeholder="Email" type="email"/>
          <Input v-model="mobile" placeholder="Telefonszám" type="text"/>
          <Input v-model="facebook" placeholder="Facebook profil link" type="text"/>
          <Input v-model="instagram" placeholder="Instagram profil link" type="text"/>

          <div class="flex items-center gap-3 mt-2">
            <Button
              rank="primary"
              size="small"
              icon-position="none"
              text="Profilkép kiválasztása"
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
              :text="isEditing ? 'Mentés' : 'Hozzáadás'"
              @click="handleSubmit"
            ></Button>
          </div>
        </div>
      </div>

      <div class="w-full flex flex-col">
        <h3 class="text-2xl md:text-3xl font-bold mb-6 text-center dark:text-white">Munkatársak listája</h3>

        <div class="overflow-y-auto w-full h-full pr-2">
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

                <div class="flex flex-col gap-2 justify-center">
                  <Button
                    rank="secondary"
                    size="small"
                    icon-position="none"
                    text="Szerkesztés"
                    @click="startEditing(coworker)"
                    :disabled="isDeleting"
                    class="bg-blue-600 hover:bg-blue-700 text-white"
                  ></Button>

                  <Button
                    rank="secondary"
                    size="small"
                    icon-position="none"
                    text="Törlés"
                    @click="confirmDelete(coworker._id)"
                    :disabled="isDeleting"
                    class="bg-red-600 hover:bg-red-700 text-white"
                  ></Button>
                </div>
              </div>
            </div>

            <div v-if="coworkerStore.coworkers.length === 0" class="text-center text-gray-500 dark:text-gray-400 py-8">
              Nincsenek munkatársak.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
