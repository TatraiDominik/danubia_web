<script setup lang="ts">
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
  <div class="flex flex-col items-center justify-center p-6 space-y-8 text-zinc-900 dark:bg-zinc-950">
    <h1 class="text-3xl font-bold text-center dark:text-zinc-100">Kapcsolat</h1>

    <div v-for="contact in contacts" :key="contact.title" class="w-full max-w-2xl bg-zinc-100  p-6 rounded-2xl shadow-lg">
      <h2 class="text-xl font-semibold flex items-center gap-2">
        <Icon type="business" size="xl" class="text-blue-500" />
        {{ contact.title }}
      </h2>
      <p v-if="contact.address" class="text-gray-600">{{ contact.address }}</p>
      <div class="flex flex-col space-y-2 mt-3">
        <p v-if="contact.email" class="text-gray-700 flex items-center gap-2">
          <Icon type="mail" size="xl" class="text-blue-500" />
          <a :href="'mailto:' + contact.email" class="text-blue-500 hover:underline">{{ contact.email }}</a>
        </p>
        <p v-if="contact.phone" class="text-gray-700 flex items-center gap-2">
          <Icon type="call" size="xl" class="text-blue-500" />
          {{ contact.phone }}
        </p>
        <p v-if="contact.website" class="text-gray-700 flex items-center gap-2">
          <Icon type="public" size="xl" class="text-blue-500" />
          <a :href="contact.website" target="_blank" class="text-blue-500 hover:underline">{{ contact.website }}</a>
        </p>
        <p v-if="contact.facebook" class="text-gray-700 flex items-center gap-2">
          <Icon type="facebook" size="xl" class="text-blue-500" />
          <a :href="contact.facebook" target="_blank" class="text-blue-500 hover:underline">Facebook</a>
        </p>
      </div>
    </div>

    <div class="w-full max-w-2xl bg-white p-6 rounded-2xl shadow-lg">
      <h2 class="text-xl font-semibold flex items-center gap-2">
        <Icon type="receipt_long" size="xl" class="text-green-500" />
        {{ billingInfo.title }}
      </h2>
      <p class="text-gray-700">{{ billingInfo.name }}</p>
      <p class="text-gray-600">{{ billingInfo.address }}</p>
      <p class="text-gray-700 flex items-center gap-2">
        <Icon type="badge" size="xl" class="text-green-500" />
        Adószám: {{ billingInfo.taxId }}
      </p>
      <p class="text-gray-700 flex items-center gap-2">
        <Icon type="mail" size="xl" class="text-green-500" />
        <a :href="'mailto:' + billingInfo.billingEmail" class="text-blue-500 hover:underline">{{ billingInfo.billingEmail }}</a>
      </p>
    </div>

    <div class="w-full max-w-2xl bg-white p-6 rounded-2xl shadow-lg">
      <h2 class="text-xl font-semibold flex items-center gap-2">
        <Icon type="gavel" size="xl" class="text-red-500" />
        {{ maintainer.title }}
      </h2>
      <p class="text-gray-700">{{ maintainer.name }}</p>
      <p class="text-gray-600">{{ maintainer.address }}</p>
      <p class="text-gray-700 flex items-center gap-2">
        <Icon type="mail" size="xl" class="text-red-500" />
        <a :href="'mailto:' + maintainer.email" class="text-blue-500 hover:underline">{{ maintainer.email }}</a>
      </p>
      <p class="text-gray-700 flex items-center gap-2">
        <Icon type="call" size="xl" class="text-red-500" />
        {{ maintainer.phone }}
      </p>
      <p class="text-gray-700 flex items-center gap-2">
        <Icon type="badge" size="xl" class="text-red-500" />
        Adószám: {{ maintainer.taxId }}
      </p>
      <p class="text-gray-700 flex items-center gap-2">
        <Icon type="verified" size="xl" class="text-red-500" />
        VATHU: {{ maintainer.vathu }}
      </p>
      <p class="text-gray-700 flex items-center gap-2">
        <Icon type="history_edu" size="xl" class="text-red-500" />
        Bejegyző határozat: {{ maintainer.registrationNumber }}
      </p>
      <p class="text-gray-700 flex items-center gap-2">
        <Icon type="event" size="xl" class="text-red-500" />
        Bejegyzés dátuma: {{ maintainer.registrationDate }}
      </p>
      <p class="text-gray-700 flex items-center gap-2">
        <Icon type="numbers" size="xl" class="text-red-500" />
        KSH szám: {{ maintainer.kshNumber }}
      </p>
      <p class="text-gray-700 flex items-center gap-2">
        <Icon type="account_balance" size="xl" class="text-red-500" />
        Bírósági nyilvántartás: {{ maintainer.courtId }}
      </p>
    </div>
  </div>
</template>

