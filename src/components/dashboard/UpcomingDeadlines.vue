<template>
    <div class="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-200">
        <div class="flex justify-between items-center mb-6">
            <h3 class="font-bold text-gray-800 flex items-center gap-2">
                <svg class="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                Deadline sắp tới
            </h3>
            <button class="text-xs font-bold text-gray-800 hover:underline">Tất cả bài tập</button>
        </div>

        <div class="space-y-4">
            <div v-for="(task, index) in deadlines" :key="index" 
                 class="p-4 rounded-2xl border transition-all group cursor-pointer"
                 :class="task.isUrgent ? 'border-gray-300 bg-gray-100/50 hover:bg-gray-200' : 'border-gray-100 hover:border-gray-300 hover:bg-gray-50'">
                <div class="flex justify-between items-start">
                    <div>
                        <h4 class="text-sm font-bold text-gray-800 group-hover:text-gray-900">{{ task.title }}</h4>
                        <p class="text-[10px] text-gray-500 mt-1 font-medium">{{ task.subject }}</p>
                    </div>
                    <span :class="task.badgeColor" class="px-2.5 py-1 rounded-md text-[10px] font-black uppercase tracking-wider text-white whitespace-nowrap ml-3">
                        {{ task.timeLeft }}
                    </span>
                </div>
                <div class="mt-3 flex items-center gap-2 text-[10px] text-gray-400 font-medium">
                    <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                    Hạn nộp: {{ task.dueDate }}
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const deadlines = ref([
    { title: 'Báo cáo Đồ án giữa kỳ', subject: 'Lập trình Web nâng cao', dueDate: '15:00 - Hôm nay', timeLeft: 'Còn 3 tiếng', isUrgent: true, badgeColor: 'bg-gray-800' },
    { title: 'Bài tập Thực hành Lab 4', subject: 'Cấu trúc dữ liệu', dueDate: '23:59 - 08/05/2026', timeLeft: 'Còn 2 ngày', isUrgent: false, badgeColor: 'bg-gray-600' },
    { title: 'Tiểu luận cá nhân', subject: 'Triết học Mác - Lênin', dueDate: '12:00 - 10/05/2026', timeLeft: 'Còn 4 ngày', isUrgent: false, badgeColor: 'bg-gray-500' },
]);
</script>