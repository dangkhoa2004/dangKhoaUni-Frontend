import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "../store/authStore";
import { useAppStore } from "../store/appStore";
import sinhVienRoutes from "./sinh-vien/index.js";
import giangVienRoutes from "./giang-vien/index.js";
import quanLyRoutes from "./quan-ly/index.js";

const routes = [
  {
    path: "/dang-nhap",
    name: "login",
    component: () => import("../views/LoginView.vue"),
    meta: { requiresGuest: true },
  },
  {
    path: "/trang-chu",
    name: "home",
    component: () => import("../views/DashboardView.vue"),
    meta: { requiresAuth: false },
  },
  ...sinhVienRoutes,
  ...giangVienRoutes,
  ...quanLyRoutes,
  { path: "/", redirect: "/trang-chu" },
  { path: "/:pathMatch(.*)*", redirect: "/trang-chu" },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, from) => {
  const appStore = useAppStore();
  const authStore = useAuthStore();

  appStore.showLoading();

  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    return { name: "login" };
  }

  if (to.meta.requiresGuest && authStore.isAuthenticated) {
    return { path: "/trang-chu" };
  }
});

router.afterEach(() => {
  const appStore = useAppStore();
  setTimeout(() => {
    appStore.hideLoading();
  }, 500);
});

export default router;
