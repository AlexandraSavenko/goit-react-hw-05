import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div>
      <p>
        <Link style={{ color: "black", textDecoration: "none" }} to="/">
          Go back
        </Link>
      </p>
      <p>Page not found</p>
    </div>
  );
}
