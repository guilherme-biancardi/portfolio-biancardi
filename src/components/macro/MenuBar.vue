<template>
  <nav class="menu-content">
    <ul class="menu-list">
      <li class="menu-photo">
        <img :src="appStore.getPhoto?.small"/>
      </li>
      <li
        v-for="(item, index) in state.menuItems"
        :key="index"
        class="menu-item"
        @mouseenter="item.mouseEnter = true"
        @mouseleave="item.mouseEnter = false"
        :class="{
          'last-item': index === state.menuItems.length - 1,
          'disabled-item': itemsDisabled
        }"
      >
        <span v-if="itemsDisabled">
          <IconComponent :="item.icon"></IconComponent>
        </span>

        <RouterLink :to="item.to" v-if="item.to && !itemsDisabled">
          <IconComponent :="item.icon"></IconComponent>
        </RouterLink>

        <button @click="item.click" v-else-if="item.click && !itemsDisabled">
          <IconComponent :="item.icon"></IconComponent>
        </button>

        <Transition name="tooltip">
          <span class="menu-tooltip" v-show="item.mouseEnter && !itemsDisabled">
            {{ item.title }}
          </span>
        </Transition>
      </li>
      <Transition name="fade">
        <SettingsWindow
          v-if="state.settingsVisibility"
          @close="state.settingsVisibility = false"
        ></SettingsWindow>
      </Transition>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import type { Icon } from '@/ts/types';
import { mdiAccount, mdiCog, mdiTools } from '@mdi/js';
import { computed, reactive } from 'vue';
import type { RouterLinkProps } from 'vue-router';
import IconComponent from '../utils/IconComponent.vue';
import SettingsWindow from './SettingsWindow.vue';
import { useAppStore } from '@/stores/AppStore';

const appStore = useAppStore();

interface MenuItem {
  to?: RouterLinkProps['to'];
  title: string;
  icon: Icon;
  mouseEnter: boolean;
  click?: () => void;
}

type State = {
  menuItems: MenuItem[];
  settingsVisibility: boolean;
};

const openSettings = () => (state.settingsVisibility = true);
const itemsDisabled = computed(() => state.settingsVisibility);

const state = reactive<State>({
  menuItems: [
    {
      title: 'Sobre Mim',
      to: { name: 'aboutMe' },
      icon: { path: mdiAccount, size: 36 },
      mouseEnter: false
    },
    {
      title: 'Projetos',
      to: { name: 'project' },
      icon: { path: mdiTools, size: 32 },
      mouseEnter: false
    },
    {
      title: 'Gerenciar',
      click: openSettings,
      icon: { path: mdiCog, size: 32 },
      mouseEnter: false
    }
  ],
  settingsVisibility: false
});
</script>

<style scoped>
.menu-content {
  padding: 16px 28px;
  z-index: 1;
  height: 100%;
}

.menu-list {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
}

.menu-item {
  position: relative;
  display: flex;
  align-items: center;
}

.menu-item * {
  transition: all 0.2s ease;
  color: var(--default-text);
}

.last-item {
  margin-top: auto;
}

.disabled-item * {
  color: var(--default-text-disabled);
  cursor: no-drop;
}

.menu-photo img{
  width: 52px;
  height: 52px;
  border-radius: 50%;
  margin-bottom: -16px;
}

.menu-tooltip {
  width: max-content;
  position: absolute;
  left: calc(100% + 18px);
  padding: 6px 20px;
  background-color: var(--syntax-gutter);
  border: 1px solid var(--syntax-gutter-dark);
  border-radius: 5px;
  font-size: 1.1em;
  display: flex;
  align-items: center;
}

.menu-tooltip::after {
  content: '';
  position: absolute;
  left: -7px;
  width: 0px;
  height: 0px;
  border-style: solid;
  border-width: 8px 8px 8px 0;
  border-color: transparent var(--syntax-gutter) transparent transparent;
  transform: rotate(360deg);
  filter: drop-shadow(-1px 0px 0.08px var(--syntax-gutter-dark));
}

.tooltip-enter-active,
.tooltip-leave-active {
  transition: all 0.15s ease;
}

.tooltip-enter-from,
.tooltip-leave-to {
  opacity: 0;
  transform: translateX(-4px);
}

/* hover */
.menu-item:not(.disabled-item) *:hover {
  color: var(--syntax-guide);
}

@media screen and (max-width: 1024px) {
  .menu-content{
    width: 100%;
    height: var(--menu-size);
    position: fixed;
    bottom: 0;
    background-color: var(--syntax-gutter);
    padding: 14px 24px;
  }

  .menu-list{
    flex-direction: row;
  }

  .menu-photo{
    height: 100%;
  }

  .menu-photo img{
    width: 100%;
    height: 100%;
    margin-bottom: 0;
  }

  .last-item{
    margin-top: 0;
    margin-left: auto;
  }
}
</style>
