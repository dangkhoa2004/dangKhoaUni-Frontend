<template>
    <div class="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-200">
        <h3 class="font-bold text-gray-800 mb-6 flex items-center gap-2">
            <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg>
            Điểm số mới cập nhật
        </h3>
        
        <div class="space-y-4">
            <div v-for="(grade, index) in grades" :key="index" class="flex items-center justify-between p-3 border-b border-gray-50 last:border-0 hover:bg-gray-50 rounded-xl transition-colors">
                <div class="flex items-center gap-4">
                    <div class="w-10 h-10 rounded-full bg-gradient-to-br from-gray-200 to-gray-100 flex items-center justify-center text-gray-800 font-bold shadow-sm">
                        {{ grade.score }}
                    </div>
                    <div>
                        <p class="text-xs font-bold text-gray-800">{{ grade.subject }}</p>
                        <p class="text-[10px] text-gray-400 mt-0.5">{{ grade.type }}</p>
                    </div>
                </div>
                <span class="text-[10px] text-gray-300">{{ grade.date }}</span>
            </div>
        </div>
        <button class="w-full mt-4 bg-gray-50 text-gray-500 font-bold text-xs py-2.5 rounded-xl hover:bg-gray-100 transition-all">Xem bảng điểm chi tiết</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const grades = ref([
    { subject: 'Toán rời rạc', type: 'Điểm giữa kỳ (Trọng số 30%)', score: '8.5', date: 'Hôm nay' },
    { subject: 'Kiến trúc máy tính', type: 'Điểm thực hành Lab 2', score: '9.0', date: 'Hôm qua' },
    { subject: 'Anh văn chuyên ngành 2', type: 'Mini Test 1', score: '7.0', date: '3 ngày trước' },
]);
</script>