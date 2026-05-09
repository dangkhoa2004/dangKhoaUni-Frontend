// src/store/authStore.js
import { defineStore } from 'pinia';
import { loginAPI } from '../api/authApi';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode'; // Import thư viện giải mã

export const useAuthStore = defineStore('auth', {
  state: () => {
    const token = Cookies.get('token') || null;
    let user = null;

    // Nếu đã có token trong cookie, giải mã để lấy user ngay lập tức
    if (token) {
      try {
        user = jwtDecode(token);
      } catch (error) {
        console.error("Token không hợp lệ:", error);
        Cookies.remove('token');
      }
    }

    return {
      token: token,
      user: user, // Thông tin user giờ đây được lấy từ Token
      isLoading: false,
      errorMessage: ''
    };
  },

  getters: {
    isAuthenticated: (state) => !!state.token,
    userRole: (state) => state.user?.role || null // Role lấy trực tiếp từ Payload của Token
  },

  actions: {
    async loginUser(credentials) {
      this.isLoading = true;
      this.errorMessage = '';

      try {
        const data = await loginAPI(credentials);
        const myToken = data.access_token; 

        if (myToken) {
          // 1. Lưu Token vào Cookie
          Cookies.set('token', myToken, { expires: 7, path: '/' });
          
          // 2. Giải mã token để lấy thông tin user và cập nhật State
          this.token = myToken;
          this.user = jwtDecode(myToken); 
          
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
      this.user = null;
      this.token = null;
      Cookies.remove('token', { path: '/' });
    }
  }
});