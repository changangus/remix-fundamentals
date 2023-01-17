import { Link } from "@remix-run/react";
import type { ReactElement } from "react";

export default function AdminIndex(): ReactElement {
  return (
    <p>
      <Link to="new" className="text-blue-600 underline">
        Create a New Post
      </Link>
    </p>
  );
}
