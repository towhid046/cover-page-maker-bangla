import { useState } from "react";
import { Form } from "./Form";
import "./../../src/index.css";
import img1st from "./../assets/img/display-pages/1st.jpg";
import img2nd from "./../assets/img/display-pages/2nd.jpg";
import img3rd from "./../assets/img/display-pages/3rd.jpg";
import img4th from "./../assets/img/display-pages/4th.jpg";
import img5th from "./../assets/img/display-pages/5th.jpg";
import img6th from "./../assets/img/display-pages/6th.jpg";

export const Main = () => {
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
    <>
      <div>
        {isClicked ? (
          <Form pageId={pageId} />
        ) : (
          <div className="grid xl:grid-cols-3 gap-5 cursor-pointer grid-cols-1 lg:grid-cols-2 lg:px-0 px-4 container mx-auto">
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
    </>
  );
};
