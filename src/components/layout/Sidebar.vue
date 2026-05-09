<template>
    <div v-if="appStore.isSidebarOpen" @click="appStore.closeSidebar()"
        class="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60] lg:hidden transition-opacity">
    </div>

    <aside :class="[
        appStore.isSidebarOpen ? 'translate-x-0' : '-translate-x-full',
        'fixed lg:sticky top-0 left-0 w-72 bg-white border-r border-gray-200 flex flex-col h-screen z-[70] transition-transform duration-300 ease-in-out lg:translate-x-0 flex-shrink-0'
    ]">
        <div class="p-8 flex items-center justify-between gap-3 flex-shrink-0 bg-white">
            <router-link to="/trang-chu">
                <h1 class="text-lg font-black text-gray-900 tracking-tighter uppercase">ĐĂNG KHOA UNI</h1>
            </router-link>
            <button @click="appStore.closeSidebar()" class="lg:hidden p-1 text-gray-400 hover:text-gray-900">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12">
                    </path>
                </svg>
            </button>
        </div>

        <nav class="flex-1 px-4 space-y-1.5 overflow-y-auto scrollbar-hide pb-4">
            <div v-for="(item, i) in filteredMenuItems" :key="i" class="flex flex-col">

                <router-link v-if="!item.children" :to="item.path" @click="appStore.closeSidebar()"
                    active-class="bg-gray-100 text-gray-900 shadow-sm"
                    class="flex items-center gap-4 px-4 py-3 rounded-2xl font-semibold text-gray-500 hover:bg-gray-50 hover:text-gray-900 transition-all group">
                    <span class="group-hover:scale-110 transition-transform" v-html="item.icon"></span>
                    <span class="text-sm tracking-tight">{{ item.name }}</span>
                </router-link>

                <div v-else class="flex flex-col">
                    <button @click="item.isOpen = !item.isOpen" :class="[
                        isFolderActive(item) ? 'bg-gray-50 text-gray-900' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900',
                        'flex items-center justify-between px-4 py-3 rounded-2xl font-semibold transition-all group w-full'
                    ]">
                        <div class="flex items-center gap-4">
                            <span class="group-hover:scale-110 transition-transform" v-html="item.icon"></span>
                            <span class="text-sm tracking-tight">{{ item.name }}</span>
                        </div>
                        <svg :class="item.isOpen ? 'rotate-180' : ''" class="w-4 h-4 transition-transform duration-300"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7">
                            </path>
                        </svg>
                    </button>

                    <div v-show="item.isOpen" class="mt-1 space-y-1 overflow-hidden transition-all">
                        <router-link v-for="(child, j) in item.children" :key="j" :to="child.path"
                            @click="appStore.closeSidebar()" active-class="text-gray-900 bg-gray-100 font-bold"
                            class="block px-4 py-2.5 pl-12 text-[13px] font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-xl transition-colors">
                            {{ child.name }}
                        </router-link>
                    </div>
                </div>
            </div>
        </nav>

        <div class="p-6 mt-auto bg-white flex-shrink-0">
            <div class="bg-gray-900 rounded-3xl p-5 text-white shadow-xl relative z-10">
                <p class="text-xs opacity-60 mb-1">Cần hỗ trợ?</p>
                <p class="font-bold text-sm mb-3">Phòng Đào tạo</p>
                <button
                    class="w-full bg-white text-gray-900 text-xs font-bold py-2.5 rounded-xl hover:bg-gray-100 transition-all active:scale-95">
                    1900 1234
                </button>
            </div>
        </div>
    </aside>
</template>

<script setup>
import { ref, watch, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useAuthStore } from '@/store/authStore';
import { useAppStore } from '@/store/appStore';

const route = useRoute();
const authStore = useAuthStore();
const appStore = useAppStore();

const isFolderActive = (item) => {
    return item.children && item.children.some(child => route.path === child.path);
};

const menuItems = ref([
    {
        name: 'Bảng điều khiển Admin',
        path: '/quan-ly',
        role: 'admin',
        icon: '<svg class=\"w-5 h-5\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z\"></path></svg>',
    },
    {
        name: 'Quản trị hệ thống',
        role: 'admin',
        icon: '<svg class=\"w-5 h-5\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z\"></path><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M15 12a3 3 0 11-6 0 3 3 0 016 0z\"></path></svg>',
        isOpen: false,
        children: [
            { name: 'Quản lý người dùng', path: '/quan-ly/quan-ly-nguoi-dung' },
            { name: 'Thiết lập dữ liệu nền', path: '/quan-ly/thiet-lap-chung' },
        ]
    },
    {
        name: 'Bảng điều khiển GV',
        path: '/giang-vien',
        role: 'teacher',
        icon: '<svg class=\"w-5 h-5\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 01-2-2h-2a2 2 0 01-2 2\"></path></svg>',
    },
    {
        name: 'Quản lý giảng dạy',
        role: 'teacher',
        icon: '<svg class=\"w-5 h-5\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253\"></path></svg>',
        isOpen: false,
        children: [
            { name: 'Lớp học phân công', path: '/giang-vien/lop-hoc-phan-cong' },
            { name: 'Nhập điểm sinh viên', path: '/giang-vien/nhap-diem-sinh-vien' },
        ]
    },
    {
        name: 'Bảng điều khiển',
        path: '/sinh-vien',
        role: 'student',
        icon: '<svg class=\"w-5 h-5\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6\"></path></svg>',
    },
    {
        name: 'Hồ sơ người dùng',
        role: 'student',
        icon: '<svg class=\"w-5 h-5\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z\"></path></svg>',
        isOpen: false,
        children: [
            { name: 'Lý lịch sinh viên', path: '/sinh-vien/ho-so-sinh-vien' },
            { name: 'Cập nhật thông tin', path: '/sinh-vien/cap-nhat-thong-tin' },
            { name: 'Sổ tay sinh viên', path: '/sinh-vien/so-tay-sinh-vien' }
        ]
    },
    {
        name: 'Lịch học & Lịch thi',
        role: 'student',
        icon: '<svg class=\"w-5 h-5\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z\"></path></svg>',
        isOpen: false,
        children: [
            { name: 'Lịch học trong tuần', path: '/sinh-vien/lich-hoc-trong-tuan' },
            { name: 'Lịch thi học kỳ', path: '/sinh-vien/lich-thi-hoc-ky' }
        ]
    },
    {
        name: 'Kết quả học tập',
        role: 'student',
        icon: '<svg class=\"w-5 h-5\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z\"></path></svg>',
        isOpen: false,
        children: [
            { name: 'Bảng điểm học kỳ', path: '/sinh-vien/bang-diem-hoc-ky' },
            { name: 'Bảng điểm toàn khóa', path: '/sinh-vien/bang-diem-toan-khoa' }
        ]
    },
    {
        name: 'Tin tức & Thông báo',
        role: 'student',
        icon: '<svg class=\"w-5 h-5\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9\"></path></svg>',
        path: '/sinh-vien/tin-tuc'
    },
]);

const filteredMenuItems = computed(() => {
    const userRole = authStore.user?.role;
    return menuItems.value.filter(item => item.role === userRole);
});

watch(() => route.path, (newPath) => {
    filteredMenuItems.value.forEach(item => {
        if (item.children && item.children.some(c => c.path === newPath)) {
            item.isOpen = true;
        }
    });
}, { immediate: true });
</script>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
    display: none;
}

.scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
</style>