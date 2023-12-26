/* eslint-disable react/prop-types */
import "./../../src/App.css";
import logo from "./../assets/img/logo.png";
import { BoxInfo } from "./BoxInfo";
import GenericPdfDownloader from "./DownloadPdf";

export const Page = ({ formData }) => {
  const {
    versityName,
    departmentName,
    assignmentTitle,
    courseCode,
    year,
    semester,

    studentName,
    studentId,
    studentDepartment,

    teacherName,
    teacherTitle,
    teacherDepartment,
    submissionDate,
  } = formData;

  return (
    <div className="cover_page_parent">
      {courseCode === undefined ? (
       <div className="cover_page_appear_text"> <h2 className="" >Your cover page will appare here</h2></div>
      ) : (
        <div id="testId" className="cover_page_wrapper">
          <h1 className="text_center versity_name"> {versityName}</h1>
          <div className="text_center logo_wrapper">
            <img src={logo} alt="Logo" /> <br />
          </div>
          <h2 className="department_name">Department of {departmentName}</h2>
          <h3 className="assignmen_title text_center">
            Assignment On <br /> {assignmentTitle}
          </h3>

          <div className="course_info">
            <p>Course Title: {assignmentTitle}</p>
            <p>Course Code: {courseCode}</p>
            <p>Year: {year}</p>
            <p>Semester: {semester}</p>
          </div>

          <div className="boxes">
            <BoxInfo
              submitType="by"
              name={studentName}
              profession={`Id: ${studentId}`}
              department={studentDepartment}
            />
            <BoxInfo
              submitType="to"
              name={teacherName}
              profession={teacherTitle}
              department={teacherDepartment}
            />
          </div>
          <p className="text_center submit_date">
            <span>Date of submission:</span> {submissionDate}
          </p>
        </div>
      )}

      {
        courseCode !== undefined && 
        <GenericPdfDownloader
        downloadFileName="CustomPdf"
        rootElementId="testId"
      /> 
      }
    </div>
  );
};
