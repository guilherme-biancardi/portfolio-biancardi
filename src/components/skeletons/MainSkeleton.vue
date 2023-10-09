<template>
  <main class="app-content">
    <SkeletonComponent :radius="0"></SkeletonComponent>
    <AppContent style="padding: 60px">
      <SkeletonComponent></SkeletonComponent>
    </AppContent>
  </main>
</template>

<script setup lang="ts">
import AppContent from '../contents/AppContent.vue';
import SkeletonComponent from '../utils/SkeletonComponent.vue';
</script>

<style scoped src="../../assets/css/mainContent.css"></style>
