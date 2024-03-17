/* eslint-disable react/prop-types */
import "./../../src/App.css";
import DateFormater from "./DateFormater";


const Page5 = ({ item, logo }) => {
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
      <h2 className="department_name">Department of {studentDepartment}</h2>
      <h3 className="assignmen_title text_center">
        Assignment On <br /> {assignmentTitle}
      </h3>

      <div className="course_info5">
        <p><span>Course Title</span>: {courseName}</p>
        <p><span>Course Code</span>: {courseCode}</p>
        <p><span>Year</span>: {year}</p>
        <p><span>Semester</span>: {semester}</p>
        <p><span>Session</span>: {session}</p>
      </div>


      <div className="boxes5">
        <div className="box2">
          <div className="box_title5">Submitted by:</div>
          <div className="box_content">
            <p>{studentName}</p>
            <p>Id: {studentId}</p>
            <p>
              Department of {studentDepartment}, <br /> BSMRSTU
            </p>
          </div>
        </div>
        
        <div className="box2 border-left-5">
          <div className="box_title5">Submitted to:</div>
          <div className="box_content">
            <p>{teacherName}</p>
            <p>{teacherTitle}</p>
            <p>
              Department of {teacherDepartment}, <br /> BSMRSTU
            </p>
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

export default Page5;
