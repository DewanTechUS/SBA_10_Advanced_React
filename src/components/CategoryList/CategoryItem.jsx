import { Link } from "react-router-dom";

export default function CategoryItem({ category }) {
  return (
    <Link className="card" to={`/category/${encodeURIComponent(category.strCategory)}`}>
      <img src={category.strCategoryThumb} alt={category.strCategory} />
      <div className="card-body">
        <h3>{category.strCategory}</h3>
      </div>
    </Link>
  );
}
