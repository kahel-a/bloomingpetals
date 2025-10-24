import React from "react";
import { useNavigate } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="brand" onClick={() => navigate("/")}>
          <div className="logo-mark" aria-hidden>🌸</div>
          <div className="brand-text">
            <div className="brand-title">Blooming Petals</div>
            <div className="brand-sub">florals & arrangements</div>
          </div>
        </div>

        <div className="footer-contact">
          <p>123 Floral Avenue, Cebu Province, Philippines</p>
          <p>+63 912 345 6789</p>
          <p>info@bloomingpetals.ph</p>
          <p>www.bloomingpetals.ph</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Blooming Petals. All rights reserved.</p>
      </div>
    </footer>
  );
}
