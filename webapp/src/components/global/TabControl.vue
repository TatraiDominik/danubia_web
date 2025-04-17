<script lang="ts" setup>
import { ref, watch } from 'vue';
import Button from '../global/Button.vue';

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

const selectTab = (index: number) => {
  if (props.items[index].buttonRank === 'tabItem') {
    internalActiveTabIndex.value = index;
  }
};

watch(() => props.activeTabIndex, (newValue) => {
  if (newValue !== undefined) {
    internalActiveTabIndex.value = newValue;
  }
});
</script>

<template>
  <div class="flex flex-row justify-evenly content-center items-center bg-zinc-800 rounded-full gap-1 sm:gap-3 py-1 px-2">
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
</template>
