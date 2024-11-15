// univesities name
const universities = [
  { name: "বঙ্গবন্ধু শেখ মুজিবুর রহমান বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়", location: "গোপালগঞ্জ", zipCode: 8100, zipCodeBn:'৮১০০', shortName: "বশেমুরবিপ্রবি" },
];

//   dapartment name
const departments = [
  { name: "বাংলা", sortName: "বাংলা" },
];

// Teacher titles
const teacherTitles = [
  "প্রভাষক",
  "সহকারী অধ্যাপক",
  "সহযোগী অধ্যাপক",
  'অধ্যাপক'
];

const ordinalNumbers = ["১ম", "২য়", "৩য়", "৪র্থ", "৫ম"];
const year = new Date().getFullYear();

const convertToBangla = (number) => {
  const banglaDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
  return number.toString().split('').map(digit => banglaDigits[digit]).join('');
};

const sessions = [
  `${convertToBangla(year - 6)} - ${convertToBangla(year - 5)}`,
  `${convertToBangla(year - 5)} - ${convertToBangla(year - 4)}`,
  `${convertToBangla(year - 4)} - ${convertToBangla(year - 3)}`,
  `${convertToBangla(year - 3)} - ${convertToBangla(year - 2)}`,
  `${convertToBangla(year - 2)} - ${convertToBangla(year - 1)}`,
  `${convertToBangla(year - 1)} - ${convertToBangla(year)}`,
];

export const data = {
  universities,
  departments,
  ordinalNumbers,
  teacherTitles,
  sessions,
};
