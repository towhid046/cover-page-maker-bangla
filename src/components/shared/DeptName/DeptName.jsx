import React from "react";

const DeptName = ({studentDepartment}) => {
  return (
    <div className="text-center">
      <h2 className="text-xl font-semibold">Department of {studentDepartment}</h2>
    </div>
  );
};

export default DeptName;
