<template>
    <header
        class="bg-white/80 backdrop-blur-md px-6 py-4 flex items-center justify-between sticky top-0 z-40 border-b border-gray-200">
        <div class="flex items-center gap-4">
            <button @click="appStore.toggleSidebar()"
                class="lg:hidden p-2 text-gray-500 hover:bg-gray-100 rounded-xl transition-colors focus:outline-none">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16">
                    </path>
                </svg>
            </button>

            <h2 class="font-bold text-gray-400 text-sm hidden md:block tracking-widest uppercase">
                {{ route.meta?.parent || 'BẢNG ĐIỀU KHIỂN' }} /
                <span class="text-gray-900">{{ route.meta?.title || 'TRANG CHỦ' }}</span>
            </h2>
        </div>
        <div class="flex items-center gap-4 md:gap-8">
            <div class="hidden md:flex relative w-64">
                <input type="text" placeholder="Tìm nhanh..."
                    class="w-full pl-10 pr-4 py-2 bg-gray-50 rounded-full text-sm focus:ring-2 focus:ring-gray-300 focus:outline-none">
                <svg class="w-4 h-4 absolute left-4 top-2.5 text-gray-400" fill="none" stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
            </div>

            <div class="flex items-center gap-4">
                <div class="h-8 w-[1px] bg-gray-100 mx-2"></div>

                <div class="relative">
                    <button @click="isDropdownOpen = !isDropdownOpen"
                        class="flex items-center gap-3 hover:bg-gray-50 p-1.5 rounded-2xl transition-all focus:outline-none">
                        <div class="text-right hidden sm:block">
                            <p class="text-sm font-bold text-gray-700 leading-tight">
                                {{ authStore.user?.name || 'Người dùng' }}</p>
                            <p class="text-[10px] text-gray-600 font-bold uppercase tracking-wider">{{
                                authStore.user?.role }}</p>
                        </div>
                        <img src="@/assets/avt.JPG"
                            class="w-10 h-10 rounded-2xl shadow-md border-2 border-white object-cover">
                    </button>

                    <div v-if="isDropdownOpen"
                        class="absolute right-0 mt-3 w-60 bg-white rounded-2xl shadow-xl border border-gray-200 py-2 z-50 transform origin-top-right transition-all">
                        <div class="border-t border-gray-50 mt-1 pt-1">
                            <button @click="handleLogout"
                                class="w-full flex items-center gap-3 px-4 py-3 text-sm text-gray-900 hover:bg-gray-100 transition-colors">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1">
                                    </path>
                                </svg>
                                Đăng xuất
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>

    <div v-if="isDropdownOpen" @click="isDropdownOpen = false" class="fixed inset-0 z-30"></div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useAuthStore } from '../../store/authStore';
import { useAppStore } from '../../store/appStore'; // Import appStore

const router = useRouter();
const route = useRoute();
const authStore = useAuthStore();
const appStore = useAppStore(); // Khởi tạo appStore
const isDropdownOpen = ref(false);

const handleLogout = () => {
    isDropdownOpen.value = false;
    authStore.logout();
    router.push('/dang-nhap');
};
</script>