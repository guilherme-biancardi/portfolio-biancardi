<template>
  <AppContent>
    <div class="about-text">
      <h1>Prazer, <span :style="{ backgroundColor: nameColor }">Guilherme Biancardi</span></h1>
      <p>
        Meu nome é Guilherme Biancardi, atualmente trabalho como FullStack Developer e UI Designer, sendo responsavél pela elaboração de interfaces e ao mesmo tempo na lógica do projeto.
      </p>
      <p>
        Sou formado em Informática para Internet na Etec e estou cursando Ciências da Computação, sou apaixonado por tecnologia e busco sempre aprender e aprimorar minhas habilidades.
      </p>
    </div>
    <img>
  </AppContent>
</template>

<script setup lang="ts">
import AppContent from '@/components/contents/AppContent.vue';
import { useCssVar } from '@vueuse/core';
import { computed } from 'vue';

const nameColor = computed(() => {
  const purple = useCssVar('--purple');

  return `${purple.value}bb`;
});
</script>

<style scoped>
.about-text{
  color: var(--syntax-guide);
  font-size: 1.1em;
}

.about-text h1{
  font-size: 2.5em;
}

.about-text span {
  padding: 0 12px;
  color: #fff;
  border-radius: 2px;
}

.about-text p{
  text-indent: 12px;
}
</style>
