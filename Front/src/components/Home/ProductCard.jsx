import React, { useContext } from "react";
import { FavoritesContext } from "../../services/favoritesContext";



const ProductCard = ({ product, onAddToCart }) => {
    const { favorites, toggleFavorite } = useContext(FavoritesContext);
    const isFavorite = favorites.some((fav) => fav.id === product.id);

    const handleAddToCart = (e) => {
        e.stopPropagation(); // Previene eventos no deseados
        onAddToCart(product);
    };

    const handleToggleFavorite = (e) => {
        e.stopPropagation();
        toggleFavorite(product);
    };

    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <button onClick={handleAddToCart}>🛒 Añadir al Carrito</button>
            <button onClick={handleToggleFavorite}>
                {isFavorite ? "❤️ Quitar" : "🤍 Añadir"}
            </button>
        </div>
    );
};

export default ProductCard;
