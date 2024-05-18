import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductsScreen from "./screens/ProductsScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RegisterScreen from "./screens/RegisterScreen";
import ShippingPage from "./screens/ShippingPage";
import PrivateRoute from "./components/PrivateRoute";
import PaymentPage from "./screens/PaymentPage";
import PlaceOrderPage from "./screens/PlaceOrderPage";
import OrderPage from "./screens/OrderPage";
import ProfilePage from "./screens/ProfilePage";
import AdminPrivateRoute from "./components/AdminPrivateRoute";

import Dashboard from "./screens/Dashboard";

import ProductEditPage from "./screens/Admin/ProductEditPage";

import UserEdite from "./screens/Admin/UserEdite";
import Homepage from "./screens/Homepage";

import Footer from "./components/footer/Footer";
import FooterBottom from "./components/footer/FooterBottom";
import ShopPage from "./screens/ShopPage";
import NewHeader from "./components/home/header/Header";
import HeaderBottom from "./components/home/header/HeaderBottom";
import AboutPage from "./screens/AboutPage";
import ContactPage from "./screens/ContactPage";
import WishListPage from "./screens/WishListPage";
import Women from "./screens/categories/Women";
import Men from "./screens/categories/Men";
import Kids from "./screens/categories/Kids";
import Travel from "./screens/categories/Travel";

const App = () => {
  return (
    <Router>
      <NewHeader />
      <HeaderBottom />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/shop/search/:keyword" element={<ShopPage />} />
        <Route path="/shop/page/:pageNumber" element={<ShopPage />} />
        <Route
          path="/shop/search/:keyword/page/:pageNumber"
          element={<ShopPage />}
        />
        <Route path="/women" element={<Women />} />
        <Route path="/women/page/:pageNumber" element={<Women />} />
        <Route path="/men" element={<Men />} />
        <Route path="/men/page/:pageNumber" element={<Men />} />
        <Route path="/kids/page/:pageNumber" element={<Kids />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/travel" element={<Travel />} />
        <Route path="/travel/page/:pageNumber" element={<Travel />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/product/:id" element={<ProductsScreen />} />
        <Route path="/cart" element={<CartScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="" element={<PrivateRoute />}>
          <Route path="/shipping" element={<ShippingPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/wishlist" element={<WishListPage />} />
          <Route path="/placeorder" element={<PlaceOrderPage />} />
          <Route path="/order/:id" element={<OrderPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Route>
        <Route path="" element={<AdminPrivateRoute />}>
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/product/:id/edit" element={<ProductEditPage />} />
          <Route path="/admin/user/:id/edit" element={<UserEdite />} />
        </Route>
      </Routes>
      <Footer />
      <FooterBottom />
      <ToastContainer />
    </Router>
  );
};

export default App;
