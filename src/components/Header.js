import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 200);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={scrolled ? "header header--scrolled" : "header"}>
      <div className="container header__inner">
        <div className="brand" onClick={() => navigate("/")}>
          <div className="logo-mark" aria-hidden>🌸</div>
          <div className="brand-text">
            <div className="brand-title">Blooming Petals</div>
            <div className="brand-sub">florals & arrangements</div>
          </div>
        </div>

       <nav className="nav">
  <span onClick={() => handleNavClick("about")}>About</span>
  <span onClick={() => handleNavClick("services")}>Services</span>
  <span onClick={() => handleNavClick("gallery")}>Gallery</span>
  <span onClick={() => handleNavClick("contact")} className="cta-link">
    Contact
  </span>
  <span onClick={() => navigate("/products")} className="cart-link">
    🛒 Products
  </span>
</nav>

      </div>
    </header>
  );
}
