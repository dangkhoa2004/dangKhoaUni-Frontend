<template>
    <div class="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-200">
        <div class="flex justify-between items-center mb-6">
            <h3 class="font-bold text-lg text-gray-800">Biểu đồ GPA các học kỳ</h3>
            <select class="text-xs font-semibold bg-gray-50 border-none rounded-lg px-3 py-2 outline-none cursor-pointer">
                <option>Năm học 2025 - 2026</option>
                <option>Năm học 2024 - 2025</option>
            </select>
        </div>
        
        <div class="h-48 flex items-end justify-between gap-4 relative mt-10">
            <div class="absolute w-full border-t border-dashed border-gray-200 bottom-0"></div>
            <div class="absolute w-full border-t border-dashed border-gray-200 bottom-1/2"></div>
            <div class="absolute w-full border-t border-dashed border-gray-200 top-0"></div>

            <div v-for="(col, i) in chartData" :key="i" class="relative flex flex-col items-center flex-1 group z-10">
                <div class="opacity-0 group-hover:opacity-100 absolute -top-8 bg-gray-800 text-white text-[10px] py-1 px-2 rounded transition-opacity">
                    {{ col.score }}
                </div>
                <div class="w-full max-w-[40px] bg-gradient-to-t from-gray-200 to-gray-300 rounded-t-lg group-hover:from-gray-500 group-hover:to-gray-700 transition-colors cursor-pointer" :style="{ height: col.height }"></div>
                <span class="text-[10px] font-bold text-gray-400 mt-3">{{ col.hk }}</span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const chartData = ref([
    { hk: 'HK1', score: 3.2, height: '60%' },
    { hk: 'HK2', score: 3.5, height: '75%' },
    { hk: 'HK Hè', score: 3.8, height: '85%' },
    { hk: 'HK1 (Nay)', score: 3.6, height: '80%' },
]);
</script>