import { Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';
import ShopPage from 'pages/ShopPage';
import ShoppingCartPage from 'pages/ShoppingCartPage';
import CoupontsPage from 'pages/CouponsPage/CouponsPage';
import HistoryPage from 'pages/HistoryPage/HistoryPage';
import RegisterPage from 'pages/RegisterPage';
import LoginPage from 'pages/LoginPage';
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route path="/MyShopsFront" element={<Navigate to="/shop" replace />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/shopping" element={<ShoppingCartPage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/coupons" element={<CoupontsPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Route>
    </Routes>
  );
};
