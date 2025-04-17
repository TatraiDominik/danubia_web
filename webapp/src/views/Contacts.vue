<script setup lang="ts">
import Icon from '@/components/global/Icon.vue';
const contacts = [
  {
    title: "Danubia Alapfokú Művészeti Iskola",
    address: "6500 Baja, Katona József u. 3.",
    email: "danubiaiskola@gmail.com",
    phone: "+36 79 427 171",
    website: "https://danubiaami.org",
    facebook: "https://facebook.com/danubia.iskola",
  },
  {
    title: "Danubia AMI Szülői Munkaközössége",
    email: "szuloim@danubiaami.net",
    phone: "+36 79 427 171",
  },
];

const billingInfo = {
  title: "Számlacím",
  name: "Danubia Alapfokú Művészeti Iskola",
  address: "6500 Baja, Katona J. u. 3.",
  taxId: "18363223-1-03",
  billingEmail: "danubiaami.szilvi@gmail.com",
};

const maintainer = {
  title: "Fenntartó",
  name: "Danubia Művészetoktatási és Közművelődési Intézményfenntartó és Működtető Alapítvány",
  address: "6500 Baja, Kölcsey Ferenc u. 72. II.9",
  email: "danubia@baja.hu",
  phone: "+36 79 427 171",
  taxId: "18364499-1-03",
  vathu: "VATHU-18364499",
  registrationNumber: "PK 60061/2003-3",
  registrationDate: "2003. május 8.",
  kshNumber: "18364499-9133-569-03",
  courtId: "28535/2003",
};
</script>

<template>
  <div class="flex flex-col justify-start content-center items-center gap-10 text-zinc-700 dark:text-zinc-200 dark:bg-zinc-950 w-full h-full p-4">
    <h1 class="text-3xl font-bold text-center">Kapcsolat</h1>

    <div v-for="contact in contacts" :key="contact.title" class="contactCard">
      <h2 class="text-xl font-semibold flex items-center gap-2">
        <Icon type="business" size="xl" class="text-blue-500" />
        {{ contact.title }}
      </h2>
      <p v-if="contact.address" class="">{{ contact.address }}</p>
      <div class="flex flex-col space-y-2 mt-3">
        <p v-if="contact.email" class=" flex items-center gap-2">
          <Icon type="mail" size="xl" class="text-blue-500" />
          <a :href="'mailto:' + contact.email" class="text-blue-500 hover:underline">{{ contact.email }}</a>
        </p>
        <p v-if="contact.phone" class=" flex items-center gap-2">
          <Icon type="call" size="xl" class="text-blue-500" />
          <a :href="'tel:' + contact.phone.replace(/\s+/g, '')" class="text-blue-500 hover:underline">{{ contact.phone }}</a>
        </p>
        <p v-if="contact.website" class=" flex items-center gap-2">
          <Icon type="language" size="xl" class="text-blue-500" />
          <a :href="contact.website" target="_blank" class="text-blue-500 hover:underline">{{ contact.website }}</a>
        </p>
        <p v-if="contact.facebook" class=" flex items-center gap-2">
          <Icon type="facebook" size="xl" class="text-blue-500" />
          <a :href="contact.facebook" target="_blank" class="text-blue-500 hover:underline">Facebook</a>
        </p>
      </div>
    </div>

    <div class="contactCard">
      <h2 class="text-xl font-semibold flex items-center gap-2">
        <Icon type="receipt_long" size="xl" class="text-green-500" />
        {{ billingInfo.title }}
      </h2>
      <p class="">{{ billingInfo.name }}</p>
      <p class="">{{ billingInfo.address }}</p>
      <p class=" flex items-center gap-2">
        <Icon type="badge" size="xl" class="text-green-500" />
        Adószám: {{ billingInfo.taxId }}
      </p>
      <p class=" flex items-center gap-2">
        <Icon type="mail" size="xl" class="text-green-500" />
        <a :href="'mailto:' + billingInfo.billingEmail" class="text-blue-500 hover:underline">{{ billingInfo.billingEmail }}</a>
      </p>
    </div>

    <div class="contactCard">
      <h2 class="text-xl font-semibold flex items-center gap-2">
        <Icon type="gavel" size="xl" class="text-red-500" />
        {{ maintainer.title }}
      </h2>
      <p class="">{{ maintainer.name }}</p>
      <p class="">{{ maintainer.address }}</p>
      <p class=" flex items-center gap-2">
        <Icon type="mail" size="xl" class="text-red-500" />
        <a :href="'mailto:' + maintainer.email" class="text-blue-500 hover:underline">{{ maintainer.email }}</a>
      </p>
      <p class=" flex items-center gap-2">
        <Icon type="call" size="xl" class="text-red-500" />
        <a :href="'tel:' + maintainer.phone.replace(/\s+/g, '')" class="text-blue-500 hover:underline">{{ maintainer.phone }}</a>
      </p>
      <p class=" flex items-center gap-2">
        <Icon type="badge" size="xl" class="text-red-500" />
        Adószám: {{ maintainer.taxId }}
      </p>
      <p class=" flex items-center gap-2">
        <Icon type="verified" size="xl" class="text-red-500" />
        VATHU: {{ maintainer.vathu }}
      </p>
      <p class=" flex items-center gap-2">
        <Icon type="history_edu" size="xl" class="text-red-500" />
        Bejegyző határozat: {{ maintainer.registrationNumber }}
      </p>
      <p class=" flex items-center gap-2">
        <Icon type="event" size="xl" class="text-red-500" />
        Bejegyzés dátuma: {{ maintainer.registrationDate }}
      </p>
      <p class=" flex items-center gap-2">
        <Icon type="numbers" size="xl" class="text-red-500" />
        KSH szám: {{ maintainer.kshNumber }}
      </p>
      <p class=" flex items-center gap-2">
        <Icon type="account_balance" size="xl" class="text-red-500" />
        Bírósági nyilvántartás: {{ maintainer.courtId }}
      </p>
    </div>
  </div>
</template>
<style scoped lang="scss">
  .contactCard{
    @apply w-full max-w-2xl bg-zinc-200 p-4 rounded-lg border border-zinc-300 dark:border-zinc-700 dark:bg-zinc-800 hover:bg-gray-200 dark:hover:bg-zinc-700 transition gap-3
  }
</style>
