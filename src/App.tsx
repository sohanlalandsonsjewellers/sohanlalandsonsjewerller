import React from "react";
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

// Admin Analytics
import AdminAnalytics from "./components/Admin/BEAnalytics/AdminAnalytics";
import BusinessDashboard from "./components/Admin/BEAnalytics/BusinessDashboard";
import RevenueTrendChart from "./components/Admin/BEAnalytics/RevenueTrendChart";

// Admin AI Analytics
import BusinessSummaryPage from "./components/Admin/AiAnalytics/pages/BusinessSummaryPage";
import CustomerAnalyticsPage from "./components/Admin/AiAnalytics/pages/CustomerAnalyticsPage";
import InventoryAnalyticsPage from "./components/Admin/AiAnalytics/pages/InventoryAnalyticsPage";
import ProductPerformancePage from "./components/Admin/AiAnalytics/pages/ProductPerformancePage";
import PriceOptimizationPage from "./components/Admin/AiAnalytics/pages/PriceOptimizationPage";
import ReorderAnalyticsPage from "./components/Admin/AiAnalytics/pages/ReorderAnalyticsPage";
import SalesForecastPage from "./components/Admin/AiAnalytics/pages/SalesForecastPage";
import DemandForecastPage from "./components/Admin/AiAnalytics/pages/DemandForecastPage";
import ExecutiveDashboardPage from "./components/Admin/AiAnalytics/pages/ExecutiveDashboardPage";

// Helper Component for Admin Route Protection
// Helper Component for Admin Route Protection
const AdminRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useAuth();

  if (loading) return null;

  if (!user || !user.adminRole) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default function App() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "#FDFBF7",
        }}
      >
        <p
          style={{
            fontFamily: "Playfair Display, serif",
            color: "#4A0E17",
            fontSize: "1.2rem",
          }}
        >
          Loading Sohan Lal & Sons...
        </p>
      </div>
    );
  }

  const isAuthenticated = !!user;
  const isAdmin = user?.adminRole === true;

  return (
    <>
      <PWAInstallPrompt />
      <ScrollToTop />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        style={{ top: "50%", transform: "translateY(-50%)" }}
      />

      <Routes>
        {/* ROOT ROUTE */}
        <Route
          path="/"
          element={
            isAdmin ? <Navigate to="/admin/users" replace /> : <UserHome />
          }
        />
        <Route path="/user" element={<UserHome />} />

        {/* AUTH ROUTES */}
        <Route
          path="/login"
          element={
            isAuthenticated ? (
              isAdmin ? (
                <Navigate to="/admin/users" replace />
              ) : (
                <Navigate to="/" replace />
              )
            ) : (
              <LoginPage />
            )
          }
        />
        <Route
          path="/register"
          element={
            isAuthenticated ? (
              isAdmin ? (
                <Navigate to="/admin/users" replace />
              ) : (
                <Navigate to="/" replace />
              )
            ) : (
              <RegisterPage />
            )
          }
        />

        {/* PUBLIC USER ROUTES */}
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/collection/:name" element={<CollectionLanding />} />
        <Route path="/product/:id" element={<ProductDetails />} />

        {/* ADMIN ROUTES PROTECTED */}
        <Route
          path="/admin/users"
          element={
            <AdminRoute>
              <UserList />
            </AdminRoute>
          }
        />
        <Route
          path="/admin/users/create"
          element={
            <AdminRoute>
              <UserCreate />
            </AdminRoute>
          }
        />
        <Route
          path="/admin/users/edit/:id"
          element={
            <AdminRoute>
              <UserEdit />
            </AdminRoute>
          }
        />

        <Route
          path="/admin/products"
          element={
            <AdminRoute>
              <ProductList />
            </AdminRoute>
          }
        />
        <Route
          path="/admin/products/create"
          element={
            <AdminRoute>
              <ProductCreate />
            </AdminRoute>
          }
        />
        <Route
          path="/admin/products/edit/:id"
          element={
            <AdminRoute>
              <ProductEdit />
            </AdminRoute>
          }
        />

        <Route
          path="/admin/bills"
          element={
            <AdminRoute>
              <BillList />
            </AdminRoute>
          }
        />
        <Route
          path="/admin/bills/create"
          element={
            <AdminRoute>
              <BillCreate />
            </AdminRoute>
          }
        />
        <Route
          path="/admin/bills/edit/:id"
          element={
            <AdminRoute>
              <BillEdit />
            </AdminRoute>
          }
        />
        <Route
          path="/admin/bills/view/:id"
          element={
            <AdminRoute>
              <BillView />
            </AdminRoute>
          }
        />
        <Route
          path="/admin/orders"
          element={
            <AdminRoute>
              <OrderList />
            </AdminRoute>
          }
        />
        <Route
          path="/admin/feedbacks"
          element={
            <AdminRoute>
              <FeedbackList />
            </AdminRoute>
          }
        />

        {/* PROTECTED USER ROUTES */}
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <MyProfile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/my-orders"
          element={
            <ProtectedRoute>
              <MyOrders />
            </ProtectedRoute>
          }
        />
        <Route
          path="/notifications"
          element={
            <ProtectedRoute>
              <Notifications />
            </ProtectedRoute>
          }
        />
        <Route
          path="/checkout"
          element={
            <ProtectedRoute>
              <CheckoutPage />
            </ProtectedRoute>
          }
        />

        {/* POLICY ROUTES */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/shipping-policy" element={<ShippingPolicy />} />
        <Route path="/exchange-policy" element={<ExchangePolicy />} />
        <Route path="/faqs" element={<FAQs />} />

        {/* ANALYTICS ROUTE */}
        <Route
          path="/admin/analytics"
          element={
            <AdminRoute>
              <AdminAnalytics />
            </AdminRoute>
          }
        />
        <Route
          path="/admin/business"
          element={
            <AdminRoute>
              <BusinessDashboard />
            </AdminRoute>
          }
        />
        <Route
          path="/admin/revenue-trend"
          element={
            <AdminRoute>
              <RevenueTrendChart />
            </AdminRoute>
          }
        />

        {/* AI ANALYTICS ROUTE */}
        <Route
          path="/admin/ai-dashboard"
          element={
            <AdminRoute>
              <BusinessSummaryPage />
            </AdminRoute>
          }
        />
        <Route
          path="/admin/customer-analytics"
          element={
            <AdminRoute>
              <CustomerAnalyticsPage />
            </AdminRoute>
          }
        />
        <Route
          path="/admin/inventory-analytics"
          element={
            <AdminRoute>
              <InventoryAnalyticsPage />
            </AdminRoute>
          }
        />
        <Route
          path="/admin/product-performance"
          element={
            <AdminRoute>
              <ProductPerformancePage />
            </AdminRoute>
          }
        />
        <Route
          path="/admin/price-optimization"
          element={
            <AdminRoute>
              <PriceOptimizationPage />
            </AdminRoute>
          }
        />
        <Route
          path="/admin/reorder-analytics"
          element={
            <AdminRoute>
              <ReorderAnalyticsPage />
            </AdminRoute>
          }
        />
        <Route
          path="/admin/sales-forecast"
          element={
            <AdminRoute>
              <SalesForecastPage />
            </AdminRoute>
          }
        />
        <Route
          path="/admin/demand-forecast"
          element={
            <AdminRoute>
              <DemandForecastPage />
            </AdminRoute>
          }
        />
        <Route
          path="/admin/executive-dashboard"
          element={
            <AdminRoute>
              <ExecutiveDashboardPage />
            </AdminRoute>
          }
        />

        {/* FALLBACK */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}