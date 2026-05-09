<template>
    <div class="min-h-screen bg-gray-50 font-sans text-gray-800 flex items-start">
        
        <Sidebar />

        <div class="flex-1 flex flex-col min-w-0">
            <TopHeader />

            <main class="p-6 md:p-10 max-w-[1400px] mx-auto w-full space-y-8">
                
                <div class="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div>
                        <h1 class="text-2xl md:text-3xl font-black text-gray-900 uppercase tracking-tight">Quản lý người dùng</h1>
                        <p class="text-gray-500 mt-1">Tra cứu, chỉnh sửa thông tin và phân quyền cho toàn bộ thành viên hệ thống.</p>
                    </div>
                    <button class="flex items-center gap-2 px-8 py-4 bg-gray-900 text-white font-black rounded-2xl hover:bg-black transition-all shadow-lg active:scale-95 text-sm uppercase tracking-widest">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path></svg>
                        Thêm thành viên
                    </button>
                </div>

                <div class="bg-white p-6 rounded-[2.5rem] shadow-sm border border-gray-200 grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div class="md:col-span-2 relative">
                        <input type="text" v-model="searchQuery" placeholder="Tìm kiếm theo tên, MSSV hoặc Email..." 
                               class="w-full pl-12 pr-4 py-3 bg-gray-50 border border-transparent focus:border-gray-200 focus:bg-white rounded-2xl text-sm font-bold transition-all outline-none">
                        <svg class="w-5 h-5 absolute left-4 top-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    <div>
                        <select v-model="roleFilter" class="w-full bg-gray-50 border border-transparent focus:border-gray-200 rounded-2xl px-4 py-3 text-sm font-bold outline-none cursor-pointer">
                            <option value="all">Tất cả vai trò</option>
                            <option value="student">Sinh viên</option>
                            <option value="teacher">Giảng viên</option>
                            <option value="admin">Quản trị viên</option>
                        </select>
                    </div>
                    <div>
                        <select v-model="statusFilter" class="w-full bg-gray-50 border border-transparent focus:border-gray-200 rounded-2xl px-4 py-3 text-sm font-bold outline-none cursor-pointer">
                            <option value="all">Tất cả trạng thái</option>
                            <option value="active">Đang hoạt động</option>
                            <option value="blocked">Đã khóa</option>
                        </select>
                    </div>
                </div>

                <div class="bg-white rounded-[2.5rem] shadow-sm border border-gray-200 overflow-hidden">
                    <div class="overflow-x-auto">
                        <table class="w-full border-collapse">
                            <thead>
                                <tr class="bg-gray-50/50 border-b border-gray-100">
                                    <th class="p-6 text-left text-[10px] font-black text-gray-400 uppercase tracking-widest">Thành viên</th>
                                    <th class="p-6 text-left text-[10px] font-black text-gray-400 uppercase tracking-widest">Mã định danh</th>
                                    <th class="p-6 text-center text-[10px] font-black text-gray-400 uppercase tracking-widest">Vai trò</th>
                                    <th class="p-6 text-left text-[10px] font-black text-gray-400 uppercase tracking-widest">Khoa / Bộ phận</th>
                                    <th class="p-6 text-center text-[10px] font-black text-gray-400 uppercase tracking-widest">Trạng thái</th>
                                    <th class="p-6 text-right text-[10px] font-black text-gray-400 uppercase tracking-widest">Thao tác</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-50">
                                <tr v-for="user in filteredUsers" :key="user.id" class="hover:bg-gray-50/50 transition-colors group">
                                    <td class="p-6">
                                        <div class="flex items-center gap-4">
                                            <div class="w-12 h-12 rounded-2xl bg-gray-100 flex items-center justify-center font-black text-gray-400 group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-inner">
                                                {{ user.name.charAt(0) }}
                                            </div>
                                            <div>
                                                <p class="text-sm font-black text-gray-900 tracking-tight">{{ user.name }}</p>
                                                <p class="text-[11px] font-bold text-gray-400 mt-0.5">{{ user.email }}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="p-6">
                                        <span class="text-xs font-black text-gray-500 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100 uppercase tracking-wider">
                                            {{ user.code }}
                                        </span>
                                    </td>
                                    <td class="p-6 text-center">
                                        <span :class="getRoleBadgeClass(user.role)" class="px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-sm">
                                            {{ user.role }}
                                        </span>
                                    </td>
                                    <td class="p-6">
                                        <p class="text-xs font-bold text-gray-600">{{ user.department }}</p>
                                    </td>
                                    <td class="p-6 text-center">
                                        <div class="flex items-center justify-center gap-2">
                                            <span :class="user.status === 'active' ? 'bg-emerald-500' : 'bg-rose-500'" class="w-1.5 h-1.5 rounded-full"></span>
                                            <span class="text-[11px] font-black uppercase text-gray-400 tracking-tighter">
                                                {{ user.status === 'active' ? 'Hoạt động' : 'Bị khóa' }}
                                            </span>
                                        </div>
                                    </td>
                                    <td class="p-6 text-right">
                                        <div class="flex justify-end gap-2">
                                            <button @click="handleEdit(user)" class="p-2 text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all">
                                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                                            </button>
                                            <button @click="handleToggleStatus(user)" class="p-2 text-gray-400 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-all">
                                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="p-8 bg-gray-50/30 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
                        <p class="text-[11px] font-black text-gray-400 uppercase tracking-widest">Hiển thị 1 - {{ users.length }} của 1,240 người dùng</p>
                        <div class="flex gap-2">
                            <button class="px-4 py-2 bg-white border border-gray-200 rounded-xl text-[10px] font-black uppercase text-gray-400 hover:text-gray-900 transition-all shadow-sm">Trước</button>
                            <button class="px-4 py-2 bg-gray-900 text-white border border-gray-900 rounded-xl text-[10px] font-black shadow-lg">1</button>
                            <button class="px-4 py-2 bg-white border border-gray-200 rounded-xl text-[10px] font-black uppercase text-gray-900 hover:bg-gray-50 transition-all shadow-sm">2</button>
                            <button class="px-4 py-2 bg-white border border-gray-200 rounded-xl text-[10px] font-black uppercase text-gray-900 hover:bg-gray-50 transition-all shadow-sm">Sau</button>
                        </div>
                    </div>
                </div>

            </main>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import Sidebar from '@/components/layout/Sidebar.vue';
import TopHeader from '@/components/layout/TopHeader.vue';

const searchQuery = ref('');
const roleFilter = ref('all');
const statusFilter = ref('all');

const users = ref([
    { id: 1, name: 'Nguyễn Đăng Khoa', email: 'khoand@dangkhoa.edu.vn', code: 'ADMIN-001', role: 'admin', department: 'P. Đào tạo', status: 'active' },
    { id: 2, name: 'Trần Minh Tú', email: 'tutm@dangkhoa.edu.vn', code: 'GV-1029', role: 'teacher', department: 'Khoa CNTT', status: 'active' },
    { id: 3, name: 'Lê Hoàng Nam', email: 'namlh.sv22@dangkhoa.edu.vn', code: '22DTHA01', role: 'student', department: 'Khoa CNTT', status: 'active' },
    { id: 4, name: 'Phạm Thu Thảo', email: 'thaopt@dangkhoa.edu.vn', code: 'GV-1035', role: 'teacher', department: 'Khoa Kinh tế', status: 'active' },
    { id: 5, name: 'Hoàng Anh Tuấn', email: 'tuanha.sv23@dangkhoa.edu.vn', code: '23QTKD02', role: 'student', department: 'Khoa Quản trị', status: 'blocked' },
]);

const getRoleBadgeClass = (role) => {
    switch (role) {
        case 'admin': return 'bg-rose-50 text-rose-600 border border-rose-100';
        case 'teacher': return 'bg-indigo-50 text-indigo-600 border border-indigo-100';
        case 'student': return 'bg-blue-50 text-blue-600 border border-blue-100';
        default: return 'bg-gray-50 text-gray-500';
    }
};

const filteredUsers = computed(() => {
    return users.value.filter(user => {
        const matchesSearch = user.name.toLowerCase().includes(searchQuery.value.toLowerCase()) || 
                            user.code.toLowerCase().includes(searchQuery.value.toLowerCase());
        const matchesRole = roleFilter.value === 'all' || user.role === roleFilter.value;
        const matchesStatus = statusFilter.value === 'all' || user.status === statusFilter.value;
        return matchesSearch && matchesRole && matchesStatus;
    });
});

const handleEdit = (user) => {
    console.log('Edit user:', user);
};

const handleToggleStatus = (user) => {
    user.status = user.status === 'active' ? 'blocked' : 'active';
};
</script>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
    display: none;
}
.scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
</style>