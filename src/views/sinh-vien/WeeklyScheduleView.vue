<template>
    <div class="h-screen bg-gray-50 font-sans text-gray-800 flex overflow-hidden">
        
        <Sidebar />

        <div class="flex-1 flex flex-col min-w-0 h-full">
            <TopHeader />

            <main class="p-4 md:p-8 max-w-[1300px] mx-auto w-full h-full flex flex-col space-y-4">
                
                <div class="flex items-center justify-between flex-shrink-0">
                    <div>
                        <h1 class="text-xl md:text-2xl font-black text-gray-900 uppercase tracking-tight">Thời khóa biểu</h1>
                        <p class="text-xs text-gray-500 font-medium">Học kỳ 2 | 2025 - 2026</p>
                    </div>
                    <div class="flex bg-white p-1 rounded-xl border border-gray-200 shadow-sm scale-90 origin-right">
                         <button class="px-3 py-1.5 text-xs font-bold text-gray-400 hover:text-gray-900">Tuần trước</button>
                         <button class="px-3 py-1.5 text-xs font-black text-gray-900 bg-gray-100 rounded-lg">Hiện tại</button>
                         <button class="px-3 py-1.5 text-xs font-bold text-gray-400 hover:text-gray-900">Tuần sau</button>
                    </div>
                </div>

                <div class="flex-1 min-h-0 bg-white rounded-[2rem] shadow-sm border-2 border-gray-200 overflow-hidden flex flex-col">
                    <div class="overflow-auto h-full" style="max-height: 650px;"> <table class="w-full border-separate border-spacing-0">
                            <thead class="sticky top-0 z-30 shadow-sm">
                                <tr class="bg-gray-800 text-white">
                                    <th class="p-3 border-r border-gray-700 w-16 text-[10px] font-black uppercase tracking-widest">Tiết</th>
                                    <th v-for="day in days" :key="day.label" 
                                        class="p-3 border-r border-gray-700 last:border-r-0 min-w-[120px]">
                                        <div class="flex flex-col">
                                            <span class="text-[10px] font-bold opacity-60 uppercase tracking-tighter">{{ day.label }}</span>
                                            <span class="text-sm font-black">{{ day.date }}</span>
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="bg-indigo-50/50 sticky top-[52px] z-20">
                                    <td colspan="8" class="px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-indigo-600 border-b border-gray-200">
                                        Sáng (Tiết 1 - 5)
                                    </td>
                                </tr>
                                <tr v-for="p in [1, 2, 3, 4, 5]" :key="'m-'+p" class="group transition-colors hover:bg-gray-50/50">
                                    <td class="p-2 text-center border-r-2 border-b border-gray-200 font-black text-gray-300 text-sm bg-gray-50/20">
                                        {{ p }}
                                    </td>
                                    <td v-for="d in 7" :key="d" 
                                        class="p-1 border-r border-b border-gray-200 last:border-r-0 relative h-20">
                                        <div v-if="hasSchedule(d, p)" 
                                             class="h-full w-full p-2 rounded-lg border-l-4 shadow-sm flex flex-col justify-center overflow-hidden"
                                             :class="getSubjectStyle(d, p)">
                                            <h4 class="text-[11px] font-black leading-tight line-clamp-2 truncate">{{ getSubjectName(d, p) }}</h4>
                                            <p class="text-[9px] font-bold opacity-70 mt-0.5">{{ getRoom(d, p) }}</p>
                                        </div>
                                    </td>
                                </tr>

                                <tr class="bg-orange-50/50 sticky top-[52px] z-20"> <td colspan="8" class="px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-orange-600 border-y border-gray-200">
                                        Chiều (Tiết 6 - 10)
                                    </td>
                                </tr>
                                <tr v-for="p in [6, 7, 8, 9, 10]" :key="'a-'+p" class="group transition-colors hover:bg-gray-50/50">
                                    <td class="p-2 text-center border-r-2 border-b border-gray-200 font-black text-gray-300 text-sm bg-gray-50/20">
                                        {{ p }}
                                    </td>
                                    <td v-for="d in 7" :key="d" 
                                        class="p-1 border-r border-b border-gray-200 last:border-r-0 relative h-20">
                                        <div v-if="hasSchedule(d, p)" 
                                             class="h-full w-full p-2 rounded-lg border-l-4 shadow-sm flex flex-col justify-center overflow-hidden"
                                             :class="getSubjectStyle(d, p)">
                                            <h4 class="text-[11px] font-black leading-tight line-clamp-2">{{ getSubjectName(d, p) }}</h4>
                                            <p class="text-[9px] font-bold opacity-70 mt-0.5">{{ getRoom(d, p) }}</p>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div class="flex items-center justify-between bg-white px-6 py-3 rounded-2xl border border-gray-200 flex-shrink-0">
                    <div class="flex gap-4">
                        <div class="flex items-center gap-1.5">
                            <div class="w-3 h-3 rounded bg-indigo-500"></div>
                            <span class="text-[10px] font-bold text-gray-400">LÝ THUYẾT</span>
                        </div>
                        <div class="flex items-center gap-1.5">
                            <div class="w-3 h-3 rounded bg-emerald-500"></div>
                            <span class="text-[10px] font-bold text-gray-400">THỰC HÀNH</span>
                        </div>
                    </div>
                    <span class="text-[9px] text-gray-400 font-medium italic">* Cuộn để xem thêm lịch buổi chiều</span>
                </div>

            </main>
        </div>
    </div>
</template>

<script setup>
import Sidebar from '@/components/layout/Sidebar.vue';
import TopHeader from '@/components/layout/TopHeader.vue';

const days = [
    { label: 'Thứ 2', date: '11/05' },
    { label: 'Thứ 3', date: '12/05' },
    { label: 'Thứ 4', date: '13/05' },
    { label: 'Thứ 5', date: '14/05' },
    { label: 'Thứ 6', date: '15/05' },
    { label: 'Thứ 7', date: '16/05' },
    { label: 'CN', date: '17/05' },
];

const hasSchedule = (day, period) => {
    const schedules = [
        { day: 1, period: 1 }, { day: 1, period: 2 },
        { day: 2, period: 4 },
        { day: 3, period: 7 }, { day: 3, period: 8 },
        { day: 5, period: 2 }, { day: 5, period: 9 },
    ];
    return schedules.some(s => s.day === day && s.period === period);
};

const getSubjectName = (day, period) => {
    if (day === 3) return "Trí tuệ nhân tạo (AI)";
    if (period > 5) return "Thực hành Web chuyên sâu";
    return "Lập trình ứng dụng";
};

const getRoom = (day, period) => "Phòng " + (period > 5 ? "Lab 01" : "A.401");

const getSubjectStyle = (day, period) => {
    if (period > 5) return "bg-emerald-50 border-emerald-500 text-emerald-900";
    return "bg-indigo-50 border-indigo-500 text-indigo-900";
};
</script>

<style scoped>
/* Ẩn scrollbar thô kệch, làm thanh cuộn tinh tế hơn */
.overflow-auto::-webkit-scrollbar {
    width: 5px;
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

/* Fix lỗi border-collapse khi dùng sticky header */
table {
    border-collapse: separate;
}

/* Đảm bảo text không bị tràn ô quá mức */
.line-clamp-2 {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>