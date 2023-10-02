<template>
  <section class="app-section" :style="{ gap: `${gap}px` }">
    <slot></slot>
  </section>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ gap?: number }>(), {
  gap: 16
});
</script>

<style scoped>
.app-section {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
