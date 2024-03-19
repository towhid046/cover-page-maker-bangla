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
  { name: "Public Administration", sortName: "PAD" },
  { name: "Computer Science and Engineering", sortName: "CSE" },
  { name: "Electrical and Electronic Engineering", sortName: "EEE" },
  { name: "Electronics and Telecommunication Engineering", sortName: "ETE" },
  { name: "Applied Chemistry and Chemical Engineering", sortName: "ACCE" },
  { name: "Civil Engineering", sortName: "CE" },
  { name: "Food and Agroprocess Engineering", sortName: "FAE" },
  { name: "Architecture", sortName: "ARCH" },
  { name: "Mathematics", sortName: "MATH" },
  { name: "Statistics", sortName: "STAT" },
  { name: "Chemistry", sortName: "CHEM" },
  { name: "Physics", sortName: "PHYS" },
  { name: "Environmental Science & Disaster Management", sortName: "ESDM" },
  { name: "Pharmacy", sortName: "PHARM" },
  { name: "Biotechnology and Genetic Engineering", sortName: "BGE" },
  { name: "Biochemistry and Molecular Biology", sortName: "BMB" },
  { name: "Psychology", sortName: "PSY" },
  { name: "Botany", sortName: "BOT" },
  { name: "English", sortName: "ENG" },
  { name: "Bangla", sortName: "BAN" },
  { name: "Sociology", sortName: "SOC" },
  { name: "International Relations", sortName: "IR" },
  { name: "Economics", sortName: "ECO" },
  { name: "Political Science", sortName: "POL" },
  { name: "Management Studies", sortName: "MS" },
  { name: "Accounting and Information Systems", sortName: "AIS" },
  { name: "Marketing", sortName: "MKT" },
  { name: "Finance and Banking", sortName: "FAB" },
  { name: "Tourism and Hospitality Management", sortName: "THM" },
  { name: "Law", sortName: "LAW" },
  { name: "Agriculture", sortName: "AGR" },
  { name: "Fisheries and Marine Bioscience", sortName: "FMB" },
  { name: "Livestock Science and Veterinary Medicine", sortName: "LSVM" },
];

const years = ["1st", "2nd", "3rd", "4th"];
const teacherTitles = [
  "Lecturer",
  "Assistant Professor",
  "Associate Professor",
];


export const data = { universities, departments, years, teacherTitles };
