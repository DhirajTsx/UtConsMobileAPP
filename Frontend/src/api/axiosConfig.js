import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

// ─────────────────────────────────────────────────────────────
// 🚀 Backend hosted on Vercel — works for Web, Android & iOS
// ─────────────────────────────────────────────────────────────
const API_URL = 'https://ut-cons-mobile-app.vercel.app/api';

const api = axios.create({
  baseURL: API_URL,
  timeout: 15000, // 15 second timeout (network latency for hosted API)
  headers: {
    'Content-Type': 'application/json',
  },
});

// Attach JWT token to every request automatically
api.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('userToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Global response error handler
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.code === 'ECONNABORTED') {
      console.error('Request timeout — backend unreachable at:', API_URL);
    } else if (!error.response) {
      console.error('Network error — backend unreachable at:', API_URL);
    }
    return Promise.reject(error);
  }
);

export default api;
