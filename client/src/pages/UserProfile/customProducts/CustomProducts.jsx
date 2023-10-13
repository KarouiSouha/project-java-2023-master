import React from "react";
import "./CustomProducts.css";

const CustomProducts = () => {
  const items = {
    id: 1,
    name: "Shoe Brand",
    href: "#",
    imageSrc: "/shoe13-11-8.png",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "19.99",
    color: "black",
    category: "tshirt",
    size: "xl",
    gender: "kids",
  };

  return (
    <div>
      <div className="sales-container mt-[0%] ml-auto mr-auto w-[75%]   ">
        <div className="link-container">
          <h1 className=" font-body ">Your Custom Products</h1>
        </div>
        <div className="flex">
        <div className="  card product-card-container">
          <div >
            {" "}
            <img className="img" src={items.imageSrc} alt="" />
          </div>
          <p>name: {items.name}</p>
          <p> price: ${items.price}</p>{" "}
        </div>
        <div className="  card product-card-container">
          <div >
            {" "}
            <img className="img" src="/shoe11-37-38.png" alt="" />
          </div>
          <p>name: T-shirt Brand</p>
          <p> price: $24.99</p>{" "}
        </div>
      </div></div>
    </div>
  );
};

export default CustomProducts;
