import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router' // Import cấu hình router của bạn

// Import file style.css (Nơi chứa 3 dòng @tailwind)
import './style.css' 

const app = createApp(App)

// Đăng ký Pinia (Quản lý state)
app.use(createPinia())

// Đăng ký Router (Quản lý chuyển trang)
app.use(router)

// Gắn toàn bộ ứng dụng vào thẻ <div id="app"> trong file index.html
app.mount('#app')