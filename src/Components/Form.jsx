/* eslint-disable react/jsx-key */
/* eslint-disable no-const-assign */
/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { Page } from "./Page";

import { data } from "./../database/universitiesName";
const { universities, departments, years, teacherTitles } = data;

export const Form = () => {

  const [pageData, setPageData] = useState([]);

  // handel form submit:
  const formSubmitHandelar = (event) => {
    event.preventDefault();

    const formDatas = {};
    const elements = [...event.target.elements];
    elements.forEach((element) => {
      formDatas[element.name] = element.value;
      setPageData([...pageData, formDatas]);
    });
    
    elements.forEach(element=>{
      element.tagName === 'SELECT' ? 
      element.value = element[0].value : element.value = '';
    })
    
  };

  return (
    <>
      <form onSubmit={formSubmitHandelar} action="">
        <div className="form_wrapper ">
          <div className="universityInfo">
            {/* versity name */}
            <h2>University Information:</h2>
            <label htmlFor="">
              University Name: <br />
              <select
                name="versityName"
                required
              >
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
                name="departmentName"
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
                name="assignmentTitle"
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
                name='courseName'
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
                name="courseCode"
              />
            </label>{" "}
            <br />

            {/* year */}
            <label htmlFor="">
              Year: <br />
              <select
                required
                name="year"
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
                name="semester"
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
                name="submissionDate"
              />
            </label>{" "}
            <br />
          </div>

          <div className="student_teacher_info">
            {/* Student information */}
            <div className="student_info">
              <h2>Your Information:</h2>
              {/* Student name */}
              <label htmlFor="">
                Student name: <br />
                <input
                  required
                  type="text"
                  placeholder="Student name"
                  name="studentName"
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
                  name="studentId"
                />{" "}
                <br />

              </label>

              {/* student Departemnt name */}
              <label htmlFor="">
                Department: <br />
                <select
                  required
                  placeholder="Department name"
                  name="studentDepartment"
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
                  name="teacherName"
                />{" "}
                <br />
              </label>

              {/* Teacher title: */}
              <label htmlFor="">
                Teacher's Title: <br />
                <select
                  required
                  name="teacherTitle"
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
                  name="teacherDepartment"
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
      {
        pageData.map(item=> <Page key={crypto.randomUUID()} item={item}/>)
      }
      
    </>
  );
};
