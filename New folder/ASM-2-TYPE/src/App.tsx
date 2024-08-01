import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import instance from "./apis";
import "./App.css";
import AdminLayout from "./components/AdminLayout";
import ClientLayout from "./components/ClientLayout";
import { Product } from "./interfaces/Product";
import Dashboard from "./pages/admin/Dashboard";
import ProductForm from "./pages/admin/ProductForm";
import AuthForm from "./pages/AuthForm";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cartpage";
import UserList from "./pages/admin/User";
import Shop from "./pages/Shop";
import Orderpage from "./pages/Orderpage";

function App() {
  return (
    <>
      <Routes>
        {/* Client */}
        <Route path="/" element={<ClientLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product-detail/:id" element={<ProductDetail />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/order" element={<Orderpage />} />
        </Route>

        {/* Admin */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="/admin/product-add" element={<ProductForm />} />
          <Route path="/admin/product-edit/:id" element={<ProductForm />} />
          <Route path="/admin/user" element={<UserList />} />
        </Route>

        <Route path="/login" element={<AuthForm isLogin />} />
        <Route path="/register" element={<AuthForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
