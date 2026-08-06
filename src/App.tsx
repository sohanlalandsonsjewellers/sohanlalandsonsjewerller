import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import PWAInstallPrompt from "./components/PWAInstallPrompt";
import ScrollToTop from "./components/Users/Banner/ScrollToTop";
import WishlistPage from "./routes/WishlistPage";

// Auth
import { useAuth } from "./contexts/AuthProvider";

// Public Pages
import LoginPage from "./routes/LoginPage";
import RegisterPage from "./routes/RegisterPage";
import UserHome from "./routes/UserHome";

// User
import ProductDetails from "./routes/ProductDetails";
import CollectionLanding from "./routes/CollectionLanding";

// Admin Pages
import UserList from "./routes/Admin/UserList";
import UserEdit from "./routes/Admin/UserEdit";
import UserCreate from "./routes/Admin/UserCreate";

import ProductList from "./routes/Admin/ProductList";
import ProductCreate from "./routes/Admin/ProductCreate";
import ProductEdit from "./routes/Admin/ProductEdit";

import BillList from "./routes/Admin/BillList";
import BillCreate from "./routes/Admin/BillCreate";
import BillEdit from "./routes/Admin/BillEdit";
import BillView from "./routes/Admin/BillView";
import OrderList from "./routes/Admin/OrderList";
import CheckoutPage from "./components/Users/Cart/CheckoutPage";
import ProtectedRoute from "./routes/ProtectedRoute";

import FeedbackList from "./routes/Admin/FeedbackList";
import { ToastContainer } from "react-toastify";
import MyOrders from "./routes/MyOrders";
import MyProfile from "./routes/MyProfile";
import Notifications from "./routes/Notifications";

// Policy Pages
import PrivacyPolicy from "./components/Users/Footer/pages/PrivacyPolicy";
import TermsAndConditions from "./components/Users/Footer/pages/TermsAndConditions";
import ShippingPolicy from "./components/Users/Footer/pages/ShippingPolicy";
import ExchangePolicy from "./components/Users/Footer/pages/ExchangePolicy";
import FAQs from "./components/Users/Footer/pages/FAQs";

//AdminAnalytics
import AdminAnalytics from "./components/Admin/BEAnalytics/AdminAnalytics";
import BusinessDashboard from "./components/Admin/BEAnalytics/BusinessDashboard";
import RevenueTrendChart from "./components/Admin/BEAnalytics/RevenueTrendChart";

//AdminAiAnalytics

import BusinessSummaryPage from "./components/Admin/AiAnalytics/pages/BusinessSummaryPage";
import CustomerAnalyticsPage from "./components/Admin/AiAnalytics/pages/CustomerAnalyticsPage";
import InventoryAnalyticsPage from "./components/Admin/AiAnalytics/pages/InventoryAnalyticsPage";
import ProductPerformancePage from "./components/Admin/AiAnalytics/pages/ProductPerformancePage";
import PriceOptimizationPage from "./components/Admin/AiAnalytics/pages/PriceOptimizationPage";
import ReorderAnalyticsPage from "./components/Admin/AiAnalytics/pages/ReorderAnalyticsPage";
import SalesForecastPage from "./components/Admin/AiAnalytics/pages/SalesForecastPage";
import DemandForecastPage from "./components/Admin/AiAnalytics/pages/DemandForecastPage";
import ExecutiveDashboardPage from "./components/Admin/AiAnalytics/pages/ExecutiveDashboardPage";



export default function App() {
  const { token, user } = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, [token]);

  if (loading) return null;

  return (
    <>
      <PWAInstallPrompt />
      <ScrollToTop />
      <ToastContainer position="top-right" autoClose={3000} style={{ top: '50%', transform: 'translateY(-50%)' }} />

      <Routes>
        {/* PUBLIC ROUTES */}
        <Route path="/login" element={token ? <Navigate to="/" replace /> : <LoginPage />} />
        <Route path="/register" element={token ? <Navigate to="/" replace /> : <RegisterPage />} />

        {/* ROOT REDIRECTOR */}
        <Route path="/" element={
          !token ? (
            <UserHome />
          ) : (
            user?.adminRole ? <Navigate to="/admin/users" replace /> : <UserHome />
          )
        } />

        {/* USER ROUTES */}
        <Route path="/user" element={<UserHome />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/collection/:name" element={<CollectionLanding />} />
        <Route path="/product/:id" element={<ProductDetails />} />

        {/* ADMIN ROUTES */}
        <Route path="/admin/users" element={user?.adminRole ? <UserList /> : <Navigate to="/" replace />} />
        <Route path="/admin/users/create" element={user?.adminRole ? <UserCreate /> : <Navigate to="/" replace />} />
        <Route path="/admin/users/edit/:id" element={user?.adminRole ? <UserEdit /> : <Navigate to="/" replace />} />

        <Route path="/admin/products" element={user?.adminRole ? <ProductList /> : <Navigate to="/" replace />} />
        <Route path="/admin/products/create" element={user?.adminRole ? <ProductCreate /> : <Navigate to="/" replace />} />
        <Route path="/admin/products/edit/:id" element={user?.adminRole ? <ProductEdit /> : <Navigate to="/" replace />} />

        <Route path="/admin/bills" element={user?.adminRole ? <BillList /> : <Navigate to="/" replace />} />
        <Route path="/admin/bills/create" element={user?.adminRole ? <BillCreate /> : <Navigate to="/" replace />} />
        <Route path="/admin/bills/edit/:id" element={user?.adminRole ? <BillEdit /> : <Navigate to="/" replace />} />
        <Route path="/admin/bills/view/:id" element={user?.adminRole ? <BillView /> : <Navigate to="/" replace />} />
        <Route path="/admin/orders" element={user?.adminRole ? <OrderList /> : <Navigate to="/" replace />} />

        {/* PROTECTED USER ROUTES */}
        <Route path="/profile" element={<ProtectedRoute><MyProfile /></ProtectedRoute>} />
        <Route path="/my-orders" element={<ProtectedRoute><MyOrders /></ProtectedRoute>} />
        <Route path="/notifications" element={<ProtectedRoute><Notifications /></ProtectedRoute>} />
        <Route path="/checkout" element={<ProtectedRoute><CheckoutPage /></ProtectedRoute>} />

        <Route path="/admin/feedbacks" element={user?.adminRole ? <FeedbackList /> : <Navigate to="/" replace />} />

        {/* POLICY ROUTES — Public */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/shipping-policy" element={<ShippingPolicy />} />
        <Route path="/exchange-policy" element={<ExchangePolicy />} />
        <Route path="/faqs" element={<FAQs />} />


        {/* ANALYTICS ROUTE */}
        <Route path="/admin/analytics" element={user?.adminRole ? <AdminAnalytics /> : <Navigate to="/" replace />} />
        <Route path="/admin/business" element={user?.adminRole ? <BusinessDashboard /> : <Navigate to="/" replace />} />
        <Route path="/admin/revenue-trend" element={user?.adminRole ? <RevenueTrendChart /> : <Navigate to="/" replace />} />

        {/* AI ANALYTICS ROUTE */}
        {/* AI ANALYTICS ROUTE */}

        <Route
          path="/admin/ai-dashboard"
          element={
            user?.adminRole
              ? <BusinessSummaryPage />
              : <Navigate to="/" replace />
          }
        />

        <Route
          path="/admin/customer-analytics"
          element={
            user?.adminRole
              ? <CustomerAnalyticsPage />
              : <Navigate to="/" replace />
          }
        />

        <Route
          path="/admin/inventory-analytics"
          element={
            user?.adminRole
              ? <InventoryAnalyticsPage />
              : <Navigate to="/" replace />
          }
        />

        <Route
          path="/admin/product-performance"
          element={
            user?.adminRole
              ? <ProductPerformancePage />
              : <Navigate to="/" replace />
          }
        />

        <Route
          path="/admin/price-optimization"
          element={
            user?.adminRole
              ? <PriceOptimizationPage />
              : <Navigate to="/" replace />
          }
        />

        <Route
          path="/admin/reorder-analytics"
          element={
            user?.adminRole
              ? <ReorderAnalyticsPage />
              : <Navigate to="/" replace />
          }
        />

        <Route
          path="/admin/sales-forecast"
          element={
            user?.adminRole
              ? <SalesForecastPage />
              : <Navigate to="/" replace />
          }
        />

        <Route
          path="/admin/demand-forecast"
          element={
            user?.adminRole
              ? <DemandForecastPage />
              : <Navigate to="/" replace />
          }
        />

        <Route
          path="/admin/executive-dashboard"
          element={
            user?.adminRole
              ? <ExecutiveDashboardPage />
              : <Navigate to="/" replace />
          }
        />

        {/* FALLBACK */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}
