import React, { createContext, useContext, useEffect, useState } from "react";
import * as authApi from "../api/auth";
import type { User } from "../types/user";

type LoginArgs = { email: string; password: string };

type AuthContextType = {
  user: User | null;
  token: string | null;
  loading: boolean;
  login: (payload: LoginArgs) => Promise<User>;
  register: (payload: any) => Promise<any>;
  logout: (redirectTo?: string) => Promise<void>;
  checkAuth: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const checkAuth = async () => {
    try {
      const data = await authApi.getMe();
      if (data?.success && data?.user) {
        setUser(data.user);
      } else {
        setUser(null);
      }
    } catch (err) {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  async function login(payload: LoginArgs): Promise<User> {
    const response = await authApi.login(payload);
    if (!response?.success || !response?.user) {
      throw new Error(response?.message || "Login failed");
    }

    setUser(response.user);

    // 🚀 CRUCIAL FIX: Token ko localstorage me SAVE karna hai, Remove nahi!
    if (response.token) {
      localStorage.setItem("sls_token", response.token);
    }

    return response.user;
  }

  async function register(payload: any) {
    return await authApi.register(payload);
  }

  async function logout(redirectTo: string = "/") {
    try {
      await authApi.logout();
    } catch (error) {
      console.error("Logout Error:", error);
    } finally {
      setUser(null);
      localStorage.removeItem("sls_token");
      window.location.replace(redirectTo);
    }
  }

  const token = localStorage.getItem("sls_token") || (user ? "active_session" : null);

  return (
    <AuthContext.Provider value={{ user, token, loading, login, register, logout, checkAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}