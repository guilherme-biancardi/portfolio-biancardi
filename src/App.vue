<template>
  <Suspense>
    <main class="app-content">
      <MenuBar></MenuBar>
      <RouterView name="app" class="app-view"></RouterView>
    </main>
  </Suspense>
</template>

<script setup lang="ts">
import MenuBar from '@/components/macro/MenuBar.vue';
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

.app-view {
  padding: 28px;
}
</style>
