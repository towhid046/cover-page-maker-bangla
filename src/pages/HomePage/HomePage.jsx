import Button from "../../components/shared/Button/Button";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="mx-auto px-4 flex flex-col justify-center items-center min-h-[80vh] bg-white text-gray-800 text-center">
      <div className="mb-8">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Welcome to CoverPage Generator
        </h1>
        <p className="text-lg md:text-2xl text-gray-600">
          Create beautiful single or group cover pages with ease, and download
          them as PDFs.
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-4 mx-auto w-full max-w-lg">
        <Link to={"/single"}>
          <Button customClass="text-lg md:py-3 py-2 md:px-6 px-4 shadow-lg">
            Single Cover Page
          </Button>
        </Link>
        <Link to={"/group"}>
          <Button customClass="text-lg md:py-3 py-2 md:px-6 px-4 shadow-lg">
            Group Cover Page
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
