import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./Cart.css";

export default function Cart({ onClose }) {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart-overlay">
      <div className="cart-container">
        <div className="cart-header">
          <button className="exit-btn" onClick={onClose}>✖</button>
          <h2>🛍️ Your Cart</h2>
        </div>

        {cart.length === 0 ? (
          <p className="empty-cart">Your cart is empty 🌸</p>
        ) : (
          <>
            <ul className="cart-items">
              {cart.map((item, i) => (
                <li key={i} className="cart-item">
                  <img src={item.img} alt={item.name} />
                  <div className="cart-info">
                    <h4>{item.name}</h4>
                    <p>₱{item.price.toLocaleString()}</p>
                  </div>
                  <button
                    className="remove-btn"
                    onClick={() => removeFromCart(item.id)}
                  >
                    ✖
                  </button>
                </li>
              ))}
            </ul>

            <h3 className="cart-total">Total: ₱{total.toLocaleString()}</h3>

            <div className="cart-actions">
              <button className="clear-btn" onClick={clearCart}>
                🧹 Clear Cart
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
