import { endpoints } from "../api/endpoints";
import { useFetch } from "../hooks/useFetch";
import Spinner from "../components/Spinner";
import ErrorMessage from "../components/ErrorMessage";
import CategoryList from "../components/CategoryList/CategoryList";

export default function HomePage() {
  const { data, loading, error } = useFetch(endpoints.categories());

  if (loading) return <Spinner />;
  if (error) return <ErrorMessage message={error} />;

  const categories = data?.categories || [];

  return (
    <main className="container">
      <h1>Categories</h1>
      <CategoryList categories={categories} />
    </main>
  );
}
