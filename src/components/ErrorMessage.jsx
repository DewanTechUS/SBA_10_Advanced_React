// Explanation of the code concepts used in this file:
// Default Props
// Official React documentation
// https://react.dev/reference/react/Component/defaultProps
// Learn how to set default values for component props to ensure components behave correctly even when some props are not provided.
export default function ErrorMessage({ message = "Something went wrong." }) {
  return (
    <div className="error">
      <p>{message}</p>
    </div>
  );
}
