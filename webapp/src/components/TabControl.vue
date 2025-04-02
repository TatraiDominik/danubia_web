<script lang="ts" setup>
import { ref } from 'vue';
import Button from './global/Button.vue';
import { onMounted } from 'vue';

const props = defineProps<{
  items: {
    event?: () => void;
    buttonText: string;
    buttonSize: 'small' | 'normal';
    buttonRank: 'primary' | 'secondary' | 'tabItem';
    buttonIconPosition: 'none' | 'only' | 'left' | 'right';
  }[];
}>();


const activeTabIndex = ref<number | null>(null);


const selectTab = (index: number) => {
  if (props.items[index].buttonRank === 'tabItem') {
    activeTabIndex.value = index;
  }
};

onMounted(()=>{
activeTabIndex.value = 0;
})
</script>

<template>
  <div class="flex flex-row justify-evenly content-center items-center bg-zinc-800 p-1 rounded-full gap-3">

    <Button
      v-for="(item, index) in props.items"
      :key="index"
      :text="item.buttonText"
      :size="item.buttonSize"
      :rank="item.buttonRank"
      :icon-position="item.buttonIconPosition"
      :isActive="activeTabIndex === index"
      @click.prevent="() => { selectTab(index); item.event?.(); }"
    ></Button>

  </div>
</template>
