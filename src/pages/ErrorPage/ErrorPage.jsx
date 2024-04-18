import {Link} from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center  mt-60">
      <h1 className="text-9xl font-bold text-gray-600">4O4</h1>
      <p className="text-4xl text-center font-medium">Page Not Found!</p>
      <Link to="/">
        <button className="btn ">Back to Home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
