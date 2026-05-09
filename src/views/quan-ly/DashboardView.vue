<template>
    <div class="min-h-screen bg-gray-50 font-sans text-gray-800 flex items-start">
        
        <Sidebar />

        <div class="flex-1 flex flex-col min-w-0">
            <TopHeader />

            <main class="p-6 md:p-10 max-w-[1400px] mx-auto w-full space-y-8">
                
                <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h1 class="text-2xl md:text-4xl font-black text-gray-900 tracking-tight uppercase">
                            Hệ thống quản trị
                        </h1>
                        <p class="text-gray-500 mt-2 font-medium">
                            Chào mừng trở lại, <span class="text-gray-900 font-bold">Quản trị viên</span>. Mọi hệ thống đang hoạt động ổn định.
                        </p>
                    </div>
                    <div class="flex gap-3">
                        <button class="bg-white border border-gray-200 text-gray-700 font-bold py-2.5 px-5 rounded-xl shadow-sm hover:bg-gray-50 transition-all text-xs flex items-center gap-2">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                            Báo cáo hệ thống
                        </button>
                        <button class="bg-gray-900 text-white font-black py-2.5 px-5 rounded-xl shadow-lg hover:bg-black transition-all text-xs flex items-center gap-2">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
                            Thêm người dùng
                        </button>
                    </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div class="bg-white p-6 rounded-[2.5rem] border border-gray-200 shadow-sm flex flex-col justify-between h-44 hover:shadow-md transition-shadow">
                        <div class="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                        </div>
                        <div>
                            <p class="text-[10px] font-black text-gray-400 uppercase tracking-widest">Tổng sinh viên</p>
                            <h3 class="text-2xl font-black text-gray-900">12,450</h3>
                            <p class="text-[10px] text-emerald-500 font-bold mt-1">+120 tháng này</p>
                        </div>
                    </div>

                    <div class="bg-white p-6 rounded-[2.5rem] border border-gray-200 shadow-sm flex flex-col justify-between h-44 hover:shadow-md transition-shadow">
                        <div class="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                        </div>
                        <div>
                            <p class="text-[10px] font-black text-gray-400 uppercase tracking-widest">Giảng viên</p>
                            <h3 class="text-2xl font-black text-gray-900">840</h3>
                            <p class="text-[10px] text-gray-400 font-bold mt-1">Đang hoạt động</p>
                        </div>
                    </div>

                    <div class="bg-white p-6 rounded-[2.5rem] border border-gray-200 shadow-sm flex flex-col justify-between h-44 hover:shadow-md transition-shadow">
                        <div class="w-12 h-12 bg-rose-50 rounded-2xl flex items-center justify-center text-rose-600">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                        </div>
                        <div>
                            <p class="text-[10px] font-black text-gray-400 uppercase tracking-widest">Yêu cầu hỗ trợ</p>
                            <h3 class="text-2xl font-black text-gray-900">12</h3>
                            <p class="text-[10px] text-rose-500 font-bold mt-1">Cần xử lý ngay</p>
                        </div>
                    </div>

                    <div class="bg-gray-900 p-6 rounded-[2.5rem] shadow-xl flex flex-col justify-between h-44 relative overflow-hidden">
                        <div class="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-white relative z-10">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                        </div>
                        <div class="relative z-10">
                            <p class="text-[10px] font-black text-gray-400 uppercase tracking-widest">Server Status</p>
                            <h3 class="text-2xl font-black text-white">99.9%</h3>
                            <p class="text-[10px] text-emerald-400 font-bold mt-1">Uptime ổn định</p>
                        </div>
                        <div class="absolute -right-6 -bottom-6 w-24 h-24 bg-white/5 rounded-full blur-2xl"></div>
                    </div>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    
                    <div class="lg:col-span-2 space-y-6">
                        <div class="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-200">
                            <div class="flex items-center justify-between mb-8">
                                <h3 class="font-black text-gray-900 uppercase text-xs tracking-widest flex items-center gap-2">
                                    <span class="w-2 h-2 bg-gray-900 rounded-full"></span>
                                    Nhật ký hoạt động
                                </h3>
                                <button class="text-[10px] font-black text-gray-400 uppercase hover:text-gray-900 transition-colors">Tải xuống Log</button>
                            </div>

                            <div class="space-y-6">
                                <div v-for="(log, idx) in activityLogs" :key="idx" class="flex items-start gap-4 group">
                                    <div :class="log.color" class="w-2 h-2 rounded-full mt-1.5 flex-shrink-0"></div>
                                    <div class="flex-1 border-b border-gray-50 pb-4 group-last:border-0">
                                        <div class="flex justify-between items-start">
                                            <p class="text-sm font-bold text-gray-800 tracking-tight">
                                                <span class="font-black underline">{{ log.user }}</span> {{ log.action }}
                                            </p>
                                            <span class="text-[10px] font-bold text-gray-400 uppercase">{{ log.time }}</span>
                                        </div>
                                        <p class="text-xs text-gray-500 mt-1 font-medium">{{ log.target }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-200">
                            <h3 class="font-black text-gray-900 uppercase text-xs tracking-widest mb-6">Thiết lập dữ liệu nền</h3>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div class="p-5 rounded-[1.5rem] bg-gray-50 border border-gray-100 flex items-center justify-between hover:bg-gray-100 transition-colors cursor-pointer group">
                                    <div class="flex items-center gap-4">
                                        <div class="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-gray-400 group-hover:text-gray-900 shadow-sm transition-colors">
                                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                        </div>
                                        <div>
                                            <p class="text-xs font-black text-gray-900">Quản lý Học kỳ</p>
                                            <p class="text-[10px] text-gray-400 font-bold uppercase mt-0.5">Mở khóa đăng ký học</p>
                                        </div>
                                    </div>
                                    <svg class="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                                </div>

                                <div class="p-5 rounded-[1.5rem] bg-gray-50 border border-gray-100 flex items-center justify-between hover:bg-gray-100 transition-colors cursor-pointer group">
                                    <div class="flex items-center gap-4">
                                        <div class="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-gray-400 group-hover:text-gray-900 shadow-sm transition-colors">
                                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                                        </div>
                                        <div>
                                            <p class="text-xs font-black text-gray-900">Quản lý Khoa/Ngành</p>
                                            <p class="text-[10px] text-gray-400 font-bold uppercase mt-0.5">Cập nhật danh mục</p>
                                        </div>
                                    </div>
                                    <svg class="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="space-y-8">
                        <div class="bg-gray-900 rounded-[2.5rem] p-8 text-white shadow-xl">
                            <h3 class="text-xs font-black uppercase tracking-[0.2em] opacity-60 mb-6">Mới tham gia</h3>
                            <div class="space-y-6">
                                <div v-for="u in 3" :key="u" class="flex items-center gap-4">
                                    <div class="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center font-black text-[10px]">SV</div>
                                    <div class="flex-1">
                                        <p class="text-xs font-bold text-white">Lê Văn Tám</p>
                                        <p class="text-[10px] text-gray-400 font-medium">Khoa CNTT - 2 phút trước</p>
                                    </div>
                                    <button class="p-1.5 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                                        <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                                    </button>
                                </div>
                            </div>
                            <router-link to="/admin/users" class="mt-8 block w-full bg-white text-gray-900 text-center py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-gray-100 transition-colors">
                                Quản lý tất cả
                            </router-link>
                        </div>

                        <div class="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-200">
                            <h3 class="font-black text-gray-900 uppercase text-xs tracking-widest mb-6">Database Health</h3>
                            <div class="space-y-6">
                                <div>
                                    <div class="flex justify-between text-[10px] font-black uppercase mb-2">
                                        <span class="text-gray-400">Storage</span>
                                        <span class="text-gray-900">45.2 GB / 100 GB</span>
                                    </div>
                                    <div class="w-full h-1.5 bg-gray-100 rounded-full">
                                        <div class="w-[45%] h-full bg-indigo-600 rounded-full"></div>
                                    </div>
                                </div>
                                <div>
                                    <div class="flex justify-between text-[10px] font-black uppercase mb-2">
                                        <span class="text-gray-400">Active Sessions</span>
                                        <span class="text-gray-900">1,240</span>
                                    </div>
                                    <div class="w-full h-1.5 bg-gray-100 rounded-full">
                                        <div class="w-[65%] h-full bg-emerald-500 rounded-full"></div>
                                    </div>
                                </div>
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

const activityLogs = [
    { 
        user: 'Admin_Khoa', 
        action: 'đã cập nhật', 
        target: 'Thời khóa biểu Học kỳ 2 - 2025', 
        time: '15:20', 
        color: 'bg-indigo-500' 
    },
    { 
        user: 'GV_Minh_Tu', 
        action: 'đã khóa', 
        target: 'Bảng điểm lớp 22DTHA1', 
        time: '14:45', 
        color: 'bg-emerald-500' 
    },
    { 
        user: 'System', 
        action: 'phát hiện', 
        target: 'Yêu cầu đăng nhập bất thường (IP: 192.x.x)', 
        time: '12:10', 
        color: 'bg-rose-500' 
    },
    { 
        user: 'Admin_Khoa', 
        action: 'đã cấp quyền', 
        target: 'Giảng viên mới: Nguyễn Văn A', 
        time: '10:00', 
        color: 'bg-amber-500' 
    },
];
</script>

<style scoped>
/* Hiệu ứng hover cho nhật ký */
.group:hover .font-black {
    color: #4f46e5;
}
</style>