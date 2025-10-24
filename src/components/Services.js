import React from "react";
import "./Services.css";
import serImage from "../assets/customflowers.png";
import ser1Image from "../assets/deliveries.png";
import ser2Image from "../assets/workshop.png";

export default function Services() {
  const services = [
    {
      title: "Customized Flowers",
      img: serImage,
      desc: "Tailored bouquets and floral designs for weddings, birthdays, anniversaries, and other special occasions. Each arrangement is crafted to meet the specific preferences and themes of your event.",
    },
    {
      title: "Deliveries",
      img: ser1Image,
      desc: "Convenient and reliable delivery service to ensure your flowers arrive fresh and on time, whether it's a surprise gift or a decoration for an event.",
    },
    {
      title: "Workshops / Classes",
      img: ser2Image,
      desc: "Interactive sessions where customers can learn the art of flower arranging, care tips for different types of flowers, and seasonal floral design trends.",
    },
  ];

  return (
    <section className="services-section" id="services">
      {/* Title Section */}
      <div className="services-title">
        <h1 className="main-title">SERVICES</h1>
        <h1 className="faded-title">SERVICES</h1>
      </div>

      {/* Card Section */}
      <div className="services-content">
        {services.map((service, i) => (
          <div key={i} className="service-card">
            <div className="service-img">
              <img src={service.img} alt={service.title} />
              <h2>{service.title}</h2>
            </div>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
