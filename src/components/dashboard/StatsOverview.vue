<template>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div v-for="(stat, s) in stats" :key="s" class="bg-white p-6 rounded-[2rem] shadow-sm border border-gray-200 hover:shadow-xl hover:shadow-black/5 transition-all">
            <div class="flex justify-between items-start">
                <div :class="stat.bg" class="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-lg" v-html="stat.icon"></div>
                <span class="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{{ stat.label }}</span>
            </div>
            <div class="mt-4">
                <p class="text-2xl font-black text-gray-800">{{ stat.value }}</p>
                <p class="text-xs text-gray-400 mt-1">{{ stat.sub }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const stats = ref([
    { label: 'GPA Tích lũy', value: '3.62', sub: 'Hệ 4.0', icon: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>', bg: 'bg-gray-800' },
    { label: 'Tín chỉ đạt', value: '54/168', sub: 'Tiến độ 32%', icon: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg>', bg: 'bg-gray-700' },
    { label: 'Thông báo mới', value: '12', sub: 'Chưa đọc', icon: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>', bg: 'bg-gray-600' },
    { label: 'Điểm rèn luyện', value: '85', sub: 'Loại Tốt', icon: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>', bg: 'bg-gray-500' },
]);
</script>