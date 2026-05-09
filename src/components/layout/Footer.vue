<template>
  <footer class="bg-white pt-16 pb-8 border-t border-gray-100 font-sans text-gray-700">
    <div class="max-w-[1400px] mx-auto px-6 md:px-12">

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
        <div class="lg:col-span-1">
          <h2 class="text-xl font-black text-gray-900 tracking-tighter italic uppercase leading-none">
            ĐĂNG KHOA <br> <span class="text-gray-400">UNIVERSITY</span>
          </h2>
        </div>

        <div class="space-y-4">
          <h3 class="flex items-center gap-2 text-sm font-black uppercase tracking-wider text-gray-900">
            <span class="w-1 h-5 bg-black"></span> Giới thiệu chung
          </h3>
          <ul class="space-y-3 text-xs font-bold text-gray-500 uppercase tracking-tighter">
            <li><a href="#" class="hover:text-black transition-colors">Về Đăng Khoa Uni</a></li>
            <li><a href="#" class="hover:text-black transition-colors">Cơ sở vật chất & campus</a></li>
            <li><a href="#" class="hover:text-black transition-colors">Đối tác & hợp tác quốc tế</a></li>
            <li><a href="#" class="hover:text-black transition-colors">Liên hệ với chúng tôi</a></li>
          </ul>
        </div>

        <div class="space-y-4">
          <h3 class="flex items-center gap-2 text-sm font-black uppercase tracking-wider text-gray-900">
            <span class="w-1 h-5 bg-black"></span> Truy cập nhanh
          </h3>
          <ul class="space-y-3 text-xs font-bold text-gray-500 uppercase tracking-tighter">
            <li><a href="#" class="hover:text-black transition-colors">Thông tin tuyển sinh năm 2026</a></li>
            <li><a href="#" class="hover:text-black transition-colors">Open days</a></li>
            <li><a href="#" class="hover:text-black transition-colors">Học phí</a></li>
            <li><a href="#" class="hover:text-black transition-colors">Học bổng</a></li>
          </ul>
        </div>

        <div class="space-y-4">
          <h3 class="flex items-center gap-2 text-sm font-black uppercase tracking-wider text-gray-900">
            <span class="w-1 h-5 bg-black"></span> Học tập tại ĐK-Uni
          </h3>
          <ul class="space-y-3 text-xs font-bold text-gray-500 uppercase tracking-tighter">
            <li><a href="#" class="hover:text-black transition-colors">Ngành - Chuyên ngành đào tạo</a></li>
            <li><a href="#" class="hover:text-black transition-colors">Cuộc sống sinh viên</a></li>
            <li><a href="#" class="hover:text-black transition-colors">Dự án startup nổi bật</a></li>
            <li><a href="#" class="hover:text-black transition-colors">Trải nghiệm học tập toàn cầu</a></li>
          </ul>
        </div>

        <div class="space-y-4">
          <h3 class="flex items-center gap-2 text-sm font-black uppercase tracking-wider text-gray-900">
            <span class="w-1 h-5 bg-black"></span> Liên hệ
          </h3>
          <p class="text-xs font-bold text-gray-500 tracking-tight">
            Email: <a href="mailto:tuyensinh@dangkhoa.edu.vn"
              class="text-black hover:underline">tuyensinh@dangkhoa.edu.vn</a>
          </p>
        </div>
      </div>

      <div class="w-full h-px bg-gray-100 mb-12"></div>

      <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10 mb-16">
        <div v-for="campus in campuses" :key="campus.city" class="space-y-4">
          <h4 class="flex items-center gap-2 text-sm font-black uppercase tracking-widest text-gray-900">
            <span class="w-1 h-5 bg-black"></span> {{ campus.city }}
          </h4>
          <div class="space-y-3">
            <div>
              <p class="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Địa chỉ</p>
              <p class="text-[11px] font-bold text-gray-600 leading-relaxed min-h-[1.5em]">{{ campus.address }}</p>
            </div>
            <div>
              <p class="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Hotline</p>
              <p class="text-xs font-black text-gray-800 min-h-[1.5em]">{{ campus.hotline }}</p>
            </div>
            <div>
              <p class="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Email</p>
              <p class="text-[11px] font-bold text-black truncate">{{ campus.email }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
        <p class="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">
          © 2026 Bản quyền thuộc về Trường Đại học Đăng Khoa.
        </p>

        <div class="flex items-center gap-6">
          <a v-for="social in socials" :key="social.name" href="#"
            class="text-gray-900 hover:scale-110 transition-transform">
            <span v-html="social.icon" class="w-5 h-5 block"></span>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const campuses = [
  {
    city: 'Hà Nội',
    address: '',
    hotline: '',
    email: 'tuyensinhhanoi@dangkhoa.edu.vn'
  },
  {
    city: 'TP. Hồ Chí Minh',
    address: '',
    hotline: '',
    email: 'tuyensinhhcm@dangkhoa.edu.vn'
  },
  {
    city: 'Đà Nẵng',
    address: '',
    hotline: '',
    email: 'tuyensinhdanang@dangkhoa.edu.vn'
  },
  {
    city: 'Cần Thơ',
    address: '',
    hotline: '',
    email: 'tuyensinhcantho@dangkhoa.edu.vn'
  },
  {
    city: 'Quy Nhơn',
    address: '',
    hotline: '',
    email: 'tuyensinhquynhon@dangkhoa.edu.vn'
  }
];

const socials = [
  { name: 'Facebook', icon: '<svg fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>' },
  { name: 'Youtube', icon: '<svg fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>' },
  { name: 'TikTok', icon: '<svg fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31 0 2.591.21 3.793.591V4.62c-1.12-.341-2.293-.52-3.483-.52a6.388 6.388 0 0 0-6.383 6.383 6.388 6.388 0 0 0 6.383 6.383c1.19 0 2.363-.179 3.483-.52v4.009c-1.202.381-2.483.591-3.793.591A10.395 10.395 0 0 1 2.122 10.483 10.395 10.395 0 0 1 12.525.02z"/></svg>' }
];
</script>

<style scoped>
.text-orange-500,
.text-orange-600 {
  color: #000;
}

.bg-orange-500 {
  background-color: #000;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>