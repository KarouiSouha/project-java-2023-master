import React from 'react'
import { Link } from "react-router-dom";
import { bazaarlogo } from "../../assets/index";
import { VscAccount } from 'react-icons/vsc';
import { AiOutlineHeart } from 'react-icons/ai';
import { LiaShoppingBagSolid } from 'react-icons/lia';
function NavBar() {
    const userInfo=false;
    const style = { color: "white", fontSize: "2.2em" }
  return (
<div className="w-full h-20  font-titleFont border-b-[1px] border-b-gray-800 sticky top-0 z-50">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
        <Link to="/">
          <div>
            <img className="w-28" src={bazaarlogo} alt="logoDark" />
          </div>
        </Link>
        <div className="flex items-center gap-8">
          <ul className="flex item-center gap-8">
            <Link to="/">
              <li className="text-base text-white font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                Home
              </li>
            </Link>
            <Link to="/shop">
            <li className="text-base text-white font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Shop
            </li></Link>
            <Link to="/categories">
            <li className="text-base text-white font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Categories
            </li></Link>
            <Link to="/how">
            <li className="text-base text-white font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              How?
            </li></Link>
          </ul>
          <Link to="/cart">
            <div className="relative">
              {/* <img className="w-6" src={cartImg} alt="cartImg" /> */}
              <LiaShoppingBagSolid style={style}/>
              <span className="absolute w-6 top-6 left-6 text-sm flex text-white items-center justify-center font-semibold font-titleFont">
                3
              </span>
            </div>
          </Link>
          <Link to="/favorite">
            <div className="relative">
              {/* <img className="w-8" src="https://imgbin.com/img/icon_likes.png" alt="favorite img" /> */}
              <AiOutlineHeart style={style}/>
              <span className="absolute w-8 top-6 left-4 text-xs flex items-center justify-center font-semibold font-titleFont text-white">
                3
              </span>
            </div>
          </Link>
          <Link to="/login">
            <VscAccount style={style}/>
          </Link>

          {userInfo && (
            <p className="text-base font-titleFont font-semibold underline underline-offset-2">
              userName
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
export default NavBar