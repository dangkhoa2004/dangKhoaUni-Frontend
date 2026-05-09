// src/store/authStore.js
import { defineStore } from 'pinia';
import { loginAPI } from '../api/authApi';
import Cookies from 'js-cookie';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    // Lấy token từ Cookie
    token: Cookies.get('token') || null,
    // Lấy thông tin user từ LocalStorage (vì Cookie chỉ nên giữ token)
    user: JSON.parse(localStorage.getItem('user')) || null, 
    isLoading: false,
    errorMessage: ''
  }),

  getters: {
    isAuthenticated: (state) => !!state.token,
    // Getter lấy role nhanh
    userRole: (state) => state.user?.role || null
  },

  actions: {
    async loginUser(credentials) {
      this.isLoading = true;
      this.errorMessage = '';

      try {
        const data = await loginAPI(credentials);
        
        const myToken = data.access_token; 
        const userData = data.user;

        if (myToken && userData) {
          // 1. Cập nhật State Pinia
          this.token = myToken;
          this.user = userData;
          
          // 2. Lưu Token vào Cookie (expires 7 ngày)
          Cookies.set('token', myToken, { expires: 7, path: '/' });
          
          // 3. Lưu toàn bộ Object User (bao gồm role) vào LocalStorage
          // Cần dùng JSON.stringify vì LocalStorage chỉ lưu được String
          localStorage.setItem('user', JSON.stringify(userData));
          
          return { success: true };
        } else {
           throw new Error("Dữ liệu API không hợp lệ");
        }
      } catch (error) {
        this.errorMessage = error.message;
        return { success: false, message: error.message };
      } finally {
        this.isLoading = false;
      }
    },

    logout() {
      // Xóa State
      this.user = null;
      this.token = null;
      
      // Xóa Cookie
      Cookies.remove('token', { path: '/' });
      
      // Xóa LocalStorage
      localStorage.removeItem('user');
    }
  }
});