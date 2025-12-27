import { useEffect, useState } from "react";
import { useFavorites } from "../context/FavoritesContext";
import { endpoints } from "../api/endpoints";
import Spinner from "../components/Spinner";
import ErrorMessage from "../components/ErrorMessage";
import RecipeCard from "../components/Recipe/RecipeCard";

export default function FavoritesPage() {
  const { favoriteIds } = useFavorites();
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        setError(null);

        if (favoriteIds.length === 0) {
          setMeals([]);
          return;
        }

        setLoading(true);

        const results = await Promise.all(
          favoriteIds.map(async (id) => {
            const res = await fetch(endpoints.lookupById(id));
            if (!res.ok) throw new Error("Failed to load favorites");
            const json = await res.json();
            return json?.meals?.[0];
          })
        );

        const cleaned = results.filter(Boolean);
        if (!cancelled) setMeals(cleaned);
      } catch (err) {
        if (!cancelled) setError(err.message || "Failed to load favorites");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [favoriteIds]);

  if (loading) return <Spinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <main className="container">
      <h1>Favorites</h1>

      {favoriteIds.length === 0 ? (
    <p>No favorites saved yet. Start exploring recipes and save your favorites!</p>
      ) : (
        <div className="grid">
          {meals.map((meal) => (
            <RecipeCard key={meal.idMeal} meal={meal} />
          ))}
        </div>
      )}
    </main>
  );
}
