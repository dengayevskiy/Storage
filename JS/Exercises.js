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
function range(start, end) {
  var array = [];
  for (var i=start; i<=end; i++)
    array.push(i);
  return array;
}

function sum(array) {
    var newsum = 0;
    for (var i = 0; i < array.length; i++)
        newsum += array[i];
    return newsum;
}
