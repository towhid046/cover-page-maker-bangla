/* eslint-disable react/prop-types */
import React, { useState } from "react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { FaDownload } from "react-icons/fa";

const GenericPdfDownloader = ({ rootElementId, downloadFileName }) => {
  const [isDownloading, setIsDownloading] = useState(false);

  const downloadPdfDocument = async () => {
    setIsDownloading(true);
  
    try {
      const input = document.getElementById(rootElementId);
      if (!input) {
        console.error(`Element with ID '${rootElementId}' not found.`);
        return;
      }
  
      const canvas = await html2canvas(input, { scale: 2 }); // Adjust the scale
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4"); // Specify page size
      pdf.addImage(imgData, "JPEG", 0, 0, pdf.internal.pageSize.getWidth(), pdf.internal.pageSize.getHeight());
      pdf.save(`${downloadFileName}.pdf`);
    } catch (error) {
      console.error("Error generating PDF:", error);
    } finally {
      setIsDownloading(false);
    }
  };
  
  return (
    <button
      className="download_btn"
      onClick={downloadPdfDocument}
      disabled={isDownloading}
    >
      {isDownloading ? "Downloading..." : "Download"} <FaDownload />
    </button>
  );
};

export default GenericPdfDownloader;
