import { useState } from "react";
import { endpoints } from "../api/endpoints";
import { useFetch } from "../hooks/useFetch";
import Spinner from "../components/Spinner";
import ErrorMessage from "../components/ErrorMessage";
import RecipeCard from "../components/Recipe/RecipeCard";
import "../index.css";

export default function CategorySelectorPage() {

  const [selectedCategory, setSelectedCategory] = useState("Beef");


  const {
    data: categoriesData,
    loading: categoriesLoading,
    error: categoriesError,
  } = useFetch(endpoints.categories());

  const {
    data: mealsData,
    loading: mealsLoading,
    error: mealsError,
  } = useFetch(endpoints.filterByCategory(selectedCategory));

  const categories = categoriesData?.categories || [];
  const meals = mealsData?.meals || [];

  if (categoriesLoading || mealsLoading) return <Spinner />;
  if (categoriesError) return <ErrorMessage message={categoriesError} />;
  if (mealsError) return <ErrorMessage message={mealsError} />;

  return (
    <main className="container category-page">
      <h1>Meals by Category</h1>
      <div className="category-controls">
        <label className="category-label">Select Category:</label>

        <select
          className="category-select"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((cat) => (
            <option key={cat.idCategory} value={cat.strCategory}>
              {cat.strCategory}
            </option>
          ))}
        </select>
      </div>

      {meals.length === 0 ? (
        <p>No meals found.</p>
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
