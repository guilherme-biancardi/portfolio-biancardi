<template>
  <article class="copy-content" :class="{ copied: state.isCopied }">
    <button
      @mouseenter="state.overlayVisbility = true"
      @mouseleave="state.overlayVisbility = false"
      @click="copyEmailToClipboard"
    >
      <IconComponent :path="state.isCopied ? mdiCheck : mdiContentCopy" :size="28"></IconComponent>
    </button>
    <span>
      <p>{{ state.isCopied ? 'E-mail copiado com sucesso!' : devEmail }}</p>
      <Transition name="fade-copy">
        <p class="copy-overlay" v-show="state.overlayVisbility && !state.isCopied">
          Copiar para a área de transferência
        </p>
      </Transition>
    </span>
  </article>
</template>

<script setup lang="ts">
import IconComponent from '@/components/utils/IconComponent.vue';
import { useAppStore } from '@/stores/AppStore';
import { mdiCheck, mdiContentCopy } from '@mdi/js';
import { computed, reactive } from 'vue';

const appStore = useAppStore();

const devEmail = computed(() => appStore.getDevInformation.email);

const state = reactive({
  overlayVisbility: false,
  isCopied: false
});

const copyEmailToClipboard = async () => {
  navigator.clipboard.writeText(devEmail.value).then(() => {
    state.isCopied = true;

    setTimeout(() => (state.isCopied = false), 2500);
  });
};
</script>

<style scoped>
.copy-content {
  width: 100%;
  max-width: 550px;
  align-self: center;
  height: 60px;
  display: flex;
  align-items: center;
  background-color: var(--syntax-gutter);
  border: 1px solid var(--syntax-gutter-dark);
  border-radius: 8px;
  transition: all 0.3s ease;
}

.copy-content button {
  padding: 0 16px;
  height: 100%;
  color: var(--syntax-guide);
  border-right: 1px solid var(--syntax-gutter-dark);
  transition: all 0.3s ease;
}

.copy-content span,
.copy-overlay {
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;
  padding-left: 16px;
}

.copy-overlay {
  position: absolute;
  left: 0;
  background-color: var(--green);
  color: var(--syntax-gutter-dark);
  font-weight: 600;
}

.copied {
  background-color: var(--yellow);
  color: var(--syntax-gutter-dark);
}

.copied button {
  color: var(--syntax-gutter-dark);
}

.fade-copy-enter-active,
.fade-copy-leave-active {
  transition: all 0.3s ease;
}

.fade-copy-enter-from,
.fade-copy-leave-to {
  opacity: 0;
  width: 30ch;
}
</style>
