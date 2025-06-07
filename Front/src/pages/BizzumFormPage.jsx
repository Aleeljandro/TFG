import React from "react";
import "../styles/bizzumForm.css";
import { registerBizum } from '../services/bizzum_api';
const BizzumFormPage = ({ cartItems, setCartItems }) => {


  const totalPrice = () => {
    console.log("Calculating total price: ", cartItems);
    return cartItems.reduce((total, item) => total + parseInt(item.price), 0);
  }

  const handleBizum = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const nombre = formData.get("nombre");
    const email = formData.get("email");
    const mensaje = formData.get("mensaje");

    const bizum = {
      total: totalPrice(),
      nombre: nombre,
      email: email,
      mensaje: mensaje,
      cart: cartItems
    };
    
    registerBizum(bizum).then(message => {
      console.log(message);
      setCartItems([]); // Limpiar el carrito después de enviar el Bizum
      setTimeout(() => {
        window.location.href = '/';
      }, 2000);
    })


    // Aquí podrías enviar los datos al servidor o realizar alguna acción
    console.log("Datos enviados:", { nombre, email, mensaje });

    e.target.reset(); // Limpiar el formulario

  };

  return (
    <section className="bizzum-form">
      <div className="form-container">
        <h2>Bizzum y Formulario</h2>

        <div className="bizzum-info">
          <h3>Donación por Bizzum de {totalPrice()} €</h3>
          <p>
            Envía tu aportación al número <strong>+34 661777626</strong> con el concepto
            <strong> "Productos Infantiles"</strong>.
          </p>
        </div>

        <form onSubmit={handleBizum} className="contact-form">
          <div>
            <label htmlFor="nombre">Nombre</label>
            <input type="text" id="nombre" name="nombre" required />
          </div>
          <div>
            <label htmlFor="email">Correo electrónico</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div>
            <label htmlFor="mensaje">Mensaje</label>
            <textarea id="mensaje" name="mensaje" rows="4" required></textarea>
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </section>
  );
};

export default BizzumFormPage;
