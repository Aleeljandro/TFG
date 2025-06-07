import React from "react";
import "../../styles/CartPage.css";

const CartPage = ({ cartItems, setCartItems }) => {
  
  const groupedItems = cartItems.reduce((acc, item) => {
    const existingItem = acc.find((i) => i.id === item.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      acc.push({ ...item, quantity: 1 });
    }

    return acc;
  }, []);

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">🛒 Carrito de Compras</h2>
        <p className="contact-subtitle">Aquí puedes revisar y modificar tus productos seleccionados.</p>

        {groupedItems.length === 0 ? (
          <p className="empty-cart">El carrito está vacío</p>
        ) : (
          <div className="contact-grid">
            {groupedItems.map((item, index) => (
              <div key={index} className="contact-card">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <h4>{item.name}</h4>
                <p className="cart-item-price">Precio: {item.price}</p>
                <p className="cart-item-quantity">Cantidad: {item.quantity}</p>
                <button className="remove-item-button" onClick={() => removeFromCart(item.id)}>
                  Eliminar
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default CartPage;
