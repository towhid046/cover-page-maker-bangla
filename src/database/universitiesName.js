// univesities name
const universities = [
  {
    name: "University of Dhaka",
    location: "Dhaka",
    zipCode: 1000,
    shortName: "DU",
  },
  {
    name: "Bangladesh Agricultural University",
    location: "Mymensingh",
    zipCode: 2202,
    shortName: "BAU",
  },
  {
    name: "Bangladesh University of Engineering and Technology",
    location: "Dhaka",
    zipCode: 1205,
    shortName: "BUET",
  },
  {
    name: "Jahangirnagar University",
    location: "Savar, Dhaka",
    zipCode: 1342,
    shortName: "JU",
  },
  {
    name: "Rajshahi University",
    location: "Rajshahi",
    zipCode: 6205,
    shortName: "RU",
  },
  {
    name: "Chittagong University",
    location: "Chittagong",
    zipCode: 4331,
    shortName: "CU",
  },
  {
    name: "Khulna University",
    location: "Khulna",
    zipCode: 9208,
    shortName: "KU",
  },
  {
    name: "Islamic University",
    location: "Kushtia",
    zipCode: 7003,
    shortName: "IU",
  },
  {
    name: "Shahjalal University of Science and Technology",
    location: "Sylhet",
    zipCode: 3100,
    shortName: "SUST",
  },
  {
    name: "National University, Bangladesh",
    location: "Gazipur",
    zipCode: 1704,
    shortName: "NUB",
  },
  {
    name: "Jagannath University",
    location: "Dhaka",
    zipCode: 1100,
    shortName: "JnU",
  },
  {
    name: "Barisal University",
    location: "Barisal",
    zipCode: 8200,
    shortName: "BU",
  },
  {
    name: "Comilla University",
    location: "Comilla",
    zipCode: 3506,
    shortName: "CU",
  },
  {
    name: "Noakhali Science and Technology University",
    location: "Noakhali",
    zipCode: 3814,
    shortName: "NSTU",
  },
  {
    name: "Begum Rokeya University, Rangpur",
    location: "Rangpur",
    zipCode: 5402,
    shortName: "BRUR",
  },
  {
    name: "Jatiya Kabi Kazi Nazrul Islam University",
    location: "Trishal, Mymensingh",
    zipCode: 2220,
    shortName: "JKKNIU",
  },
  {
    name: "Bangladesh University of Professionals",
    location: "Dhaka",
    zipCode: 1216,
    shortName: "BUP",
  },
  {
    name: "Patuakhali Science and Technology University",
    location: "Patuakhali",
    zipCode: 8602,
    shortName: "PSTU",
  },
  {
    name: "Pabna University of Science and Technology",
    location: "Pabna",
    zipCode: 6600,
    shortName: "PUST",
  },
  {
    name: "Jessore University of Science and Technology",
    location: "Jessore",
    zipCode: 7408,
    shortName: "JUST",
  },
  {
    name: "Hajee Mohammad Danesh Science and Technology University",
    location: "Dinajpur",
    zipCode: 5200,
    shortName: "HSTU",
  },
  {
    name: "Mawlana Bhashani Science and Technology University",
    location: "Tangail",
    zipCode: 2200,
    shortName: "MBSTU",
  },
  {
    name: "Sher-e-Bangla Agricultural University",
    location: "Dhaka",
    zipCode: 1207,
    shortName: "SAU",
  },
  {
    name: "Bangabandhu Sheikh Mujibur Rahman Science and Technology University",
    location: "Gopalganj",
    zipCode: 8100,
    shortName: "BSMRSTU",
  },
  {
    name: "Rabindra University, Bangladesh",
    location: "Kushtia",
    zipCode: 7000,
    shortName: "RUB",
  },
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
  { name: "Environmental Science & Disaster Management", sortName: "ESD" },
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
  { name: "Political Science", sortName: "PS" },
  { name: "Management Studies", sortName: "MGT" },
  { name: "Accounting and Information Systems", sortName: "AIS" },
  { name: "Marketing", sortName: "MKT" },
  { name: "Finance and Banking", sortName: "FAB" },
  { name: "Tourism and Hospitality Management", sortName: "THM" },
  { name: "Law", sortName: "LAW" },
  { name: "Agriculture", sortName: "AGR" },
  { name: "Fisheries and Marine Bioscience", sortName: "FMB" },
  { name: "Livestock Science and Veterinary Medicine", sortName: "LSVM" },
];

// Teacher titles
const teacherTitles = [
  "Lecturer",
  "Assistant Professor",
  "Associate Professor",
];

const ordinalNumbers = ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th"];

const sessions = [
  "2017-2018",
  "2018-2019",
  "2019-2020",
  "2020-2021",
  "2021-2022",
  "2022-2023",
  "2023-2024",
];

export const data = {
  universities,
  departments,
  ordinalNumbers,
  teacherTitles,
  sessions,
};
