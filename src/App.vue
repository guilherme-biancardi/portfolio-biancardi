<template>
  <Transition name="fade" mode="out-in">
    <Suspense>
      <MainContent></MainContent>

      <template #fallback>
        <MainSkeleton></MainSkeleton>
      </template>
    </Suspense>
  </Transition>
</template>

<script setup lang="ts">
import MainContent from './components/macro/MainContent.vue';
import MainSkeleton from './components/skeletons/MainSkeleton.vue';
</script>

<style scoped></style>
