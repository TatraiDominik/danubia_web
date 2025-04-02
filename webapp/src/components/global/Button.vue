<script setup lang="ts">
import Icon from './Icon.vue';

const props = defineProps<{
  text?: string;
  size: 'small' | 'normal';
  rank: 'primary' | 'secondary' | 'tabItem';
  iconPosition: 'none' | 'only' | 'left' | 'right';
  iconType?: string;
  onClick?: () => void;
  isActive?: boolean;
}>();

</script>

<template>
  <button
    :class="[size, rank, { 'active': isActive }]"
    @click="onClick"
  >
    <template v-if="iconPosition === 'left'">
      <Icon v-if="iconType" :type="iconType" />
      <span>{{ text }}</span>
    </template>
    <template v-else-if="iconPosition === 'right'">
      <span>{{ text }}</span>
      <Icon v-if="iconType" :type="iconType" />
    </template>
    <template v-else-if="iconPosition === 'only'">
      <Icon v-if="iconType" :type="iconType" />
    </template>
    <template v-else>
      <span>{{ text }}</span>
    </template>
  </button>
</template>

<style>
button {
  @apply rounded-lg flex items-center gap-2;
}

.primary {
  @apply bg-blue-600 text-zinc-100 hover:bg-blue-400 active:bg-blue-700 transition duration-200;
}

.secondary {
  @apply bg-zinc-800 hover:bg-zinc-700 active:bg-zinc-900 transition duration-200 text-zinc-100;
}


.small {
  @apply text-base px-2 py-1;
}

.normal {
  @apply text-lg px-3 py-2;
}

.tabItem {
  @apply hover:bg-zinc-700 active:bg-zinc-100 transition duration-200 rounded-full text-zinc-100;
}

.tabItem.active {
  @apply bg-zinc-200 text-zinc-900;
}
</style>
