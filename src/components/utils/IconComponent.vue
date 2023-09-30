<template>
  <SvgIcon type="mdi" :path="path" :size="size"></SvgIcon>
</template>

<script setup lang="ts">
import SvgIcon from '@jamescoyle/vue-icon';
import type { Icon } from '@/ts/types';

defineProps<Icon>();
</script>

<style scoped>
svg {
  display: grid;
  place-items: center;
}
</style>
