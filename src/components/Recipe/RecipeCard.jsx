import { Link } from "react-router-dom";
import FavoriteButton from "./FavoriteButton";

export default function RecipeCard({ meal }) {
  return (
    <div className="card">
      <Link to={`/recipe/${meal.idMeal}`}>
        <img src={meal.strMealThumb} alt={meal.strMeal} />
      </Link>

      <div className="card-body">
        <h3>
          <Link to={`/recipe/${meal.idMeal}`}>{meal.strMeal}</Link>
        </h3>

        <FavoriteButton mealId={meal.idMeal} />
      </div>
    </div>
  );
}
