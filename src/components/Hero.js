import React from "react";
import "./Hero.css";
import heroImage from "../assets/flowers.png";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__bg" aria-hidden />
      <div className="container hero__content">
        <div className="hero__left">
          <h1>Fresh blooms for every moment</h1>
          <p className="lead">We craft seasonal bouquets & floral designs made with love — deliveries across the city.</p>
          <div style={{marginTop:20}}>
            <a href="#gallery" className="btn">Shop Collections</a>
            <a href="#contact" className="btn" style={{marginLeft:12, background:"#fff", color:"var(--accent)", boxShadow:"0 6px 18px rgba(0,0,0,0.06)"}}>Contact Us</a>
          </div>
        </div>

        <div className="hero__right" aria-hidden>
          <div className="card-sample">
             <img src={heroImage} alt="Hero floral" className="hero-img" />
          </div>
        </div>
      </div>
    </section>
  );
}
