import { Link } from "react-router-dom";
import { endpoints } from "../api/endpoints";
import { useFetch } from "../hooks/useFetch";
import Spinner from "../components/Spinner";
import ErrorMessage from "../components/ErrorMessage";

export default function AreasPage() {
  const { data, loading, error } = useFetch(endpoints.listAreas());

  if (loading) return <Spinner />;
  if (error) return <ErrorMessage message={error} />;

  const areas = data?.meals || []; 

  return (
    <main className="container">
      <h1>Countries / Areas</h1>

      <div className="grid">
        {areas.map((a) => (
          <Link key={a.strArea} className="card" to={`/area/${encodeURIComponent(a.strArea)}`}>
            <div className="card-body">
              <h3>{a.strArea}</h3>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
