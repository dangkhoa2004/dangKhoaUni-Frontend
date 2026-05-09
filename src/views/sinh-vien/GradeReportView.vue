<template>
    <div class="h-screen bg-gray-50 font-sans text-gray-800 flex">
        
        <Sidebar />

        <div class="flex-1 flex flex-col min-w-0 h-full">
            <TopHeader />

            <main class="p-4 md:p-8 max-w-[1300px] mx-auto w-full h-full flex flex-col space-y-6">
                
                <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 flex-shrink-0">
                    <div>
                        <h1 class="text-2xl md:text-3xl font-black text-gray-900 uppercase tracking-tight">Kết quả học tập</h1>
                        <p class="text-sm text-gray-500 font-medium">Tra cứu điểm chi tiết và tiến độ học tập.</p>
                    </div>
                    
                    <div class="flex items-center gap-3 bg-white p-1.5 rounded-2xl border border-gray-200 shadow-sm">
                        <select class="bg-transparent text-xs font-black text-gray-700 px-4 py-2 outline-none cursor-pointer">
                            <option>Năm học 2025 - 2026</option>
                            <option>Năm học 2024 - 2025</option>
                        </select>
                        <div class="w-px h-6 bg-gray-200"></div>
                        <select class="bg-transparent text-xs font-black text-gray-700 px-4 py-2 outline-none cursor-pointer">
                            <option>Học kỳ 2</option>
                            <option>Học kỳ 1</option>
                        </select>
                    </div>
                </div>

                <div class="grid grid-cols-2 md:grid-cols-4 gap-4 flex-shrink-0">
                    <div class="bg-white p-5 rounded-[2rem] border-2 border-gray-100 shadow-sm">
                        <p class="text-[10px] font-black text-gray-400 uppercase tracking-widest">GPA Học kỳ</p>
                        <p class="text-2xl font-black text-indigo-600 mt-1">3.85 / 4.0</p>
                    </div>
                    <div class="bg-white p-5 rounded-[2rem] border-2 border-gray-100 shadow-sm">
                        <p class="text-[10px] font-black text-gray-400 uppercase tracking-widest">Tín chỉ đạt</p>
                        <p class="text-2xl font-black text-emerald-600 mt-1">18 / 18</p>
                    </div>
                    <div class="bg-white p-5 rounded-[2rem] border-2 border-gray-100 shadow-sm">
                        <p class="text-[10px] font-black text-gray-400 uppercase tracking-widest">GPA Tích lũy</p>
                        <p class="text-2xl font-black text-gray-900 mt-1">3.72</p>
                    </div>
                    <div class="bg-gray-900 p-5 rounded-[2rem] shadow-lg">
                        <p class="text-[10px] font-black text-gray-400 uppercase tracking-widest">Xếp loại</p>
                        <p class="text-2xl font-black text-white mt-1">Xuất sắc</p>
                    </div>
                </div>

                <div class="flex-1 min-h-0 bg-white rounded-[2.5rem] shadow-sm border-2 border-gray-200 overflow-hidden flex flex-col">
                    <div class="overflow-auto h-full" style="max-height: 550px;">
                        <table class="w-full border-separate border-spacing-0">
                            <thead class="sticky top-0 z-20">
                                <tr class="bg-gray-50">
                                    <th class="p-4 border-b-2 border-r border-gray-200 text-left text-[10px] font-black text-gray-400 uppercase w-12 text-center">STT</th>
                                    <th class="p-4 border-b-2 border-r border-gray-200 text-left text-[10px] font-black text-gray-400 uppercase">Tên học phần</th>
                                    <th class="p-4 border-b-2 border-r border-gray-200 text-center text-[10px] font-black text-gray-400 uppercase w-16">TC</th>
                                    <th class="p-4 border-b-2 border-r border-gray-200 text-center text-[10px] font-black text-gray-400 uppercase w-20">Quá trình</th>
                                    <th class="p-4 border-b-2 border-r border-gray-200 text-center text-[10px] font-black text-gray-400 uppercase w-20">Cuối kỳ</th>
                                    <th class="p-4 border-b-2 border-r border-gray-200 text-center text-[10px] font-black text-gray-400 uppercase w-20">Tổng kết</th>
                                    <th class="p-4 border-b-2 border-r border-gray-200 text-center text-[10px] font-black text-gray-400 uppercase w-16">Thang 4</th>
                                    <th class="p-4 border-b-2 border-gray-200 text-center text-[10px] font-black text-gray-400 uppercase w-16">Điểm chữ</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-100">
                                <tr v-for="(grade, index) in gradeList" :key="index" class="group hover:bg-gray-50/50 transition-colors">
                                    <td class="p-4 text-center border-r border-gray-100 font-black text-gray-300 text-xs">
                                        {{ index + 1 }}
                                    </td>
                                    <td class="p-4 border-r border-gray-100">
                                        <div class="flex flex-col">
                                            <span class="text-sm font-black text-gray-800">{{ grade.subject }}</span>
                                            <span class="text-[9px] font-bold text-gray-400 uppercase tracking-tighter">{{ grade.code }}</span>
                                        </div>
                                    </td>
                                    <td class="p-4 border-r border-gray-100 text-center font-bold text-sm">{{ grade.credits }}</td>
                                    <td class="p-4 border-r border-gray-100 text-center font-medium text-sm">{{ grade.process }}</td>
                                    <td class="p-4 border-r border-gray-100 text-center font-medium text-sm">{{ grade.final }}</td>
                                    <td class="p-4 border-r border-gray-100 text-center">
                                        <span class="text-sm font-black text-indigo-600">{{ grade.total }}</span>
                                    </td>
                                    <td class="p-4 border-r border-gray-100 text-center font-black text-sm">{{ grade.scale4 }}</td>
                                    <td class="p-4 text-center">
                                        <span :class="getGradeClass(grade.letter)" class="text-[11px] font-black px-2.5 py-1 rounded-lg inline-block w-10">
                                            {{ grade.letter }}
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div class="bg-white p-6 rounded-[2rem] border border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 flex-shrink-0">
                    <div class="flex gap-8">
                        <div class="flex flex-col">
                            <span class="text-[10px] font-black text-gray-400 uppercase">Tổng số tín chỉ đăng ký</span>
                            <span class="text-lg font-black text-gray-900">18 Tín chỉ</span>
                        </div>
                        <div class="flex flex-col">
                            <span class="text-[10px] font-black text-gray-400 uppercase">Số môn đã hoàn thành</span>
                            <span class="text-lg font-black text-emerald-600">6 / 6 Môn</span>
                        </div>
                    </div>
                    <button class="bg-gray-800 hover:bg-black text-white font-black px-8 py-3 rounded-xl text-xs transition-all active:scale-95 flex items-center gap-2">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"></path></svg>
                        In bảng điểm
                    </button>
                </div>

            </main>
        </div>
    </div>
</template>

<script setup>
import Sidebar from '@/components/layout/Sidebar.vue';
import TopHeader from '@/components/layout/TopHeader.vue';

const gradeList = [
    { subject: 'Lập trình Web nâng cao', code: 'INT1304', credits: 3, process: 9.0, final: 8.5, total: 8.7, scale4: 4.0, letter: 'A' },
    { subject: 'Cấu trúc dữ liệu và Giải thuật', code: 'INT1202', credits: 3, process: 8.5, final: 9.5, total: 9.2, scale4: 4.0, letter: 'A+' },
    { subject: 'Hệ quản trị Cơ sở dữ liệu', code: 'INT1310', credits: 3, process: 8.0, final: 7.5, total: 7.7, scale4: 3.5, letter: 'B+' },
    { subject: 'Mạng máy tính cơ bản', code: 'INT1212', credits: 3, process: 9.5, final: 8.0, total: 8.5, scale4: 4.0, letter: 'A' },
    { subject: 'Phân tích thiết kế hệ thống', code: 'INT1401', credits: 3, process: 7.0, final: 6.5, total: 6.7, scale4: 2.5, letter: 'C+' },
    { subject: 'Kỹ năng giao tiếp chuyên nghiệp', code: 'SOFT101', credits: 3, process: 10, final: 9.0, total: 9.3, scale4: 4.0, letter: 'A+' },
];

const getGradeClass = (letter) => {
    if (letter.startsWith('A')) return 'bg-emerald-100 text-emerald-700';
    if (letter.startsWith('B')) return 'bg-blue-100 text-blue-700';
    if (letter.startsWith('C')) return 'bg-amber-100 text-amber-700';
    return 'bg-rose-100 text-rose-700';
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
    background: #e2e8f0;
    border-radius: 10px;
}
.overflow-auto::-webkit-scrollbar-thumb:hover {
    background: #cbd5e1;
}

table {
    border-collapse: separate;
}

/* Hiệu ứng hover dòng */
tbody tr {
    transition: all 0.2s ease;
}
</style>