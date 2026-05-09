<template>
    <div class="min-h-screen bg-gray-50 font-sans text-gray-800 flex items-start">
        
        <Sidebar />

        <div class="flex-1 flex flex-col min-w-0">
            <TopHeader />

            <main class="p-6 md:p-10 max-w-[1400px] mx-auto w-full space-y-8">
                
                <div class="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div>
                        <h1 class="text-2xl md:text-3xl font-black text-gray-900 uppercase tracking-tight">Nhập điểm sinh viên</h1>
                        <p class="text-gray-500 mt-1">Quản lý và cập nhật điểm số cho các lớp học phần được phân công.</p>
                    </div>
                    <div class="flex items-center gap-3">
                        <button class="flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 text-gray-700 font-bold rounded-2xl hover:bg-gray-50 transition-all shadow-sm active:scale-95 text-sm">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                            Nhập từ Excel
                        </button>
                        <button @click="handleSave" class="flex items-center gap-2 px-8 py-3 bg-gray-900 text-white font-black rounded-2xl hover:bg-black transition-all shadow-lg active:scale-95 text-sm">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-1.5-1.5M12 14l3-3"></path></svg>
                            Lưu bảng điểm
                        </button>
                    </div>
                </div>

                <div class="bg-white p-6 rounded-[2.5rem] shadow-sm border border-gray-200 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div class="space-y-2">
                        <label class="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Lớp học phần</label>
                        <select class="w-full bg-gray-50 border border-gray-100 rounded-2xl px-4 py-3 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all cursor-pointer">
                            <option>Lập trình Web nâng cao - Nhóm 01</option>
                            <option>Lập trình Web nâng cao - Nhóm 02</option>
                            <option>Cơ sở dữ liệu - Nhóm 05</option>
                        </select>
                    </div>
                    <div class="space-y-2">
                        <label class="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Học kỳ</label>
                        <select class="w-full bg-gray-50 border border-gray-100 rounded-2xl px-4 py-3 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all cursor-pointer">
                            <option>Học kỳ 2 (2025 - 2026)</option>
                            <option>Học kỳ 1 (2025 - 2026)</option>
                        </select>
                    </div>
                    <div class="space-y-2">
                        <label class="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Trạng thái nhập</label>
                        <div class="flex items-center h-[46px] px-4 bg-emerald-50 text-emerald-700 rounded-2xl border border-emerald-100">
                            <span class="text-xs font-bold flex items-center gap-2">
                                <span class="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                                Hệ thống đang mở khóa nhập điểm
                            </span>
                        </div>
                    </div>
                </div>

                <div class="bg-white rounded-[2.5rem] shadow-sm border border-gray-200 overflow-hidden">
                    <div class="overflow-x-auto">
                        <table class="w-full border-collapse">
                            <thead>
                                <tr class="bg-gray-50 border-b border-gray-100">
                                    <th class="p-6 text-center text-[10px] font-black text-gray-400 uppercase tracking-widest w-20">STT</th>
                                    <th class="p-6 text-left text-[10px] font-black text-gray-400 uppercase tracking-widest">Thông tin sinh viên</th>
                                    <th class="p-6 text-center text-[10px] font-black text-gray-400 uppercase tracking-widest w-32">Chuyên cần (10%)</th>
                                    <th class="p-6 text-center text-[10px] font-black text-gray-400 uppercase tracking-widest w-32">Giữa kỳ (30%)</th>
                                    <th class="p-6 text-center text-[10px] font-black text-gray-400 uppercase tracking-widest w-32">Cuối kỳ (60%)</th>
                                    <th class="p-6 text-center text-[10px] font-black text-gray-400 uppercase tracking-widest w-32">Tổng kết</th>
                                    <th class="p-6 text-center text-[10px] font-black text-gray-400 uppercase tracking-widest w-32">Ghi chú</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-50">
                                <tr v-for="(student, index) in students" :key="student.id" class="hover:bg-gray-50/50 transition-colors group">
                                    <td class="p-6 text-center text-sm font-bold text-gray-400 italic">{{ index + 1 }}</td>
                                    <td class="p-6">
                                        <div class="flex items-center gap-4">
                                            <div class="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center font-black text-gray-500 text-xs">
                                                {{ student.name.split(' ').pop().charAt(0) }}
                                            </div>
                                            <div>
                                                <p class="text-sm font-black text-gray-900 tracking-tight">{{ student.name }}</p>
                                                <p class="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">MSSV: {{ student.id }}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="p-4">
                                        <input type="number" v-model="student.attendance" step="0.1" min="0" max="10"
                                               class="w-full bg-gray-50 border border-transparent focus:border-gray-900 focus:bg-white rounded-xl px-3 py-2 text-center text-sm font-black transition-all outline-none" />
                                    </td>
                                    <td class="p-4">
                                        <input type="number" v-model="student.midterm" step="0.1" min="0" max="10"
                                               class="w-full bg-gray-50 border border-transparent focus:border-gray-900 focus:bg-white rounded-xl px-3 py-2 text-center text-sm font-black transition-all outline-none" />
                                    </td>
                                    <td class="p-4">
                                        <input type="number" v-model="student.final" step="0.1" min="0" max="10"
                                               class="w-full bg-gray-50 border border-transparent focus:border-gray-900 focus:bg-white rounded-xl px-3 py-2 text-center text-sm font-black transition-all outline-none" />
                                    </td>
                                    <td class="p-6 text-center">
                                        <span class="text-sm font-black text-indigo-600">
                                            {{ calculateTotal(student) }}
                                        </span>
                                    </td>
                                    <td class="p-4">
                                        <input type="text" v-model="student.note" placeholder="..."
                                               class="w-full bg-transparent border-b border-transparent focus:border-gray-200 px-2 py-1 text-xs font-medium outline-none text-gray-500 italic" />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    
                    <div class="p-8 bg-gray-50/50 border-t border-gray-100 flex justify-between items-center">
                        <p class="text-xs font-bold text-gray-400 uppercase tracking-widest">Hiển thị {{ students.length }} sinh viên trong danh sách</p>
                        <div class="flex gap-2">
                            <button class="p-2 border border-gray-200 rounded-xl hover:bg-white transition-all"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg></button>
                            <button class="px-4 py-2 bg-white border border-gray-900 text-gray-900 text-xs font-black rounded-xl shadow-sm">1</button>
                            <button class="p-2 border border-gray-200 rounded-xl hover:bg-white transition-all"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></button>
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

const students = ref([
    { id: '22010101', name: 'Nguyễn Đăng Khoa', attendance: 10, midterm: 8.5, final: 9, note: '' },
    { id: '22010102', name: 'Trần Thị Mỹ Linh', attendance: 9.5, midterm: 7.0, final: 8, note: '' },
    { id: '22010103', name: 'Lê Hoàng Nam', attendance: 8, midterm: 6.5, final: 7.5, note: '' },
    { id: '22010104', name: 'Phạm Minh Tuấn', attendance: 10, midterm: 9.0, final: 8.5, note: '' },
    { id: '22010105', name: 'Hoàng Thanh Trúc', attendance: 7, midterm: 5.0, final: 6, note: 'Vắng 2 buổi' },
]);

const calculateTotal = (student) => {
    const total = (student.attendance * 0.1) + (student.midterm * 0.3) + (student.final * 0.6);
    return total.toFixed(1);
};

const handleSave = () => {
    alert('Dữ liệu điểm đã được lưu tạm thời vào hệ thống!');
};
</script>

<style scoped>
/* Ẩn mũi tên tăng giảm của input number để giao diện sạch hơn */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
input[type=number] {
    -moz-appearance: textfield;
}

.scrollbar-hide::-webkit-scrollbar {
    display: none;
}
</style>