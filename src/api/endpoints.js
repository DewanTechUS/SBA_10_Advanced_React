const BASE = "https://www.themealdb.com/api/json/v1/1";

export const endpoints = {
  categories: () => `${BASE}/categories.php`,
  mealsByCategory: (category) => `${BASE}/filter.php?c=${encodeURIComponent(category)}`,
  mealDetails: (idMeal) => `${BASE}/lookup.php?i=${encodeURIComponent(idMeal)}`,
  searchByName: (query) => `${BASE}/search.php?s=${encodeURIComponent(query)}`,
};
