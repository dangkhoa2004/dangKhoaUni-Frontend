<template>
    <div class="min-h-screen bg-gray-50 font-sans text-gray-800 flex items-start">
        
        <Sidebar />

        <div class="flex-1 flex flex-col min-w-0">
            <TopHeader />

            <main class="p-6 md:p-10 max-w-[1400px] mx-auto w-full space-y-8">
                
                <div class="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div>
                        <h1 class="text-2xl md:text-3xl font-black text-gray-900 uppercase tracking-tight">Lớp học phân công</h1>
                        <p class="text-gray-500 mt-1">Danh sách các lớp học phần bạn đang phụ trách giảng dạy trong học kỳ này.</p>
                    </div>
                    
                    <div class="flex gap-4">
                        <div class="bg-white px-6 py-4 rounded-[1.5rem] border border-gray-200 shadow-sm flex flex-col items-center min-w-[120px]">
                            <span class="text-[10px] font-black text-gray-400 uppercase tracking-widest">Tổng số lớp</span>
                            <span class="text-2xl font-black text-gray-900">04</span>
                        </div>
                        <div class="bg-gray-900 px-6 py-4 rounded-[1.5rem] border border-gray-800 shadow-lg flex flex-col items-center min-w-[120px]">
                            <span class="text-[10px] font-black text-gray-400 uppercase tracking-widest">Tổng sinh viên</span>
                            <span class="text-2xl font-black text-white">156</span>
                        </div>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div v-for="(classItem, index) in assignedClasses" :key="index" 
                         class="bg-white rounded-[2.5rem] p-8 border border-gray-200 shadow-sm hover:shadow-xl transition-all group relative overflow-hidden">
                        
                        <div class="absolute top-0 right-0 w-32 h-32 bg-gray-50 rounded-bl-[5rem] -mr-16 -mt-16 group-hover:bg-indigo-50 transition-colors"></div>

                        <div class="relative z-10">
                            <div class="flex justify-between items-start mb-6">
                                <div :class="getStatusClass(classItem.status)" class="px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider">
                                    {{ classItem.status }}
                                </div>
                                <span class="text-[10px] font-black text-gray-400 uppercase tracking-widest">Mã lớp: {{ classItem.code }}</span>
                            </div>

                            <h3 class="text-xl font-black text-gray-900 leading-tight mb-2 group-hover:text-indigo-600 transition-colors">
                                {{ classItem.name }}
                            </h3>
                            <p class="text-sm font-bold text-gray-400 mb-6 uppercase tracking-tighter">{{ classItem.subjectCode }} • {{ classItem.credits }} Tín chỉ</p>

                            <div class="grid grid-cols-2 gap-6 pt-6 border-t border-gray-50">
                                <div class="space-y-3">
                                    <div class="flex items-center gap-3 text-gray-500">
                                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                        <span class="text-xs font-bold">{{ classItem.schedule }}</span>
                                    </div>
                                    <div class="flex items-center gap-3 text-gray-500">
                                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                        <span class="text-xs font-bold">{{ classItem.room }}</span>
                                    </div>
                                </div>
                                <div class="space-y-3">
                                    <div class="flex items-center gap-3 text-gray-500">
                                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                                        <span class="text-xs font-bold">{{ classItem.students }} Sinh viên</span>
                                    </div>
                                    <div class="flex items-center gap-3 text-gray-500">
                                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                        <span class="text-xs font-bold">Hệ: Chính quy</span>
                                    </div>
                                </div>
                            </div>

                            <div class="mt-8 flex gap-3">
                                <router-link :to="'/teacher/grades?class=' + classItem.code" 
                                   class="flex-1 bg-gray-900 text-white text-center py-3 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-black transition-all active:scale-95 shadow-md">
                                    Quản lý điểm
                                </router-link>
                                <button class="px-4 py-3 bg-gray-50 text-gray-400 rounded-xl hover:bg-gray-100 hover:text-gray-900 transition-all active:scale-95 border border-gray-100">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="bg-indigo-600 rounded-[2.5rem] p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl shadow-indigo-200">
                    <div class="flex items-center gap-6">
                        <div class="w-16 h-16 bg-white/20 rounded-3xl flex items-center justify-center backdrop-blur-md border border-white/30">
                            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"></path></svg>
                        </div>
                        <div>
                            <p class="text-sm font-black uppercase tracking-widest opacity-80">Thông báo giảng dạy</p>
                            <p class="text-lg font-bold">Hạn chót nhập điểm giữa kỳ cho các lớp đồ án là ngày <span class="underline decoration-2 underline-offset-4">25/05/2026</span>.</p>
                        </div>
                    </div>
                    <button class="bg-white text-indigo-600 font-black px-10 py-4 rounded-2xl hover:bg-indigo-50 transition-all active:scale-95 whitespace-nowrap">Xem lịch đào tạo</button>
                </div>

            </main>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Sidebar from '@/components/layout/Sidebar.vue';
import TopHeader from '@/components/layout/TopHeader.vue';

const assignedClasses = ref([
    { 
        name: 'Lập trình Web nâng cao', 
        code: '22DTHA1-W01', 
        subjectCode: 'INT1304', 
        credits: 3, 
        schedule: 'Thứ 2 (Tiết 1-3)', 
        room: 'Phòng Lab 04', 
        students: 45, 
        status: 'Đang giảng dạy' 
    },
    { 
        name: 'Thiết kế giao diện (UI/UX)', 
        code: '22DTHA2-U01', 
        subjectCode: 'INT1315', 
        credits: 2, 
        schedule: 'Thứ 4 (Tiết 4-6)', 
        room: 'Phòng A.302', 
        students: 38, 
        status: 'Đang giảng dạy' 
    },
    { 
        name: 'Cấu trúc dữ liệu và Giải thuật', 
        code: '23DTHA1-D05', 
        subjectCode: 'INT1202', 
        credits: 3, 
        schedule: 'Thứ 6 (Tiết 1-3)', 
        room: 'Phòng Lab 02', 
        students: 42, 
        status: 'Sắp bắt đầu' 
    },
    { 
        name: 'Phát triển ứng dụng Vue.js', 
        code: '22DTHA1-V02', 
        subjectCode: 'INT1410', 
        credits: 3, 
        schedule: 'Thứ 7 (Tiết 7-9)', 
        room: 'Online Zoom', 
        students: 31, 
        status: 'Kết thúc' 
    },
]);

const getStatusClass = (status) => {
    switch (status) {
        case 'Đang giảng dạy': return 'bg-emerald-100 text-emerald-700';
        case 'Sắp bắt đầu': return 'bg-amber-100 text-amber-700';
        case 'Kết thúc': return 'bg-gray-100 text-gray-500';
        default: return 'bg-gray-100 text-gray-500';
    }
};
</script>

<style scoped>
/* Hiệu ứng hover mượt mà cho card */
.group:hover {
    transform: translateY(-5px);
}

.scrollbar-hide::-webkit-scrollbar {
    display: none;
}
</style>