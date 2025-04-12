import { ref, type Ref } from 'vue';
import { defineStore } from 'pinia';
import { ApiWrapper } from '@/composables/ApiWrapper';
import type { Post } from '@/types/Post';

export const usePostStore = defineStore('post', () => {
  const posts: Ref<Post[]> = ref([]);

  const getAllPosts = async () => {
    try {
      const response = await ApiWrapper.get('/post', {});
      posts.value = Array.isArray(response.data) ? response.data : [];
    } catch (error) {
      console.error('Error fetching posts', error);
      throw error;
    }
  };

  const getPostById = async (id: string) => {
    try {
      const response = await ApiWrapper.get(`/post/${id}`, {});
      return response.data;
    } catch (error) {
      console.error(`Error fetching post with id ${id}`, error);
      throw error;
    }
  };

  const createPost = async (postData: Post, file?: File) => {
    try {
      if (file) {
        const formData = new FormData();
        formData.append('title', postData.title);
        formData.append('content', postData.content);
        if (postData.fbPostLink) formData.append('fbPostLink', postData.fbPostLink);
        if (postData.igPostLink) formData.append('igPostLink', postData.igPostLink);
        formData.append('file', file);

        const response = await ApiWrapper.post('/post', formData, {
          'Content-Type': 'multipart/form-data'
        });
        return response.data;
      } else {
        const response = await ApiWrapper.post('/post', postData);
        return response.data;
      }
    } catch (error) {
      console.error('Error creating post', error);
      throw error;
    }
  };

  const updatePost = async (id: string, postData: Post, file?: File) => {
    try {
      if (file) {
        const formData = new FormData();
        if (postData.title) formData.append('title', postData.title);
        if (postData.content) formData.append('content', postData.content);
        if (postData.fbPostLink) formData.append('fbPostLink', postData.fbPostLink);
        if (postData.igPostLink) formData.append('igPostLink', postData.igPostLink);
        formData.append('file', file);

        const response = await ApiWrapper.put(`/post/${id}`, formData, {
          'Content-Type': 'multipart/form-data'
        });
        return response.data;
      } else {
        const response = await ApiWrapper.put(`/post/${id}`, postData);
        return response.data;
      }
    } catch (error) {
      console.error(`Error updating post with id ${id}`, error);
      throw error;
    }
  };

  const deletePost = async (id: string) => {
    try {
      const response = await ApiWrapper.delete(`/post/${id}`, {});
      return response.data;
    } catch (error) {
      console.error(`Error deleting post with id ${id}`, error);
      throw error;
    }
  };

  return {
    posts,
    getAllPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost
  };
});
