import React, { useState, useEffect } from "react";
import "./Gallery.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import galImage from "../assets/roses.png";
import gal1Image from "../assets/tulip.png";
import gal2Image from "../assets/yellow.png";
import gal3Image from "../assets/lavender.png";
import gal4Image from "../assets/pastel.png";
import gal5Image from "../assets/white.png";

export default function Gallery() {
  const images = [
    {
      id: 1,
      image: galImage,
      title: "Elegant Roses",
      desc: "Soft pink blooms for any occasion",
    },
    {
      id: 2,
      image: gal1Image,
      title: "Tulip Garden",
      desc: "Bright tulips that symbolize joy",
    },
    {
      id: 3,
      image: gal2Image,
      title: "Sunshine Blooms",
      desc: "Yellow flowers to brighten your day",
    },
    {
      id: 4,
      image: gal3Image,
      title: "Lavender Fields",
      desc: "Calming hues and natural beauty",
    },
    {
      id: 5,
      image: gal4Image,
      title: "Pastel Harmony",
      desc: "Soft pastel arrangement for elegance",
    },
    {
      id: 6,
      image: gal5Image,
      title: "Whispering Whites",
      desc: "Minimalist floral charm",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  const nextSlide = () => setIndex((index + 1) % images.length);
  const prevSlide = () =>
    setIndex((index - 1 + images.length) % images.length);

  return (
    <section
      className="gallery"
      style={{
        backgroundImage: `url(${images[index].image})`,
      }}
    >
      <div className="blur-overlay"></div>

      <div className="gallery-header">
        <span className="subtitle">OUR BLOOMING</span>
        <h2 className="title">PRODUCTS</h2>
      </div>

      <div className="gallery-inner">
        <button className="arrow left" onClick={prevSlide}>
          <ChevronLeft size={28} />
        </button>

        <div className="gallery-track">
          {images.map((img, i) => (
            <div
              key={img.id}
              className={`gallery-card ${i === index ? "active" : ""}`}
              style={{ backgroundImage: `url(${img.image})` }}
              onClick={() => setIndex(i)}
            >
              <div className="card-content">
                <h3>{img.title}</h3>
                <p>{img.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="arrow right" onClick={nextSlide}>
          <ChevronRight size={28} />
        </button>
      </div>
    </section>
  );
}
