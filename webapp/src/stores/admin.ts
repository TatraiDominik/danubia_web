import { ref, type Ref } from 'vue';
import { defineStore } from 'pinia';
import type { Admin } from '@/types/Admin';
import { ApiWrapper } from '@/composables/ApiWrapper';
import { useRouter } from 'vue-router';

export const useAdminStore = defineStore('admin', () => {
  const router = useRouter();
  const currentAdmin: Ref<Admin | null> = ref(null);

  function loadFromLocalStorage() {
    const storedAdmin = localStorage.getItem('admin');
    if (storedAdmin) {
      try {
        currentAdmin.value = JSON.parse(storedAdmin);
      } catch (error) {
        console.error("Failed to parse admin data from localStorage:", error);
        clearAdmin();
      }
    }
  }

  function refreshLocalStorage() {
    if (currentAdmin.value) {
      localStorage.setItem('admin', JSON.stringify(currentAdmin.value));
    } else {
      localStorage.removeItem('admin');
    }
  }

  function clearAdmin() {
    currentAdmin.value = null;
    localStorage.removeItem('admin');
  }

  function setJwt(jwt: string): void {
    currentAdmin.value = { jwt };
    refreshLocalStorage();
  }

  async function login(adminName: string, password: string) {
    try {
      const response = await ApiWrapper.post('/auth/login', { adminName, password });
      const { jwt } = response.data;
      setJwt(jwt);
      await refreshAdminData();
      router.push('/admin');
    } catch (error) {
      console.error('Login failed:', error);
    }
  }

  async function refreshAdminData() {
    if (!currentAdmin.value?.jwt) return;

    try {
      const res = await ApiWrapper.get<{ id: string, adminName: string }>('admin', {}, {
        Authorization: `Bearer ${currentAdmin.value.jwt}`,
      });

      if (currentAdmin.value) {
        currentAdmin.value = { ...currentAdmin.value, data: res.data };
        refreshLocalStorage();
      }
    } catch (error) {
      console.error('Failed to fetch admin data:', error);
    }
  }

  function loggedIn(): boolean {
    return !!currentAdmin.value?.jwt;
  }

  function getJwt(): string | undefined {
    return currentAdmin.value?.jwt;
  }

  function getAdminData(): Admin['data'] {
    return currentAdmin.value?.data;
  }

  loadFromLocalStorage();

  return { login, loggedIn, getAdminData, getJwt, setJwt, clearAdmin, refreshAdminData };
});
