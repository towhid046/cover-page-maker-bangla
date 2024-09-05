/* eslint-disable react/prop-types */
import "./../../src/App.css";
import DateFormater from "./DateFormater";

const Page1 = ({ item, logo, studentSortDeptName, teacherSortDeptName, uniShortName}) => {

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
    <div className="text-gray-700 space-y-7">

      <h1 className="text-center text-[28px] text-[#2b6e9bf1] font-semibold">{varsityName}</h1>

      <div className="flex justify-center">
        <img src={logo} className="w-[130px] h-auto" alt="Your University Logo" />
      </div>

      <h2 className=" text-xl text-center font-medium">Department of {studentDepartment}</h2>

      <div className=" font-semibold text-xl text-center">
        <p className="italic text-[#91c462e7] mb-1">Assignment On</p> 
        <h3>{assignmentTitle}</h3>
      </div>

      <div className="text-lg font-semibold">
        <p>Course Title: {courseName}</p>
        <p>Course Code: {courseCode}</p>
        <p>Year: {year}</p>
        <p>Semester: {semester}</p>
        <p>Session: {session}</p>
      </div>

      <div className="flex items-center justify-between gap-6 font-semibold">
        <div className="flex-1 border-2 border-[#2b6e9b77] rounded-tr-3xl rounded-bl-3xl px-11 py-12">
          <div  className="italic mb-2">Submitted by:</div>
          <div className="transition-transform space-y-1 translate-x-6">
            <p>{studentName}</p>
            <p>ID: {studentId}</p>
            <p>Department of {studentSortDeptName}, <br /> {uniShortName}</p>
          </div>
        </div>

        <div className="flex-1 border-2 border-[#2b6e9b77] rounded-tr-3xl rounded-bl-3xl px-8 py-12">
          <div className="italic mb-2">Submitted to:</div>
          <div className="transition-transform space-y-1 translate-x-6">
            <p>{teacherName}</p>
            <p>{teacherTitle}</p>
            <p>Department of {teacherSortDeptName},<br /> {uniShortName}</p>
          </div>
        </div>
      </div>
      
      <p className="font-semibold italic text-center pt-8">
        <span className="color1">Date of submission:</span>{" "}
        <DateFormater submissionDate={submissionDate} />
      </p>
    </div>
  );
};

export default Page1;
