export default function ErrorMessage({ message = "Something went wrong." }) {
  return (
    <div className="error">
      <p>{message}</p>
    </div>
  );
}