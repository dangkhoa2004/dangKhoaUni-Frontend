<template>
    <div class="h-screen bg-gray-50 font-sans text-gray-800 flex">
        
        <Sidebar />

        <div class="flex-1 flex flex-col min-w-0 h-full">
            <TopHeader />

            <main class="p-4 md:p-8 max-w-[1300px] mx-auto w-full h-full flex flex-col space-y-6">
                
                <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 flex-shrink-0">
                    <div>
                        <h1 class="text-2xl md:text-3xl font-black text-gray-900 uppercase tracking-tight">Tiến trình học tập</h1>
                        <p class="text-sm text-gray-500 font-medium">Tổng kết kết quả học tập toàn khóa học.</p>
                    </div>
                    <button class="bg-gray-900 text-white font-black px-6 py-3 rounded-2xl text-xs hover:shadow-lg transition-all active:scale-95 flex items-center gap-2">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                        Tải bảng điểm toàn khóa (PDF)
                    </button>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-shrink-0">
                    <div class="lg:col-span-2 bg-white p-6 rounded-[2.5rem] border-2 border-gray-100 shadow-sm flex items-center gap-8">
                        <div class="relative w-32 h-32 flex-shrink-0">
                            <svg class="w-full h-full -rotate-90">
                                <circle cx="64" cy="64" r="58" stroke="currentColor" stroke-width="12" fill="transparent" class="text-gray-100" />
                                <circle cx="64" cy="64" r="58" stroke="currentColor" stroke-width="12" fill="transparent" stroke-dasharray="364.4" stroke-dashoffset="36.4" class="text-indigo-600" />
                            </svg>
                            <div class="absolute inset-0 flex flex-col items-center justify-center">
                                <span class="text-2xl font-black text-gray-900">3.72</span>
                                <span class="text-[10px] font-bold text-gray-400 uppercase">GPA Tích lũy</span>
                            </div>
                        </div>
                        <div class="flex-1 space-y-4">
                            <div class="flex justify-between items-end">
                                <div>
                                    <p class="text-[10px] font-black text-gray-400 uppercase tracking-widest">Tiến độ hoàn thành tín chỉ</p>
                                    <h3 class="text-xl font-black text-gray-900">105 / 145 Tín chỉ</h3>
                                </div>
                                <span class="text-sm font-black text-indigo-600">72%</span>
                            </div>
                            <div class="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                                <div class="h-full bg-indigo-600 w-[72%] rounded-full"></div>
                            </div>
                            <p class="text-xs text-gray-500 font-medium italic">* Bạn cần hoàn thành thêm 40 tín chỉ để đủ điều kiện tốt nghiệp.</p>
                        </div>
                    </div>

                    <div class="bg-gray-900 p-6 rounded-[2.5rem] shadow-xl flex flex-col justify-between">
                        <div class="flex justify-between items-start">
                            <span class="bg-white/10 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter">Dự kiến tốt nghiệp</span>
                            <svg class="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        </div>
                        <div>
                            <h2 class="text-3xl font-black text-white">Giỏi</h2>
                            <p class="text-gray-400 text-xs font-medium mt-1 uppercase tracking-widest">Xếp loại tích lũy hiện tại</p>
                        </div>
                    </div>
                </div>

                <div class="flex-1 min-h-0 bg-white rounded-[2.5rem] shadow-sm border-2 border-gray-200 overflow-hidden flex flex-col">
                    <div class="p-6 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
                        <h3 class="font-black text-gray-900 uppercase text-xs tracking-widest">Chi tiết từng học kỳ</h3>
                        <span class="text-[10px] font-bold text-gray-400 italic">Dữ liệu được cập nhật đến: 09/05/2026</span>
                    </div>
                    
                    <div class="overflow-auto h-full px-6 pb-6">
                        <div class="space-y-4 mt-6">
                            <div v-for="(sem, index) in semesters" :key="index" 
                                 class="flex items-center gap-6 p-5 rounded-3xl border-2 border-gray-50 hover:border-indigo-100 hover:bg-indigo-50/20 transition-all group">
                                
                                <div class="w-16 h-16 rounded-2xl bg-gray-100 flex flex-col items-center justify-center flex-shrink-0 group-hover:bg-white transition-colors">
                                    <span class="text-[10px] font-black text-gray-400 uppercase">HK</span>
                                    <span class="text-xl font-black text-gray-900">{{ sem.id }}</span>
                                </div>

                                <div class="flex-1 grid grid-cols-2 md:grid-cols-4 gap-4">
                                    <div>
                                        <p class="text-[9px] font-black text-gray-400 uppercase">Năm học</p>
                                        <p class="text-sm font-bold text-gray-800">{{ sem.year }}</p>
                                    </div>
                                    <div>
                                        <p class="text-[9px] font-black text-gray-400 uppercase">Tín chỉ HK</p>
                                        <p class="text-sm font-bold text-gray-800">{{ sem.credits }} Tín chỉ</p>
                                    </div>
                                    <div>
                                        <p class="text-[9px] font-black text-gray-400 uppercase">GPA Hệ 4</p>
                                        <div class="flex items-center gap-2">
                                            <p class="text-sm font-black text-indigo-600">{{ sem.gpa4 }}</p>
                                            <svg v-if="sem.trend === 'up'" class="w-3 h-3 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clip-rule="evenodd"></path></svg>
                                        </div>
                                    </div>
                                    <div class="flex items-center justify-end">
                                        <button class="text-[10px] font-black text-indigo-600 bg-white px-4 py-2 rounded-xl border border-indigo-100 hover:bg-indigo-600 hover:text-white transition-all">
                                            Xem chi tiết
                                        </button>
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
import Sidebar from '@/components/layout/Sidebar.vue';
import TopHeader from '@/components/layout/TopHeader.vue';

const semesters = [
    { id: '2', year: '2025 - 2026', credits: 18, gpa4: 3.85, trend: 'up' },
    { id: '1', year: '2025 - 2026', credits: 21, gpa4: 3.70, trend: 'down' },
    { id: '2', year: '2024 - 2025', credits: 15, gpa4: 3.92, trend: 'up' },
    { id: '1', year: '2024 - 2025', credits: 19, gpa4: 3.65, trend: 'up' },
    { id: '2', year: '2023 - 2024', credits: 16, gpa4: 3.50, trend: 'down' },
    { id: '1', year: '2023 - 2024', credits: 20, gpa4: 3.55, trend: 'up' },
];
</script>

<style scoped>
/* Scrollbar tinh tế cho danh sách học kỳ */
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

/* Hiệu ứng chuyển động mượt */
.group:hover {
    transform: translateX(4px);
}
</style>