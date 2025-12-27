import { useParams } from "react-router-dom";
import { endpoints } from "../api/endpoints";
import { useFetch } from "../hooks/useFetch";
import Spinner from "../components/Spinner";
import ErrorMessage from "../components/ErrorMessage";
import FavoriteButton from "../components/Recipe/FavoriteButton";
// Helper function to extract ingredients and measures from meal data
// reason for using loop is that the API returns ingredients and measures in numbered keys like strIngredient1, strIngredient2, ..., strMeasure1, strMeasure2, ...
function getIngredients(meal) {
  const list = [];
  for (let i = 1; i <= 20; i++) {
    const ing = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
    if (ing && ing.trim()) list.push(`${measure ? measure.trim() : ""} ${ing.trim()}`.trim());
  }
  return list;
}

export default function RecipeDetailPage() {
  const { recipeId } = useParams();
  const { data, loading, error } = useFetch(endpoints.lookupById(recipeId));

  if (loading) return <Spinner />;
  if (error) return <ErrorMessage message={error} />;

  const meal = data?.meals?.[0];
  if (!meal) return <ErrorMessage message="Recipe not found." />;

  const ingredients = getIngredients(meal);

  return (
    <main className="container">
      <h1>{meal.strMeal}</h1>

      <div className="detail">
        <img className="detail-img" src={meal.strMealThumb} alt={meal.strMeal} />

        <div className="detail-meta">
          <FavoriteButton mealId={meal.idMeal} />
          <p><b>Category:</b> {meal.strCategory}</p>
          <p><b>Area:</b> {meal.strArea}</p>
        </div>
      </div>

      <h2>Ingredients</h2>
      <ul>
        {ingredients.map((ingredient) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>

      <h2>Instructions</h2>
      <p className="instructions">{meal.strInstructions}</p>
    </main>
  );
}
