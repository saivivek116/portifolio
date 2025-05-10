// // hoisting

// var a = undefined
// let a = not accessible (temporal dead zone)
// cosnt a = same as let

// // data types
// //primitive
// 1. number
// big integer
// 2. string
// 3. boolean  true false
// 4. undefined

// // non primitive
// Array
// Object
// function
// null
// symobols

// >, <, >=, <=, ==, ===, !=, !==

// 2 == "2"
// 2 === "2"
// Math.floor(), Math.pow()

Number(null) //becomes 0
Number(undefined) //becomes NaN
// arrays Objects
// always uses references

String(true) // "true"

Boolean([])



let a = [1,2,3]
a.slice()

// let b = [1,2,3]
// a === b

// c = a
// a === c
console.log(a === c); // This checks if `a` and `c` reference the same object in memory.

// let obj = {
//     name: "saivivek",
//     address:{
//         street: "",
//         city: "",
//     },
//     // degree: ["btech", "ms"],
//     married: false,
// }

// function interview(frontend, backend){
//     console.log(this);
//     console.log(frontend);
//     console.log(backend);
//     return
// }
// let interview2 = function(){

// }
// let interview3 = (frontend, backend)=>{

// }

// interview3();

// // call, apply, bind

// interview.call({name:"saivivek"},{name:'tejaswni'}, [], []);

// interview.apply({name:"saivivek"},[{name:"tejaswini"}, 3])

// let mod_interview = interview.bind({name:"saivivek"}, "frontend", "backend");

// mod_interview()

// // higher order functions'
// function greeting(fun, ...args){

//     return function(){
//         fun(...args)
//     }
// }

// greeting(interview, "frontend", "backend")()

// // spread
// let a = [1,2,3]
// let f = [...a, 4, 5, 5]
// //rest

// let [_, ...c] = [4,5,6]

// a = [1,2,3]
// a.includes(2)

// for(let i=0;i<a.length;i++){
//     console.log(a[i])
// }

// for(let item of a){
//     console.log(item);
// }

// a.forEach((item,i, a)=>{
//     console.log(item, i)
// })

// a.filter((item)=>{
//     return item; // true or false
// });

// a.map((item)=>{
//     return item*2
// })

// a.reduce((acc, curr)=>{
//     return acc+curr;
// }, 0)

// javascript is single threaded synchronous language

// let timeoutId = setTimeout(()=>{
//     console.log('seconds');
// }, 1000);

// clearTimeout(timeoutId);

// let intervalID = setInterval(()=>{
// console.log('seconds');
// }, 1000)
// clearInterval(intervalID);

// const pr = new Promise((resolve, reject)=>{
//     if(2==2){
//         resolve("data")
//     }else{
//         reject("")
//     }
// });

// pr.then((result)=>{
//  // when promise is fullfilled
// }).catch((err)=>{
//     //when error or prmoise is rejected
// }).finally(()=>{
//     //regardless successful or rejected executes this block
// })

// // object => pending, fullfilled, rejected

// async function myFunciton(){
//     try{
//         const pr = new Promise((resolve, reject)=>{
//             if(2==2){
//                 resolve("data")
//             }else{
//                 reject("")
//             }
//         });
//         const response = await pr;
//         return response
//     }catch(err){
//         console.log(err)0000
//     }finally{0
//         console.log('completed');
//     }
// }

// async function

// {
//     ""
// }

// function customBind(context, ...args) {
//     let callback = this;
//     return function () {
//         callback.call(context, ...args);
//     };
// }

// Function.prototype.customBind = customBind;

// let add = function (a, b) {
//     console.log(this);
//     return a + b;
// };
// let newadd = add.bind({ a: 1 }, 1, 2);
// newadd();
// "use strict";
// console.log(this);
// function add(a, b) {
//     console.log("addition", this);
//     return a + b;
// }
// let subtract = (a, b) => {
//     console.log("subtract", this);
//     return a - b;
// };
// add(1, 2);
// // subtract(2, 1);
// let arr = [
//     {
//         upvote: 2,
//         date: "1999-12-01",
//     },
//     {
//         upvote: 1,
//         date: "1998-12-01",
//     },
//     {
//         upvote: 5,
//         date: "2009-12-01",
//     },
// ];
// arr.sort((it1, it2) => new Date(it2.date) - new Date(it1.date));

// console.log(arr);
// function curryFunction(fn) {
//     console.log(fn.length);
// }

// curryFunction(function (a, b) {});

function name(a, b, c) {}

console.log(name);


[].sort()
let str = "saivivek"

let reg = /\d+/
reg.test()

parseFloat("43.23") // parses string to number 
parseFloat("43.23ab2") // results to 43.23

(0.1*0.1).toFixed(2) // important lesson javascript has floating point number issues
//you need to fix it by using toFixed() to fix on how many decimals you need otherwise u will get too many decimals
//doubt: how to get the number we expect without loosing nor getting extra decimals
//one way convert them to strings and multiple everything by removing . and diving by total number of decimals * 10


// In javascript inheritance works using prototype chaining

// Array, Function, Object each have their own properties which are stored in their __proto__

// arrays proto is Array.prototype and proto of Array.prototype is Objects proto 

// Array.prototype.assignanyproperty will make any array in your program can access that property or method

//similarly for Function.prototype and Object.prototype

const m = new Map()
localStorage.removeItem(2);
localStorage.setItem("user", "sai");
console.log(localStorage.getItem("user"));
console.log(localStorage.length);

//throttling

// for every 500ms i will make only one function call
//mainly used in event handlers like scroll and mouse move

function throttled(fn) {
    let time;
    let count = 0;
    return function (...args) {
        let currentTime = Date.now();
        if (time === undefined || currentTime - time >= 500) {
            time = currentTime;
            return fn(...args);
        }
    };
}

function add(a, b) {
    return a + b;
}

const throttledAdd = throttled(add);

//heaps

//heapify
//insertion
//deletion
//peek

