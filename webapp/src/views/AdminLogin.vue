<script lang="ts" setup>
  import Button from '@/components/global/Button.vue';
  import Input from '@/components/global/Input.vue';
  import router from '@/router';
  import { useAdminStore } from '@/stores/admin';
  import { ref } from 'vue';

  const adminStore = useAdminStore();
  const adminName = ref('');
  const password = ref('');

  async function handleLogin() {
    try {
      await adminStore.login(adminName.value, password.value);
      router.push('/admin');
    } catch (error) {
      console.error('Bejelentkezés sikertelen:', error);
    }
  }
</script>

<template>
  <div class="flex flex-col justify-center content-center items-center w-full h-full">
    <div class="flex flex-col justify-center content-center items-center gap-5 w-[50%] h-[50%]">
      <h3>Danubia AMI admin oldal</h3>
      <Input placeholder="admin neve" type="text" v-model="adminName" />
      <Input placeholder="Jelszó" type="password" v-model="password" />
      <Button rank="primary" text="Bejelentkezés" icon-position="none" size="normal" @click="handleLogin"></Button>
    </div>
  </div>
</template>
