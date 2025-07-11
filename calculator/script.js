// let display = document.getElementById('display');

// let buttons = Array.from(document.getElementsByClassName('button'));

// buttons.map(button => {
//     button.addEventListener('click', (e) => {
//         switch(e.target.innerText){
//             case 'C':
//                 display.innerText = '';
//                 break;
//             case '=':
//                 try{
//                     display.innerText = eval(display.innerText);
//                 } catch {
//                     display.innerText = 'Error';
//                 }
//                 break;
//             default:
//                 display.innerText += e.target.innerText;
//         }
//     });
// });
//Arrays
// arr= ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
// arr.array.forEach(element => {
    
// });
//Arrow function
// var add= (a,b)=>  a+b;
// console.log(add(2,3));
// console.log(add(2,3,4));
// console.log(typeof add);

// function multiply(a,b){
//     console.log(a*b);
// }
// multiply(2,3);
//call back function
var arr2= [1,2,3,4,5,6,7,8,9,10];
arr2.filter(num => num%2==0).forEach(num => 
    console.log(num));
    
//extend function
class car {
    constructor(name, model){
        this.name= name;
        this.model= model;
    }
    getName(){
        return this.name;
    }
}
class electricCar extends car{
    constructor(name, model, battery){
        super(name, model);
        this.battery= battery;
    }
    getBattery(){
        return this.battery;
    }
}
class petrolCar extends car{
    constructor(name, model, fuel){
        super(name, model);
        this.fuel= fuel;
    }
    getFuel(){
        return this.fuel;
    }
}