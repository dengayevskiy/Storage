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
123
1234
fvdfv fdv
d dfg dfg
g
