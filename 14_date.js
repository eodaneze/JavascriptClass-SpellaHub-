const d = new Date();
console.log(d);
// getting the year
const year = d.getFullYear();
console.log(year);

// getting the curent month  number
const monthNum = d.getMonth() + 1;
console.log(monthNum);
// getting the day
const day = d.getDate();
console.log(day);
// get hours
const hour = d.getHours();
console.log(hour);

// get minutes
const minute = d.getMinutes();
console.log(minute);

// get seconds
const second = d.getSeconds();
console.log(second);
{
    const d = new Date("2022-03-25");
    console.log(d);
}