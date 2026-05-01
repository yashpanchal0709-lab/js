let myDate = new Date
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

let myCreatedDate = new Date (2023, 0, 23);
// console.log(myCreatedDate.toDateString());

let myCreatedDate1 = new Date (2023, 0, 23, 5, 3);
// console.log(myCreatedDate1.toLocaleString());

let myCreatedDate2 = new Date ("2023-01-25");
// console.log(myCreatedDate2.toLocaleString());

let myCreatedDate3 = new Date ("12-14-2023");
// console.log(myCreatedDate3.toLocaleString());

// Timestamps

let myTimeStamp = Date.now();
// console.log(myTimeStamp)

// console.log(myCreatedDate3.getTime());

//Interview question asked
// console.log(Math.floor(Date.now()/ 1000));

let newDate = new Date;
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

// `${newDate.getDay()} and the day is`

newDate.toLocaleString('default',{
    weekday: "long",
})