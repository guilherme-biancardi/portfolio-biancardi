<template>
  <AppContent>
    <article class="about-content">
      <div>
        <div class="about-text">
          <h1>Prazer, <span :style="{ backgroundColor: nameColor }">Guilherme Biancardi</span></h1>
          <p>
            Meu nome é Guilherme Biancardi, trabalho como
            <span class="text-highlight">FullStack Developer</span> e
            <span class="text-highlight">UI Designer</span>, sendo responsavél pela elaboração de
            interfaces e atuando na lógica do projeto, focando em performance e experiência do
            usuário.
          </p>
          <p>
            Sou Técnico em Informática pela Etec e atualmente estou cursando Ciências da Computação,
            sou apaixonado por tecnologia e busco sempre aprender e aprimorar minhas habilidades.
          </p>
        </div>

        <ul class="about-medias">
          <li v-for="(media, index) in state.socialMedias" :key="index">
            <a :href="media.link" target="_blank">
              <IconComponent :="media.icon" :size="media.icon.size ?? 38"></IconComponent>
            </a>
          </li>
        </ul>
      </div>

      <div class="about-polaroid">
        <img :src="appStore.getPhoto?.large" />
      </div>
    </article>
  </AppContent>
</template>

<script setup lang="ts">
import AppContent from '@/components/contents/AppContent.vue';
import IconComponent from '@/components/utils/IconComponent.vue';
import { useAppStore } from '@/stores/AppStore';
import type { Icon } from '@/ts/types';
import { mdiEmailOutline, mdiGithub, mdiInstagram, mdiLinkedin, mdiWhatsapp } from '@mdi/js';
import { useCssVar } from '@vueuse/core';
import { computed, reactive } from 'vue';

const appStore = useAppStore();

interface SocialMedia {
  icon: Icon;
  link: string;
}

type State = {
  socialMedias: SocialMedia[];
};

const state = reactive<State>({
  socialMedias: [
    {
      icon: { path: mdiLinkedin },
      link: ''
    },
    {
      icon: { path: mdiGithub },
      link: ''
    },
    {
      icon: { path: mdiInstagram },
      link: ''
    },
    {
      icon: { path: mdiWhatsapp },
      link: ''
    },
    {
      icon: { path: mdiEmailOutline },
      link: ''
    }
  ]
});

const nameColor = computed(() => {
  const color = useCssVar('--green');

  return `${color.value}99`;
});
</script>

<style scoped>
.about-content {
  display: grid;
  place-items: center;
  grid-template-columns: 56% 42%;
}

.about-content > div {
  display: flex;
  flex-direction: column;
  row-gap: 36px;
}

.about-text {
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  color: var(--syntax-guide);
  font-size: 1.1em;
  text-align: justify;
}

.about-text h1 {
  font-size: 2.5em;
  text-align: center;
  margin-bottom: 16px;
}

.about-text h1 span {
  padding: 0 12px;
  color: #fff;
  border-radius: 2px;
}

.about-text p {
  text-indent: 16px;
}

.about-medias {
  align-self: center;
  display: flex;
  column-gap: 16px;
}

.about-medias li {
  display: grid;
  place-items: center;
  padding: 8px;
  background-color: var(--syntax-gutter);
  border-radius: 8px;
  border: 1px solid var(--syntax-gutter-dark);
}

.about-medias a {
  width: 100%;
  height: 100%;
  color: var(--orange);
}

.about-medias a:hover {
  color: var(--yellow);
}

.about-polaroid {
  position: relative;
  padding: 28px;
  padding-bottom: 66px;
  background-color: #fff;
  transform: rotate(-4deg);
}

.about-polaroid::before {
  top: -32px;
  left: 1px;
  content: '';
  position: absolute;
  width: 28px;
  height: 95px;
  background-color: rgba(209, 154, 102, 0.7);
  transform: rotate(50deg);
  backdrop-filter: blur(2px);
}

.about-polaroid::after {
  bottom: -32px;
  right: 1px;
  content: '';
  position: absolute;
  width: 28px;
  height: 95px;
  background-color: rgba(209, 154, 102, 0.7);
  transform: rotate(50deg);
  backdrop-filter: blur(2px);
}

.about-polaroid img {
  max-width: 100%;
  max-height: 450px;
}

.text-highlight {
  color: var(--yellow);
  font-weight: 500;
}
</style>
