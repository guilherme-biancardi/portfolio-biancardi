<template>
  <main class="app-content">
    <SkeletonComponent :radius="0"></SkeletonComponent>
    <AppContent style="padding: 60px;">
      <SkeletonComponent></SkeletonComponent>
    </AppContent>
  </main>
</template>

<script setup lang="ts">
import AppContent from '../contents/AppContent.vue';
import SkeletonComponent from '../utils/SkeletonComponent.vue';
</script>

<style scoped>
.app-content {
  --menu-width: 82px;
}

.app-content {
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: var(--menu-width) calc(100% - var(--menu-width));
}
</style>
