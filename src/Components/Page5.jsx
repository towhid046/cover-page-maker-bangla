/* eslint-disable react/prop-types */
import "./../../src/App.css";
import DateFormater from "./DateFormater";
import VarsityName from "./shared/VarsityName/VarsityName";
import Logo from "./shared/Logo/Logo";
import DeptName from "./shared/DeptName/DeptName";
import AssignmentTitle from "./shared/AssignmentTitle/AssignmentTitle";
import CourseInfo from "./shared/CourseInfo/CourseInfo";

const Page5 = ({
  item,
  logo,
  studentSortDeptName,
  teacherSortDeptName,
  uniShortName,
}) => {
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
  } = item;

  return (
    <div className="space-y-6">
      <VarsityName varsityName={varsityName} customClass="text-[#285943]" />
      <Logo logo={logo} />
      <DeptName studentDepartment={studentDepartment} />

      <AssignmentTitle assignmentTitle={assignmentTitle} />

      <CourseInfo
        courseCode={courseCode}
        courseName={courseName}
        year={year}
        semester={semester}
        session={session}
      />

      <div className="boxes5">
        <div className="box2">
          <div className="box_title5">Submitted by:</div>
          <div className="box_content">
            <p>{studentName}</p>
            <p>ID: {studentId}</p>
            <p>
              Department of {studentSortDeptName}, <br /> {uniShortName}
            </p>
          </div>
        </div>

        <div className="box2 border-left-5">
          <div className="box_title5">Submitted to:</div>
          <div className="box_content">
            <p>{teacherName}</p>
            <p>{teacherTitle}</p>
            <p>
              Department of {teacherSortDeptName}, <br /> {uniShortName}
            </p>
          </div>
        </div>
      </div>

      <p className="submit_date text_right">
        <span className="color5">Date of submission:</span>{" "}
        <DateFormater submissionDate={submissionDate} />
      </p>
    </div>
  );
};

export default Page5;
