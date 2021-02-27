/*1. Using template literals instead of concatenation, write a function that takes
firstName and lastName and returns ‘fistName lastName’*/

function createFullName (firstName, lastName){
    return `My full name is ${firstName} ${lastName}`; 
}
console.log(createFullName("Christina", "Lytle")); 

/* 2. Write the same function as above as an arrow function with a different name.*/

const createFullNameWithArrows = (firstName, lastName) =>  `${firstName} ${lastName}`;
console.log(createFullNameWithArrows("Kip", "Val")); 

/*3a. Using setTimeout, write an anonymous (has no name assigned to it) arrow function 
in the callback parameter position. The function should alert ‘Time is up!’. Choose whatever 
length of time you want for the timeout.*/

console.log(setTimeout(() => {alert('Time is up!');}, 3000));

/*3b. Write an arrow function named askAreWeThereYet that alerts ‘Are we there yet?’. 
Using setInterval, pass askAreWeThereYet into the callback parameter position. 
Choose whatever length of time you want for the interval.*/

console.log(setInterval(() => {alert('Are we there yet?')}, 3000));

/*4a. Write a new function named processSplicedValue that takes 3 parameters – an array, 
the index of the element to be spliced from the array, and a callback function that will 
process the sliced element.*/

function processSplicedValue (array, index, callback) {
    let remove = array.splice(index, 1); 
    callback(remove); 
}
var kPopBands = ['BTS', 'BlackPink', 'TWICE', 'Red Velvet', 'GOT7'];

processSplicedValue(kPopBands, 2, console.log); 

/*4b. Call the processSplicedValue function again but this time pass in the 
alert method instead of console.log.*/

processSplicedValue(kPopBands, 2, alert); 

/*4c. Call the processSplicedValue function again, but this time pass in an 
anonymous arrow function that alerts the spliced value.*/

processSplicedValue(kPopBands, 2, message => alert(message)); 

/*4d. Call the processSplicedValue function one more time, but this time, pass in a 
custom function of your choice that you should create and name.*/

function myFavoriteKPopBand (band) {
    console.log(`My favorite K-Pop Band is ${band}`); 
}
processSplicedValue(kPopBands, 1, myFavoriteKPopBand); 