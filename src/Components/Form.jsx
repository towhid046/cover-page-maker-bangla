/* eslint-disable react/no-unescaped-entities */
import { useState } from "react"
import { Page } from "./Page"

export const Form = () => {
    const [versityName, setVersityName] = useState('')
    const [departmentName, setDepartmentName] = useState('')
    const [assignmentTitle, setAssignmentTitle] = useState('')
    const [courseCode, setCourseCode] = useState(null)
    const [year, setYear] = useState('')
    const [semester, setSemester] = useState('')

    const [studentName, setStudentName] = useState('')
    const [studentId, setStudentId] = useState('')
    const [studentDepartment, setStudentDepartment] = useState('')

    const [teacherName, setTeacherName] = useState('')
    const [teacherTitle, setTeacherTitle] = useState('')
    const [teacherDepartment, setTeacherDepartmen] = useState('')

    const [submissionDate, setSubmissionDate] = useState('')

    const [formData, setFormData] = useState({})

    

    // handel form submit:
    const formSubmitHandelar = (event) => {
        event.preventDefault();
        setFormData({
            versityName,
            departmentName,
            assignmentTitle,
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
        })

        
    }
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
        <input 
        type="text" 
        value={'Bangabandhu Sheikh Mujibur Rahman Science and Technonogy University, Gopalganj - 8100'}
        placeholder="University name" 
        onChange={(e)=>setVersityName(e.target.value)}
        /> <br />
        </label>

        {/* department name */}
        <label htmlFor="">
            Department: <br />
        <select 
        onChange={(e)=>setDepartmentName(e.target.value)}
        name="" id="">
            <option value="">Select department</option>

            <option
            value="Public Administration"
            >Public Administration
            </option>

            <option 
            value="Computer Science"
            >Computer Science
            </option>
        </select>
        </label> <br />

        {/* topic name */}
        <label htmlFor="">
            Assignment Title: <br />
            <input 
            type="text" 
            placeholder="Assignment title"
            onChange={(e)=>setAssignmentTitle(e.target.value)}
             />
        </label> <br />

        {/* course code */}
        <label htmlFor="">
            Course code: <br />
            <input 
            type="text" 
            placeholder="Course code"
            onChange={(e)=>setCourseCode(e.target.value)}
            />
        </label> <br />

        {/* year */}
        <label htmlFor="">
            Year: <br />
            <select
            onChange={(e)=>setYear(e.target.value)}
            name="" id="">

                <option value="">Year</option>

                <option 
                value="1st"
                >1st
                </option>

                <option 
                value="2nd"
                >2nd
                </option>

                <option
                value="3rd"
                >3rd
                </option>

                <option 
                value="4th"
                >4th
                </option>

            </select>
        </label> <br />

        {/* semester */}
        <label htmlFor="">
            Semester: <br />
            <select name="" id=""
            onChange={(e)=> setSemester(e.target.value)}
            >
                <option value="">Semester</option>
                <option 
                value="1st"
                >1st
                </option>

                <option 
                value="2nd"
                >2nd
                </option>
            </select>
        </label> <br />
        <label htmlFor="">
            Date of submission: <br />
            <input 
            type="date" 
            onChange={(e)=>setSubmissionDate(e.target.value)}
            />
        </label> <br />

    </div>
        

    <div className="student_teacher_info">
        {/* Student information */}
        <div className="student_info">
            <h2>Your info:</h2>
            {/* your name */}
            <label htmlFor="">
                Student name: <br />
                <input 
                type="text" 
                placeholder="Student name" 
                onChange={(e)=>setStudentName(e.target.value)}
                /> <br />
            </label> <br />

            {/* your id: */}
            <label htmlFor="">
                Student Id: <br />
                <input type="text" 
                placeholder="Student Id" 
                onChange={(e)=>setStudentId(e.target.value)}
                /> <br />
            </label>

            {/* student Departemnt name */}
            <label htmlFor="">
                Department: <br />
                <input 
                type="text" 
                placeholder="Department name" 
                onChange={(e)=>setStudentDepartment(e.target.value)}
                />
            </label>
        </div>

        <div className="student_info">
            <h2>Teacher's  info:</h2>
            {/* Teacher name */}
            <label htmlFor="">
                Teacher's name: <br />
                <input
                type="text" 
                placeholder="Teacher name" 
                onChange={(e)=> setTeacherName(e.target.value)} 
                /> <br />
            </label><br />

            {/* Teacher title: */}
            <label htmlFor="">
                Teacher's Title: <br />
                <select
                onChange={(e)=>setTeacherTitle(e.target.value)}
                name="" id="">

                    <option value="">Select teacher title</option>

                    <option 
                    value="Assistant Professor"
                    >Assistant Professor
                    </option>

                    <option 
                    value="Lecturer"
                    >Lecturer
                    </option>

            </select>
                
                <br />
            </label>

            {/* Techer Departemnt name */}
            <label htmlFor="">
            Teacher's Department: <br />
                <input 
                type="text" 
                placeholder="Department name"
                onChange={(e)=>setTeacherDepartmen(e.target.value)}
                />
            </label> <br />
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
  )
}
