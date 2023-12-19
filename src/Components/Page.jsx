/* eslint-disable react/prop-types */
import './../../src/App.css'
import logo from './../assets/img/logo.png'

export const Page = ({formData}) => {
const {
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
} = formData
  return (
    <>
    {
        courseCode !== null ? 
        <h2>Your cover page appare here</h2>
        :
        <div className="cover_page_wrapper">
            <h1 className='text_center versity_name'> Bangabandhu Sheikh Mujibur Rahman Science and Technonogy University, Gopalganj - 8100 </h1>
            <div className="text_center logo_wrapper">
            <img src={logo} alt="Logo" /> <br />
            </div>
            <h2 className='department_name'>Department of {departmentName}</h2>
            <h3 className='assignmen_title text_center'>Assignment On <br /> {assignmentTitle}</h3>

            <div className='course_info'>
                <p>Course Title: {assignmentTitle}</p>
                <p>Course Code: {courseCode}</p>
                <p>Year: {year}</p>
                <p>Semester: {semester}</p>
            </div>

            <div className="boxes">
            <div className='box'>
                <div className="box_title">Submitted by:</div>
                <div className="box_content">
                <p>{studentName}</p>
                <p>ID: {studentId}</p>
                <p>Department of {studentDepartment}, BSMRSTU</p>
                </div>
            </div>

            <div className='box'>
                <div className="box_title">Submitted To:</div>
                <div className="box_content">
                <p>{teacherName}</p>
                <p>{teacherTitle}</p>
                <p>Department of {teacherDepartment}, BSMRSTU</p>
                </div>
            </div>
            </div>
            <p className='text_center submit_date'><span>Date of submission:</span> {submissionDate}</p>
    </div>
    }
    </>
  )
}
