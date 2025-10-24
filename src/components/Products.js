import React, { useContext, useState } from "react";
import "./Products.css";
import { CartContext } from "../context/CartContext";
import Cart from "./Cart";
import { useNavigate } from "react-router-dom";
import p1Image from "../assets/bb.png";
import p2Image from "../assets/td.png";
import p3Image from "../assets/rd.png";
import p4Image from "../assets/bbreeze.png";
import p5Image from "../assets/gg.png";
import p6Image from "../assets/hh.png";
import p7Image from "../assets/ll.png";
import p8Image from "../assets/cc.png";

export default function Products() {
  const { addToCart, cart } = useContext(CartContext);
  const [showCart, setShowCart] = useState(false);
  const navigate = useNavigate();

  const products = [
    { id: 1, name: "Blushing Beauty", price: 4500, img: p1Image},
    { id: 2, name: "Twilight Dreams", price: 2000, img: p2Image},
    { id: 3, name: "Radiant Romance", price: 5000, img: p3Image},
    { id: 4, name: "Blissful Breeze", price: 3000, img: p4Image},
    { id: 5, name: "Golden Glow", price: 3500, img: p5Image},
    { id: 6, name: "Heavenly Hues", price: 6000, img: p6Image},
    { id: 7, name: "Lush Lavender", price: 6000, img: p7Image},
    { id: 8, name: "Celestial Charm", price: 4500, img: p8Image},
  ];

  return (
    <section className="products-page">
      {/* Header row */}
      <div className="top-bar">
        <div className="top-icons">
          <button className="icon-btn" onClick={() => navigate("/")}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/25/25694.png"
              alt="Home"
              className="icon-img"
            />
          </button>
        </div>

        <h1 className="products-title">
          <span className="subtitle">OUR BLOOMING</span><br />PRODUCTS
        </h1>

        <div className="top-icons">
          <button className="icon-btn" onClick={() => setShowCart(!showCart)}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/263/263142.png"
              alt="Cart"
              className="icon-img"
            />
            <span className="cart-count">{cart.length}</span>
          </button>
        </div>
      </div>

      <div className="product-grid">
        {products.map((p) => (
          <div key={p.id} className="product-card">
            <img src={p.img} alt={p.name} />
            <h3>{p.name}</h3>
            <p>Php {p.price.toLocaleString()}</p>
            <div className="btn-group">
              <button className="buy-btn">BUY NOW</button>
              <button className="add-btn" onClick={() => addToCart(p)}>
                ADD TO CART
              </button>
            </div>
          </div>
        ))}
      </div>

      {showCart && <Cart onClose={() => setShowCart(false)} />}
    </section>
  );
}
