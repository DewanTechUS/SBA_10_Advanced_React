import { useMemo, useState } from "react";
import { endpoints } from "../api/endpoints";
import { useFetch } from "../hooks/useFetch";
import Spinner from "../components/Spinner";
import ErrorMessage from "../components/ErrorMessage";
import RecipeCard from "../components/Recipe/RecipeCard";
import "../index.css";

export default function AreaPage() {
  const [selectedArea, setSelectedArea] = useState("American");
  const [searchTerm, setSearchTerm] = useState("");


  const {
    data: areasData,
    loading: areasLoading,
    error: areasError,
  } = useFetch(endpoints.areas());


  const {
    data: mealsData,
    loading: mealsLoading,
    error: mealsError,
  } = useFetch(endpoints.filterByArea(selectedArea));

  const areas = areasData?.meals || []; 
  const meals = mealsData?.meals || []; 

  const filteredMeals = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    if (!term) return meals;

    return meals.filter((meal) =>
      (meal.strMeal || "").toLowerCase().includes(term)
    );
  }, [meals, searchTerm]);

  if (areasLoading || mealsLoading) return <Spinner />;
  if (areasError) return <ErrorMessage message={areasError} />;
  if (mealsError) return <ErrorMessage message={mealsError} />;

  return (
    <main className="container area-page">
      <h1 className="area-title">Meals by Country</h1>

      <section className="area-controls">
        <label className="area-label" htmlFor="areaSelect">
          Select Country:
        </label>

        <select
          id="areaSelect"
          className="area-select"
          value={selectedArea}
          onChange={(e) => {
            setSelectedArea(e.target.value);
            setSearchTerm("");
          }}
        >
          {areas.map((a) => (
            <option key={a.strArea} value={a.strArea}>
              {a.strArea}
            </option>
          ))}
        </select>
      </section>

      <section className="area-controls">
        <label className="area-label" htmlFor="mealSearch">
          Filter meals by name:
        </label>

        <input
          id="mealSearch"
          className="area-search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Type a meal name..."
        />

        <p className="area-info">
          Showing <b>{filteredMeals.length}</b> of <b>{meals.length}</b> meals in{" "}
          <b>{selectedArea}</b>
        </p>
      </section>

    
      {filteredMeals.length === 0 ? (
        <p className="area-empty">No meals found.</p>
      ) : (
        <div className="grid">
          {filteredMeals.map((meal) => (
            <RecipeCard key={meal.idMeal} meal={meal} />
          ))}
        </div>
      )}
    </main>
  );
}
