<template>
    <div class="min-h-screen bg-[#fcfcfd] font-sans text-gray-900 selection:bg-black selection:text-white">
        
        <header class="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100 py-5">
            <div class="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <router-link to="/trang-chu" class="group flex items-center gap-2">
                    <div class="w-8 h-8 bg-black rounded-lg flex items-center justify-center transition-transform group-hover:rotate-12">
                        <span class="text-white font-black text-sm">D</span>
                    </div>
                    <h1 class="text-lg font-black tracking-tighter uppercase">Đăng Khoa Uni</h1>
                </router-link>
                <div class="hidden md:flex gap-6 text-[10px] font-black uppercase tracking-widest text-gray-400">
                    <a href="#" class="hover:text-black transition-colors">Tuyển sinh</a>
                    <a href="#" class="hover:text-black transition-colors">Hỗ trợ</a>
                    <a href="#" class="hover:text-black transition-colors">Liên hệ</a>
                </div>
            </div>
        </header>

        <main class="max-w-7xl mx-auto px-6 py-12 md:py-20 flex flex-col lg:flex-row gap-16 items-start">
            
            <div class="w-full lg:w-[400px] shrink-0 sticky top-32">
                <div class="relative group">
                    <div class="absolute -inset-4 bg-gray-100/50 rounded-[2.5rem] -z-10 scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-700"></div>
                    
                    <div class="bg-white p-10 rounded-[2rem] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.08)] border border-gray-100">
                        <div class="mb-10">
                            <h2 class="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] mb-2">Cổng thông tin đào tạo</h2>
                            <h3 class="text-3xl font-black tracking-tighter uppercase italic leading-none">Đăng nhập</h3>
                        </div>

                        <form @submit.prevent="handleLogin" class="space-y-6">
                            <div class="space-y-1.5">
                                <label class="text-[10px] font-black uppercase tracking-widest ml-1 text-gray-500">Tài khoản Email</label>
                                <input v-model="loginForm.email" type="email" placeholder="example@dangkhoa.edu.vn"
                                    class="w-full px-5 py-4 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:border-black focus:ring-0 transition-all placeholder:text-gray-300 font-medium"
                                    required />
                            </div>

                            <div class="space-y-1.5">
                                <label class="text-[10px] font-black uppercase tracking-widest ml-1 text-gray-500">Mật khẩu</label>
                                <input v-model="loginForm.password" type="password" placeholder="••••••••"
                                    class="w-full px-5 py-4 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:border-black focus:ring-0 transition-all placeholder:text-gray-300 font-medium"
                                    required />
                            </div>

                            <div class="flex justify-between items-center px-1">
                                <label class="flex items-center gap-2 cursor-pointer group">
                                    <input type="checkbox" v-model="loginForm.is_graduated" class="w-4 h-4 rounded border-gray-300 text-black focus:ring-black">
                                    <span class="text-xs font-bold text-gray-500 group-hover:text-black transition-colors">Đã tốt nghiệp</span>
                                </label>
                                <a href="#" class="text-xs font-black uppercase tracking-tighter text-gray-400 hover:text-black transition-colors">Quên mật khẩu?</a>
                            </div>

                            <div class="flex gap-4">
                                <input v-model="loginForm.captcha" type="text" placeholder="Mã"
                                    class="w-1/3 px-5 py-4 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:border-black transition-all" />
                                <div class="flex-1 flex items-center justify-between bg-gray-900 rounded-2xl px-5 text-white">
                                    <span class="font-serif italic tracking-[0.3em] font-bold text-lg select-none opacity-80">9711</span>
                                    <button type="button" class="hover:rotate-180 transition-transform duration-500 text-gray-400 hover:text-white">
                                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
                                    </button>
                                </div>
                            </div>

                            <button type="submit"
                                class="w-full bg-black text-white font-black py-5 rounded-2xl shadow-xl hover:bg-gray-800 transition-all active:scale-[0.98] tracking-widest text-xs uppercase"
                                :disabled="authStore.isLoading">
                                <span v-if="authStore.isLoading" class="flex items-center justify-center gap-2">
                                    <svg class="animate-spin h-4 w-4" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                                    Đang xác thực...
                                </span>
                                <span v-else>Đăng nhập hệ thống</span>
                            </button>
                        </form>

                        <div class="mt-8 pt-8 border-t border-gray-50 flex flex-col gap-4">
                            <button class="w-full py-4 text-xs font-black uppercase tracking-widest text-gray-500 hover:text-black border border-gray-100 rounded-2xl hover:bg-gray-50 transition-all">Dành cho phụ huynh</button>
                            <div class="flex items-center justify-center gap-4 bg-gray-50 p-4 rounded-[1.5rem]">
                                <img src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=dangkhoauni" class="w-12 h-12 rounded-lg mix-blend-multiply opacity-80" />
                                <div class="space-y-1">
                                    <p class="text-[9px] font-black uppercase tracking-widest text-gray-400 leading-none">Tải ứng dụng</p>
                                    <p class="text-[10px] font-bold text-gray-900 leading-none">Mobile App 2.0</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex-1 space-y-12">
                <div class="flex items-baseline justify-between border-b border-gray-100 pb-2">
                    <div class="flex gap-10">
                        <button class="relative py-4 text-[11px] font-black uppercase tracking-[0.2em] text-black">
                            Góc sinh viên
                            <div class="absolute bottom-0 left-0 right-0 h-0.5 bg-black"></div>
                        </button>
                        <button class="py-4 text-[11px] font-black uppercase tracking-[0.2em] text-gray-300 hover:text-gray-500 transition-colors">Thông báo</button>
                        <button class="py-4 text-[11px] font-black uppercase tracking-[0.2em] text-gray-300 hover:text-gray-500 transition-colors">Biểu mẫu</button>
                    </div>
                    <button class="hidden md:block text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-black">Xem tất cả &rarr;</button>
                </div>

                <div class="grid grid-cols-1 gap-12">
                    <div v-for="n in 3" :key="n" class="group flex gap-8 items-start cursor-pointer">
                        <div class="flex flex-col items-center shrink-0">
                            <span class="text-4xl font-light text-gray-200 group-hover:text-black transition-colors duration-500">0{{n}}</span>
                            <div class="w-px h-12 bg-gray-100 mt-2"></div>
                        </div>
                        <div class="space-y-3">
                            <div class="flex items-center gap-3">
                                <span class="px-2 py-0.5 bg-gray-100 text-[9px] font-black uppercase tracking-widest rounded text-gray-500">Học vụ</span>
                                <span class="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">11 Tháng 03, 2026</span>
                            </div>
                            <h4 class="text-xl font-bold text-gray-800 group-hover:text-black group-hover:underline underline-offset-8 decoration-1 transition-all leading-tight">
                                {{ n === 1 ? 'Hướng dẫn sinh viên nộp học phí qua cổng thanh toán NAPAS' : n === 2 ? 'Lễ khai giảng và chào đón tân sinh viên khóa 2026' : 'Phát triển mô hình câu lạc bộ học thuật chuyên sâu' }}
                            </h4>
                            <p class="text-sm text-gray-500 font-medium leading-relaxed line-clamp-2 max-w-2xl">
                                Nhằm hỗ trợ sinh viên tối đa trong việc thực hiện các nghĩa vụ học phí, Nhà trường phối hợp cùng ngân hàng triển khai hệ thống gạch nợ tự động...
                            </p>
                        </div>
                    </div>
                </div>

                <div class="pt-10">
                    <div class="bg-gray-900 rounded-[2.5rem] p-12 text-white relative overflow-hidden group">
                        <div class="relative z-10 space-y-6">
                            <h3 class="text-4xl font-black tracking-tighter uppercase italic leading-none">Hành trình <br> vươn tầm thế giới</h3>
                            <p class="text-gray-400 text-sm max-w-md font-medium">Khám phá các chương trình trao đổi sinh viên quốc tế và cơ hội thực tập tại các tập đoàn đa quốc gia.</p>
                            <button class="bg-white text-black px-8 py-3.5 rounded-xl font-black uppercase text-[10px] tracking-widest hover:scale-105 transition-all">Tìm hiểu ngay</button>
                        </div>
                        <div class="absolute -right-20 -bottom-20 w-64 h-64 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-all duration-700"></div>
                        <div class="absolute right-12 top-1/2 -translate-y-1/2 hidden lg:block opacity-20">
                            <svg class="w-40 h-40" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"/></svg>
                        </div>
                    </div>
                </div>
            </div>

        </main>

        <footer class="max-w-7xl mx-auto px-6 py-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
            <p class="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">© 2026 Đăng Khoa University. Global Excellence.</p>
            <div class="flex gap-8 text-[10px] font-black uppercase tracking-widest text-gray-400">
                <a href="#" class="hover:text-black">Privacy</a>
                <a href="#" class="hover:text-black">Terms</a>
                <a href="#" class="hover:text-black">Security</a>
            </div>
        </footer>
    </div>
</template>

<script setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '../store/authStore';

const router = useRouter();
const authStore = useAuthStore();

const loginForm = reactive({
    email: '',
    password: '',
    is_graduated: false,
    captcha: ''
});

const handleLogin = async () => {
    const result = await authStore.loginUser({
        email: loginForm.email,
        password: loginForm.password
    });

    if (result.success) {
        router.push('/trang-chu');
    } else {
        console.error("Đăng nhập thất bại:", result.message);
    }
};
</script>

<style scoped>
/* Chế độ ép font "Black" cho các heading */
h1, h2, h3, h4, button, label {
    font-family: 'Poppins', sans-serif;
}

.line-clamp-2 {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

/* Custom scrollbar mượt hơn */
::-webkit-scrollbar {
    width: 6px;
}
::-webkit-scrollbar-track {
    background: transparent;
}
::-webkit-scrollbar-thumb {
    background: #e5e7eb;
    border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
    background: #000;
}
</style>