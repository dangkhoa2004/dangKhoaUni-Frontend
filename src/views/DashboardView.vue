<template>
  <Header />
  <div class="min-h-screen bg-white font-sans text-gray-900 overflow-x-hidden pt-[88px] md:pt-[110px]">
    
    <section class="relative h-[600px] flex items-center overflow-hidden">
      <div class="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=2070&auto=format&fit=crop" 
             class="w-full h-full object-cover grayscale brightness-[0.6]" alt="Campus">
        <div class="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent"></div>
      </div>

      <div class="container mx-auto px-6 md:px-12 relative z-10">
        <div class="max-w-3xl space-y-6">
          <span class="inline-block px-4 py-1.5 bg-black text-white text-[10px] font-black uppercase tracking-[0.3em] rounded-full border border-gray-700">
            Chào mừng bạn đến với Đăng Khoa Uni
          </span>
          <h1 class="text-5xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter italic uppercase">
            Học thật <br> <span class="text-gray-400">Trải nghiệm</span> thật!
          </h1>
          <p class="text-gray-300 text-lg md:text-xl font-medium max-w-xl leading-relaxed">
            Nơi khơi nguồn sáng tạo, rèn luyện bản lĩnh và chuẩn bị hành trang vững chắc cho tương lai toàn cầu.
          </p>
          <div class="flex gap-4 pt-4">
            <button class="px-10 py-4 bg-white text-black font-black rounded-2xl hover:bg-gray-200 transition-all uppercase text-xs tracking-widest shadow-xl active:scale-95">
              Khám phá ngay
            </button>
            <button class="px-10 py-4 border-2 border-white/30 text-white font-black rounded-2xl hover:bg-white/10 backdrop-blur-md transition-all uppercase text-xs tracking-widest active:scale-95">
              Tìm hiểu thêm
            </button>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-gray-50 border-b border-gray-200">
      <div class="container mx-auto px-6 md:px-12">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div class="space-y-2 group">
            <h2 class="text-6xl font-black text-black tracking-tighter group-hover:scale-105 transition-transform origin-left">101k+</h2>
            <p class="text-xs font-black text-gray-500 uppercase tracking-[0.2em]">Sinh viên trên toàn quốc</p>
            <div class="w-12 h-1 bg-black rounded-full"></div>
          </div>
          <div class="space-y-2 group">
            <h2 class="text-6xl font-black text-gray-900 tracking-tighter group-hover:scale-105 transition-transform origin-left">800+</h2>
            <p class="text-xs font-black text-gray-500 uppercase tracking-[0.2em]">Đối tác doanh nghiệp toàn cầu</p>
            <div class="w-12 h-1 bg-gray-400 rounded-full"></div>
          </div>
          <div class="space-y-2 group">
            <h2 class="text-6xl font-black text-gray-700 tracking-tighter group-hover:scale-105 transition-transform origin-left">30+</h2>
            <p class="text-xs font-black text-gray-500 uppercase tracking-[0.2em]">Quốc gia có mạng lưới sinh viên</p>
            <div class="w-12 h-1 bg-gray-800 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24">
      <div class="container mx-auto px-6 md:px-12">
        <div class="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 class="text-sm font-black text-black uppercase tracking-[0.3em]">Chương trình đào tạo</h2>
          <h3 class="text-4xl font-black text-gray-900 tracking-tight uppercase italic">Đào tạo theo chuẩn quốc tế</h3>
          <p class="text-gray-500 font-medium">Lựa chọn ngành học phù hợp với đam mê và xu hướng phát triển của xã hội.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="item in programs" :key="item.title" 
               class="group relative h-[450px] rounded-[3rem] overflow-hidden cursor-pointer shadow-2xl transition-all hover:-translate-y-2">
            <img :src="item.image" class="w-full h-full object-cover grayscale group-hover:scale-110 transition-transform duration-700" alt="">
            <div class="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
            <div class="absolute bottom-10 left-10 right-10 text-white">
              <h4 class="text-2xl font-black uppercase italic leading-none mb-2">{{ item.title }}</h4>
              <p class="text-xs font-bold text-gray-300 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Khám phá ngay →</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 bg-black text-white rounded-t-[5rem]">
      <div class="container mx-auto px-6 md:px-12">
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div class="space-y-4">
            <h2 class="text-sm font-black text-gray-400 uppercase tracking-[0.3em]">Tin tức & Sự kiện</h2>
            <h3 class="text-4xl font-black tracking-tight uppercase italic leading-none text-white">Cập nhật mới nhất</h3>
          </div>
          <button class="px-8 py-3 bg-white/10 border border-white/20 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all active:scale-95">
            Xem tất cả bài viết
          </button>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div class="group cursor-pointer">
            <div class="aspect-video rounded-[3rem] overflow-hidden mb-8 relative border border-gray-800">
              <img src="https://images.unsplash.com/photo-1523580494863-6f303122484b?q=80&w=2070&auto=format&fit=crop" 
                   class="w-full h-full object-cover grayscale group-hover:scale-105 transition-all duration-500" alt="">
              <span class="absolute top-6 left-6 px-4 py-2 bg-white text-black text-[10px] font-black uppercase tracking-widest">Sự kiện nổi bật</span>
            </div>
            <h4 class="text-2xl font-black uppercase italic mb-4 leading-tight group-hover:text-gray-300 transition-colors">
              Ngày hội việc làm "Global Career Expo 2025" - Kết nối hơn 50 tập đoàn đa quốc gia
            </h4>
            <p class="text-gray-400 text-sm leading-relaxed mb-6">
              Sự kiện thu hút hơn 3.000 sinh viên tham gia với hàng trăm cơ hội thực tập và việc làm trực tiếp.
            </p>
            <div class="flex items-center gap-4 text-[10px] font-black uppercase text-gray-500 tracking-widest">
              <span>15 TH05, 2025</span>
              <span class="w-1.5 h-1.5 bg-white rounded-full"></span>
              <span>By Admin</span>
            </div>
          </div>

          <div class="space-y-8">
            <div v-for="n in 3" :key="n" class="flex gap-6 group cursor-pointer border-b border-gray-800 pb-8 last:border-0 last:pb-0">
              <div class="w-32 h-32 rounded-3xl overflow-hidden flex-shrink-0 bg-white/5 border border-gray-800">
                <img :src="'https://placehold.co/400x400/111/fff?text=News+' + n" class="w-full h-full object-cover grayscale opacity-80 group-hover:scale-110 transition-transform duration-500">
              </div>
              <div>
                <h5 class="text-sm font-black uppercase italic tracking-tight group-hover:text-gray-300 transition-colors leading-snug mb-2">
                  Sinh viên CNTT Đăng Khoa Uni giành giải nhất cuộc thi lập trình quốc tế
                </h5>
                <p class="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2 italic">Lĩnh vực: Khoa học công nghệ</p>
                <p class="text-xs text-gray-400 line-clamp-2 leading-relaxed">Đội tuyển RoboTeam đã vượt qua hơn 50 đối thủ từ khắp nơi trên thế giới mang về giải thưởng lớn...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup>
import Footer from '@/components/layout/Footer.vue';
import Header from '@/components/layout/Header.vue';

const programs = [
  {
    title: 'Công nghệ thông tin',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'Kinh tế & Quản trị',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
  },
  {
    title: 'Ngôn ngữ quốc tế',
    image: 'https://images.unsplash.com/photo-1543165796-5426273eaab3?q=80&w=2070&auto=format&fit=crop',
  }
];
</script>

<style scoped>

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

h1 {
  animation: fadeInUp 0.8s ease-out forwards;
}
</style>