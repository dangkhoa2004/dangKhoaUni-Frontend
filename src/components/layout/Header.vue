<template>
  <header :class="[
    'fixed top-0 left-0 right-0 z-[100] transition-all duration-500 border-b',
    isScrolled
      ? 'py-3 bg-white/95 backdrop-blur-lg border-gray-200 shadow-sm'
      : 'py-6 bg-white border-gray-100'
  ]">
    <div class="container mx-auto px-6 md:px-12 flex items-center justify-between">
      <router-link to="/" class="flex items-center gap-3 group">
        <div :class="[
          'w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 shadow-lg',
          isScrolled ? 'bg-black' : 'bg-gray-900'
        ]">
          <span class="font-black text-xl text-white">D</span>
        </div>
        <div class="flex flex-col leading-none">
          <span class="text-lg font-black tracking-tighter text-gray-900 uppercase">ĐĂNG KHOA</span>
          <span class="text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase italic">University</span>
        </div>
      </router-link>

      <nav class="hidden lg:flex items-center gap-10">
        <ul class="flex items-center gap-8">
          <li v-for="link in navLinks" :key="link.name">
            <a href="#"
              class="text-[11px] font-black uppercase tracking-widest hover:text-black transition-all relative group text-gray-600">
              {{ link.name }}
              <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all group-hover:w-full"></span>
            </a>
          </li>
        </ul>

        <router-link v-if="!authStore.user" to="/dang-nhap"
          class="px-8 py-3 bg-black text-white text-[11px] font-black uppercase tracking-widest rounded-2xl hover:bg-gray-800 transition-all active:scale-95 shadow-md">
          Đăng nhập
        </router-link>

        <router-link v-else :to="portalPath"
          class="flex items-center gap-3 px-6 py-3 rounded-2xl transition-all active:scale-95 group overflow-hidden relative shadow-md bg-black text-white hover:bg-gray-800">
          <div class="flex flex-col items-start relative z-10">
            <span class="text-[9px] font-black uppercase tracking-[0.1em] opacity-60 text-gray-300">Portal</span>
            <span class="text-xs font-black uppercase tracking-widest">Hệ thống quản trị</span>
          </div>
          <div
            class="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all relative z-10">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
            </svg>
          </div>
        </router-link>
      </nav>

      <button @click="isMenuOpen = !isMenuOpen" class="lg:hidden p-2 text-gray-900">
        <svg v-if="!isMenuOpen" class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
        <svg v-else class="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </div>

    <transition enter-active-class="transition duration-300 ease-out" enter-from-class="opacity-0 translate-y-4"
      enter-to-class="opacity-100 translate-y-0" leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-4">
      <div v-if="isMenuOpen"
        class="absolute top-full left-0 right-0 bg-white shadow-2xl p-6 lg:hidden border-t border-gray-100">
        <ul class="space-y-4">
          <li v-for="link in navLinks" :key="link.name">
            <a href="#" class="block text-sm font-black uppercase text-gray-900 py-2 border-b border-gray-50">{{
              link.name }}</a>
          </li>
          <li>
            <router-link v-if="!authStore.user" to="/dang-nhap"
              class="block w-full bg-black text-white p-4 rounded-2xl text-center font-black uppercase text-xs tracking-widest mt-4">
              Đăng nhập
            </router-link>
            <router-link v-else :to="portalPath"
              class="flex items-center justify-between w-full bg-black text-white p-4 rounded-2xl font-black uppercase text-xs tracking-widest mt-4">
              Hệ thống quản trị
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </router-link>
          </li>
        </ul>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { useAuthStore } from '@/store/authStore';

const authStore = useAuthStore();
const isScrolled = ref(false);
const isMenuOpen = ref(false);

const navLinks = [
  { name: 'Tuyển sinh' },
  { name: 'Đào tạo' },
  { name: 'Nghiên cứu' },
  { name: 'Về chúng tôi' },
];

// Logic xác định đường dẫn Portal dựa trên Role
const portalPath = computed(() => {
  const role = authStore.user?.role;
  if (role === 'admin') return '/quan-ly';
  if (role === 'teacher') return '/giang-vien';
  if (role === 'student') return '/sinh-vien';
  return '/';
});

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.container {
  max-width: 1400px;
}
</style>