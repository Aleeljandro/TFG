import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/layout.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="logo">
        <img 
          src="/assets/icons/Logo.svg" 
          alt="Logo de la aplicación" 
          className="logo-image"
        />
      </div>
      <nav className="nav-footer">
        <ul className="nav-list-footer">
          <li><Link to="/" className="nav-item-footer">Inicio</Link></li>
          <li><Link to="/gorrosection" className="nav-item-footer">Gorros bebé</Link></li>
          <li><Link to="/bizzum-formulario" className="nav-item-footer">Bizzum y Formulario</Link></li>
          <li><Link to="/contacto" className="nav-item-footer">Contacto</Link></li>
        </ul>
      </nav>
      <div id='Derechos'>
        <p>© 2025 Proyecto. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
