/* eslint-disable react/prop-types */
import "./../../src/App.css";
// import logo from "./../assets/img/logo.png";
import bsmrstuLogo from "./../assets/img/logos/8100.png";

import DateFormater from "./DateFormater";

const Page6 = ({ item }) => {
  const {
    versityName,
    assignmentTitle,
    courseName,
    courseCode,
    year,
    semester,
    session,
    submissionDate,
    studentName,
    studentId,
    studentDepartment,
    teacherName,
    teacherTitle,
    teacherDepartment,
  } = item;

  return (
    <div>
      <h1 className="text_center versity_name6"> {versityName}</h1>
      <h2 className="department_name6 text_center">
        Department of {studentDepartment}
      </h2>
      <div className="text_center logo_wrapper logo_wrapper6">
        <img src={bsmrstuLogo} alt="Logo" /> <br />
      </div>
      <h3 className=" text_center">
        <p className="assignment_on6">Assignment On</p>{" "}
        <h3 className="assignmen_title6">{assignmentTitle}</h3>
      </h3>

      <div className="course_info6">
        <p>
          <span>Course Title</span>: {courseName}
        </p>
        <p>
          <span>Course Code</span>: {courseCode}
        </p>
        <p>
          <span>Year</span>: {year}
        </p>
        <p>
          <span>Semester</span>: {semester}
        </p>
        <p>
          <span>Session</span>: {session}
        </p>
      </div>

      <div className="boxes6 tex">
        <div className="box6 box6_margin_left">
          <div className="box_title4 ">Submitted by:</div>
          <div className="box_content3">
            <p>{studentName}</p>
            <p>Id: {studentId}</p>
            <p>Department of {studentDepartment}, BSMRSTU</p>
          </div>
        </div>

        <div className="box6 box6_margin_left box6_right">
          <div className="box_title4 ">Submitted to:</div>
          <div className="box_content3">
            <p>{teacherName}</p>
            <p>{teacherTitle}</p>
            <p>Department of {teacherDepartment}, BSMRSTU</p>
          </div>
        </div>

      </div>

      <p className="submit_date6 submit_date ">
        <span>Date of submission:</span>{" "}
        <DateFormater submissionDate={submissionDate} />
      </p>
    </div>
  );
};

export default Page6;
