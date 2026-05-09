<template>
    <div class="grid grid-cols-2 gap-4">
        <button v-for="(act, a) in quickActivities" :key="a"
                class="bg-white p-4 rounded-3xl shadow-sm border border-gray-200 hover:bg-gray-50 hover:-translate-y-1 transition-all group flex flex-col items-center text-center">
            <div :class="act.bg" class="w-10 h-10 rounded-xl flex items-center justify-center text-white mb-3 shadow-md" v-html="act.icon"></div>
            <span class="text-[10px] font-bold text-gray-600">{{ act.name }}</span>
        </button>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const quickActivities = ref([
    { name: 'Đăng ký thi lại', icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>', bg: 'bg-gray-600' },
    { name: 'Lịch thi', icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>', bg: 'bg-gray-700' },
    { name: 'Khen thưởng', icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>', bg: 'bg-gray-500' },
    { name: 'Tra cứu nợ', icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>', bg: 'bg-gray-800' },
]);
</script>