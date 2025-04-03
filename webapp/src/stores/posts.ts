import { ref } from 'vue';
import { ApiWrapper } from '@/composables/ApiWrapper';
import { useAdminStore } from './admin';

interface PostData {
  title: string;
  content: string;
  fbPostLink?: string;
  igPostLink?: string;
  media?: File | null; // A fájlok kezelése
}

export const usePostStore = () => {
  const adminStore = useAdminStore();
  const posts = ref<PostData[]>([]);

  // A bejegyzések lekérése
  const getAllPosts = async () => {
    try {
      const jwt = adminStore.getJwt();
      const response = await ApiWrapper.get('/post', {
        Authorization: jwt ? `Bearer ${jwt}` : ''
      });
      // Assuming the response.data is an array, if not, you might need to adjust this
      posts.value = Array.isArray(response.data) ? response.data : [];
    } catch (error) {
      console.error('Error fetching posts', error);
      throw error;
    }
  };

  const createPost = async (postData: PostData) => {
    const formData = new FormData();
    formData.append('title', postData.title);
    formData.append('content', postData.content);

    // Ha van Facebook vagy Instagram link, hozzáadjuk
    if (postData.fbPostLink) formData.append('fbPostLink', postData.fbPostLink);
    if (postData.igPostLink) formData.append('igPostLink', postData.igPostLink);

    // Ha van média fájl, hozzáadjuk a formData-hoz
    if (postData.media) formData.append('file', postData.media);

    try {
      const jwt = adminStore.getJwt();
      const response = await ApiWrapper.post('/post', formData, {
        'Content-Type': 'multipart/form-data',
        Authorization: jwt ? `Bearer ${jwt}` : ''
      });
      return response.data;
    } catch (error) {
      console.error('Error creating post', error);
      throw error;
    }
  };

  return {
    posts,
    getAllPosts,
    createPost,
  };
};
