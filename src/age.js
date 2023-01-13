const { differenceInCalendarYears, differenceInYears, intervalToDuration, parse } = require("date-fns")

function calculateAge(dob) {
    const date = parse(dob, "dd/MM/yyyy", new Date());
    const age = differenceInYears(new Date(), date);
    return age;
}

function calculateAge2(dob) {
    const date = parse(dob, "dd/MM/yyyy", new Date());
    const age = differenceInCalendarYears(new Date(), date);
    return age;
}

console.log("dob = 01/04/2000"); // Running on 2021-08-05
console.log('- using differenceInYears: ', calculateAge("01/04/2000")); // 21
console.log('- using differenceInCalendarYears: ', calculateAge2("01/04/2000")); // 21

console.log("dob = 01/10/2000"); // Running on 2021-08-05
console.log('- using differenceInYears: ', calculateAge("01/10/2000")); // 20
console.log('- using differenceInCalendarYears: ', calculateAge2("01/10/2000")); // 21

function calculateFullAge(dob) {
    const birthDate = parse(dob, "dd/MM/yyyy", new Date());
    const { years, months, days } = intervalToDuration({ start: birthDate, end: new Date()});
    return { years, months, days };
}
console.log('- using intervalToDuration: ', calculateFullAge("01/04/2000")); // 21
console.log('- using intervalToDuration: ', calculateFullAge("01/10/2000")); // 20
