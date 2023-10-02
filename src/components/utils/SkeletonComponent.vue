<template>
  <div class="skeleton" :style="style"></div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

type Props = {
  width?: number;
  height?: number;
  radius?: number;
};

const props = withDefaults(defineProps<Props>(), {
  radius: 8
});

const style = computed(() => ({
  '--width': props.width ? `${props.width}px` : '100%',
  '--height': props.height ? `${props.height}px` : '100%',
  '--radius': `${props.radius}px`
}));
</script>

<style scoped>
.skeleton {
  --width: 0;
  --height: 0;
  --radius: 0;

  --background-light: var(--syntax-gutter);
  --background-medium: var(--syntax-gutter-light);
}

.skeleton {
  width: var(--width);
  height: var(--height);
  background: #eee;
  background: linear-gradient(
    90deg,
    var(--background-light) 12%,
    var(--background-medium) 32%,
    var(--background-light) 43%
  );
  border-radius: var(--radius);
  background-size: 200% 100%;
  animation: 0.9s shine linear infinite;
}

@keyframes shine {
  to {
    background-position-x: -200%;
  }
}
</style>
