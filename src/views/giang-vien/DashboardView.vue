<template>
    <div class="min-h-screen bg-gray-50 font-sans text-gray-800 flex items-start">
        
        <Sidebar />

        <div class="flex-1 flex flex-col min-w-0">
            <TopHeader />

            <main class="p-6 md:p-10 max-w-[1400px] mx-auto w-full space-y-8">
                
                <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h1 class="text-2xl md:text-4xl font-black text-gray-900 tracking-tight">
                            Chào buổi sáng, {{ authStore.user?.name || 'Giảng viên' }}! 👋
                        </h1>
                        <p class="text-gray-500 mt-2 font-medium">
                            Hôm nay bạn có <span class="text-indigo-600 font-bold">02 lớp học</span> và <span class="text-orange-500 font-bold">01 đầu điểm</span> cần hoàn thành.
                        </p>
                    </div>
                    <div class="hidden md:block">
                        <span class="text-sm font-bold text-gray-400 uppercase tracking-widest">{{ currentDate }}</span>
                    </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div class="bg-white p-6 rounded-[2rem] border border-gray-200 shadow-sm flex flex-col justify-between h-40 hover:shadow-md transition-shadow">
                        <div class="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                        </div>
                        <div>
                            <p class="text-[10px] font-black text-gray-400 uppercase tracking-widest">Lớp đang dạy</p>
                            <h3 class="text-2xl font-black text-gray-900">04 Lớp</h3>
                        </div>
                    </div>

                    <div class="bg-white p-6 rounded-[2rem] border border-gray-200 shadow-sm flex flex-col justify-between h-40 hover:shadow-md transition-shadow">
                        <div class="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                        </div>
                        <div>
                            <p class="text-[10px] font-black text-gray-400 uppercase tracking-widest">Tổng sinh viên</p>
                            <h3 class="text-2xl font-black text-gray-900">156 SV</h3>
                        </div>
                    </div>

                    <div class="bg-white p-6 rounded-[2rem] border border-gray-200 shadow-sm flex flex-col justify-between h-40 hover:shadow-md transition-shadow border-l-4">
                        <div class="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                        </div>
                        <div>
                            <p class="text-[10px] font-black text-gray-400 uppercase tracking-widest">Chờ nhập điểm</p>
                            <h3 class="text-2xl font-black text-gray-900">01 Lớp</h3>
                        </div>
                    </div>

                    <div class="bg-gray-900 p-6 rounded-[2rem] shadow-xl flex flex-col justify-between h-40">
                        <div class="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-white">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
                        </div>
                        <div>
                            <p class="text-[10px] font-black text-gray-400 uppercase tracking-widest">Thông báo mới</p>
                            <h3 class="text-2xl font-black text-white">03 Tin</h3>
                        </div>
                    </div>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    
                    <div class="lg:col-span-2 space-y-6">
                        <div class="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-200">
                            <div class="flex items-center justify-between mb-8">
                                <h3 class="font-black text-gray-900 uppercase text-sm tracking-widest flex items-center gap-2">
                                    <span class="w-2 h-2 bg-indigo-600 rounded-full"></span>
                                    Lịch giảng dạy hôm nay
                                </h3>
                                <router-link to="/lich-hoc-trong-tuan" class="text-xs font-bold text-indigo-600 hover:underline">Xem tất cả</router-link>
                            </div>

                            <div class="space-y-6">
                                <div v-for="(session, idx) in todaySessions" :key="idx" 
                                     class="flex items-center gap-6 p-4 rounded-3xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100 group">
                                    <div class="w-20 text-center flex-shrink-0">
                                        <p class="text-sm font-black text-gray-900">{{ session.time }}</p>
                                        <p class="text-[10px] font-bold text-gray-400 uppercase">Tiết {{ session.periods }}</p>
                                    </div>
                                    <div class="w-px h-10 bg-gray-100 hidden md:block"></div>
                                    <div class="flex-1">
                                        <h4 class="text-sm font-black text-gray-800 group-hover:text-indigo-600 transition-colors">{{ session.className }}</h4>
                                        <p class="text-xs text-gray-500 font-medium mt-1">{{ session.room }} • {{ session.students }} Sinh viên</p>
                                    </div>
                                    <div class="hidden sm:block">
                                        <span class="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-lg text-[10px] font-black uppercase">Lý thuyết</span>
                                    </div>
                                </div>

                                <div v-if="todaySessions.length === 0" class="py-10 text-center space-y-3">
                                    <div class="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto">
                                        <svg class="w-8 h-8 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                                    </div>
                                    <p class="text-sm font-bold text-gray-400 italic">Hôm nay bạn không có lịch giảng dạy.</p>
                                </div>
                            </div>
                        </div>

                        <div class="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-200">
                            <h3 class="font-black text-gray-900 uppercase text-sm tracking-widest mb-6">Thông báo từ khoa</h3>
                            <div class="space-y-4">
                                <div v-for="n in 2" :key="n" class="flex gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100">
                                    <div class="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm flex-shrink-0 text-indigo-600">
                                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"></path></svg>
                                    </div>
                                    <div>
                                        <h4 class="text-sm font-black text-gray-900">Họp hội đồng bộ môn học kỳ 2</h4>
                                        <p class="text-xs text-gray-500 mt-1 leading-relaxed line-clamp-2">Kính mời các giảng viên bộ môn tham dự buổi họp rà soát chương trình đào tạo vào lúc 09:00 sáng Thứ 6 tuần này...</p>
                                        <p class="text-[10px] font-bold text-indigo-600 mt-2 uppercase tracking-widest">Xem chi tiết →</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="space-y-8">
                        <div class="bg-gray-900 rounded-[2.5rem] p-8 text-white shadow-xl relative overflow-hidden">
                            <div class="relative z-10">
                                <h3 class="text-xs font-black uppercase tracking-[0.2em] opacity-60 mb-6">Việc cần làm</h3>
                                <div class="space-y-6">
                                    <div class="flex gap-4">
                                        <div class="w-1 h-10 bg-orange-400 rounded-full"></div>
                                        <div>
                                            <p class="text-xs font-black text-orange-400 uppercase">Hạn chót nhập điểm</p>
                                            <p class="text-sm font-bold mt-1">Lớp Lập trình Web - Nhóm 01</p>
                                            <p class="text-[10px] opacity-60 mt-1 italic">Còn 2 ngày</p>
                                        </div>
                                    </div>
                                    <div class="flex gap-4">
                                        <div class="w-1 h-10 bg-indigo-400 rounded-full"></div>
                                        <div>
                                            <p class="text-xs font-black text-indigo-400 uppercase">Coi thi học kỳ</p>
                                            <p class="text-sm font-bold mt-1">Phòng A.202 - Môn Cấu trúc dữ liệu</p>
                                            <p class="text-[10px] opacity-60 mt-1">Thứ 7, ngày 16/05</p>
                                        </div>
                                    </div>
                                </div>
                                <router-link to="/teacher/grades" class="mt-8 block w-full bg-white text-gray-900 text-center py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-gray-100 transition-colors">
                                    Đi tới Nhập Điểm
                                </router-link>
                            </div>
                            <div class="absolute -right-10 -bottom-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
                        </div>

                        <div class="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-200">
                            <h3 class="font-black text-gray-900 uppercase text-xs tracking-widest mb-6">Truy cập nhanh</h3>
                            <div class="grid grid-cols-2 gap-3">
                                <router-link v-for="link in quickLinks" :key="link.name" :to="link.path"
                                    class="p-4 rounded-3xl bg-gray-50 border border-gray-100 flex flex-col items-center justify-center text-center hover:bg-indigo-50 hover:border-indigo-100 transition-all group">
                                    <span class="w-10 h-10 flex items-center justify-center text-gray-400 group-hover:text-indigo-600 mb-2 transition-colors" v-html="link.icon"></span>
                                    <span class="text-[10px] font-black text-gray-600 group-hover:text-indigo-900 transition-colors uppercase tracking-tight">{{ link.name }}</span>
                                </router-link>
                            </div>
                        </div>
                    </div>

                </div>

            </main>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import Sidebar from '@/components/layout/Sidebar.vue';
import TopHeader from '@/components/layout/TopHeader.vue';
import { useAuthStore } from '@/store/authStore';

const authStore = useAuthStore();

const currentDate = computed(() => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date().toLocaleDateString('vi-VN', options);
});

const todaySessions = [
    { time: '07:30 - 10:00', periods: '1-3', className: 'Lập trình Web nâng cao - Nhóm 01', room: 'Phòng Lab 04', students: 45 },
    { time: '13:30 - 16:00', periods: '7-9', className: 'Thiết kế giao diện (UI/UX) - Nhóm 01', room: 'Phòng A.302', students: 38 },
];

const quickLinks = [
    { name: 'Lớp phân công', path: '/teacher/classes', icon: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>' },
    { name: 'Nhập điểm', path: '/teacher/grades', icon: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>' },
    { name: 'Điểm danh', path: '/teacher/attendance', icon: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path></svg>' },
    { name: 'Tin tức', path: '/tin-tuc', icon: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path></svg>' },
];
</script>

<style scoped>
.line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>