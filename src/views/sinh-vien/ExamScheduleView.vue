<template>
    <div class="h-screen bg-gray-50 font-sans text-gray-800 flex">
        
        <Sidebar />

        <div class="flex-1 flex flex-col min-w-0 h-full">
            <TopHeader />

            <main class="p-4 md:p-8 max-w-[1300px] mx-auto w-full h-full flex flex-col space-y-6">
                
                <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 flex-shrink-0">
                    <div>
                        <h1 class="text-2xl md:text-3xl font-black text-gray-900 uppercase tracking-tight">Lịch thi học kỳ</h1>
                        <p class="text-sm text-gray-500 font-medium mt-1">Học kỳ 2 | Năm học 2025 - 2026</p>
                    </div>
                    
                    <div class="flex items-center gap-2 bg-white p-1.5 rounded-2xl border border-gray-200 shadow-sm scale-95 origin-bottom-right">
                        <button class="px-4 py-2 text-xs font-black bg-gray-900 text-white rounded-xl shadow-md">Tất cả</button>
                        <button class="px-4 py-2 text-xs font-bold text-gray-500 hover:bg-gray-50 rounded-xl transition-all">Sắp thi</button>
                        <button class="px-4 py-2 text-xs font-bold text-gray-500 hover:bg-gray-50 rounded-xl transition-all">Đã xong</button>
                    </div>
                </div>

                <div class="flex-1 min-h-0 bg-white rounded-[2.5rem] shadow-sm border-2 border-gray-200 overflow-hidden flex flex-col">
                    <div class="overflow-auto h-full" style="max-height: 600px;">
                        <table class="w-full border-separate border-spacing-0">
                            <thead class="sticky top-0 z-20">
                                <tr class="bg-gray-50">
                                    <th class="p-5 border-b-2 border-r border-gray-200 text-left text-[10px] font-black text-gray-400 uppercase tracking-widest w-16 text-center">STT</th>
                                    <th class="p-5 border-b-2 border-r border-gray-200 text-left text-[10px] font-black text-gray-400 uppercase tracking-widest">Học phần</th>
                                    <th class="p-5 border-b-2 border-r border-gray-200 text-center text-[10px] font-black text-gray-400 uppercase tracking-widest w-32">Ngày thi</th>
                                    <th class="p-5 border-b-2 border-r border-gray-200 text-center text-[10px] font-black text-gray-400 uppercase tracking-widest w-24">Giờ thi</th>
                                    <th class="p-5 border-b-2 border-r border-gray-200 text-center text-[10px] font-black text-gray-400 uppercase tracking-widest w-28">Phòng/SBD</th>
                                    <th class="p-5 border-b-2 border-gray-200 text-center text-[10px] font-black text-gray-400 uppercase tracking-widest w-32">Trạng thái</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-100">
                                <tr v-for="(exam, index) in examList" :key="index" class="group hover:bg-gray-50/50 transition-colors">
                                    <td class="p-5 text-center border-r border-gray-100 font-black text-gray-300 text-sm italic">
                                        {{ index + 1 }}
                                    </td>
                                    <td class="p-5 border-r border-gray-100">
                                        <div class="flex flex-col">
                                            <span class="text-sm font-black text-gray-800 tracking-tight">{{ exam.subject }}</span>
                                            <span class="text-[10px] font-bold text-gray-400 mt-0.5 uppercase tracking-tighter">Mã HP: {{ exam.code }}</span>
                                        </div>
                                    </td>
                                    <td class="p-5 border-r border-gray-100 text-center">
                                        <span class="text-sm font-bold text-gray-700">{{ exam.date }}</span>
                                    </td>
                                    <td class="p-5 border-r border-gray-100 text-center">
                                        <div class="inline-flex items-center gap-1.5 bg-gray-100 px-2 py-1 rounded-lg">
                                            <svg class="w-3 h-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                            <span class="text-xs font-black text-gray-800">{{ exam.time }}</span>
                                        </div>
                                    </td>
                                    <td class="p-5 border-r border-gray-100 text-center">
                                        <div class="flex flex-col items-center">
                                            <span class="text-xs font-black text-gray-800">{{ exam.room }}</span>
                                            <span class="text-[10px] font-bold text-indigo-600 bg-indigo-50 px-1.5 rounded mt-1">SBD: {{ exam.sbd }}</span>
                                        </div>
                                    </td>
                                    <td class="p-5 text-center">
                                        <span :class="getStatusClass(exam.status)" class="text-[10px] font-black px-3 py-1.5 rounded-xl shadow-sm uppercase tracking-wider inline-block min-w-[90px]">
                                            {{ exam.status }}
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div class="flex flex-col md:flex-row items-center justify-between gap-4 flex-shrink-0 bg-gray-900 p-6 rounded-[2rem] text-white shadow-lg">
                    <div class="flex items-center gap-4">
                        <div class="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center border border-white/20">
                            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </div>
                        <div>
                            <p class="text-xs font-bold text-gray-400 uppercase tracking-widest">Lưu ý quan trọng</p>
                            <p class="text-sm font-medium text-gray-100">Vui lòng có mặt tại phòng thi trước <span class="font-black text-orange-400 underline decoration-2">15 phút</span> và mang theo CCCD/Thẻ sinh viên.</p>
                        </div>
                    </div>
                    <button class="bg-white text-gray-900 font-black px-6 py-3 rounded-xl text-sm hover:bg-gray-100 transition-all flex items-center gap-2 active:scale-95">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                        Xuất lịch thi (PDF)
                    </button>
                </div>

            </main>
        </div>
    </div>
</template>

<script setup>
import Sidebar from '@/components/layout/Sidebar.vue';
import TopHeader from '@/components/layout/TopHeader.vue';

const examList = [
    { subject: 'Lập trình ứng dụng Web', code: 'INT1304', date: '15/06/2026', time: '07:30', room: 'B.502', sbd: '045', status: 'Sắp diễn ra' },
    { subject: 'An toàn bảo mật thông tin', code: 'INT1312', date: '18/06/2026', time: '13:30', room: 'A.201', sbd: '012', status: 'Sắp diễn ra' },
    { subject: 'Kiến trúc phần mềm', code: 'INT1405', date: '21/06/2026', time: '09:45', room: 'C.104', sbd: '089', status: 'Chờ duyệt' },
    { subject: 'Anh văn chuyên ngành 2', code: 'ENG2202', date: '10/05/2026', time: '15:15', room: 'D.302', sbd: '156', status: 'Đã hoàn thành' },
    { subject: 'Quản lý dự án phần mềm', code: 'INT1320', date: '05/05/2026', time: '07:30', room: 'B.402', sbd: '033', status: 'Đã hoàn thành' },
];

const getStatusClass = (status) => {
    switch (status) {
        case 'Sắp diễn ra': return 'bg-orange-100 text-orange-600 border border-orange-200';
        case 'Đã hoàn thành': return 'bg-emerald-100 text-emerald-600 border border-emerald-200';
        case 'Chờ duyệt': return 'bg-gray-100 text-gray-500 border border-gray-200';
        default: return 'bg-gray-800 text-white';
    }
};
</script>

<style scoped>
/* Tối ưu thanh cuộn */
.overflow-auto::-webkit-scrollbar {
    width: 6px;
}
.overflow-auto::-webkit-scrollbar-track {
    background: transparent;
}
.overflow-auto::-webkit-scrollbar-thumb {
    background: #e5e7eb;
    border-radius: 10px;
}
.overflow-auto::-webkit-scrollbar-thumb:hover {
    background: #d1d5db;
}

/* Đảm bảo bảng không bị vỡ bố cục khi dùng sticky header */
table {
    border-collapse: separate;
}

/* Hiệu ứng hover mượt mà cho dòng */
tbody tr {
    transition: all 0.2s ease;
}
</style>