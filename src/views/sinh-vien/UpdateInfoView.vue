<template>
    <div class="min-h-screen bg-gray-50 font-sans text-gray-800 flex">
        
        <Sidebar />

        <div class="flex-1 flex flex-col min-w-0">
            <TopHeader />

            <main class="p-6 md:p-10 max-w-[1000px] mx-auto w-full space-y-8">
                
                <div class="flex flex-col gap-2">
                    <router-link to="/ho-so-sinh-vien" class="text-sm text-gray-500 hover:text-black flex items-center gap-1 transition-colors w-fit">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                        Quay lại Hồ sơ
                    </router-link>
                    <h1 class="text-2xl md:text-3xl font-black text-gray-900">Cập nhật thông tin</h1>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    
                    <div class="md:col-span-1">
                        <div class="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-200 flex flex-col items-center text-center">
                            <h3 class="font-bold text-gray-900 mb-6 w-full text-left border-b border-gray-100 pb-4">Ảnh đại diện</h3>
                            <div class="relative group">
                                <img src="@/assets/avt.JPG" alt="Avatar" class="w-40 h-40 rounded-[2rem] border-4 border-gray-50 shadow-md object-cover">
                                <label class="absolute inset-0 flex items-center justify-center bg-black/40 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                                    <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                    <input type="file" class="hidden">
                                </label>
                            </div>
                            <p class="text-[10px] text-gray-400 mt-4 leading-relaxed">Định dạng hỗ trợ: JPG, PNG.<br>Dung lượng tối đa 2MB.</p>
                        </div>
                    </div>

                    <div class="md:col-span-2 space-y-8">
                        
                        <div class="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-200">
                            <h3 class="font-bold text-gray-900 mb-6 flex items-center gap-2 border-b border-gray-100 pb-4">
                                <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                Thông tin liên hệ
                            </h3>
                            <div class="space-y-6">
                                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div class="space-y-2">
                                        <label class="text-xs font-bold text-gray-500 uppercase ml-1">Số điện thoại</label>
                                        <input type="text" v-model="formData.phone" class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gray-200 focus:outline-none transition-all font-medium">
                                    </div>
                                    <div class="space-y-2">
                                        <label class="text-xs font-bold text-gray-500 uppercase ml-1">Email cá nhân</label>
                                        <input type="email" v-model="formData.personalEmail" class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gray-200 focus:outline-none transition-all font-medium">
                                    </div>
                                </div>
                                <div class="space-y-2">
                                    <label class="text-xs font-bold text-gray-500 uppercase ml-1">Địa chỉ thường trú</label>
                                    <textarea v-model="formData.address" rows="3" class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gray-200 focus:outline-none transition-all font-medium resize-none"></textarea>
                                </div>
                            </div>
                        </div>

                        <div class="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-200">
                            <div class="flex justify-between items-center mb-6 border-b border-gray-100 pb-4">
                                <h3 class="font-bold text-gray-900 flex items-center gap-2">
                                    <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                                    Thông tin định danh
                                </h3>
                                <span class="text-[10px] bg-gray-100 text-gray-500 px-2 py-1 rounded-md font-bold italic">Chỉ đọc</span>
                            </div>
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div class="space-y-1">
                                    <p class="text-[10px] font-bold text-gray-400 uppercase">Họ và tên</p>
                                    <p class="text-sm font-bold text-gray-800">Nguyễn Đăng Khoa</p>
                                </div>
                                <div class="space-y-1">
                                    <p class="text-[10px] font-bold text-gray-400 uppercase">Ngày sinh</p>
                                    <p class="text-sm font-bold text-gray-800">15/08/2004</p>
                                </div>
                                <div class="space-y-1">
                                    <p class="text-[10px] font-bold text-gray-400 uppercase">MSSV</p>
                                    <p class="text-sm font-bold text-gray-800">22010101</p>
                                </div>
                                <div class="space-y-1">
                                    <p class="text-[10px] font-bold text-gray-400 uppercase">CCCD</p>
                                    <p class="text-sm font-bold text-gray-800">079004123456</p>
                                </div>
                            </div>
                            <p class="mt-6 text-[10px] text-gray-400 italic font-medium bg-gray-50 p-3 rounded-lg border border-dashed border-gray-200 text-center">
                                Để thay đổi các thông tin định danh, vui lòng liên hệ trực tiếp Phòng Đào tạo để được hướng dẫn.
                            </p>
                        </div>

                        <div class="flex items-center justify-end gap-4 pt-4">
                            <button class="px-8 py-3 rounded-xl font-bold text-sm text-gray-500 hover:bg-gray-100 transition-all">
                                Hủy bỏ
                            </button>
                            <button @click="handleUpdate" class="px-10 py-3 bg-gray-900 hover:bg-black text-white rounded-xl font-bold text-sm shadow-lg shadow-black/10 transition-all active:scale-95">
                                Lưu thay đổi
                            </button>
                        </div>

                    </div>
                </div>

            </main>
        </div>
    </div>
</template>

<script setup>
import { reactive } from 'vue';
import Sidebar from '@/components/layout/Sidebar.vue';
import TopHeader from '@/components/layout/TopHeader.vue';

const formData = reactive({
    phone: '0987 654 321',
    personalEmail: 'dangkhoa.dev@gmail.com',
    address: '123 Đường Số 1, Phường 2, Quận 3, TP. Hồ Chí Minh'
});

const handleUpdate = () => {
    // Logic xử lý cập nhật thông tin tại đây
    alert('Thông tin đã được lưu thành công!');
};
</script>