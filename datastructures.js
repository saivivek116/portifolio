let arr = []
arr.push(1,2) // adds elements in place and at the end of the arry and returns length of the resultant array
arr.pop() //removes and returns last element
arr.shift() //removes and returns first element
arr.unshift(3) //adds element in front of the array

arr.concat(4) // returns a new array with new elements at the end of the array .orginal array remains same
arr.concat([5,6]) // new array [3,1,2,5,6] to persist the operation we have to save it in the arr
arr.push([7,8]) // arr => [3,1,2,[7,8]]

arr.slice(1,2) //returns a portion of array based on start and end. if end is not mentioned then returns the portion from start to end of the array
// end is exclusive means not included in the result
//it does not tamper the original array, it gives new array with the portion asked
//its like arr[:] slicing in python

arr.sort((a,b)=>a-b); //sorts in ascending order

arr.join(".") //returns a string appending all the elements in the array with the seperator

arr.reverse() // reverse the array in place

arr.splice(index, countOfDeletingnumbers, ...elementsNeedtobeAdded) //deletes the elements from index to index+countofnumbers-1 returns the deleted numbers

arr.every(callback) // returns true or false based if all elements pass the condition specified in callback
//true if all elements pass the test
//false otherwise
arr.some(callback) // return true if any of the elements pass the test

arr.map(callback)
arr.filter(callback)
arr.reduce((acc,curr)=>{}, startingvalue);


// Sets
let s = new Set() //we can pass iterables inside constructor
//in javascript iterables are arrays, strings, maps, sets
//mainly contains add, delete, has, forEach, clear(), size for length

//Weak Set
let ws = new WeakSet()
//weak set only accepts objects
//it only has add, has, delete not even size property it has 
//gc will remove the element if no other element other than the set is referencing the element in the set

//Map
let map = new Map();
map.set("name","saivivek")
map.has("name")

map.get("name") //if not present returns undefined


map.delete("name") //deletes a record in map using key returns true if existed and removed otherwise false

map.size; //returns size;

//weakmap
//get, set, has, delete

//Strings

let str = new String();
str = "sai"

String.fromCharCode(65); // Converts ASCII value 65 to character 'A'
str.charCodeAt(0); // Converts the character at index 0 to its ASCII value
str.substring(1,2)
str.toLowerCase()
str.toUpperCase()

