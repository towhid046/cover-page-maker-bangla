/* eslint-disable react/prop-types */
import "./../../src/App.css";
import GenericPdfDownloader from "./DownloadPdf";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";
import Page5 from "./Page5";
import Page6 from "./Page6";

import logo1000 from "./../assets/img/logos/1000.png";
import logo1100 from "./../assets/img/logos/1100.png";
import logo1205 from "./../assets/img/logos/1205.png";
import logo1207 from "./../assets/img/logos/1207.png";
import logo1216 from "./../assets/img/logos/1216.png";
import logo1342 from "./../assets/img/logos/1342.png";
import logo1704 from "./../assets/img/logos/1704.png";
import logo2200 from "./../assets/img/logos/2200.png";
import logo2202 from "./../assets/img/logos/2202.png";
import logo2220 from "./../assets/img/logos/2220.png";
import logo3100 from "./../assets/img/logos/3100.png";
import logo3506 from "./../assets/img/logos/3506.png";
import logo3814 from "./../assets/img/logos/3814.png";
import logo4331 from "./../assets/img/logos/4331.png";
import logo5200 from "./../assets/img/logos/5200.png";
import logo5402 from "./../assets/img/logos/5402.png";
import logo6205 from "./../assets/img/logos/6205.png";
import logo6600 from "./../assets/img/logos/6600.png";
import logo7000 from "./../assets/img/logos/7000.png";
import logo7003 from "./../assets/img/logos/7003.png";
import logo7408 from "./../assets/img/logos/7408.png";
import logo8100 from "./../assets/img/logos/8100.png";
import logo8200 from "./../assets/img/logos/8200.png";
import logo8602 from "./../assets/img/logos/8602.png";
import logo9208 from "./../assets/img/logos/9208.png";

import sorterDepartment from "./utilities/sorterDepartment";
import getUniShorterName from './utilities/getUniShorterName';

export const CoverPage = ({ item, pageId }) => {
  const { courseCode } = item;
  const zipCode = parseInt(item.versityName.split("-")[1]);
  const logos = [
    { id: 1100, name: logo1100 },
    { id: 1000, name: logo1000 },
    { id: 1205, name: logo1205 },
    { id: 1207, name: logo1207 },
    { id: 1216, name: logo1216 },
    { id: 1342, name: logo1342 },
    { id: 1704, name: logo1704 },
    { id: 2200, name: logo2200 },
    { id: 2202, name: logo2202 },
    { id: 2220, name: logo2220 },
    { id: 3100, name: logo3100 },
    { id: 3506, name: logo3506 },
    { id: 3814, name: logo3814 },
    { id: 4331, name: logo4331 },
    { id: 5200, name: logo5200 },
    { id: 5402, name: logo5402 },
    { id: 6205, name: logo6205 },
    { id: 6600, name: logo6600 },
    { id: 7000, name: logo7000 },
    { id: 7003, name: logo7003 },
    { id: 7408, name: logo7408 },
    { id: 8100, name: logo8100 },
    { id: 8200, name: logo8200 },
    { id: 8602, name: logo8602 },
    { id: 9208, name: logo9208 },
  ];

  const generateLogo = (zip) => {
    const targetedItem = logos.find((logo) => logo.id === zip);
    return targetedItem.name;
  };
  const logo = 'https://gobranddirect.com/cdn/shop/products/Asset2_grande.jpg?v=1619802039'

  // get sorter dept name:
  const studentSortDeptName = sorterDepartment(item.studentDepartment);
  const teacherSortDeptName = sorterDepartment(item.teacherDepartment);

  // get university short name:
  const uniShortName = getUniShorterName(item.versityName)
  // render the page based on user clicked:
  const renderPage = (id) => {
    const pages = {
      1: Page1,
      2: Page2,
      3: Page3,
      4: Page4,
      5: Page5,
      6: Page6,
    };

    const SelectedPage = pages[id];

    if (SelectedPage) {
      return (
        <SelectedPage
          item={item}
          logo={logo}
          studentSortDeptName={studentSortDeptName}
          teacherSortDeptName={teacherSortDeptName}
          uniShortName={uniShortName}
        />
      );
    } else {
      return <h2>Page not found</h2>;
    }
  };

  return (
    <>
      <div className="cover_page_parent">
        <div id="testId" className="cover_page_wrapper">
          {renderPage(pageId + 1)}
        </div>

        {courseCode !== undefined && (
          <GenericPdfDownloader
            downloadFileName="CustomPdf"
            rootElementId="testId"
          />
        )}
      </div>
    </>
  );
};