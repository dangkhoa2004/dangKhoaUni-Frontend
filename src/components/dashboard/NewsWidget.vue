<template>
    <div class="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-200">
        <h3 class="font-bold text-gray-800 mb-6 flex items-center justify-between">
            Tin tức mới
            <span class="bg-gray-200 text-gray-800 text-[10px] px-2 py-0.5 rounded-md">3 mới</span>
        </h3>
        <div class="space-y-6">
            <div v-for="(news, n) in newsFeed" :key="n" class="group cursor-pointer">
                <div class="flex gap-4">
                    <div class="min-w-[4px] h-12 bg-gray-100 group-hover:bg-gray-600 rounded-full transition-colors"></div>
                    <div>
                        <p class="text-[10px] font-black text-gray-600 uppercase">{{ news.category }}</p>
                        <h4 class="text-sm font-bold text-gray-800 line-clamp-2 mt-0.5 group-hover:text-gray-900">{{ news.title }}</h4>
                        <p class="text-[10px] text-gray-400 mt-1">{{ news.date }}</p>
                    </div>
                </div>
            </div>
        </div>
        <button class="w-full mt-8 py-3 rounded-2xl border-2 border-gray-200 text-gray-800 font-bold text-xs hover:bg-gray-100 transition-all">Tất cả thông báo</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const newsFeed = ref([
    { category: 'Đào tạo', title: 'Thông báo về việc đăng ký học phần học kỳ hè 2026', date: '2 giờ trước' },
    { category: 'Học phí', title: 'Hướng dẫn nộp học phí qua cổng thanh toán VNPay mới', date: '6 giờ trước' },
    { category: 'Sự kiện', title: 'DKU Hackathon 2026: Sân chơi công nghệ lớn nhất năm', date: '1 ngày trước' },
]);
</script>