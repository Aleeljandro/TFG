import { useContext } from "react";
import { FavoritesContext } from "../../services/favoritesContext";
import ProductCard from "./ProductCard";
import "../../styles/products.css"; // asegúrate de que define `.favorites-page` o clase personalizada

const FavoritesPage = () => {
  const { favorites } = useContext(FavoritesContext);

  return (
    <div className="favorites-page">
      <h2 className="favorites-title">❤️ Mis Favoritos</h2>
      {favorites.length === 0 ? (
        <p className="favorites-empty">No tienes productos favoritos.</p>
      ) : (
        <div className="content-list">
          {favorites.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;
