
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const ErrorElement = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md">
        <Helmet>
            <title>Mesh | Error</title>
        </Helmet>
        <h1 className="text-4xl font-bold mb-6 text-red-500">Error</h1>
        <p className="text-gray-700 mb-6">
          Oops! Something went wrong. Please try again later.
        </p>
        <Link>
          <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none focus:shadow-outline-red">
            Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorElement;
