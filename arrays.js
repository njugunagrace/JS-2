// Find the last element of the following arrays.
 let arr1 = [3,7,34,90,12];
  let element = arr1.slice(-1)
 console.log(element);

 let arr2 = [true, "green", "where",12,56];
let lastElement = arr2.slice(-1)
console.log(lastElement)

//  a JS program that will join the following array elements into a string
let myPets = ["Cow", "Bird", "Snake", "Dog"];
console.log(myPets.join())

// Write a JS script to sort the following array items
let arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
let sorted = arr3.sort((x,y)=> x-y)
console.log(sorted)

// Write a program to remove duplicates from the following array.
// Console the array without duplicates, and console another array that only contains the duplicates
let arr = ["apple", "mango", "apple",
            "orange", "mango", "mango"];
let words = [...new Set(arr)];
console.log(words)

// Write a JS script to search for the following word in the array.
// If the word is present, console it else console "the search word was not found"
let arr5 = ["the", "way", "x", 4];
let word2 = "we";

if (arr5.includes(word2)) {
  console.log(word2 + " was found in the array");
} else {
  console.log("The search word was not found.");
}


// Write a JS script to sort the following string
let word = "sevink";
let sortWord = word.split('').sort().join('');
console.log(sortWord);

