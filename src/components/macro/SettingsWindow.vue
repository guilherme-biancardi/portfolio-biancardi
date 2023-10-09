<template>
  <div
    class="settings-content"
    :class="{ small: isSmallScreen, medium: isMediumScreen }"
    :style="{ backgroundColor: backgroundSettings }"
  >
    <button class="settings-close" title="Fechar Configurações" @click="emit('close')">
      <IconComponent :path="mdiWindowClose" :size="isSmallScreen ? 40 : 32"></IconComponent>
    </button>
  </div>
</template>

<script setup lang="ts">
import { mdiWindowClose } from '@mdi/js';
import IconComponent from '../utils/IconComponent.vue';
import { useCssVar, useMediaQuery } from '@vueuse/core';
import { computed } from 'vue';

const isMediumScreen = useMediaQuery('(max-width: 1024px)');
const isSmallScreen = useMediaQuery('(max-width: 612px)');

const backgroundSettings = computed(() => {
  const color = useCssVar('--syntax-gutter');

  return `${color.value}${isSmallScreen.value ? 'cc' : ''}`;
});

const emit = defineEmits(['close']);
</script>

<style scoped>
.settings-content {
  position: absolute;
  width: 450px;
  height: max-content;
  left: calc(100% + 12px);
  bottom: 0px;
  background-color: var(--syntax-gutter);
  border: 1px solid var(--syntax-gutter-dark);
  border-radius: 5px;
  padding: 12px;
}
.settings-close {
  transition: all 0.2s ease;
  color: var(--default-text);
}

/* hover */
.settings-close:hover {
  color: var(--syntax-guide);
}

.medium {
  top: calc(var(--menu-size) * -1);
  left: 0;
}

.small {
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 1;
}
</style>
