import useScrollToTop from "../../hooks/useScrollToTop";
import { Main } from "./../../components/Main";

const SinglePage = () => {
  useScrollToTop()
  return (
    <div className="py-10 container mx-auto">
      <Main />
    </div>
  );
};

export default SinglePage;
