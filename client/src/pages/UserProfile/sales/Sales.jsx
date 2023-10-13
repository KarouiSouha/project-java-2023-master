import React from 'react'
import './Sales.css'
const Sales = () => {

  const items = {
    id: 1,
    name: "Shoe Brand",
    href: "#",
    imageSrc: "/shoe11-39-31.png",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "19.99",
    color: "black",
    category: "tshirt",
    size: "xl",
    qty:5,
    gender: "kids",
  };

  return (
    <div className="orders-container">
      <div className="ordered-items-card">
        <div className="products-container">
          {/* map function goes here */}
          <div className="products-card" key={items.id}>
            <img src={items.imageSrc} alt={items.imageAlt} />
            <div className="description">
              <span className="name">Name: {items.name}</span>
              <span className="qty">Qty: 0</span>
              <span className="price">revenue: $0</span>
            </div>
          </div>
          <div className="products-card" key={items.id}>
            <img src="/shoe11-37-38.png" alt={items.imageAlt} />
            <div className="description">
              <span className="name">Name: T-shirt Brand</span>
              <span className="qty">Qty: 0</span>
              <span className="price">revenue: $0</span>
            </div>
          </div>
          {/* ends here */}
        </div>
      </div>
    </div>
  );
}

export default Sales