import HomeScreen from "./screens/HomeScreen";
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
import Header from "./components/Header";

import OrderList from "./screens/Admin/OrderList";
import ProductListPage from "./screens/Admin/ProductListPage";
import Dashboard from "./screens/Dashboard";
import ProductForm from "./screens/Admin/AddProduct";
import ProductEditPage from "./screens/Admin/ProductEditPage";
import UserList from "./screens/Admin/UserList";
import UserEdite from "./screens/Admin/UserEdite";
import Navbar from "./components/Navbar";
import Homepage from "./screens/Homepage";

import Footer from "./components/footer/Footer";
import FooterBottom from "./components/footer/FooterBottom";
import ShopPage from "./screens/ShopPage";

const App = () => {
  return (
    <Router>
      {/* <Header /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/product/:id" element={<ProductsScreen />} />
        <Route path="/cart" element={<CartScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="" element={<PrivateRoute />}>
          <Route path="/shipping" element={<ShippingPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/placeorder" element={<PlaceOrderPage />} />
          <Route path="/order/:id" element={<OrderPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Route>
        <Route path="" element={<AdminPrivateRoute />}>
          <Route path="/admin/orderlist" element={<OrderList />} />
          <Route path="/admin/productlist" element={<ProductListPage />} />
          <Route path="/admin/addproduct" element={<ProductForm />} />
          <Route path="/admin/product/:id/edit" element={<ProductEditPage />} />
          <Route path="/admin/userlist" element={<UserList />} />
          <Route path="/admin/user/:id/edit" element={<UserEdite />} />
        </Route>
      </Routes>
      {/* <Footer /> */}
      <Footer />
      <FooterBottom />
      <ToastContainer />
    </Router>
  );
};

export default App;
