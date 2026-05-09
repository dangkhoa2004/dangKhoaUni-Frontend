<template>
  <div id="app">
    <div v-if="appStore.isLoading" class="loading-container">
      <div class="spinner"></div>
    </div>

    <router-view />
  </div>
</template>

<script setup>
import { useAppStore } from './store/appStore';
const appStore = useAppStore();
</script>

<style scoped>
.loading-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.2); /* Lớp nền mờ nhẹ */
  backdrop-filter: blur(8px); /* Làm mờ các thành phần bên dưới */
  z-index: 9999;
}

.spinner {
  width: 50px;
  height: 50px;
  border: 5px solid #f3f3f3;
  border-top: 5px solid #000000;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>