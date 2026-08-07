import api from './axios';

export interface RegisterPayload {
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
  address?: string;
  pincode?: string;
  alternatePhone?: string;
  adminRole?: boolean; 
}

export interface LoginPayload {
  email: string;
  password: string;
}

// Register API
export async function register(payload: RegisterPayload) {
  const res = await api.post('/auth/register', payload);
  return res.data;
}

// Login API
export async function login(payload: LoginPayload) {
  const res = await api.post('/auth/login', payload);
  return res.data;
}

// Get Logged In User Profile
export async function getMe() {
  const res = await api.get('/auth/me');
  return res.data;
}

// Refresh Token API
export async function refreshToken() {
  const res = await api.post('/auth/refresh');
  return res.data;
}

// Logout API
export async function logout() {
  const res = await api.post('/auth/logout');
  return res.data;
}

// Logout From All Devices API
export async function logoutAll() {
  const res = await api.post('/auth/logout-all');
  return res.data;
}
