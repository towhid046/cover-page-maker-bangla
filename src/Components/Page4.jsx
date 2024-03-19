/* eslint-disable react/prop-types */
import "./../../src/App.css";
import DateFormater from "./DateFormater";

const Page3 = ({ item, logo, studentSortDeptName, teacherSortDeptName, uniShortName }) => {
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
      <h1 className="text_center versity_name"> {versityName}</h1>
      <div className="text_center logo_wrapper">
        <img src={logo} alt="Logo" /> <br />
      </div>
        <h2 className="department_name4 text_center">Department of {studentDepartment}</h2>
      <h3 className="assignmen_title4 text_center">
        Assignment On <br /> {assignmentTitle}
      </h3>

      <div className="course_info3">
        <p><span>Course Title</span>: {courseName}</p>
        <p><span>Course Code</span>: {courseCode}</p>
        <p><span>Year</span>: {year}</p>
        <p><span>Semester</span>: {semester}</p>
        <p><span>Session</span>: {session}</p>
      </div>

      <div className="boxes4">
        <div className="box4">
          <div className="box_title4 ">Submitted by:</div>
          <div className="box_content3">
            <p>{studentName}</p>
            <p>ID: {studentId}</p>
            <p>Department of {studentSortDeptName}, {uniShortName}</p>
          </div>
        </div>

        <div className="box4 box4_margin_left">
          <div className="box_title4 ">Submitted to:</div>
          <div className="box_content3">
            <p>{teacherName}</p>
            <p>{teacherTitle}</p>
            <p>Department of {teacherSortDeptName}, {uniShortName}</p>
          </div>
        </div>
      </div>

      <p className="submit_date submit_date4 text_right">
        <span>Date of submission:</span>{" "}
        <DateFormater submissionDate={submissionDate} />
      </p>
    </div>
  );
};

export default Page3;