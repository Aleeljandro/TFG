import React, { useEffect, useState } from "react";
import "../../styles/home.css";
import ProductFilter from "./ProductFilter";
import ProductList from "./ProductList";
import ColorFilter from "./ColorFilter";
import fetchProducts from "../../services/product_API";

const Herosection = ({ cartItems, setCartItems }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filters, setFilters] = useState({
    name: "",
    minPrice: 0,
    maxPrice: Infinity,
    color: "",
  });

  const slides = [
    {
      src: "/assets/products/image1.jpg",
      alt: "Slide 1",
      text: "Bolso Silla Gilda Uzturre 10%   ̶7̶2̶,̶0̶0̶€  64,80€",
    },
    {
      src: "/assets/products/image2.jpg",
      alt: "Slide 2",
      text: "Bolso Silla Cocco Piedra Uzturre 10%  ̶9̶4̶,̶0̶0̶€  84,60€",
    },
    {
      src: "/assets/products/image3.jpg",
      alt: "Slide 3",
      text: "Talega Neo 10%  ̶7̶2̶,̶0̶0̶€  64,80€",
    },
    {
      src: "/assets/products/image4.jpg",
      alt: "Slide 4",
      text: "Talega Dario 30%  ̶7̶4̶,̶0̶0̶€  51,80€",
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

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  return (
    <main className="herosection-page">
      {/* SLIDER */}
      <div id="sideshow-example" data-component="slideshow">
        <div role="list">
          {slides.map((slide, index) => (
            <div key={index} className={`slide ${index === activeIndex ? "active" : ""}`}>
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

      {/* LISTADO */}
      <ProductList products={filteredProducts} onAddToCart={handleAddToCart} />
    </main>
  );
};

export default Herosection;
