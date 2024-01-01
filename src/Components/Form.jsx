/* eslint-disable react/jsx-key */
/* eslint-disable no-const-assign */
/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { Page } from "./Page";

import { data } from "./../database/universitiesName";
const { universities, departments, years, teacherTitles } = data;

export const Form = () => {
  const [versityName, setVersityName] = useState("");
  const [departmentName, setDepartmentName] = useState("");
  const [assignmentTitle, setAssignmentTitle] = useState("");
  const [couseName, setcouseName] = useState(undefined);
  const [courseCode, setCourseCode] = useState(undefined);
  const [year, setYear] = useState("");
  const [semester, setSemester] = useState("");

  const [studentName, setStudentName] = useState("");
  const [studentId, setStudentId] = useState("");
  const [studentDepartment, setStudentDepartment] = useState("");

  const [teacherName, setTeacherName] = useState("");
  const [teacherTitle, setTeacherTitle] = useState("");
  const [teacherDepartment, setTeacherDepartmen] = useState("");

  const [submissionDate, setSubmissionDate] = useState("");

  const [formData, setFormData] = useState({});

  // handel form submit:
  const formSubmitHandelar = (event) => {
    event.preventDefault();
    console.dir(event.target);
    setFormData({
      versityName,
      departmentName,
      assignmentTitle,
      couseName,
      courseCode,
      year,
      semester,

      studentName,
      studentId,
      studentDepartment,

      teacherName,
      teacherTitle,
      teacherDepartment,
      submissionDate,
    });
  };
  // create object for sending data to Page component

  return (
    <>
      <form onSubmit={formSubmitHandelar} action="">
        <div className="form_wrapper ">
          <div className="universityInfo">
            {/* versity name */}
            <h2>University Information:</h2>
            <label htmlFor="">
              University Name: <br />
              <select required onChange={(e) => setVersityName(e.target.value)}>
                <option className="color_gray">Choose your varsity</option>
                {universities.map((varsity) => (
                  <option
                    value={`${varsity.name}, ${varsity.location}- ${varsity.zipCode}`}
                  >
                    {varsity.name}, {varsity.location}-{varsity.zipCode}
                  </option>
                ))}
              </select>
            </label>
            {/* department name */}
            <label htmlFor="">
              Department: <br />
              <select
                required
                onChange={(e) => setDepartmentName(e.target.value)}
                name=""
                id=""
              >
                <option className="color_gray">Your department name</option>
                {departments.map((department) => (
                  <option value={department.name}>{department.name}</option>
                ))}
              </select>
            </label>{" "}
            <br />
            {/* topic name */}
            <label htmlFor="">
              Assignment Title: <br />
              <input
                required
                type="text"
                placeholder="Assignment title"
                onChange={(e) => setAssignmentTitle(e.target.value)}
              />
            </label>{" "}
            <br />

            {/* course name */}
            <label htmlFor="">
              Course Name: <br />
              <input
                required
                type="text"
                placeholder="Course Name"
                onChange={(e) => setcouseName(e.target.value)}
              />
            </label>{" "}
            <br />

            {/* course code */}
            <label htmlFor="">
              Course Code: <br />
              <input
                required
                type="text"
                placeholder="Course Code"
                onChange={(e) => setCourseCode(e.target.value)}
              />
            </label>{" "}
            <br />
            {/* year */}
            <label htmlFor="">
              Year: <br />
              <select
                required
                onChange={(e) => setYear(e.target.value)}
                name=""
                id=""
              >
                <option className="color_gray">Year</option>
                {years.map((year) => (
                  <option value={year}>{year}</option>
                ))}
              </select>
            </label>{" "}
            <br />
            {/* semester */}
            <label htmlFor="">
              Semester: <br />
              <select
                required
                onChange={(e) => setSemester(e.target.value)}
                name=""
                id=""
              >
                <option className="color_gray">Semester</option>
                <option value="1st">1st</option>
                <option value="2nd">2nd</option>
              </select>
            </label>{" "}
            <br />
            {/* submission Date */}
            <label htmlFor="">
              Date of submission: <br />
              <input
                required
                type="date"
                onChange={(e) => setSubmissionDate(e.target.value)}
              />
            </label>{" "}
            <br />
          </div>

          <div className="student_teacher_info">
            {/* Student information */}
            <div className="student_info">
              <h2>Your Information:</h2>
              {/* your name */}
              <label htmlFor="">
                Student name: <br />
                <input
                  required
                  type="text"
                  placeholder="Student name"
                  onChange={(e) => setStudentName(e.target.value)}
                />{" "}
                <br />
              </label>{" "}
              {/* your id: */}
              <label htmlFor="">
                Student Id: <br />
                <input
                  required
                  type="text"
                  placeholder="Student Id"
                  onChange={(e) => setStudentId(e.target.value)}
                />{" "}
                <br />
              </label>
              {/* student Departemnt name */}
              <label htmlFor="">
                Department: <br />
                <select
                  required
                  placeholder="Department name"
                  onChange={(e) => setStudentDepartment(e.target.value)}
                >
                  <option className="color_gray">Your department</option>
                  {departments.map((department) => (
                    <option value={department.name}>{department.name}</option>
                  ))}
                </select>
              </label>
            </div>

            <div className="teacher_info">
              <h2>Teacher's Information:</h2>
              {/* Teacher name */}
              <label htmlFor="">
                Teacher's name: <br />
                <input
                  required
                  type="text"
                  placeholder="Teacher name"
                  onChange={(e) => setTeacherName(e.target.value)}
                />{" "}
                <br />
              </label>
              {/* Teacher title: */}
              <label htmlFor="">
                Teacher's Title: <br />
                <select
                  required
                  onChange={(e) => setTeacherTitle(e.target.value)}
                  name=""
                  id=""
                >
                  <option className="color_gray">Teacher's title</option>
                  {teacherTitles.map((teacherTitle) => (
                    <option value={`${teacherTitle},`}>{teacherTitle}</option>
                  ))}
                </select>
                <br />
              </label>
              {/* Techer Departemnt name */}
              <label htmlFor="">
                Teacher's Department: <br />
                <select
                  required
                  onChange={(e) => setTeacherDepartmen(e.target.value)}
                >
                  <option className="color_gray">Teacher's department</option>
                  {departments.map((department) => (
                    <option value={department.name}>{department.name}</option>
                  ))}
                </select>
              </label>{" "}
              <br />
            </div>
          </div>
        </div>

        <div className="submit_btn_wrapper">
          <button className="submit_btn">Submit</button>
        </div>
      </form>
      {/* Send data to Page component */}
      <Page key={crypto.randomUUID()} formData={formData} />
    </>
  );
};
