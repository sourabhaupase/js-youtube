//  ----------- Dates --------------//

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date (2023, 0, 23);  // displayes date and time
// let myCreatedDate = new Date (2023, 0, 23, 5, 3); //  displays date time and minutes in pattern
let myCreatedDate = new Date ("2024-01-04"); // display date and time in DD/MM/YYYY pattern or MM/DD/YYYY
// console.log(myCreatedDate.toLocaleString());


let mytimeStamp = Date.now()

// console.log(mytimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

newDate.toLocaleString('default', {
     weekday: "long",
     
})

// In the above Date is an object because we created object in the above code