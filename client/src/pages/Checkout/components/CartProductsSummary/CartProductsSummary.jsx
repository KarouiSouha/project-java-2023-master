import "./CartProductsSummary.css";

import React from "react";
import { useUserData } from "../../../../contexts/UserDataProvider";

export const CartProductsSummary = () => {
  const { userDataState } = useUserData();
  return (
    <div className="product-details-container">
     <h1>In Your Bag</h1>
      <div className="ordered-products-container">
        {userDataState.cartProducts?.map(
          ({ product,qty }) => (
            <div key={product.id} className="ordered-product-card">
              <img src={product.img} alt={product.name}/>
              <span>
                <span>{product.name} - </span>
                <span>{qty}</span>
              </span>
              <span>${product.discountedPrice}</span>
            </div>
          )
        )}
      </div>
    </div>
  );
};
