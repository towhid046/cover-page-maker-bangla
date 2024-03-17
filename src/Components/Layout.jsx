import { useState } from "react";
import { Form } from "./Form";
import "./../../src/App.css";
import pageImg from "./../assets/img/page-1.jpg";



export const Layout = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [pageId, setPageId] = useState(null);
  const imgs = [pageImg, pageImg, pageImg, pageImg, pageImg, pageImg];

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
