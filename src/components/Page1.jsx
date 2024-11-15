/* eslint-disable react/prop-types */
import "./../../src/index.css";
import logo from '../assets/img/logos/8100.png'
import { convertDateToBanglaFormat } from "./utilities/convertDateToBanglaFormat";
const Page1 = ({
  item,
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
    teacherDepartment,
  } = item;
  console.log(submissionDate)
  return (
    <div className="text-gray-800 space-y-12 mt-5">
      <div>
        <h1 className="text-2xl font-semibold text-center">{varsityName}</h1>
      </div>

      <div className="w-[627px] space-y-12">
        <div className="flex justify-center">
          <img src={logo} className={`w-[140px] h-[140px]`} alt="Your University Logo" />
        </div>

        <div className="flex justify-center items-center flex-col gap-2">
          <p className="font-semibold text-[19px]">প্রতিবেদনের বিষয়: <span className="font-normal">{assignmentTitle}</span></p>
          <p className="font-semibold text-[19px]">কোর্স শিরোনাম: <span className="font-normal">{courseName}</span></p>
          <p className="font-semibold text-[19px]">কোর্স কোড: <span className="font-normal">{courseCode}</span></p>
          <p className="font-semibold text-[19px]">বর্ষ: <span className="font-normal">{year}</span></p>
          <p className="font-semibold text-[19px]"> সেমিস্টার: <span className="font-normal">{semester}</span></p>
          <p className="font-semibold text-[19px]"> শিক্ষাবর্ষ: <span className="font-normal">{session}</span></p>
        </div>

        <div className="flex justify-between gap-8">
          <div className="flex justify-center items-center flex-col gap-2 flex-1 p-5 border-2 rounded-md border-blue-300">
            <h3 className="font-semibold text-[19px]">নিবেদক,</h3>
            <p className="text-[19px]">{studentName}</p>
            <p className="text-[19px]">{studentDepartment} বিভাগ</p>
            <p className="text-[19px]">আইডি নম্বর: {studentId}</p>
            <p className="text-[19px] text-center">বশেমুরবিপ্রবি, গোপালগঞ্জ-৮১০০</p>
          </div>

          <div className="flex flex-col gap-2 justify-center items-center flex-1 border-2 border-blue-300 rounded-md p-5">
            <h3 className="font-bold text-[19px]">তত্ত্বাবধায়ক,</h3>
            <p className="text-[19px]">{teacherName}</p>
            <p className="text-[19px]">{teacherTitle} {teacherDepartment} বিভাগ</p>
            <p className="text-[19px] text-center">বশেমুরবিপ্রবি, গোপালগঞ্জ-৮১০০</p>
          </div>

        </div>

        <div>
          <p className="text-center text-[19px]"><span className="font-semibold">জমাদানের তারিখ:</span> {convertDateToBanglaFormat(submissionDate)}</p>
        </div>
      </div>
    </div>
  );
};

export default Page1;
