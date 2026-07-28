import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center gap-6">
      <h1 className="text-7xl font-bold text-red-600">404</h1>

      <p className="text-zinc-400">Page not found.</p>

      <Link
        to="/"
        className="rounded-lg bg-red-600 px-5 py-3 transition hover:bg-red-500"
      >
        Back Home
      </Link>
    </section>
  );
};

export default NotFound;