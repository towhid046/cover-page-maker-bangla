import "./../../../src/index.css";
import useScrollToTop from "../../hooks/useScrollToTop";
import { useState } from "react";
import Form from "../../components/Form";
import img1st from "./../../assets/img/display-pages/1st.jpg";
import img2nd from "./../../assets/img/display-pages/2nd.jpg";
import img3rd from "./../../assets/img/display-pages/3rd.jpg";
import img4th from "./../../assets/img/display-pages/4th.jpg";
import img5th from "./../../assets/img/display-pages/5th.jpg";
import img6th from "./../../assets/img/display-pages/6th.jpg";

const SinglePage = () => {
  useScrollToTop();
  const [isClicked, setIsClicked] = useState(false);
  const [pageId, setPageId] = useState(null);
  const imgs = [img1st, img2nd, img3rd, img4th, img5th, img6th];

  function scrollToTop() {
    window.scrollTo({
      top: document.body.scrollTop,
      behavior: "smooth",
    });
  }

  const appearPageClickHandler = (index) => {
    setPageId(index);

    setTimeout(() => {
      setIsClicked(true);
      scrollToTop();
    }, 200);
  };
  return (
    <section className="pb-10 container mx-auto px-4">
      
      <p className="lg:text-2xl text-xl font-medium bg-gradient-to-r  lg:py-2.5 py-2 my-2 lg:my-4 text-center from-indigo-400 via-purple-400 to-pink-400 text-white">{isClicked ? "Fill up the form & generate cover page" : "Choose a template"}</p>
      <div>
        {isClicked ? (
          <Form pageId={pageId} />
        ) : (
          <div className="grid xl:grid-cols-3 gap-5 cursor-pointer grid-cols-1 lg:grid-cols-2">
            {imgs?.map((img, index) => (
              <img
                title="Click to make this cover page"
                className={`${isClicked ? "" : "display_img"}`}
                onClick={() => appearPageClickHandler(index)}
                key={index}
                src={img}
                alt="Choose page"
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default SinglePage;
