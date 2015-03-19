//2.1 Looping a triangle
for (var line = "#"; line.length < 8; line += "#")
  console.log(line);

//2.2 FizzBuzz(1)
for (var n = 1; n <= 100; n++) {
  var output = "";
  if (n % 3 == 0)
    output += "Fizz";
  if (n % 5 == 0)
    output += "Buzz";
  console.log(output || n);
}

//2.2 FizzBuzz(2)
for (var i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0)
    console.log('FizzBuzz');
  if (i % 3 === 0)
    console.log('Fizz');
  if (i % 5 === 0)
    console.log('Buzz');
  else(console.log(i));
}

//2.3 FizzBuzz(2)

//3.1 Min
function min(x, y) {
  if (x < y)
  	return x
  else
    return y
}

//3.2 isEven
function isEven(number) {
  	if (number == 0)
      return true;
    else if (number == 1)
      return false;
  	else if (number < 0)
      return isEven(-number)
  	else
      return isEven(number - 2);
}

//3.3 Bean counting
function countBs(phrase) { //считает буквы 'B'
	return countChar(phrase, 'B');
}

function countChar(phrase, char) { //считает те, что вввел(char)
	var number = 0;
  for (var i = 0; i < phrase.length; i++) {
  	if (phrase.charAt(i) === char)
      number += 1;
  }
  return number;
}

//4.1 The sum of a range
function range(start, end, step) {
  if (step == null && start < end) step = 1;
  else if (step == null && start > end) step = -1;
  var array = [];

  if (step > 0) {
    for (var i = start; i <= end; i += step)
      array.push(i);
  } else {
    for (var i = start; i >= end; i += step)
      array.push(i);
  }
  return array;
}

function sum(array) {
  var total = 0;
  for (var i = 0; i < array.length; i++)
    total += array[i];
  return total;
}

console.log(range(20, 2, -2));

//4.2 Reversing an array
function reverseArray(array)  {
  var newArray = [];
  for (var i = array.length - 1; i >= 0; i--) {
     newArray.push(array[i]);
     }
  return newArray;
}

function reverseArrayInPlace (array) {
  for (var i = 0; i <= Math.floor((array.length/2)); i++) {
    var tmp = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = tmp;
  }
  return array;
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);

//4.3 A list
function arrayToList(array) {
  var newList = null;
  for (var i = array.length - 1; i >= 0; i--)
    newList = {value: array[i], rest: newList};
  return newList;
}

function listToArray(list) {
  var newArray = [];
  for (var i = list; i; i = i.rest) {
    newArray.push(i.value);
  }
  return newArray;
}

function prepend(element, list) {
  var newList = {value: element, rest: list};
  return newList;
}

function nth(list, number) {
  var lookedFor;
    for (var i = list, j = 0; j <= number; i = i.rest, j++)
        lookedFor = i.value;
          return lookedFor;
}

function nthRecursive(list, n) {
  if (!list)
    return undefined;
  else if (n == 0)
    return list.value;
  else
    return nth(list.rest, n - 1);
}
console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, {value: 15, rest: {value: 20, rest: null}}));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 0));
// → 20
console.log(nthRecursive({value: 10, rest: {value: 20, rest: null}}, 1));

//4.4 Deep comparison
