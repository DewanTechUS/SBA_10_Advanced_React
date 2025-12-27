import { useFavorites } from "../../context/FavoritesContext";

export default function FavoriteButton({ mealId }) {
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();
  const favorites = isFavorite(mealId);

  function toggle() {
    if (favorites) removeFavorite(mealId);
    else addFavorite(mealId);
  }

  return (
    <button className="fav-btn" onClick={toggle}>
      {favorites ? "Remove Favorite" : "Add Favorite"}
    </button>
  );
}