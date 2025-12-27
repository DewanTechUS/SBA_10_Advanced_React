import CategoryItem from "./CategoryItem";

export default function CategoryList({ categories = [] }) {
  return (
    <div className="grid">
      {categories.map((categories) => (
        <CategoryItem key={categories.idCategory} category={categories} />
      ))}
    </div>
  );
}