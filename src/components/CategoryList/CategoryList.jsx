import CategoryItem from "./CategoryItem";

export default function CategoryList({ categories = [] }) {
  return (
    <div className="grid">
      {categories.map((category) => (
        <CategoryItem key={category.idCategory} category={category} />
      ))}
    </div>
  );
}
