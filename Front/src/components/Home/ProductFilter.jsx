import React, { useState, useEffect } from "react";
import ReactSlider from "react-slider";
import '../../styles/products.css';

const ProductFilter = ({ products, onFilter }) => {
  const [name, setName] = useState("");
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100);

  useEffect(() => {
    if (products.length > 0) {
      const prices = products.map(product =>
        parseFloat(product.price.replace('€', '').replace(',', '.'))
      );
      const min = Math.min(...prices);
      const max = Math.max(...prices);
      setMinPrice(min);
      setMaxPrice(max);
      setPriceRange([min, max]);
    }
  }, [products]);

  const handleFilter = () => {
    onFilter({
      name,
      minPrice: priceRange[0],
      maxPrice: priceRange[1],
    });
  };

  const handleClear = () => {
    setName("");
    setPriceRange([minPrice, maxPrice]);
    onFilter({
      name: "",
      minPrice,
      maxPrice,
    });
  };

  return (
    <div className="product-filter">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Buscar por nombre"
      />

      <label>Rango de precios:</label>
      <div style={{ width: "300px", margin: "0 auto" }}>
        <ReactSlider
          className="horizontal-slider"
          thumbClassName="thumb"
          trackClassName="track"
          min={minPrice}
          max={maxPrice}
          value={priceRange}
          onChange={(value) => setPriceRange(value)}
        />
      </div>

      <div className="price-inputs">
        <input
          type="number"
          value={priceRange[0]}
          onChange={(e) => setPriceRange([parseFloat(e.target.value), priceRange[1]])}
        />
        <input
          type="number"
          value={priceRange[1]}
          onChange={(e) => setPriceRange([priceRange[0], parseFloat(e.target.value)])}
        />
      </div>

      <button onClick={handleFilter}>Filtrar</button>
      <button onClick={handleClear}>Limpiar</button>
    </div>
  );
};

export default ProductFilter;
