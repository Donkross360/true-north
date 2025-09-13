import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useAuth } from './hooks/useAuth';

// Layout Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Public Pages
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import CartPage from './pages/CartPage';

// Admin Pages
import AdminLayout from './pages/admin/AdminLayout';
import AdminDashboard from './pages/admin/AdminDashboard';

// Placeholder components for missing pages
const ProductPage = () => <div className="min-h-screen bg-gray-50 py-16 px-4"><div className="max-w-7xl mx-auto text-center"><h1 className="text-3xl font-bold text-gray-900 mb-4">Product Page</h1><p className="text-gray-600">Product details coming soon...</p></div></div>;
const CheckoutPage = () => <div className="min-h-screen bg-gray-50 py-16 px-4"><div className="max-w-2xl mx-auto text-center"><h1 className="text-3xl font-bold text-gray-900 mb-4">Checkout</h1><p className="text-gray-600">Secure checkout process coming soon...</p></div></div>;
const LoginPage = () => <div className="min-h-screen bg-gray-50 py-16 px-4"><div className="max-w-md mx-auto text-center"><h1 className="text-3xl font-bold text-gray-900 mb-4">Login</h1><p className="text-gray-600">Authentication system coming soon...</p></div></div>;
const RegisterPage = () => <div className="min-h-screen bg-gray-50 py-16 px-4"><div className="max-w-md mx-auto text-center"><h1 className="text-3xl font-bold text-gray-900 mb-4">Register</h1><p className="text-gray-600">User registration coming soon...</p></div></div>;
const AccountPage = () => <div className="min-h-screen bg-gray-50 py-16 px-4"><div className="max-w-4xl mx-auto text-center"><h1 className="text-3xl font-bold text-gray-900 mb-4">My Account</h1><p className="text-gray-600">Customer account dashboard coming soon...</p></div></div>;
const BlogPage = () => <div className="min-h-screen bg-gray-50 py-16 px-4"><div className="max-w-4xl mx-auto text-center"><h1 className="text-3xl font-bold text-gray-900 mb-4">Blog</h1><p className="text-gray-600">Tech news and buying guides coming soon...</p></div></div>;
const HelpPage = () => <div className="min-h-screen bg-gray-50 py-16 px-4"><div className="max-w-4xl mx-auto text-center"><h1 className="text-3xl font-bold text-gray-900 mb-4">Help Center</h1><p className="text-gray-600">Support documentation coming soon...</p></div></div>;
const ContactPage = () => <div className="min-h-screen bg-gray-50 py-16 px-4"><div className="max-w-4xl mx-auto text-center"><h1 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h1><p className="text-gray-600">Get in touch with our team coming soon...</p></div></div>;

// Admin placeholder components
const AdminProducts = () => <div className="text-center py-16"><h2 className="text-2xl font-bold text-gray-900 mb-4">Product Management</h2><p className="text-gray-600">Inventory management system coming soon...</p></div>;
const AdminOrders = () => <div className="text-center py-16"><h2 className="text-2xl font-bold text-gray-900 mb-4">Order Management</h2><p className="text-gray-600">Order processing system coming soon...</p></div>;
const AdminCustomers = () => <div className="text-center py-16"><h2 className="text-2xl font-bold text-gray-900 mb-4">Customer Management</h2><p className="text-gray-600">Customer relationship management coming soon...</p></div>;
const AdminContent = () => <div className="text-center py-16"><h2 className="text-2xl font-bold text-gray-900 mb-4">Content Management</h2><p className="text-gray-600">CMS for blog and pages coming soon...</p></div>;
const AdminPromotions = () => <div className="text-center py-16"><h2 className="text-2xl font-bold text-gray-900 mb-4">Promotions</h2><p className="text-gray-600">Coupon and discount management coming soon...</p></div>;
const AdminReviews = () => <div className="text-center py-16"><h2 className="text-2xl font-bold text-gray-900 mb-4">Review Management</h2><p className="text-gray-600">Product review moderation coming soon...</p></div>;
const AdminAnalytics = () => <div className="text-center py-16"><h2 className="text-2xl font-bold text-gray-900 mb-4">Analytics</h2><p className="text-gray-600">Detailed sales and performance analytics coming soon...</p></div>;
const AdminSettings = () => <div className="text-center py-16"><h2 className="text-2xl font-bold text-gray-900 mb-4">Settings</h2><p className="text-gray-600">System configuration coming soon...</p></div>;

// Protected Route Component
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, isAdmin } = useAuth();
  
  if (!user || !isAdmin) {
    return <Navigate to="/login" replace />;
  }
  
  return <>{children}</>;
};

// Public Layout Component
const PublicLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <main className="flex-1">
      {children}
    </main>
    <Footer />
  </div>
);

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<PublicLayout><HomePage /></PublicLayout>} />
          <Route path="/shop" element={<PublicLayout><ShopPage /></PublicLayout>} />
          <Route path="/shop/:category" element={<PublicLayout><ShopPage /></PublicLayout>} />
          <Route path="/product/:slug" element={<PublicLayout><ProductPage /></PublicLayout>} />
          <Route path="/cart" element={<PublicLayout><CartPage /></PublicLayout>} />
          <Route path="/checkout" element={<PublicLayout><CheckoutPage /></PublicLayout>} />
          <Route path="/login" element={<PublicLayout><LoginPage /></PublicLayout>} />
          <Route path="/register" element={<PublicLayout><RegisterPage /></PublicLayout>} />
          <Route path="/account/*" element={<PublicLayout><AccountPage /></PublicLayout>} />
          <Route path="/blog" element={<PublicLayout><BlogPage /></PublicLayout>} />
          <Route path="/help" element={<PublicLayout><HelpPage /></PublicLayout>} />
          <Route path="/contact" element={<PublicLayout><ContactPage /></PublicLayout>} />

          {/* Admin Routes */}
          <Route path="/admin" element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }>
            <Route index element={<AdminDashboard />} />
            <Route path="products" element={<AdminProducts />} />
            <Route path="orders" element={<AdminOrders />} />
            <Route path="customers" element={<AdminCustomers />} />
            <Route path="content" element={<AdminContent />} />
            <Route path="promotions" element={<AdminPromotions />} />
            <Route path="reviews" element={<AdminReviews />} />
            <Route path="analytics" element={<AdminAnalytics />} />
            <Route path="settings" element={<AdminSettings />} />
          </Route>

          {/* Demo Routes */}
          <Route path="/admin-demo" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="products" element={<AdminProducts />} />
            <Route path="orders" element={<AdminOrders />} />
            <Route path="customers" element={<AdminCustomers />} />
            <Route path="content" element={<AdminContent />} />
            <Route path="promotions" element={<AdminPromotions />} />
            <Route path="reviews" element={<AdminReviews />} />
            <Route path="analytics" element={<AdminAnalytics />} />
            <Route path="settings" element={<AdminSettings />} />
          </Route>
        </Routes>

        <Toaster
          position="bottom-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#363636',
              color: '#fff',
            },
            success: {
              duration: 3000,
              style: {
                background: '#10B981',
              },
            },
            error: {
              duration: 5000,
              style: {
                background: '#EF4444',
              },
            },
          }}
        />
      </div>
    </Router>
  );
}

export default App;