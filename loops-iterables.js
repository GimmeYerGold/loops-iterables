/**
 * PART 0

 *
 * Write a function that calculates the sum of all the numbers in an array
 */

var sumOfArray = function (arr) {
	var total = 0;
	var i = 0;

while (i < arr.length) {
	var el = arr[i]
	total = total + el
	i = i + 1
}	
	return total
}


console.assert(sumOfArray([1, 2]) === 3);
console.assert(sumOfArray([]) === 0);
console.assert(sumOfArray([1, 2, 3]) === 6);
console.assert(sumOfArray([10, 9, 8]) === 27);

// PART 1

// Write a function maxOfArray() that takes an array of
// numbers as an argument and finds the highest number.

var isNan = function(arr) {
		if (typeof arr === "number") {

		return true  	
		}
		return true
        }

var maxOfArray = function(arr) {	
		var max = 0

		for (var i = 0; i < arr.length; i = i +1) {
			if (arr[i] > max) {
			max = arr[i]	
		}
        }
		return max
}

console.assert(maxOfArray([2,4,3]) === 4)
console.assert(maxOfArray([10,9,8,100,7,6]) === 100)
console.assert(isNan(maxOfArray([1,2,'bucklemyshoe'])))

/**
 * PART 2
 *
 * Write a function isVowel() that takes a character (i.e. a string of length 1)
 * and returns true if it is a vowel, false otherwise.
 */

function isVowel(symbol){
    
	var vowelArray =
	["A", "a", "E", "e", "I", "i", "O", "o", "U", "u"]

	for (var i = 0; i < vowelArray.length; i++){

			if(symbol === vowelArray[i]){
				return true
			}
		}
				return false
	}

console.assert(isVowel(0) === false);
console.assert(isVowel("B") === false);
console.assert(isVowel("b") === false);
console.assert(isVowel("a") === true);
console.assert(isVowel("E") === true);

/**
 * Part 3
 *
 * Define a function reverse() that computes
 * the reversal of a string. For example,
 * reverse("skoob") should return the
 * string "books".
 */

function reverse(oldString) {
	var newString = ""
	for (var i = oldString.length-1; i >= 0; i--) {
		var letter = oldString[i]
	newString = newString + letter
    }
	
	return newString
}



console.assert(reverse("books") === "skoob")
console.assert(reverse("we don't want no trouble") === "elbuort on tnaw t'nod ew")


/**
 * Part 4
 *
 * write a function the returns a FizzBuzz string for some number N (counting up from 1).
 * - for every number that isn't a multiple of 3 or 5, return a period "."
 * - for every number that is a multiple of 3 (but not 5), return "fizz"
 * - for every number that is a multiple of 5 (but not 3), return "buzz"
 * - for every number that is a multiple of 3 and 5, return "fizzbuzz"
 */

var fizzbuzz = function(N){
var buzzFeed = ""

	for(var digi = 1; digi <= N; digi++) {
		if (digi%3 !== 0 && digi%5 !== 0) {
			buzzFeed =  buzzFeed + "."
			
		}	
		if(digi%3 === 0 && digi%5 !==0) {
			buzzFeed =  buzzFeed + "fizz"
			
		}			
		if(digi%5 === 0 && digi%3 !==0) {
			buzzFeed =  buzzFeed + "buzz"
            
		}
		if (digi%3 === 0 && digi%5 === 0) {
			buzzFeed =  buzzFeed + "fizzbuzz"
            
		}	
		
    }
			return buzzFeed
}

console.assert(fizzbuzz(1) === ".")
console.assert(fizzbuzz(2) === "..")
console.assert(fizzbuzz(3) === "..fizz")
console.assert(fizzbuzz(5) === "..fizz.buzz")
console.assert(fizzbuzz(10) === "..fizz.buzzfizz..fizzbuzz")

/**
 * Part 5
 *
 * Write a function findLongestWord() that takes a string of 
 words and returns the longest word.
 * i.e. findLongestWord("a book full of dogs") should return "book"
 */




var alpha =
"1234567890qwertyuiopasdfghjklzxcvbnm "

var contains = function(sequence, element) {
	if (sequence.indexOf(element) === -1) {
		return false
    }
	else {
		return true	
}
    }

var stripPunk = function (inputString) {
	
	var newString = ""
	for (var i= 0; i < inputString.length; i++){
		var char = inputString[i]
		if(contains(alpha,char.toLowerCase())) {
			newString += char  
// same as newString = newString + char			
    }
    }
	return newString	
}


function findLongestWord(sentence){

    var arr = sentence.split(" ")
	var longestword = ""
	for (var i = 0; i < arr.length; i++) {
        var word = arr[i]
    if (longestword.length < stripPunk(word).length) {  
	longestword = stripPunk(word)
	
    }
    }
return longestword
	
}


    // YOUR CODE HERE




console.assert(findLongestWord("a book full of dogs") === "book")

// XXXXX DEEP IN THE HEART OF TEXAS XXXX

console.assert(findLongestWord("don't mess with Texas") === "Texas")



/**
 * PART 6
 *
 * write a function that returns the Greatest Common Denominator of two numbers
 * - if no GCD exists, return 1
 */


var max = 1

var GCD = function(num1, num2) {
for (var i = 1; i <= num1 || i <= num2; i++) {
	if(num1%i === 0 && num2%i === 0)
	max = i
}
	return max
}	




console.assert(GCD(5,1) === 1);
console.assert(GCD(15,3) === 3);
console.assert(GCD(15,5) === 5);
console.assert(GCD(50,20) === 10);
