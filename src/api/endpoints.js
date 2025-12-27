const API_KEY = "65232507";
const BASE = `https://www.themealdb.com/api/json/v2/${API_KEY}`;

export const endpoints = {
  categories: () => `${BASE}/categories.php`,
  filterByCategory: (categoryName) => `${BASE}/filter.php?c=${encodeURIComponent(categoryName)}`,
  lookupById: (id) => `${BASE}/lookup.php?i=${encodeURIComponent(id)}`,
  searchByName: (query) => `${BASE}/search.php?s=${encodeURIComponent(query)}`,
};
// Explanation of the code concepts used in this file:
// JavaScript template literals
// MDN Web Docs
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
// Learn how to build dynamic strings using backticks and ${} for URLs and variables.