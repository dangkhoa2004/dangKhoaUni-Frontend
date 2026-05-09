<template>
    <div class="min-h-screen bg-gray-50 font-sans text-gray-800 flex items-start">
        
        <Sidebar />

        <div class="flex-1 flex flex-col min-w-0">
            <TopHeader />

            <main class="p-6 md:p-10 max-w-[1400px] mx-auto w-full space-y-8">
                
                <div class="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div>
                        <h1 class="text-2xl md:text-3xl font-black text-gray-900 uppercase tracking-tight">Thiết lập dữ liệu nền</h1>
                        <p class="text-gray-500 mt-1">Quản lý danh mục học kỳ, khoa, ngành và các cấu hình hệ thống quan trọng.</p>
                    </div>
                    <div class="flex items-center gap-3">
                        <button class="flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 text-gray-700 font-bold rounded-2xl hover:bg-gray-50 transition-all shadow-sm active:scale-95 text-sm">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
                            Đồng bộ dữ liệu
                        </button>
                        <button class="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white font-black rounded-2xl hover:bg-black transition-all shadow-lg active:scale-95 text-sm">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                            Thêm cấu hình mới
                        </button>
                    </div>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    
                    <div class="lg:col-span-2 space-y-8">
                        
                        <div class="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-200">
                            <h3 class="font-black text-gray-900 uppercase text-xs tracking-widest mb-6 flex items-center gap-2">
                                <span class="w-2 h-2 bg-indigo-600 rounded-full"></span>
                                Danh mục Học kỳ
                            </h3>
                            
                            <div class="overflow-x-auto">
                                <table class="w-full border-collapse">
                                    <thead>
                                        <tr class="text-[10px] font-black text-gray-400 uppercase tracking-widest border-b border-gray-100">
                                            <th class="py-4 text-left">Tên Học kỳ</th>
                                            <th class="py-4 text-center">Năm học</th>
                                            <th class="py-4 text-center">Trạng thái</th>
                                            <th class="py-4 text-right">Thao tác</th>
                                        </tr>
                                    </thead>
                                    <tbody class="divide-y divide-gray-50">
                                        <tr v-for="sem in semesters" :key="sem.id" class="group">
                                            <td class="py-4 font-bold text-sm text-gray-800">{{ sem.name }}</td>
                                            <td class="py-4 text-center text-sm text-gray-500 font-medium">{{ sem.year }}</td>
                                            <td class="py-4 text-center">
                                                <span :class="sem.isActive ? 'bg-emerald-50 text-emerald-600' : 'bg-gray-100 text-gray-400'" 
                                                      class="px-3 py-1 rounded-lg text-[10px] font-black uppercase">
                                                    {{ sem.isActive ? 'Đang mở' : 'Đã đóng' }}
                                                </span>
                                            </td>
                                            <td class="py-4 text-right">
                                                <button class="p-2 text-gray-400 hover:text-indigo-600 transition-colors"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg></button>
                                                <button class="p-2 text-gray-400 hover:text-rose-600 transition-colors"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg></button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div class="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-200">
                            <h3 class="font-black text-gray-900 uppercase text-xs tracking-widest mb-6 flex items-center gap-2">
                                <span class="w-2 h-2 bg-emerald-600 rounded-full"></span>
                                Danh mục Khoa & Ngành Đào tạo
                            </h3>
                            
                            <div class="space-y-4">
                                <div v-for="dept in departments" :key="dept.id" 
                                     class="border border-gray-100 rounded-3xl overflow-hidden group hover:border-indigo-100 transition-all">
                                    <div class="bg-gray-50/50 p-5 flex items-center justify-between">
                                        <div class="flex items-center gap-4">
                                            <div class="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-gray-400 group-hover:text-indigo-600 shadow-sm transition-colors">
                                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                                            </div>
                                            <div>
                                                <p class="text-sm font-black text-gray-900">{{ dept.name }}</p>
                                                <p class="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{{ dept.majors.length }} Ngành đào tạo</p>
                                            </div>
                                        </div>
                                        <button class="p-2 bg-white rounded-xl border border-gray-100 text-gray-400 hover:text-gray-900 shadow-sm transition-all"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg></button>
                                    </div>
                                    <div class="p-4 grid grid-cols-1 md:grid-cols-2 gap-3 bg-white">
                                        <div v-for="major in dept.majors" :key="major" 
                                             class="flex items-center justify-between p-3 rounded-2xl bg-gray-50/30 border border-transparent hover:border-gray-100 transition-all">
                                            <span class="text-xs font-bold text-gray-600">{{ major }}</span>
                                            <div class="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <button class="p-1.5 hover:text-indigo-600"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg></button>
                                                <button class="p-1.5 hover:text-rose-600"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="space-y-8">
                        
                        <div class="bg-gray-900 p-8 rounded-[2.5rem] text-white shadow-xl relative overflow-hidden">
                            <h3 class="text-xs font-black uppercase tracking-[0.2em] opacity-60 mb-8">Trạng thái Cổng thông tin</h3>
                            
                            <div class="space-y-6 relative z-10">
                                <div class="flex items-center justify-between p-4 rounded-3xl bg-white/5 border border-white/10">
                                    <div>
                                        <p class="text-xs font-black uppercase text-indigo-400">Đăng ký học</p>
                                        <p class="text-[10px] text-gray-400 mt-1 font-medium">Học kỳ 2 (2025-2026)</p>
                                    </div>
                                    <div class="relative inline-flex items-center cursor-pointer">
                                        <input type="checkbox" checked class="sr-only peer">
                                        <div class="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                                    </div>
                                </div>

                                <div class="flex items-center justify-between p-4 rounded-3xl bg-white/5 border border-white/10">
                                    <div>
                                        <p class="text-xs font-black uppercase text-emerald-400">Nhập điểm GV</p>
                                        <p class="text-[10px] text-gray-400 mt-1 font-medium">Học kỳ 1 (2025-2026)</p>
                                    </div>
                                    <div class="relative inline-flex items-center cursor-pointer">
                                        <input type="checkbox" class="sr-only peer">
                                        <div class="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-500"></div>
                                    </div>
                                </div>

                                <div class="flex items-center justify-between p-4 rounded-3xl bg-white/5 border border-white/10">
                                    <div>
                                        <p class="text-xs font-black uppercase text-rose-400">Bảo trì hệ thống</p>
                                        <p class="text-[10px] text-gray-400 mt-1 font-medium">Dừng toàn bộ truy cập</p>
                                    </div>
                                    <div class="relative inline-flex items-center cursor-pointer">
                                        <input type="checkbox" class="sr-only peer">
                                        <div class="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-rose-500"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="absolute -right-10 -bottom-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
                        </div>

                        <div class="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-200">
                            <h3 class="font-black text-gray-900 uppercase text-xs tracking-widest mb-6">Backup & Bảo mật</h3>
                            <div class="space-y-4">
                                <button class="w-full py-4 px-6 rounded-2xl bg-gray-50 border border-gray-100 flex items-center gap-4 hover:bg-gray-100 transition-all text-left">
                                    <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path></svg>
                                    <div>
                                        <p class="text-xs font-black text-gray-900">Sao lưu cơ sở dữ liệu</p>
                                        <p class="text-[9px] text-gray-400 font-bold uppercase">Lần cuối: 2 giờ trước</p>
                                    </div>
                                </button>
                                <button class="w-full py-4 px-6 rounded-2xl bg-gray-50 border border-gray-100 flex items-center gap-4 hover:bg-gray-100 transition-all text-left">
                                    <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                                    <div>
                                        <p class="text-xs font-black text-gray-900">Quản lý phiên đăng nhập</p>
                                        <p class="text-[9px] text-gray-400 font-bold uppercase">1,240 Phiên đang chạy</p>
                                    </div>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>

            </main>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Sidebar from '@/components/layout/Sidebar.vue';
import TopHeader from '@/components/layout/TopHeader.vue';

const semesters = ref([
    { id: 1, name: 'Học kỳ 2', year: '2025 - 2026', isActive: true },
    { id: 2, name: 'Học kỳ 1', year: '2025 - 2026', isActive: false },
    { id: 3, name: 'Học kỳ 2', year: '2024 - 2025', isActive: false },
    { id: 4, name: 'Học kỳ 1', year: '2024 - 2025', isActive: false },
]);

const departments = ref([
    { 
        id: 1, 
        name: 'Khoa Công nghệ thông tin', 
        majors: ['Kỹ thuật phần mềm', 'An toàn thông tin', 'Trí tuệ nhân tạo', 'Hệ thống thông tin'] 
    },
    { 
        id: 2, 
        name: 'Khoa Kinh tế & Quản trị', 
        majors: ['Quản trị kinh doanh', 'Kế toán', 'Tài chính ngân hàng', 'Logistics'] 
    },
    { 
        id: 3, 
        name: 'Khoa Ngoại ngữ', 
        majors: ['Ngôn ngữ Anh', 'Ngôn ngữ Nhật', 'Ngôn ngữ Trung Quốc'] 
    }
]);
</script>

<style scoped>
/* Tùy chỉnh thanh cuộn bảng */
.overflow-x-auto::-webkit-scrollbar {
    height: 4px;
}
.overflow-x-auto::-webkit-scrollbar-track {
    background: transparent;
}
.overflow-x-auto::-webkit-scrollbar-thumb {
    background: #e5e7eb;
    border-radius: 10px;
}
</style>