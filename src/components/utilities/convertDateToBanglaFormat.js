// Function to convert English numerals to Bangla numerals
function convertToBanglaNumerals(number) {
    const banglaDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
    return number.toString().split('').map(digit => banglaDigits[parseInt(digit, 10)]).join('');
}

// Convert the date
export function convertDateToBanglaFormat(dateString) {
    const date = new Date(dateString);
    const day = convertToBanglaNumerals(date.getDate());
    const month = convertToBanglaNumerals(date.getMonth() + 1);
    const year = convertToBanglaNumerals(date.getFullYear());

    return `${day}/${month}/${year}`;
}