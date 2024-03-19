/* eslint-disable react/prop-types */
import "./../../src/App.css";
import DateFormater from "./DateFormater";

const Page3 = ({ item, logo, studentSortDeptName, teacherSortDeptName }) => {
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
      <h3 className="assignmen_title3 text_center">
        Assignment On <br /> {assignmentTitle}
      </h3>

      <div className="course_info3">
        <p><span>Department</span>: {studentDepartment}</p>
        <p><span>Course Title</span>: {courseName}</p>
        <p><span>Course Code</span>: {courseCode}</p>
        <p><span>Year</span>: {year}</p>
        <p><span>Semester</span>: {semester}</p>
        <p><span>Session</span>: {session}</p>
      </div>

      <div className="boxes3">
        <div className="box3">
          <div className="box_title3 text_center">Submitted by:</div>
          <div className="box_content3">
            <p>{studentName}</p>
            <p>Id: {studentId}</p>
            <p>Department of {studentSortDeptName}, BSMRSTU</p>
          </div>
        </div>

        <div className="box3">
          <div className="box_title3 text_center">Submitted to:</div>
          <div className="box_content3">
            <p>{teacherName}</p>
            <p>{teacherTitle}</p>
            <p>Department of {teacherSortDeptName}, BSMRSTU</p>
          </div>
        </div>
      </div>

      <p className="submit_date text_right">
        <span>Date of submission:</span>{" "}
        <DateFormater submissionDate={submissionDate} />
      </p>
    </div>
  );
};

export default Page3;
