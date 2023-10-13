import React from "react";
import { Home } from "../pages/Home/Home";
import { Cart } from "../pages/Cart/Cart";
import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/auth/Login/Login";
import { ProductListing } from "../pages/ProductListing/ProductListing";
import { ProductDetails } from "../pages/ProductDetails/ProductDetails";
import { RequiresAuth } from "../components/requires-auth/RequiresAuth";
import { Signup } from "../pages/auth/Signup/Signup";
import { Logout } from "../pages/auth/Logout/Logout";
import { Checkout } from "../pages/Checkout/Checkout";
import { Wishlist } from "../pages/Wishlist/Wishlist";
import { UserProfile } from "../pages/UserProfile/UserProfile";
import { Profile } from "../pages/UserProfile/Profile/Profile";
import { Addresses } from "../pages/UserProfile/Addresses/Addresses";
import { Orders } from "../pages/UserProfile/Orders/Orders";
import { PageNotFound } from "../pages/PageNotFound/PageNotFound";
import ShowConfig from "../pages/Shoe/ShowConfig"
import Sales from "../pages/UserProfile/sales/Sales";
import Customizer from '../pages/Customizer';
import Canvas from '../canvas/index';
import Homes from '../pages/Homes';
import Layout from '../components/shared/Layout'
import Register from '../pages/Register'
import Dashboard from '../pages/Dashboard'
import Products from '../pages/Products'
import Order from '../pages/Orders'
import User from '../pages/User'
export const NavRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/cart"
        element={
          <RequiresAuth>
            <Cart />
          </RequiresAuth>
        }
      />
      <Route
        path="/wishlist"
        element={
          <RequiresAuth>
            <Wishlist />
          </RequiresAuth>
        }
      />
      <Route
        path="/customize/shoe"
        element={
          <RequiresAuth>
            <ShowConfig />
          </RequiresAuth>
        }
      />
      <Route
        path="/customize/shirt"
        element={
          <RequiresAuth>
            <Homes />
            <Canvas />
            <Customizer />
          </RequiresAuth>
        }
      />
      <Route path="*" element={<PageNotFound />} />
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/product-listing" element={<ProductListing />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/product-details/:productId" element={<ProductDetails />} />
      
      <Route
        path="/checkout"
        element={
          <RequiresAuth>
            <Checkout />
          </RequiresAuth>
        }
      />
      
      <Route path="/profile" element={<UserProfile />}>
        <Route
          path="/profile/"
          element={
            <RequiresAuth>
              <Profile />
            </RequiresAuth>
          }
        />
        <Route path="/profile/orders" element={<Orders />} />
        <Route path="/profile/addresses" element={<Addresses />} />
        <Route path="/profile/sales" element={<Sales />} />

      </Route>
      
                <Route path="/admin" element={<Layout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="/admin/products" element={<Products />} />
                    <Route path="/admin/orders" element={<Order />} />
                    <Route path="/admin/customers" element={<User/>}/>
                </Route>
                <Route path="/register" element={<Register />} />
          
    </Routes>
  );
};
