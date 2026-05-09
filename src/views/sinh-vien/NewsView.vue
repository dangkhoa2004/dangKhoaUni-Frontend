<template>
    <div class="min-h-screen bg-gray-50 font-sans text-gray-800 flex">
        <Sidebar />

        <div class="flex-1 flex flex-col min-w-0">
            <TopHeader />

            <main class="p-6 md:p-10 max-w-[1300px] mx-auto w-full space-y-10">
                
                <div class="flex flex-col md:flex-row justify-between items-center gap-6">
                    <h1 class="text-3xl font-black text-gray-900 uppercase">Tin tức & Sự kiện</h1>
                    <div class="relative w-full md:w-96">
                        <input type="text" placeholder="Tìm kiếm bài viết..." class="w-full bg-white border-2 border-gray-100 rounded-2xl py-4 px-6 text-sm font-bold focus:border-gray-900 transition-all outline-none shadow-sm">
                    </div>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    <div class="lg:col-span-8 space-y-8">
                        <div v-for="(news, index) in newsList" :key="index" 
                             class="bg-white rounded-[2.5rem] overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all group cursor-pointer">
                            <div class="flex flex-col md:flex-row">
                                <div class="md:w-72 h-64 overflow-hidden">
                                    <img :src="news.image" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                                </div>
                                <div class="flex-1 p-8 flex flex-col justify-between">
                                    <div>
                                        <div class="flex items-center gap-4 mb-4">
                                            <span :class="getCategoryClass(news.category)" class="px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest">
                                                {{ news.category }}
                                            </span>
                                            <span class="text-xs font-bold text-gray-400 italic">{{ news.date }}</span>
                                        </div>
                                        <h2 class="text-xl font-black text-gray-900 group-hover:text-indigo-600 transition-colors leading-snug">{{ news.title }}</h2>
                                        <p class="text-gray-500 text-sm mt-3 font-medium leading-relaxed">{{ news.summary }}</p>
                                    </div>
                                    <div class="mt-6 flex items-center gap-2 text-gray-900 font-black text-xs uppercase tracking-widest">
                                        Đọc tiếp
                                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <aside class="lg:col-span-4 space-y-8">
                        <div class="bg-white p-8 rounded-[2.5rem] border border-gray-200 shadow-sm">
                            <h3 class="font-black text-gray-900 uppercase text-xs tracking-widest mb-6">Chuyên mục</h3>
                            <div class="flex flex-col gap-2">
                                <button v-for="cat in categories" :key="cat" class="text-left px-5 py-3 rounded-xl text-xs font-black text-gray-500 hover:bg-gray-900 hover:text-white transition-all uppercase tracking-tighter">
                                    {{ cat }}
                                </button>
                            </div>
                        </div>

                        <div class="bg-gray-900 p-8 rounded-[2.5rem] text-white shadow-xl">
                            <h3 class="font-black text-white uppercase text-xs tracking-widest mb-6">Sự kiện sắp tới</h3>
                            <div class="space-y-6">
                                <div v-for="(event, idx) in events" :key="idx" class="flex gap-5 group cursor-pointer">
                                    <div class="w-14 h-14 bg-white/10 rounded-2xl flex flex-col items-center justify-center border border-white/10 group-hover:bg-white/20 transition-all">
                                        <span class="text-[10px] font-black text-gray-400 uppercase leading-none">{{ event.month }}</span>
                                        <span class="text-xl font-black text-white leading-tight">{{ event.day }}</span>
                                    </div>
                                    <div class="flex-1">
                                        <h4 class="text-xs font-bold text-white group-hover:text-orange-400 transition-colors leading-snug">{{ event.title }}</h4>
                                        <p class="text-[10px] font-bold text-gray-500 mt-1">{{ event.time }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </main>
        </div>
    </div>
</template>

<script setup>
// PHẦN LOGIC QUAN TRỌNG ĐỂ SỬA LỖI
import Sidebar from '@/components/layout/Sidebar.vue';
import TopHeader from '@/components/layout/TopHeader.vue';

const categories = ['Tất cả', 'Thông báo', 'Sự kiện', 'Học bổng', 'Tuyển dụng'];

const newsList = [
    { 
        title: 'Thông báo về việc đăng ký học bổng học kỳ 2', 
        category: 'Học bổng', 
        date: '09/05/2026', 
        summary: 'Nhà trường triển khai chương trình xét cấp học bổng cho sinh viên có thành tích xuất sắc...',
        image: 'https://picsum.photos/seed/news1/600/400' 
    },
    { 
        title: 'Lịch thi kết thúc học kỳ 2 (Chính thức)', 
        category: 'Thông báo', 
        date: '08/05/2026', 
        summary: 'Phòng đào tạo công bố lịch thi chi tiết cho các khóa đào tạo...',
        image: 'https://picsum.photos/seed/news2/600/400' 
    },
    { 
        title: 'Ngày hội việc làm IT Career Day 2026', 
        category: 'Sự kiện', 
        date: '05/05/2026', 
        summary: 'Cơ hội tiếp xúc trực tiếp với hơn 50 doanh nghiệp công nghệ hàng đầu...',
        image: 'https://picsum.photos/seed/news3/600/400' 
    }
];

const events = [
    { day: '15', month: 'TH5', title: 'Hạn cuối nộp Đồ án tốt nghiệp', time: '08:00 - Văn phòng khoa' },
    { day: '22', month: 'TH5', title: 'Hội thảo: Web3 và Tương lai Internet', time: '14:00 - Hội trường lớn' },
    { day: '01', month: 'TH6', title: 'Khai mạc giải bóng đá sinh viên', time: '16:00 - Sân vận động' }
];

const getCategoryClass = (cat) => {
    switch (cat) {
        case 'Thông báo': return 'bg-rose-100 text-rose-600';
        case 'Học bổng': return 'bg-emerald-100 text-emerald-600';
        case 'Sự kiện': return 'bg-blue-100 text-blue-600';
        case 'Tuyển dụng': return 'bg-amber-100 text-amber-600';
        default: return 'bg-gray-100 text-gray-500';
    }
};
</script>

<style scoped>
/* Hiệu ứng trượt nhẹ khi hover bài viết */
.group:hover {
    transform: translateY(-4px);
}
</style>