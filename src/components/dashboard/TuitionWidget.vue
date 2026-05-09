<template>
    <div class="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-200">
        <h3 class="font-bold text-gray-800 mb-6">Trạng thái học phí</h3>
        <div class="space-y-6">
            <div class="flex justify-between items-end">
                <div>
                    <p class="text-xs text-gray-400 font-bold uppercase">Còn nợ HK2</p>
                    <p class="text-2xl font-black text-gray-900">2.450.000đ</p>
                </div>
                <button class="bg-gray-800 text-white font-bold py-2 px-6 rounded-xl shadow-lg hover:bg-gray-900 transition-all text-xs">Thanh toán</button>
            </div>
            <div class="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                <div class="bg-gradient-to-r from-gray-700 to-gray-500 h-full w-[85%]"></div>
            </div>
            <p class="text-[10px] text-gray-400 italic">* Hạn cuối thanh toán: 30/05/2026</p>
        </div>
    </div>
</template>