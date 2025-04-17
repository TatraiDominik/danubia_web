<script setup lang="ts">
const props = defineProps<{
  type: string;
  size?: string;
}>();

</script>

<template>
  <span
    v-if="type"
    class="material-symbols-outlined align-middle"
    :class="size ? `text-${size}` : 'text-lg'"
  >
    {{ type }}
  </span>
</template>
