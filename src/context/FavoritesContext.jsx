// Explanation of the code concepts used in this file:
// React Context API
// Official React documentation
// https://react.dev/reference/react/createContext
// Learn how to create and use context to share state across components without prop drilling.
// Custom Hooks
// Official React documentation
// https://react.dev/learn/reusing-logic-with-custom-hooks
import { createContext, useContext, useMemo } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const FavoritesContext = createContext(null);

export function FavoritesProvider({ children }) {
  const [favoriteIds, setFavoriteIds] = useLocalStorage("favoriteRecipeIds", []);

  function addFavorite(id) {
    setFavoriteIds((prev) => (prev.includes(id) ? prev : [...prev, id]));
  }

  function removeFavorite(id) {
    setFavoriteIds((prev) => prev.filter((x) => x !== id));
  }

  function isFavorite(id) {
    return favoriteIds.includes(id);
  }

  const value = useMemo(
    () => ({ favoriteIds, addFavorite, removeFavorite, isFavorite }),
    [favoriteIds]
  );

  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>;
}

export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (!context) throw new Error("useFavorites must be used inside FavoritesProvider");
  return context;
}
// Learn how to reuse logic and keep components clean.
// Example reference
// https://usehooks.com/useLocalStorage/