import { ref, type Ref } from 'vue';
import { defineStore } from 'pinia';
import { ApiWrapper } from '@/composables/ApiWrapper';
import type { Instructor } from '@/types/Instructor';

export const useInstructorStore = defineStore('instructor', () => {
  const instructors: Ref<Instructor[]> = ref([]);
  const subjects: Ref<string[]> = ref([]);

  const getAllInstructors = async () => {
    try {
      const response = await ApiWrapper.get('/instructor', {});
      instructors.value = Array.isArray(response.data) ? response.data : [];

      // Extract unique subjects from instructors
      const uniqueSubjects = new Set<string>();
      instructors.value.forEach(instructor => {
        if (instructor.subject) {
          uniqueSubjects.add(instructor.subject);
        }
      });
      subjects.value = Array.from(uniqueSubjects);
    } catch (error) {
      console.error('Error fetching instructors', error);
      throw error;
    }
  };

  const getInstructorById = async (id: string) => {
    try {
      const response = await ApiWrapper.get(`/instructor/${id}`, {});
      return response.data;
    } catch (error) {
      console.error(`Error fetching instructor with id ${id}`, error);
      throw error;
    }
  };

  const createInstructor = async (instructorData: Instructor, file?: File) => {
    try {
      if (file) {
        const formData = new FormData();
        formData.append('fullName', instructorData.fullName);
        formData.append('subject', instructorData.subject);
        formData.append('bio', instructorData.bio);
        if (instructorData.locations && instructorData.locations.length > 0) {
          instructorData.locations.forEach(location => {
            formData.append('locations[]', location);
          });
        }
        formData.append('email', instructorData.email);
        if (instructorData.mobile) formData.append('mobile', instructorData.mobile);
        if (instructorData.facebook) formData.append('facebook', instructorData.facebook);
        if (instructorData.instagram) formData.append('instagram', instructorData.instagram);
        formData.append('file', file);

        const response = await ApiWrapper.post('/instructor', formData, {
          'Content-Type': 'multipart/form-data'
        });
        return response.data;
      } else {
        const response = await ApiWrapper.post('/instructor', instructorData);
        return response.data;
      }
    } catch (error) {
      console.error('Error creating instructor', error);
      throw error;
    }
  };

  const updateInstructor = async (id: string, instructorData: Instructor, file?: File) => {
    try {
      if (file) {
        const formData = new FormData();
        if (instructorData.fullName) formData.append('fullName', instructorData.fullName);
        if (instructorData.subject) formData.append('subject', instructorData.subject);
        if (instructorData.bio) formData.append('bio', instructorData.bio);
        if (instructorData.locations && instructorData.locations.length > 0) {
          instructorData.locations.forEach(location => {
            formData.append('locations[]', location);
          });
        }
        if (instructorData.email) formData.append('email', instructorData.email);
        if (instructorData.mobile) formData.append('mobile', instructorData.mobile);
        if (instructorData.facebook) formData.append('facebook', instructorData.facebook);
        if (instructorData.instagram) formData.append('instagram', instructorData.instagram);
        formData.append('file', file);

        const response = await ApiWrapper.put(`/instructor/${id}`, formData, {
          'Content-Type': 'multipart/form-data'
        });
        return response.data;
      } else {
        const response = await ApiWrapper.put(`/instructor/${id}`, instructorData);
        return response.data;
      }
    } catch (error) {
      console.error(`Error updating instructor with id ${id}`, error);
      throw error;
    }
  };

  const deleteInstructor = async (id: string) => {
    try {
      const response = await ApiWrapper.delete(`/instructor/${id}`, {});
      return response.data;
    } catch (error) {
      console.error(`Error deleting instructor with id ${id}`, error);
      throw error;
    }
  };

  const getInstructorsBySubject = (subject: string) => {
    return instructors.value.filter(instructor => instructor.subject === subject);
  };

  return {
    instructors,
    subjects,
    getAllInstructors,
    getInstructorById,
    createInstructor,
    updateInstructor,
    deleteInstructor,
    getInstructorsBySubject
  };
});
