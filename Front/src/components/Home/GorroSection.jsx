import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/home.css";
import ProductFilter from "./ProductFilter";
import ColorFilter from "./ColorFilter";
import ProductList from "./ProductList";
import fetchProducts from "../../services/gorro_API";

const GorroSection = ({ cartItems, setCartItems }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filters, setFilters] = useState({
    name: "",
    minPrice: 0,
    maxPrice: Infinity,
    color: "",
  });

  const navigate = useNavigate(); // ✅ redirección

  const slides = [
    {
      src: "/assets/products/image5.jpg",
      alt: "Slide 5",
      text: "Gorro bebé tejido ochos con pompón 10%   ̶2̶4̶,̶2̶5̶€  21,83 €",
    },
    {
      src: "/assets/products/image6.jpg",
      alt: "Slide 6",
      text: "Gorro bebé calado en rombos con pompón 10%  ̶2̶4̶,̶2̶5̶€  21,83 €",
    },
    {
      src: "/assets/products/image7.jpg",
      alt: "Slide 7",
      text: "Gorro bebé calado con orejeras y pompón 10%  ̶1̶3̶,̶7̶5̶€  12,37 €",
    },
    {
      src: "/assets/products/image8.jpg",
      alt: "Slide 8",
      text: "Gorro bebé con pompones 10%  ̶1̶2̶,̶2̶6̶€  11,03 €",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  useEffect(() => {
    fetchProducts().then((data) => {
      setProducts(data);
      setFilteredProducts(data);
    });
  }, []);

  useEffect(() => {
    const filtered = products.filter((product) => {
      const nameMatch = product.name.toLowerCase().includes(filters.name.toLowerCase());
      const price = parseFloat(product.price.replace("€", "").replace(",", "."));
      const priceMatch = price >= filters.minPrice && price <= filters.maxPrice;
      const colorMatch =
        !filters.color || product.color?.toLowerCase() === filters.color.toLowerCase();
      return nameMatch && priceMatch && colorMatch;
    });
    setFilteredProducts(filtered);
  }, [filters, products]);

  const handleFilterChange = ({ name, minPrice, maxPrice }) => {
    setFilters((prev) => ({
      ...prev,
      name: name || "",
      minPrice: minPrice || 0,
      maxPrice: maxPrice || Infinity,
    }));
  };

  const handleColorFilter = (color) => {
    setFilters((prev) => ({ ...prev, color }));
  };

  // ✅ Función para añadir al carrito y redirigir
  const handleAddToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
    navigate("/cart");
  };

  return (
    <main className="gorro-page">
      {/* SLIDER */}
      <div id="sideshow-example" data-component="slideshow">
        <div role="list">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`slide ${index === activeIndex ? "active" : ""}`}
            >
              <img src={slide.src} alt={slide.alt} />
              <div className="text-overlay">{slide.text}</div>
            </div>
          ))}
        </div>
        <button className="prev" onClick={prevSlide}>&#10094;</button>
        <button className="next" onClick={nextSlide}>&#10095;</button>
      </div>

      {/* FILTROS */}
      <ProductFilter products={products} onFilter={handleFilterChange} />
      <ColorFilter onFilter={handleColorFilter} />

      {/* LISTADO DE PRODUCTOS */}
      <ProductList products={filteredProducts} onAddToCart={handleAddToCart} />
    </main>
  );
};

export default GorroSection;
