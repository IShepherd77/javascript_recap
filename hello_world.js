console.log('Ian is a genius!');

if (1 > 0) {
    console.log('1 is greater than 0');
} else if (num === 1) {
    console.log('Your number is 1')
} else {
    console.log('1 is not greater than 0');
}

function hiya() {
    return 'Ian is a genius!';
    console.log('Ian is a genius still!');
}

hiya();

function sayHello(name) {
    console.log(`Hi ${name}, how are you doing?`);
}

sayHello('Ian');
sayHello('Vic');


function sayHi(greeting, name = 'Please enter your name'){
    return `${greeting} ${name}`;
}

console.log(sayHi('Hiya', 'Ian'));
console.log(sayHi('Hey, how you doin', 'Vic'));

let add = function(num1, num2) {
    return num1 + num2;
}

console.log(add(99999999, 7768676886));

let multiply = (num1, num2) => num1 * num2;
console.log(multiply(8,9));

function calculateTotal(numbers) {
    var total = 0;
    for (var number of numbers) {
      total += number;
    }
    return total;
  }
  
  var sum = calculateTotal([10, 40, 200, 50]);
  console.log(sum);

function calc(numbers) {
    let total = 0;
    for (let number of numbers) {
        total += number;
    }

return total;
}

sum2 = calc([1000, 200, 300, 400, 100]);
console.log(sum2);
