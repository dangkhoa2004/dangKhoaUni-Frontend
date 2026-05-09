<template>
    <div class="bg-gradient-to-br from-gray-900 to-gray-800 rounded-[2.5rem] p-8 text-white shadow-xl relative overflow-hidden group">
        <div class="absolute -right-10 -top-10 w-40 h-40 bg-white opacity-5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
        <div class="absolute -left-10 -bottom-10 w-32 h-32 bg-gray-600 opacity-20 rounded-full blur-xl"></div>

        <div class="relative z-10 flex flex-col items-center text-center">
            <p class="text-[10px] font-bold text-gray-300 uppercase tracking-widest mb-4">Cố vấn học tập</p>
            
            <img src="https://ui-avatars.com/api/?name=Tran+Thi+Mai&background=fff&color=000000" alt="Advisor" class="w-20 h-20 rounded-full border-4 border-white/20 shadow-lg mb-3">
            
            <h4 class="font-bold text-lg">ThS. Trần Thị Mai</h4>
            <p class="text-xs text-gray-300 mt-1">Khoa Công nghệ thông tin</p>

            <div class="w-full mt-6 space-y-2">
                <a href="mailto:ttmai@dangkhoa.uni" class="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 py-2.5 rounded-xl text-xs font-medium backdrop-blur-sm transition-all border border-white/5">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                    ttmai@dangkhoa.uni
                </a>
                <a href="tel:0901234567" class="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 py-2.5 rounded-xl text-xs font-medium backdrop-blur-sm transition-all border border-white/5">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                    090 123 4567
                </a>
            </div>
        </div>
    </div>
</template>