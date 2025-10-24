import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container contact__wrap">
        <div className="contact__left">
          <h2>Contact Us</h2>
          <p>Have a question, an event, or a custom order? Send us a note and we’ll reply within 24 hours.</p>

          <div className="contact-info">
            <div><strong>Phone:</strong> +63 912 345 6789</div>
            <div><strong>Email:</strong> info@bloomingpetals.ph</div>
            <div><strong>Location:</strong> 123 Floral Avenue, Cebu Province, Philippines</div>
          </div>
        </div>

        <form className="contact__form" onSubmit={(e)=>e.preventDefault()}>
          <input placeholder="Your name" required />
          <input placeholder="Email" type="email" required />
          <textarea placeholder="Message" rows="6" required></textarea>
          <button className="btn" type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}
