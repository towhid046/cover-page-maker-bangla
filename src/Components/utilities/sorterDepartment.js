import { data } from "../../database/universitiesName";
const { departments } = data;

const sorterDepartment = (deptName) => {
  if(deptName === `Teacher's department` || deptName === `Your department`){
    return `Select your department`
  }
  const targetedDept = departments.find((dept) => dept.name === deptName);
  if (targetedDept.name.split(" ").length > 1) {
    return targetedDept.sortName;
  } else {
    return deptName;
  }
};

export default sorterDepartment;
