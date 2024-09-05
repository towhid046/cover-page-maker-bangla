const CourseInfo2 = ({studentDepartment, courseName, courseCode, year, semester, session}) => {
  return (
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
  );
};

export default CourseInfo2;
