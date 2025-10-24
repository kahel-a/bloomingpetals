import React from "react";
import "./About.css";
import abtImage from "../assets/abt.png";

export default function About() {
  return (
    <section id="about" className="about section">
      <div className="container about__wrap">
        <div className="about__media">
          <img src={abtImage} alt="Abt Us" className="abt-img" />
        </div>
        <div className="about__text">
          <h2>About Blooming Petals</h2>
          <p>We’re a local floral studio focused on seasonal, hand-tied bouquets and full-event florals. Each arrangement is crafted with sustainably sourced stems and attention to detail.</p>
          <p>From intimate gatherings to large weddings — we design florals that speak from the heart.</p>
          <a href="#services" className="btn" style={{marginTop:12}}>See Our Services</a>
        </div>
      </div>
    </section>
  );
}
