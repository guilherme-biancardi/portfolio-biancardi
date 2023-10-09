<template>
  <AppContent>
    <article class="about-content">
      <div>
        <div class="about-text">
          <h1>
            Prazer, <span :style="{ backgroundColor: nameColor }">{{ devName }}</span>
          </h1>
          <p>
            Meu nome é {{ devName }}, trabalho como
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

        <hr />

        <CopyEmail></CopyEmail>

        <hr />

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
import CopyEmail from '@/components/pages/aboutMe/CopyEmail.vue';
import { useAppStore } from '@/stores/AppStore';
import type { Icon } from '@/ts/types';
import { mdiGithub, mdiInstagram, mdiLinkedin, mdiWhatsapp } from '@mdi/js';
import { useCssVar } from '@vueuse/core';
import { computed, reactive } from 'vue';

const appStore = useAppStore();

const nameColor = computed(() => {
  const color = useCssVar('--green');

  return `${color.value}99`;
});

const dev = computed(() => appStore.getDevInformation);
const devName = computed(() => dev.value.name);
const devMedias = computed(() => dev.value.medias);

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
      link: devMedias.value.linkedin
    },
    {
      icon: { path: mdiGithub },
      link: devMedias.value.github
    },
    {
      icon: { path: mdiInstagram },
      link: devMedias.value.instagram
    },
    {
      icon: { path: mdiWhatsapp },
      link: devMedias.value.whatsapp
    }
  ]
});
</script>

<style scoped>
.about-content {
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  grid-template-columns: 1.1fr 0.9fr;
}

.about-content > div {
  max-width: 800px;
  display: flex;
  flex-direction: column;
  row-gap: 36px;
}

.about-content hr {
  width: 70%;
  max-width: 420px;
  align-self: center;
  border: 1px solid var(--syntax-gutter-light);
  margin-top: -4px;
  margin-bottom: -4px;
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
  width: 100%;
  font-size: 2em;
  text-align: center;
  margin-bottom: 16px;
}

.about-text h1 span {
  padding: 0 12px;
  color: #fff;
  border-radius: 2px;
  white-space: nowrap;
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
  width: 80%;
  max-width: 500px;
  position: relative;
  padding: 28px;
  padding-bottom: 76px;
  background-color: #fff;
  justify-self: center;
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
  max-height: 100%;
}

.text-highlight {
  color: var(--yellow);
  font-weight: 500;
}

@media screen and (max-width: 1024px) {
  .about-content{
    grid-template-columns: 1fr;
    gap: 64px;
  }
}
</style>
