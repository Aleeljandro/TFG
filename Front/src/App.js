import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { FavoritesProvider } from "./services/favoritesContext";
import { ThemeProvider } from "./services/themeContext";

import "./App.css";
import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/NavBar";
import Herosection from "./components/Home/HeroSection";
import CartPage from "./components/Home/CartPage";
import LoginForm from "./components/Auth/LoginForm";
import RegisterForm from "./components/Auth/RegisterForm";
import ForgotPasswordForm from "./components/Auth/ForgotPasswordForm";
import FavoritesPage from "./components/Home/FavoritesPage";
import ContactPage from "./pages/ContactPage";
import GorroSection from "./components/Home/GorroSection";
import BizzumFormPage from './pages/BizzumFormPage';

const NotFound = () => <h2>404 Not Found</h2>;

function App() {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    const header = document.querySelector("header");
    const main = document.querySelector("main");
    if (header && main) {
      const headerHeight = header.offsetHeight;
      main.style.paddingTop = `${headerHeight + 20}px`;
    }
  }, []);

  return (
    <ThemeProvider>
      <FavoritesProvider>
        <Router>
          <div>
            <header>
              <Header cartItems={cartItems} setShowCart={setShowCart} />
            </header>

            <main>
              <Routes>
                <Route
                  path="/"
                  element={
                    <Herosection
                      cartItems={cartItems}
                      setCartItems={setCartItems}
                    />
                  }
                />
                <Route
                  path="/cart"
                  element={<CartPage cartItems={cartItems} setCartItems={setCartItems} />}
                  
                />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/register" element={<RegisterForm />} />
                <Route path="/forgot-password" element={<ForgotPasswordForm />} />
                <Route path="/favorites" element={<FavoritesPage />} />
                <Route path="/gorrosection" element={<GorroSection cartItems={cartItems} setCartItems={setCartItems} />}/>
                <Route path="/contacto" element={<ContactPage />} />
                <Route path="/bizzum-formulario"                       
                       element={<BizzumFormPage 
                                  cartItems={cartItems}
                                  setCartItems={setCartItems}
                       />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>

            <footer>
              <Footer />
            </footer>
          </div>
        </Router>
      </FavoritesProvider>
    </ThemeProvider>
  );
}

export default App;
