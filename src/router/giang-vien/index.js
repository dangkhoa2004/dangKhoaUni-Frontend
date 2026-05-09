export default [
  {
    path: "/giang-vien",
    name: "dashboard-giang-vien",
    component: () => import("../../views/giang-vien/DashboardView.vue"),
    meta: { 
      requiresAuth: true,
      parent: "GIẢNG VIÊN",
      title: "BẢNG ĐIỀU KHIỂN"
    },
  },
  {
    path: "/giang-vien/lop-hoc-phan-cong",
    name: "class-assignment",
    component: () => import("../../views/giang-vien/ClassAssignmentView.vue"),
    meta: { 
      requiresAuth: true,
      parent: "GIẢNG VIÊN",
      title: "LỚP HỌC PHÂN CÔNG"
    },
  },
  {
    path: "/giang-vien/nhap-diem-sinh-vien",
    name: "enter-student-grades",
    component: () => import("../../views/giang-vien/EnterStudentGradesView.vue"),
    meta: { 
      requiresAuth: true,
      parent: "GIẢNG VIÊN",
      title: "NHẬP ĐIỂM SINH VIÊN"
    },
  }
  
];