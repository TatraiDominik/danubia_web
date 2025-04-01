import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useThemeStore = defineStore('theme', () => {
  const isDarkMode = ref(false);


  if (localStorage.getItem('darkMode')) {
    isDarkMode.value = JSON.parse(localStorage.getItem('darkMode')!);
  }

  const toggleTheme = () => {
    isDarkMode.value = !isDarkMode.value;
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode.value));
  };

  return {
    isDarkMode,
    toggleTheme,
  };
});
