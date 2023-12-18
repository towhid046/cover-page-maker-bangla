/* eslint-disable react/prop-types */

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
        courseCode === '' ? 
        <h2>Your cover page appare here</h2>
        :
        <div>
        <h1>{versityName}</h1>
        <h2>{departmentName}</h2>
        <h3>Assignment On {assignmentTitle}</h3>

        <div>
            <b>Course Code: {courseCode}</b> <br />
            <i>Year: {year}</i> <br />
            <i>Semester: {semester}</i>
        </div>

        <div>
            <h4>{studentName}</h4>
            <b>Id: {studentId}</b> <br />
            <i>Department of {studentDepartment}, BSMRSTU</i>
        </div>

        <div>
            <h4>{teacherName}</h4>
            <b>{teacherTitle}</b> <br />
            <i>Department of {teacherDepartment}, BSMRSTU</i>
        </div>
        <p><i>Date of submission: {submissionDate}</i></p>
    </div>
    }
    </>
  )
}
