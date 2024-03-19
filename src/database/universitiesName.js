const universities = [
  { name: "University of Dhaka", location: "Dhaka", zipCode: "1000" },
  { name: "Bangladesh Agricultural University", location: "Mymensingh", zipCode: "2202" },
  { name: "Bangladesh University of Engineering and Technology", location: "Dhaka", zipCode: "1205" },
  { name: "Jahangirnagar University", location: "Savar, Dhaka", zipCode: "1342" },
  { name: "Rajshahi University", location: "Rajshahi", zipCode: "6205" },
  { name: "Chittagong University", location: "Chittagong", zipCode: "4331" },
  { name: "Khulna University", location: "Khulna", zipCode: "9208" },
  { name: "Islamic University", location: "Kushtia", zipCode: "7003" },
  { name: "Shahjalal University of Science and Technology", location: "Sylhet", zipCode: "3100" },
  { name: "National University, Bangladesh", location: "Gazipur", zipCode: "1704" },
  { name: "Jagannath University", location: "Dhaka", zipCode: "1100" },
  { name: "Barisal University", location: "Barisal", zipCode: "8200" },
  { name: "Comilla University", location: "Comilla", zipCode: "3506" },
  { name: "Noakhali Science and Technology University", location: "Noakhali", zipCode: "3814" },
  { name: "Begum Rokeya University, Rangpur", location: "Rangpur", zipCode: "5402" },
  { name: "Jatiya Kabi Kazi Nazrul Islam University", location: "Trishal, Mymensingh", zipCode: "2220" },
  { name: "Bangladesh University of Professionals", location: "Dhaka", zipCode: "1216" },
  { name: "Patuakhali Science and Technology University", location: "Patuakhali", zipCode: "8602" },
  { name: "Pabna University of Science and Technology", location: "Pabna", zipCode: "6600" },
  { name: "Jessore University of Science and Technology", location: "Jessore", zipCode: "7408" },
  { name: "Hajee Mohammad Danesh Science and Technology University", location: "Dinajpur", zipCode: "5200" },
  { name: "Mawlana Bhashani Science and Technology University", location: "Tangail", zipCode: "2200" },
  { name: "Sher-e-Bangla Agricultural University", location: "Dhaka", zipCode: "1207" },
  {
    name: "Bangabandhu Sheikh Mujibur Rahman Science and Technology University",
    location: "Gopalganj",
    zipCode: "8100",
  },
  { name: "Rabindra University, Bangladesh", location: "Kushtia", zipCode: "7000" }
];

//   dapartment name

const departments = [
  { name: "Public Administration" },
  { name: "Computer Science and Engineering" },
  { name: "Electrical and Electronic Engineering" },
  { name: "Electronics and Telecommunication Engineering" },
  { name: "Applied Chemistry and Chemical Engineering" },
  { name: "Civil Engineering" },
  { name: "Food and Agroprocess Engineering" },
  { name: "Architecture" },
  { name: "Mathematics" },
  { name: "Statistics" },
  { name: "Chemistry" },
  { name: "Physics" },
  { name: "Environmental Science & Disaster Management" },
  { name: "Pharmacy" },
  { name: "Biotechnology and Genetic Engineering" },
  { name: "Biochemistry and Molecular Biology" },
  { name: "Psychology" },
  { name: "Botany" },
  { name: "English" },
  { name: "Bangla" },
  { name: "Sociology" },
  { name: "International Relations" },
  { name: "Economics" },
  { name: "Political Science" },
  { name: "Management Studies" },
  { name: "Accounting and Information Systems" },
  { name: "Marketing" },
  { name: "Finance and Banking" },
  { name: "Tourism and Hospitality Management" },
  { name: "Law" },
  { name: "Agriculture" },
  { name: "Fisheries and Marine Bioscience" },
  { name: "Livestock Science and Veterinary Medicine" },
];

const years = ["1st", "2nd", "3rd", "4th"];
const teacherTitles = [
  "Lecturer",
  "Assistant Professor",
  "Associate Professor",
];

// versity logos:

// const logos = [
//   { id: 1000, img: "https://i.ibb.co/vY9pXGp/1000.png" },
//   { id: 1100, img: "https://i.ibb.co/K7XW9T0/1100.png" },
//   { id: 1205, img: "https://i.ibb.co/zRy6hvt/1205.png" },
//   { id: 1207, img: "https://i.ibb.co/RpJTCd2/1207.png" },
//   { id: 1216, img: "https://i.ibb.co/w7FPKdm/1216.png" },
//   { id: 1342, img: "https://i.ibb.co/k6ZdjJg/1342.png" },
//   { id: 1704, img: "https://i.ibb.co/xqty0t3/1704.png" },
//   { id: 2200, img: "https://i.ibb.co/qpqkFm0/2200.png" },
//   { id: 2202, img: "https://i.ibb.co/5Lmz6Bz/2202.png" },
//   { id: 2220, img: "https://i.ibb.co/RDK3rvH/2220.png" },
//   { id: 3100, img: "https://i.ibb.co/hyxtFGv/3100.png" },
//   { id: 3506, img: "https://i.ibb.co/gd6g2zK/3506.png" },
//   { id: 3814, img: "https://i.ibb.co/wBFmRW5/3814.png" },
//   { id: 4331, img: "https://i.ibb.co/PgC8Tzv/4331.png" },
//   { id: 5200, img: "https://i.ibb.co/cFjyv0Q/5200.png" },
//   { id: 5402, img: "https://i.ibb.co/bNpWBsS/5402.png" },
//   { id: 6205, img: "https://i.ibb.co/XVdF5VV/6205.png" },
//   { id: 6600, img: "https://i.ibb.co/Wkx9cYP/6600.png" },
//   { id: 7000, img: "https://i.ibb.co/wYNWFzt/7000.png" },
//   { id: 7003, img: "https://i.ibb.co/zxTK6g7/7003.png" },
//   { id: 7408, img: "https://i.ibb.co/txxdtcV/7408.png" },
//   { id: 8100, img: "https://i.ibb.co/D85PvqW/8100.png" },
//   { id: 8200, img: "https://i.ibb.co/nLPSCq3/8200.png" },
//   { id: 8602, img: "https://i.ibb.co/HrX4fD6/8602.png" },
//   { id: 9208, img: "https://i.ibb.co/FWp1CPX/9208.png" },
// ];


export const data = { universities, departments, years, teacherTitles };
