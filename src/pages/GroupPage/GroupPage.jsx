import useScrollToTop from "./../../hooks/useScrollToTop";
import img1st from "../../assets/img/display-pages/1st.jpg";
// import img2nd from "../../assets/img/display-pages/2nd.jpg";
// import img3rd from "../../assets/img/display-pages/3rd.jpg";
import { useState } from "react";
import { GroupForm } from "./../../components/unique/GroupForm/GroupForm";

const GroupPage = () => {
  useScrollToTop();
  const [isClicked, setIsClicked] = useState(false);
  // const [pageId, setPageId] = useState(null);
  // const imgs = [img1st, img2nd, img3rd,];

  function scrollToTop() {
    window.scrollTo({
      top: document.body.scrollTop,
      behavior: "smooth",
    });
  }

  const appearPageClickHandler = (index) => {
    // setPageId(index);

    setTimeout(() => {
      setIsClicked(true);
      scrollToTop();
    }, 200);
  };

  return (
    <>
      <div className="py-10">
        {isClicked ? (
          <GroupForm />
        ) : (
          <div className="grid xl:grid-cols-3 gap-5 cursor-pointer grid-cols-1  lg:px-0 px-4 container mx-auto">
            {/* {imgs?.map((img, index) => ( */}
            <div></div>
            <div>
              <img
                title="Click to make this cover page"
                className={`${isClicked ? "" : "display_img"}`}
                onClick={appearPageClickHandler}
                src={img1st}
                alt="Choose page"
              />
            </div>
            <div></div>
            {/* ))} */}
          </div>
        )}
      </div>
    </>
  );
};
export default GroupPage;
