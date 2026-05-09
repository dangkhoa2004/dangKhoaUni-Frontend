export default [
  {
    path: "/quan-ly",
    name: "dashboard-quan-ly",
    component: () => import("../../views/quan-ly/DashboardView.vue"),
    meta: { 
      requiresAuth: true,
      parent: "QUẢN LÝ",
      title: "BẢNG ĐIỀU KHIỂN"
    },
  },
  {
    path: "/quan-ly/quan-ly-nguoi-dung",
    name: "manage-users",
    component: () => import("../../views/quan-ly/ManageUsersView.vue"),
    meta: { 
      requiresAuth: true,
      parent: "QUẢN LÝ",
      title: "QUẢN LÝ NGƯỜI DÙNG"
    },
  },
  {
    path: "/quan-ly/thiet-lap-chung",
    name: "general-settings",
    component: () => import("../../views/quan-ly/GeneralSettingsView.vue"),
    meta: { 
      requiresAuth: true,
      parent: "QUẢN LÝ",
      title: "THIẾT LẬP CHUNG"
    },
  }
];