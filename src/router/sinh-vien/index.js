export default [
  {
    path: "/sinh-vien",
    name: "dashboard-sinh-vien",
    component: () => import("../../views/sinh-vien/DashboardView.vue"),
    meta: { 
      requiresAuth: true,
      parent: "SINH VIÊN",
      title: "BẢNG ĐIỀU KHIỂN"
    },
  },
  {
    path: "/sinh-vien/ho-so-sinh-vien",
    name: "student-profile",
    component: () => import("../../views/sinh-vien/StudentProfileView.vue"),
    meta: { 
      requiresAuth: true,
      parent: "SINH VIÊN",
      title: "HỒ SƠ NGƯỜI DÙNG"
    },
  },
  {
    path: "/sinh-vien/cap-nhat-thong-tin",
    name: "update-info",
    component: () => import("../../views/sinh-vien/UpdateInfoView.vue"),
    meta: { 
      requiresAuth: true,
      parent: "SINH VIÊN",
      title: "CẬP NHẬT THÔNG TIN"
    },
  },
  {
    path: "/sinh-vien/so-tay-sinh-vien",
    name: "student-handbook",
    component: () => import("../../views/sinh-vien/StudentHandbookView.vue"),
    meta: { 
      requiresAuth: true,
      parent: "SINH VIÊN",
      title: "SỔ TAY SINH VIÊN"
    },
  },
  {
    path: "/sinh-vien/lich-hoc-trong-tuan",
    name: "student-schedule",
    component: () => import("../../views/sinh-vien/WeeklyScheduleView.vue"),
    meta: { 
      requiresAuth: true,
      parent: "ĐÀO TẠO",
      title: "LỊCH HỌC TRONG TUẦN"
    },
  },
  {
    path: "/sinh-vien/lich-thi-hoc-ky",
    name: "student-exam-schedule",
    component: () => import("../../views/sinh-vien/ExamScheduleView.vue"),
    meta: { 
      requiresAuth: true,
      parent: "ĐÀO TẠO",
      title: "LỊCH THI HỌC KỲ"
    },
  },
  {
    path: "/sinh-vien/bang-diem-hoc-ky",
    name: "student-grade-report",
    component: () => import("../../views/sinh-vien/GradeReportView.vue"),
    meta: { 
      requiresAuth: true,
      parent: "KẾT QUẢ",
      title: "BẢNG ĐIỂM HỌC KỲ"
    },
  },
  {
    path: "/sinh-vien/bang-diem-toan-khoa",
    name: "student-overall-grade-report",
    component: () => import("../../views/sinh-vien/OverallGradeReportView.vue"),
    meta: { 
      requiresAuth: true,
      parent: "KẾT QUẢ",
      title: "BẢNG ĐIỂM TOÀN KHÓA"
    },
  },
  {
    path: "/sinh-vien/tin-tuc",
    name: "student-news",
    component: () => import("../../views/sinh-vien/NewsView.vue"),
    meta: { 
      requiresAuth: true,
      parent: "CỘNG ĐỒNG",
      title: "TIN TỨC"
    },
  }
];