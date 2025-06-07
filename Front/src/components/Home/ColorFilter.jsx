import React, { useState } from 'react';

const ColorFilter = ({ onFilter }) => {
  const [color, setColor] = useState('');

  const handleChange = (e) => {
    setColor(e.target.value);
    onFilter(e.target.value);
  };

  return (
    <select value={color} onChange={handleChange}>
    <option value="">Todos los colores</option>
    <option value="gris">gris</option>
    <option value="azul">azul</option>
    <option value="beige">beige</option>
    <option value="blanco">blanco</option>
  </select>
  );
};

export default ColorFilter;
