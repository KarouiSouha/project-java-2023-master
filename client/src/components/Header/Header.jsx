import "./Header.css";
import { CgHeart } from "react-icons/cg";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { GrSearch } from "react-icons/gr";
import { useData } from "../../contexts/DataProvider";
import { useAuth } from "../../contexts/AuthProvider";
import { CgShoppingCart } from "react-icons/cg";
import { useUserData } from "../../contexts/UserDataProvider";
import { SiTaichilang } from "react-icons/si";

export const Header = () => {
  const { auth } = useAuth();
  const { dispatch } = useData();
  const navigate = useNavigate();
  const { userDataState } = useUserData();
  const [showHamburger, setShowHamburger] = useState(true);
  const getActiveStyle = ({ isActive }) => {
    return { color: isActive ? "white" : "" };
  };

  const totalProductsInCart = userDataState.cartProducts?.reduce(
    (acc, curr) => {
      return acc + curr.qty;
    },
    0
  );

  const isProductInCart = () => (Number(totalProductsInCart) ? true : false);

  const totalProductsInWishlist = userDataState.wishlistProducts.length;

  const isProductInWishlist = () =>
    Number(totalProductsInWishlist) ? true : false;


    const [showDropdown, setShowDropdown] = useState(false);

    const handleCustomizeClick = () => {
      setShowDropdown(!showDropdown);
    };

    const handleOptionClick = (option) => {
      setShowDropdown(false);
      // You can navigate to the appropriate component based on the selected option here
      if (option === "t-shirt") {
        navigate("/t-shirt");
      } else if (option === "shoe") {
        navigate("/shoe");
      }
    };

  return (
    <nav className="bg-primary-black ">
      <div className="nav-logo-home-button">
        <NavLink style={getActiveStyle} to="/">
          <img src="/assets/icons/logo.png" alt="logo" className="w-[150px] " />
        </NavLink>
      </div>

      <div className="nav-input-search">
        <input
          onChange={(e) =>
            dispatch({ type: "SEARCH", payload: e.target.value })
          }
          onKeyDown={(e) => {
            e.key === "Enter" && navigate("/product-listing");
          }}
          placeholder="Search"
        />
        <button>
          <GrSearch />
        </button>
      </div>

      <div
        className={
          !showHamburger
            ? "nav-link-container-mobile nav-link-container"
            : "nav-link-container"
        }
      >
        <NavLink
          onClick={() => setShowHamburger(true)}
          style={getActiveStyle}
          to="/product-listing"
        >
          Explore
        </NavLink>
        <NavLink
          onClick={() => setShowHamburger(true)}
          style={getActiveStyle}
          to={auth.isAuth ?  auth.id==1?"/admin": "/profile": "/login"}
        >
          {!auth.isAuth ? "Login" : "Profile"}
        </NavLink>


        <div className="relative inline-block text-left">
  <div>
    <button
      onClick={handleCustomizeClick}
      className="text-white hover:text-gray-300 focus:outline-none"
    >
      Customize
    </button>
  </div>
  {showDropdown && (
    <div className=" origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100">
      <NavLink
        onClick={() => handleOptionClick("t-shirt")}
        to="/customize/shirt"
        className=" px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex whitespace-nowrap"
      >
        T-shirt
        <img src="/shirt11-5-49.png" alt="" /> 

      </NavLink>
      <NavLink
        onClick={() => handleOptionClick("shoe")}
        to="/customize/shoe"
        className=" px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex"
      >
        
        Shoe
       <img src="/shoe11-48-26.png" alt="" /> 
      </NavLink>
    </div>
  )}
</div>
        <NavLink
          onClick={() => setShowHamburger(true)}
          style={getActiveStyle}
          to="wishlist"
        >
          <span>{!showHamburger ? "Wishlist" : ""}</span>
          <CgHeart size={25} className="wishlist" />{" "}
          {isProductInWishlist() && (
            <span className="cart-count cart-count-mobile">
              {totalProductsInWishlist}
            </span>
          )}
        </NavLink>

        <NavLink
          onClick={() => setShowHamburger(true)}
          style={getActiveStyle}
          to="/cart"
        >
          <span>{!showHamburger ? "Cart" : ""}</span>
          <CgShoppingCart size={25} className="cart" />{" "}
          {isProductInCart() && (
            <span className="cart-count cart-count-mobile">
              {" "}
              {totalProductsInCart}{" "}
            </span>
          )}
        </NavLink>
      </div>
      {showHamburger && (
        <div className="hamburger-icon" onClick={() => setShowHamburger(false)}>
          <RxHamburgerMenu size={20} />
        </div>
      )}
      {!showHamburger && (
        <div
          className="cross-tab-icon cross-tab-icon-mobile"
          onClick={() => setShowHamburger(true)}
        >
          <RxCross2 color={"rgb(106, 106, 65)"} size={25} />
        </div>
      )}
    </nav>
  );
};
