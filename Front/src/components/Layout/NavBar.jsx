import React, { useState, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom"; // ✅ agregado useNavigate
import "../../styles/layout.css";
import { ThemeContext } from "../../services/themeContext";

const Header = ({ cartItems }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const navigate = useNavigate(); // ✅ hook para redirigir

  return (
    <header className="header">
      <div className="header-content">
        {/* Logo */}
        <div className="logo">
          <NavLink to="/">
            <img
              src="/assets/icons/Logo.svg"
              alt="Logo de la aplicación"
              className="logo-image"
            />
          </NavLink>
        </div>

        {/* Botón hamburguesa solo visible en móvil */}
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>

        {/* Menú de navegación */}
        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          <ul className="nav-list">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav-item active" : "nav-item"
                }
              >
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/gorrosection"
                className={({ isActive }) =>
                  isActive ? "nav-item active" : "nav-item"
                }
              >
                Gorros bebé
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/bizzum-formulario"
                className={({ isActive }) =>
                  isActive ? "nav-item active" : "nav-item"
                }
              >
                Bizzum y Formulario
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contacto"
                className={({ isActive }) =>
                  isActive ? "nav-item active" : "nav-item"
                }
              >
                Contacto
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/favorites"
                className={({ isActive }) =>
                  isActive ? "nav-item active" : "nav-item"
                }
              >
                ❤️ Favoritos
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Botones de acciones */}
        <div className="actions">
          {/* ✅ Botón de carrito que redirige a /cart */}
          <button
            className="cart-button"
            onClick={() => navigate("/cart")}
          >
            <img
              src="/assets/icons/Carrito.svg"
              alt="Carrito"
              className="cart-icon"
            />
          </button>

          <button
            className="login-button"
            onClick={() =>navigate("/login")}
          >
            <img
              src="/assets/icons/IniciarSesion.svg"
              alt="Login"
              className="login-icon"
            />
          </button>

          <button
            className="theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "☀️ Modo Claro" : "🌙 Modo Oscuro"}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
