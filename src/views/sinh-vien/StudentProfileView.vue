<template>
    <div class="min-h-screen bg-gray-50 font-sans text-gray-800 flex">
        
        <Sidebar />

        <div class="flex-1 flex flex-col min-w-0">
            <TopHeader />

            <main class="p-6 md:p-10 max-w-[1200px] mx-auto w-full space-y-8">
                
                <div class="flex items-center justify-between">
                    <div>
                        <h1 class="text-2xl md:text-3xl font-black text-gray-900">HỒ SƠ NGƯỜI DÙNG</h1>
                        <p class="text-gray-500 mt-1">Quản lý thông tin cá nhân và học tập của bạn.</p>
                    </div>
                    <button class="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2.5 px-6 rounded-xl shadow-sm transition-all text-sm flex items-center gap-2">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
                        Cập nhật thông tin
                    </button>
                </div>

                <div class="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-200 relative overflow-hidden">
                    <img src="@/assets/banner.jpeg" alt="Banner" class="absolute top-0 left-0 w-full h-32 object-cover object-center bg-gradient-to-r from-gray-800 to-gray-600">
                    <div class="relative z-10 flex flex-col md:flex-row gap-8 items-start md:items-end mt-12">
                        <div class="relative">
                            <img src="@/assets/avt.JPG" alt="Avatar" class="w-32 h-32 rounded-3xl border-4 border-white shadow-lg object-cover bg-white">
                            <div class="absolute -bottom-2 -right-2 bg-gray-900 text-white p-2 rounded-xl shadow-md cursor-pointer hover:bg-black transition-colors">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                            </div>
                        </div>

                        <div class="flex-1 pb-2">
                            <h2 class="text-3xl font-black text-white">Đăng Khoa</h2>
                            <p class="text-gray-500 font-medium mt-1">Sinh viên - Khoa Công nghệ thông tin</p>
                            
                            <div class="flex flex-wrap gap-3 mt-4">
                                <span class="bg-gray-100 text-gray-700 px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 border border-gray-200">
                                    <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"></path></svg>
                                    MSSV: 22010101
                                </span>
                                <span class="bg-gray-800 text-white px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 shadow-sm">
                                    Đang học
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    
                    <div class="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-200">
                        <h3 class="font-bold text-gray-900 mb-6 flex items-center gap-2 border-b border-gray-100 pb-4">
                            <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                            Thông tin cá nhân
                        </h3>
                        <div class="space-y-5">
                            <div class="grid grid-cols-3 gap-4 border-b border-gray-50 pb-3">
                                <span class="text-sm text-gray-500">Họ và tên</span>
                                <span class="text-sm font-bold text-gray-800 col-span-2">Nguyễn Đăng Khoa</span>
                            </div>
                            <div class="grid grid-cols-3 gap-4 border-b border-gray-50 pb-3">
                                <span class="text-sm text-gray-500">Ngày sinh</span>
                                <span class="text-sm font-bold text-gray-800 col-span-2">15/08/2004</span>
                            </div>
                            <div class="grid grid-cols-3 gap-4 border-b border-gray-50 pb-3">
                                <span class="text-sm text-gray-500">Giới tính</span>
                                <span class="text-sm font-bold text-gray-800 col-span-2">Nam</span>
                            </div>
                            <div class="grid grid-cols-3 gap-4 border-b border-gray-50 pb-3">
                                <span class="text-sm text-gray-500">CCCD/CMND</span>
                                <span class="text-sm font-bold text-gray-800 col-span-2">079004123456</span>
                            </div>
                            <div class="grid grid-cols-3 gap-4 pb-1">
                                <span class="text-sm text-gray-500">Nơi sinh</span>
                                <span class="text-sm font-bold text-gray-800 col-span-2">Thành phố Hồ Chí Minh</span>
                            </div>
                        </div>
                    </div>

                    <div class="space-y-8">
                        
                        <div class="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-200">
                            <h3 class="font-bold text-gray-900 mb-6 flex items-center gap-2 border-b border-gray-100 pb-4">
                                <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
                                Thông tin học tập
                            </h3>
                            <div class="space-y-5">
                                <div class="grid grid-cols-3 gap-4 border-b border-gray-50 pb-3">
                                    <span class="text-sm text-gray-500">Lớp danh nghĩa</span>
                                    <span class="text-sm font-bold text-gray-800 col-span-2">22DTHA1</span>
                                </div>
                                <div class="grid grid-cols-3 gap-4 border-b border-gray-50 pb-3">
                                    <span class="text-sm text-gray-500">Khóa học</span>
                                    <span class="text-sm font-bold text-gray-800 col-span-2">2022 - 2026 (Khóa 22)</span>
                                </div>
                                <div class="grid grid-cols-3 gap-4 pb-1">
                                    <span class="text-sm text-gray-500">Ngành học</span>
                                    <span class="text-sm font-bold text-gray-800 col-span-2">Kỹ thuật phần mềm</span>
                                </div>
                            </div>
                        </div>

                        <div class="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-200">
                            <h3 class="font-bold text-gray-900 mb-6 flex items-center gap-2 border-b border-gray-100 pb-4">
                                <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                Thông tin liên hệ
                            </h3>
                            <div class="space-y-5">
                                <div class="grid grid-cols-3 gap-4 border-b border-gray-50 pb-3">
                                    <span class="text-sm text-gray-500">Số điện thoại</span>
                                    <span class="text-sm font-bold text-gray-800 col-span-2">0987 654 321</span>
                                </div>
                                <div class="grid grid-cols-3 gap-4 border-b border-gray-50 pb-3">
                                    <span class="text-sm text-gray-500">Email trường</span>
                                    <span class="text-sm font-bold text-gray-800 col-span-2">22010101@st.dangkhoa.uni</span>
                                </div>
                                <div class="grid grid-cols-3 gap-4 pb-1">
                                    <span class="text-sm text-gray-500">Địa chỉ liên lạc</span>
                                    <span class="text-sm font-bold text-gray-800 col-span-2 leading-relaxed">123 Đường Số 1, Phường 2, Quận 3, TP.HCM</span>
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
</script>