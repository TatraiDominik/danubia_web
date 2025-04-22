import { ref, type Ref } from 'vue';
import { defineStore } from 'pinia';
import { ApiWrapper } from '@/composables/ApiWrapper';
import type { Coworker } from '@/types/Coworker';
import { CoWorkerType } from '@/types/Coworker';

export const useCoworkerStore = defineStore('coworker', () => {
  const coworkers: Ref<Coworker[]> = ref([]);

  const getAllCoworkers = async () => {
    try {
      const response = await ApiWrapper.get('/coworker', {});
      coworkers.value = Array.isArray(response.data) ? response.data : [];
    } catch (error) {
      console.error('Error fetching coworkers', error);
      throw error;
    }
  };

  const getCoworkerById = async (id: string) => {
    try {
      const response = await ApiWrapper.get(`/coworker/${id}`, {});
      return response.data;
    } catch (error) {
      console.error(`Error fetching coworker with id ${id}`, error);
      throw error;
    }
  };

  const createCoworker = async (coworkerData: Coworker, file?: File) => {
    try {
      if (file) {
        const formData = new FormData();
        formData.append('fullName', coworkerData.fullName);
        formData.append('type', coworkerData.type);
        if (coworkerData.occupation) formData.append('occupation', coworkerData.occupation);
        formData.append('bio', coworkerData.bio);
        if (coworkerData.locations && coworkerData.locations.length > 0) {
          coworkerData.locations.forEach(location => {
            formData.append('locations[]', location);
          });
        }
        formData.append('email', coworkerData.email);
        if (coworkerData.mobile) formData.append('mobile', coworkerData.mobile as string);
        if (coworkerData.facebook) formData.append('facebook', coworkerData.facebook as string);
        if (coworkerData.instagram) formData.append('instagram', coworkerData.instagram as string);
        formData.append('file', file);

        const response = await ApiWrapper.post('/coworker', formData, {
          'Content-Type': 'multipart/form-data'
        });
        return response.data;
      } else {
        const response = await ApiWrapper.post('/coworker', coworkerData);
        return response.data;
      }
    } catch (error) {
      console.error('Error creating coworker', error);
      throw error;
    }
  };

  const updateCoworker = async (id: string, coworkerData: Coworker, file?: File) => {
    try {
      if (file) {
        const formData = new FormData();
        if (coworkerData.fullName) formData.append('fullName', coworkerData.fullName);
        if (coworkerData.type) formData.append('type', coworkerData.type);
        if (coworkerData.occupation) formData.append('occupation', coworkerData.occupation);
        if (coworkerData.bio) formData.append('bio', coworkerData.bio);
        if (coworkerData.locations && coworkerData.locations.length > 0) {
          coworkerData.locations.forEach(location => {
            formData.append('locations[]', location);
          });
        }
        if (coworkerData.email) formData.append('email', coworkerData.email);
        if (coworkerData.mobile) formData.append('mobile', coworkerData.mobile as string);
        if (coworkerData.facebook) formData.append('facebook', coworkerData.facebook as string);
        if (coworkerData.instagram) formData.append('instagram', coworkerData.instagram as string);
        formData.append('file', file);

        const response = await ApiWrapper.put(`/coworker/${id}`, formData, {
          'Content-Type': 'multipart/form-data'
        });
        return response.data;
      } else {
        const response = await ApiWrapper.put(`/coworker/${id}`, coworkerData);
        return response.data;
      }
    } catch (error) {
      console.error(`Error updating coworker with id ${id}`, error);
      throw error;
    }
  };

  const deleteCoworker = async (id: string) => {
    try {
      const response = await ApiWrapper.delete(`/coworker/${id}`, {});
      return response.data;
    } catch (error) {
      console.error(`Error deleting coworker with id ${id}`, error);
      throw error;
    }
  };

  return {
    coworkers,
    getAllCoworkers,
    getCoworkerById,
    createCoworker,
    updateCoworker,
    deleteCoworker
  };
});
