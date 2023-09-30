<template>
  <li @click="tooltipVisibility = !tooltipVisibility">
    <img :src="photo.default" class="photo" />

    <Transition name="photo">
      <img
        :src="photo.default"
        loading="lazy"
        v-show="tooltipVisibility"
        class="photo-tooltip"
      />
    </Transition>
  </li>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const photo = await import('@/assets/IMG_0798.jpeg');

const tooltipVisibility = ref(false);
</script>

<style scoped>
.photo {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  margin-bottom: -12px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.photo:hover {
  transform: scale(1.1);
  filter: brightness(140%);
}

.photo-tooltip {
  position: absolute;
  top: 0;
  left: calc(100% + 32px);
  width: 250px;
  height: 250px;
  border-radius: 8px;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}

.photo-enter-active,
.photo-leave-active {
  transition: all 0.2s ease;
}

.photo-enter-from,
.photo-leave-to {
  opacity: 0;
  width: 100px;
  height: 100px;
}
</style>
