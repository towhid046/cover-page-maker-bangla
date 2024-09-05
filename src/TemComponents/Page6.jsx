/* eslint-disable react/prop-types */
import "./../../src/App.css";
import DateFormater from "./DateFormater";


const Page6 = ({item, logo, studentSortDeptName, teacherSortDeptName, uniShortName }) => {
  const {
    varsityName,
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
      <h1 className="text-center versity_name6 color6">{varsityName}</h1>
      <h2 className="department_name6 text-center">
        Department of {studentDepartment}
      </h2>
      <div className="text-center logo_wrapper logo_wrapper6">
        <img style={{maxWidth: '100%'}} src={logo} alt="Logo" /> <br />
      </div>
      <h3 className=" text-center">
        <p className="assignment_on6">Assignment On</p>{" "}
        <p className="assignmen_title6">{assignmentTitle}</p>
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
            <p>ID: {studentId}</p>
            <p>Department of {studentSortDeptName}, {uniShortName}</p>
          </div>
        </div>

        <div className="box6 box6_margin_left box6_right">
          <div className="box_title4 ">Submitted to:</div>
          <div className="box_content3">
            <p>{teacherName}</p>
            <p>{teacherTitle}</p>
            <p>Department of {teacherSortDeptName}, {uniShortName}</p>
          </div>
        </div>

      </div>

      <p className="submit_date6 submit_date ">
        <span className="color6">Date of submission:</span>{" "}
        <DateFormater submissionDate={submissionDate} />
      </p>
    </div>
  );
};

export default Page6;
