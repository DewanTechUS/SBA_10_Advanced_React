import { useParams } from "react-router-dom";
import { endpoints } from "../api/endpoints";
import { useFetch } from "../hooks/useFetch";
import Spinner from "../components/Spinner";
import ErrorMessage from "../components/ErrorMessage";
import RecipeCard from "../components/Recipe/RecipeCard";

export default function CategoryPage() {
  const { categoryName } = useParams();
  const { data, loading, error } = useFetch(endpoints.filterByCategory(categoryName));

  if (loading) return <Spinner />;
  if (error) return <ErrorMessage message={error} />;

  const meals = data?.meals || [];

  return (
    <main className="container">
      <h1>{categoryName}</h1>

      {meals.length === 0 ? (
        <p>No meals found for this category.</p>
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
