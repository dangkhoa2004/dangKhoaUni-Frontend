import { defineStore } from 'pinia';

export const useAppStore = defineStore('app', {
    state: () => ({
        isLoading: false,
        isSidebarOpen: false, // Trạng thái đóng/mở trên Mobile
    }),
    actions: {
        showLoading() { this.isLoading = true; },
        hideLoading() { this.isLoading = false; },
        
        // Hàm bật/tắt Sidebar
        toggleSidebar() {
            this.isSidebarOpen = !this.isSidebarOpen;
        },
        // Hàm đóng Sidebar (dùng khi bấm vào link hoặc bấm ra ngoài)
        closeSidebar() {
            this.isSidebarOpen = false;
        }
    }
});