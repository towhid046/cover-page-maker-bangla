/* eslint-disable react/prop-types */
import "./../../src/App.css";
import GenericPdfDownloader from "./DownloadPdf";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";
import Page5 from "./Page5";
import Page6 from "./Page6";

import { generateLogo } from "./utilities/generateLogo";

export const CoverPage = ({ item, pageId }) => {
  const { courseCode } = item;
  const zipCode = parseInt(item.versityName.split('-')[1])

  const logo = generateLogo(zipCode)

  const renderPage = (id) => {
    if (id === 1) {
      return <Page1 item={item} />;
    }
    if (id === 2) {
      return <Page2 item={item} logo={logo}  />;
    }
    if (id === 3) {
      return <Page3 item={item} logo={logo}  />;
    }
    if (id === 4) {
      return <Page4 item={item} logo={logo}  />;
    }
    if (id === 5) {
      return <Page5 item={item} logo={logo}  />;
    }
    if (id === 6) {
      return <Page6 item={item} logo={logo} />;
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
