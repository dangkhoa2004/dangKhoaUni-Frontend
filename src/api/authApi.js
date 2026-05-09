// src/api/authApi.js
const BASE_URL = 'http://127.0.0.1:8000/api';

export const loginAPI = async (credentials) => {
  const response = await fetch(`${BASE_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(credentials)
  });

  const data = await response.json();

  // Nếu HTTP status code không nằm trong khoảng 200-299
  if (!response.ok) {
    throw new Error(data.message || 'Đăng nhập thất bại. Vui lòng kiểm tra lại thông tin.');
  }

  return data;
};