<script lang="ts" setup>
import { ref, watch } from 'vue';
import Button from '../global/Button.vue';
import Icon from '../global/Icon.vue';

const props = defineProps<{
  items: {
    event?: () => void;
    buttonText: string;
    buttonSize: 'small' | 'normal';
    buttonRank: 'primary' | 'secondary' | 'tabItem';
    buttonIconPosition: 'none' | 'only' | 'left' | 'right';
  }[];
  activeTabIndex?: number;
}>();

const internalActiveTabIndex = ref<number | null>(props.activeTabIndex !== undefined ? props.activeTabIndex : 0);
const isMobileMenuOpen = ref(false);

const selectTab = (index: number) => {
  if (props.items[index].buttonRank === 'tabItem') {
    internalActiveTabIndex.value = index;
  }
  isMobileMenuOpen.value = false; // Bezárjuk a mobilmenüt választás után
};

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

watch(() => props.activeTabIndex, (newValue) => {
  if (newValue !== undefined) {
    internalActiveTabIndex.value = newValue;
  }
});

// Aktív menüpont címének kinyerése a mobilnézethez
const getActiveTabText = () => {
  if (internalActiveTabIndex.value !== null) {
    return props.items[internalActiveTabIndex.value].buttonText;
  }
  return 'Menü';
};
</script>

<template>
  <!-- Asztali nézet -->
  <div class="hidden md:flex flex-row justify-evenly content-center items-center bg-zinc-800 rounded-full gap-1 sm:gap-3 py-1 px-2">
    <Button
      v-for="(item, index) in props.items"
      :key="index"
      :text="item.buttonText"
      :size="item.buttonSize"
      :rank="item.buttonRank"
      :icon-position="item.buttonIconPosition"
      :isActive="internalActiveTabIndex === index"
      @click.prevent="() => { selectTab(index); item.event?.(); }"
      class="my-1"
    ></Button>
  </div>

  <!-- Mobil nézet -->
  <div class="md:hidden relative">
    <!-- Mobil gomb -->
    <div
      @click="toggleMobileMenu"
      class="flex items-center justify-between bg-zinc-800 rounded-full py-2 px-4 cursor-pointer"
    >
      <span class="text-white">{{ getActiveTabText() }}</span>
      <Icon
        :type="isMobileMenuOpen ? 'expand_less' : 'expand_more'"
        size="lg"
        class="text-white"
      />
    </div>

    <!-- Lenyíló menü -->
    <div
      v-if="isMobileMenuOpen"
      class="absolute top-full left-0 right-0 mt-1 bg-zinc-800 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto"
    >
      <div
        v-for="(item, index) in props.items"
        :key="index"
        @click="() => { selectTab(index); item.event?.(); }"
        class="py-2 px-4 hover:bg-zinc-700 cursor-pointer transition-colors"
        :class="{ 'bg-zinc-700': internalActiveTabIndex === index }"
      >
        <span class="text-white">{{ item.buttonText }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.absolute {
  transition: opacity 0.2s ease, transform 0.2s ease;
  transform-origin: top center;
}
</style>
