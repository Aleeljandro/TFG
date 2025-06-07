import React from "react";
import "../styles/contact.css";

const ContactPage = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">Contáctanos</h2>
        <p className="contact-subtitle">
          Estamos encantados de ayudarte. Ponte en contacto con nosotros:
        </p>

        <div className="contact-grid">
          <div className="contact-card">
            <span className="emoji-icon" role="img" aria-label="Dirección">🏠</span>
            <h4>Dirección</h4>
            <p>Calle Imagineros 27<br />41010 Sevilla, España</p>
          </div>

          <div className="contact-card">
            <span className="emoji-icon" role="img" aria-label="Teléfono">☎️</span>
            <h4>Teléfono</h4>
            <p>+34 661777626</p>
          </div>

          <div className="contact-card">
            <span className="emoji-icon" role="img" aria-label="Correo">✉️</span>
            <h4>Email</h4>
            <p>contacto@productosinfantiles.es</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
