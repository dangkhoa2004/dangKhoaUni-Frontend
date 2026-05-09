<template>
    <div class="min-h-screen bg-gray-50 font-sans text-gray-800 flex">
        
        <Sidebar />

        <div class="flex-1 flex flex-col min-w-0">
            <TopHeader />

            <main class="p-6 md:p-10 max-w-[1200px] mx-auto w-full space-y-8">
                
                <div class="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <h1 class="text-2xl md:text-3xl font-black text-gray-900">Sổ tay sinh viên</h1>
                        <p class="text-gray-500 mt-1">Tra cứu quy định, quy trình và hướng dẫn dành cho sinh viên DKU.</p>
                    </div>
                    <div class="relative w-full md:w-80">
                        <input type="text" placeholder="Tìm kiếm nội dung hướng dẫn..." 
                               class="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-2xl focus:ring-2 focus:ring-gray-200 focus:outline-none transition-all shadow-sm text-sm">
                        <svg class="w-5 h-5 absolute left-4 top-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div v-for="(cat, i) in categories" :key="i" 
                         class="bg-white p-8 rounded-[2.5rem] border border-gray-200 hover:border-gray-900 hover:shadow-xl hover:shadow-black/5 transition-all group cursor-pointer">
                        <div class="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center text-gray-900 mb-6 group-hover:bg-gray-900 group-hover:text-white transition-colors" v-html="cat.icon"></div>
                        <h3 class="font-bold text-lg text-gray-900">{{ cat.title }}</h3>
                        <p class="text-xs text-gray-400 mt-2 leading-relaxed">{{ cat.desc }}</p>
                        <div class="mt-6 flex items-center gap-2 text-xs font-bold text-gray-900 opacity-0 group-hover:opacity-100 transition-opacity">
                            Xem chi tiết 
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                        </div>
                    </div>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div class="lg:col-span-2 space-y-6">
                        <div class="bg-white rounded-[2.5rem] border border-gray-200 overflow-hidden shadow-sm">
                            <div class="p-8 border-b border-gray-100">
                                <h3 class="font-bold text-gray-900 flex items-center gap-2">
                                    <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
                                    Nội dung chính yếu
                                </h3>
                            </div>
                            <div class="divide-y divide-gray-50">
                                <div v-for="(item, j) in handbookItems" :key="j" class="p-6 hover:bg-gray-50 transition-colors flex items-center justify-between group cursor-pointer">
                                    <div class="flex items-center gap-4">
                                        <div class="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-gray-400 group-hover:text-gray-900 transition-colors border border-gray-100">
                                            {{ j + 1 }}
                                        </div>
                                        <div>
                                            <h4 class="text-sm font-bold text-gray-800">{{ item.title }}</h4>
                                            <p class="text-[10px] text-gray-400 mt-0.5">Cập nhật: {{ item.lastUpdate }}</p>
                                        </div>
                                    </div>
                                    <svg class="w-5 h-5 text-gray-200 group-hover:text-gray-900 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                                </div>
                            </div>
                            <div class="p-6 bg-gray-50/50 text-center">
                                <button class="text-xs font-black text-gray-900 uppercase tracking-widest hover:underline">Xem toàn bộ sổ tay điện tử</button>
                            </div>
                        </div>
                    </div>

                    <div class="space-y-8">
                        <div class="bg-gray-900 text-white p-8 rounded-[2.5rem] shadow-xl relative overflow-hidden">
                            <div class="absolute -right-4 -bottom-4 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
                            <h3 class="font-bold text-lg relative z-10">Tải về bản PDF</h3>
                            <p class="text-xs text-gray-400 mt-2 leading-relaxed relative z-10">Bạn có thể tải toàn bộ cuốn sổ tay để xem ngoại tuyến bất cứ lúc nào.</p>
                            <button class="mt-6 w-full bg-white text-gray-900 font-bold py-3 rounded-2xl text-xs hover:bg-gray-100 transition-all flex items-center justify-center gap-2 active:scale-95">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                                Tải bản PDF (12.4MB)
                            </button>
                        </div>

                        <div class="bg-white p-8 rounded-[2.5rem] border border-gray-200 shadow-sm">
                            <h3 class="font-bold text-gray-900 mb-6">Câu hỏi thường gặp</h3>
                            <div class="space-y-4">
                                <div v-for="(faq, f) in faqs" :key="f" class="p-4 bg-gray-50 rounded-2xl border border-gray-100 hover:border-gray-300 transition-all cursor-pointer">
                                    <h4 class="text-xs font-bold text-gray-800">{{ faq.q }}</h4>
                                    <p class="text-[10px] text-gray-400 mt-1 line-clamp-1 group-hover:line-clamp-none transition-all">{{ faq.a }}</p>
                                </div>
                            </div>
                            <button class="w-full mt-6 text-[10px] font-bold text-gray-400 hover:text-gray-900 uppercase tracking-widest">Tất cả câu hỏi FAQ</button>
                        </div>
                    </div>
                </div>

            </main>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Sidebar from '@/components/layout/Sidebar.vue';
import TopHeader from '@/components/layout/TopHeader.vue';

const categories = ref([
    { 
        title: 'Quy chế đào tạo', 
        desc: 'Các quy định về học tập, đăng ký học phần, thôi học và xét tốt nghiệp.', 
        icon: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>'
    },
    { 
        title: 'Khen thưởng & Kỷ luật', 
        desc: 'Thông tin về các mức khen thưởng và các hành vi vi phạm kỷ luật sinh viên.', 
        icon: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>'
    },
    { 
        title: 'Chế độ chính sách', 
        desc: 'Hướng dẫn về miễn giảm học phí, trợ cấp xã hội và học bổng khuyến khích.', 
        icon: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>'
    }
]);

const handbookItems = ref([
    { title: 'Quy trình xin thôi học, bảo lưu học tập', lastUpdate: '10/01/2026' },
    { title: 'Hướng dẫn đăng ký tham gia Câu lạc bộ', lastUpdate: '22/12/2025' },
    { title: 'Các thủ tục hành chính tại một cửa', lastUpdate: '15/02/2026' },
    { title: 'Quy định về việc mang thẻ sinh viên và trang phục', lastUpdate: '01/01/2026' },
    { title: 'Hướng dẫn sử dụng thư viện và mượn giáo trình', lastUpdate: '20/11/2025' }
]);

const faqs = ref([
    { q: 'Làm thế nào để xin cấp lại thẻ sinh viên?', a: 'Sinh viên nộp đơn tại phòng Một cửa và đóng phí cấp lại là 50.000đ.' },
    { q: 'Mất bao lâu để nhận kết quả bảo lưu?', a: 'Thời gian xử lý thông thường là từ 3-5 ngày làm việc.' },
    { q: 'Cách tính điểm rèn luyện như thế nào?', a: 'Điểm rèn luyện dựa trên 5 tiêu chí chính bao gồm thái độ học tập và tham gia phong trào.' }
]);
</script>