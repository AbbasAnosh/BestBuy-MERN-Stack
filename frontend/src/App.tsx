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
import Footer from "./components/Footer";
import OrderList from "./screens/Admin/OrderList";
import ProductListPage from "./screens/Admin/ProductListPage";
import Dashboard from "./screens/Dashboard";
import ProductForm from "./screens/Admin/AddProduct";
import ProductEditPage from "./screens/Admin/ProductEditPage";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
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
        </Route>
      </Routes>
      <Footer />
      <ToastContainer />
    </Router>
  );
};

export default App;
