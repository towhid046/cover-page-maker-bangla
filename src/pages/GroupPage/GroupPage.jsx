import useScrollToTop from "./../../hooks/useScrollToTop";
import groupPage1 from "../../assets/img/display-pages/group_page_1.jpg";
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
      <section className="pb-10 container mx-auto px-4">
      <p className="lg:text-2xl text-xl font-medium bg-gradient-to-r  lg:py-2.5 py-2 my-2 lg:my-4 text-center from-indigo-400 via-purple-400 to-pink-400 text-white">{isClicked ? "Fill up the form & generate cover page" : "Choose a template"}</p>
        {isClicked ? (
          <GroupForm />
        ) : (
          <div className="grid xl:grid-cols-3 gap-5 cursor-pointer grid-cols-1 ">
            {/* {imgs?.map((img, index) => ( */}
            <div></div>
            <div>
              <img
                title="Click to make this cover page"
                className={`${isClicked ? "" : "display_img"}`}
                onClick={appearPageClickHandler}
                src={groupPage1}
                alt="Choose page"
              />
            </div>
            <div></div>
            {/* ))} */}
          </div>
        )}
      </section>
    </>
  );
};
export default GroupPage;
