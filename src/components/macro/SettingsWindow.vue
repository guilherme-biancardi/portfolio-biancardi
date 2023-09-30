<template>
  <div class="settings-content">
    <button class="settings-close" title="Fechar Configurações" @click="emit('close')">
      <IconComponent :path="mdiWindowClose" :size="32"></IconComponent>
    </button>
  </div>
</template>

<script setup lang="ts">
import { mdiWindowClose } from '@mdi/js';
import IconComponent from '../utils/IconComponent.vue';

const emit = defineEmits(['close']);
</script>

<style scoped>
.settings-content {
  position: absolute;
  width: 450px;
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
</style>
