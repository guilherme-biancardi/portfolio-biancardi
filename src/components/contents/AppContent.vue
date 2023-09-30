<template>
  <section class="app-section">
    <slot></slot>
  </section>
</template>

<script setup></script>

<style scoped>
.app-section {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  row-gap: 16px;
}
</style>
