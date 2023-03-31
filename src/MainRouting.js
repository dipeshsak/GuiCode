import {  Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import SettingsPage from "./pages/SettingsPage/SettingsPage";
import UserManagementPage from "./pages/UserManagementPage/UserManagementPage";

const MainRouting = () => {
  return (
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route path="/products" element={<ProductsPage/>} />
        <Route path="/user-management" element={<UserManagementPage/>} />
        <Route path="/settings" element={<SettingsPage/>} />
      </Routes>
  );
};

export default MainRouting;
