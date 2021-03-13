console.log(1 + 1);
console.log(1 + 1 + 1);
console.log(10 - 5);
console.log(10 * 5);
console.log(10 / 5);
console.log(2 + 2 * 2);
console.log((2 + 2) * 2);

console.log('----------');
console.log(10 % 1);
console.log(10 % 2);
console.log(10 % 3); // "console" rāda atlikumu, kas paliek pari = ja 10 dala ar 3 = 9 var sadalīt, pāri paliek 1
console.log(10 % 4);
console.log(10 % 5);

console.log('---------');
console.log(1 % 2);
console.log(2 % 2);
console.log(3 % 2);
console.log(4 % 2);
// x => y
//x % 2 => 0 -> is divisible, result > 0 not divisible

console.log('---------');
console.log(10 / 0);
console.log(10 / -0);
console.log(-10 / 0);

console.log('---------');
console.log(1 + '1'); //"+" tiek uztverts kā savienošanas zīme = 11 šajā piemērā 
const number1 = '1';
console.log(1 + number1);
console.log(5 - '1');
console.log(5 - '1.5');
console.log(5 - 'a'); //NaN - "no a number"
console.log(typeof {});
console.log(typeof (5 - 'a'));

console.log(true + true); // nesapratu, kāpēc ir 2
console.log(true + false);
console.log([] + {});
console.log({} + {});
console.log([] + []);
console.log(['a'] + ['b']);
console.log({} + []);

console.log(Math.sqrt(9));
console.log(Math.PI);

console.log(Math.round(5));
console.log(Math.round(5.6));
console.log(Math.round(5.4)); // noapaļo

console.log(Math.ceil(5));
console.log(Math.ceil(5.6));
console.log(Math.ceil(5.4)); // noapaļo uz augšu

console.log(Math.floor(5));
console.log(Math.floor(5.6));
console.log(Math.floor(5.4)); // noapaļo uz leju


const num1 = 5;
const num2 = 10;

console.log('---------');
console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 >= num2);
console.log(num1 <= num2);

console.log(1 <= 2); // <= nozīmē "mazāks vai vienāds ar"
console.log(num1 <= 2);

console.log(1 <= true);
console.log(1 <= 'asd');

// >
// <
// >=
// <=

console.log('---------');
console.log(num1 == 5);
console.log(5 == num1);
console.log(num1 == 5); // divas = zīmes ir "salīdzināšana, vai ir vienāds", tekstu var atšifrēt kā ciparu 
console.log(num1 == 6);
console.log(num1 == '5');
console.log(num1 == true);
console.log(num1 === '5'); // salīdzina gan tipu (skaitlis/ teksts), gan vērtību
console.log(num1 === 5);

// ==
// ===

console.log('---------');
console.log(num1 != 4); // != menas not equal;
console.log(num1 != 5);
console.log(num1 != '5');
console.log(num1 !== '5');

// !=
// !==

console.log('---------');
console.log(num1 === 5 && num2 === 8);
console.log(num1 === 5 && num2 === 10);

console.log('---------');
console.log(num1 === 5 || num2 === 8);
console.log(num1 === 5 || num2 === 10); // "||" = or

console.log('---------');
// if num1 === 4 and num2 === 8 or num2 === 10
console.log(num1 === 4 && (num2 === 8 || num2 === 10));
console.log(num1 === 4 && num2 === 8 || num2 === 10);
const foo = num1 || 10;

// if (condition) {

// } else {

// }

if (num1 > 4) {
    console.log('the number is greater than 4')
} else {
    console.log('the number is not greater than 4')
}

if (num2 === 10) {
    console.log('foo');
}

let cond = 1;
if (cond) {
    console.log('cond = 1');
}

cond = 0 // šeit vairs neraksta "let" priekšā, tikai "cond"
if (cond) {
    console.log('cond = 0');
}


cond = 'a'
if (cond) {
    console.log('cond = "a"');
}

cond = ''
if (cond) {
    console.log('cond = ""');
}

cond = ['a']
if (cond) {
    console.log('cond = [a]');
}

cond = []
if (cond) {
    console.log('cond = []');
}

cond = { foo: 'bar' }
if (cond) {
    console.log('cond = {foo: bar}');
}

cond = {}
if (cond) {
    console.log('cond = {}');
}

const age = 32;
if (age) {
    console.log('age is truty')
}

if (!age) {
    console.log('age is not set')
}

if (!!age) {
    console.log('age is not set')
}

console.log('---------');

const moneyAmount = 100;
// if more than 10 k, print out: wow, you are ritch
//if 0 - 10k, print out: you got something
// else print: got nothing
if (moneyAmount > 10000) {
    console.log('wow, you are ritch!');
} else if (moneyAmount > 0 && moneyAmount < 10000) {
    console.log('you got something 1');
} else if (moneyAmount > 0 && moneyAmount < 10000) {
    console.log('you got something 2'); // paliek pie pirmā pareizā apgalvojuma, otro nemaz nepārbauda
} else {
    console.log('got nothing')
}

if (moneyAmount > 10000) {
    console.log('wow, you are ritch!');
}
if (moneyAmount > 0 && moneyAmount > 1000) {
    console.log('you got something');
}
if (moneyAmount === 0) {
    console.log('got nothing');
}

var num3 = 5;
if (num3 + 5 > 9) {
    console.log('the sum is > 9');
}