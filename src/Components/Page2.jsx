/* eslint-disable react/prop-types */
import "./../../src/App.css";
import DateFormater from "./DateFormater";
import Logo from "./shared/Logo/Logo";
import VarsityName from "./shared/VarsityName/VarsityName";
import DeptName from "./shared/DeptName/DeptName";
import AssignmentTitle from "./shared/AssignmentTitle/AssignmentTitle";
import CourseInfo from "./shared/CourseInfo/CourseInfo";
import SubmitDate from "./shared/SubmitDate/SubmitDate";

const Page1 = ({
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
    <div className="space-y-6 text-gray-700">
      <VarsityName varsityName={varsityName} customClass="text-[#344e41]" />

      <Logo logo={logo} />

      <DeptName studentDepartment={studentDepartment} />

      <AssignmentTitle assignmentTitle={assignmentTitle} />

      <CourseInfo
        courseName={courseName}
        courseCode={courseCode}
        year={year}
        semester={semester}
        session={session}
        customClass="text-center"
      />

      <div className="flex items-center justify-between border-2 border-[#000000c4] rounded-lg m-4">
        <div className=" pt-3 pb-10  flex-1 font-semibold ">
          <div className="text-center text-xl pb-3">
            Submitted by:
          </div>
          <div className="p-5 space-y-0.5 border-t-2 border-[#000000c4] ">
            <p>{studentName}</p>
            <p>ID: {studentId}</p>
            <p>
              Department of {studentSortDeptName}, <br /> {uniShortName}
            </p>
          </div>
        </div>

        <div className=" pt-3 pb-10 border-left-2 flex-1 font-semibold ">
          <div className="text-center text-xl pb-3">
            Submitted to:
          </div>
          <div className="p-5 space-y-0.5 border-t-2 border-[#000000c4] ">
            <p>{teacherName}</p>
            <p>{teacherTitle}</p>
            <p>
              Department of {teacherSortDeptName}, <br /> {uniShortName}
            </p>
          </div>
        </div>
      </div>

      <SubmitDate submissionDate={submissionDate} />
    </div>
  );
};

export default Page1;
