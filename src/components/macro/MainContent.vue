<template>
  <main class="app-content">
    <MenuBar></MenuBar>
    <RouterView name="app" class="app-view"></RouterView>
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
