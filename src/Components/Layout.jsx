import { useState } from "react";
import { Form } from "./Form";
import "./../../src/App.css";
import img1st from "./../assets/img/display-pages/1st.jpg";
import img2nd from "./../assets/img/display-pages/2nd.jpg";
import img3rd from "./../assets/img/display-pages/3rd.jpg";
import img4th from "./../assets/img/display-pages/4th.jpg";
import img5th from "./../assets/img/display-pages/5th.jpg";
import img6th from "./../assets/img/display-pages/6th.jpg";



export const Layout = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [pageId, setPageId] = useState(null);
  const imgs = [img1st, img2nd, img3rd, img4th, img5th, img6th];

  function scrollToTop() {
    window.scrollTo({
      top: document.body.scrollTop,
      behavior: "smooth",
    });
  }

  const appearPageClickHandelar = (index) => {
    setPageId(index)

    setTimeout(() => {
      setIsClicked(true);
      scrollToTop();
    }, 200);
  };

  return (
    <>
      <h1 className="text_center  choose_template_title">
        {isClicked ? "Fillup the form and get your COVER page" : "Choose a template"}
      </h1>
      <div className="container appear-imgs">
        {isClicked ? (
          <Form pageId={pageId} />
        ) : (
          imgs.map((img, index) => (
            <img
              onClick={()=>appearPageClickHandelar(index)}
              key={index}
              src={img}
              alt="Choose page"
            />
          ))
        )}
      </div>
    </>
  );
};
