<template>
  <main class="app-content">
    <MenuBar></MenuBar>
    <RouterView name="app"></RouterView>
  </main>
</template>

<script setup lang="ts">
import { useAppStore } from '@/stores/AppStore';
import MenuBar from './MenuBar.vue';

const appStore = useAppStore();

const resolvedPhotos = await Promise.allSettled([
  import('@/assets/small-photo.webp'),
  import('@/assets/large-photo.jpeg')
]);

const [small, large] = resolvedPhotos.map((photo) => {
  if (photo.status === 'fulfilled') return photo.value.default;
});

appStore.setPhotos({ large, small });
</script>

<style scoped src="../../assets/css/mainContent.css"></style>
