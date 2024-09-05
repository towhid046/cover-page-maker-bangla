/* eslint-disable react/prop-types */
import "./../../src/App.css";
import DateFormater from "./DateFormater";
import VarsityName from "./shared/VarsityName/VarsityName";
import Logo from "./shared/Logo/Logo";
import SubmitDate from "./shared/SubmitDate/SubmitDate";

const Page3 = ({
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
      <VarsityName varsityName={varsityName} customClass={"text-[#124559]"} />
      <Logo logo={logo} />

      <h3 className="text-xl font-semibold uppercase text-[#db8936b0] text-center">
        Assignment On <br /> {assignmentTitle}
      </h3>

      <div className="font-semibold text-lg space-y-1">
        <p>
          <span className="italic w-[150px] inline-block">Department</span>:{" "}
          {studentDepartment}
        </p>
        <p>
          <span className="italic w-[150px] inline-block">Course Title</span>:{" "}
          {courseName}
        </p>
        <p>
          <span className="italic w-[150px] inline-block">Course Code</span>:{" "}
          {courseCode}
        </p>
        <p>
          <span className="italic w-[150px] inline-block">Year</span>: {year}
        </p>
        <p>
          <span className="italic w-[150px] inline-block">Semester</span>:{" "}
          {semester}
        </p>
        <p>
          <span className="italic w-[150px] inline-block">Session</span>:{" "}
          {session}
        </p>
      </div>

      <div className="flex items-center gap-6 text-lg">
        <div className="border-2 border-[#db8936b0]  rounded-2xl border-opacity-30 p-10 flex-1 font-semibold">
          <div className="italic text-xl text-center">Submitted by-</div>
          <div className="mt-5 space-y-1">
            <p>{studentName}</p>
            <p>ID: {studentId}</p>
            <p>
              Department of {studentSortDeptName},<br /> {uniShortName}
            </p>
          </div>
        </div>

        <div className="border-2 border-[#db8936b0] rounded-2xl border-opacity-30 p-10 flex-1 font-semibold">
          <div className="italic text-xl text-center">Submitted to-</div>
          <div className="mt-5 space-y-1">
            <p>{teacherName}</p>
            <p>{teacherTitle}</p>
            <p>
              Department of {teacherSortDeptName}, <br /> {uniShortName}
            </p>
          </div>
        </div>
      </div>

      <SubmitDate submissionDate={submissionDate} customClass="text-right" />
    </div>
  );
};

export default Page3;
