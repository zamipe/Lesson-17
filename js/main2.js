var whatever;
whatever = 7;
// console.log('skaitlis ir', whatever);
var atlikums = whatever % 2;
// console.log(atlikums);
if (atlikums == 0) {
    console.log('šis ir pāra skaitlis');
}
else {
    console.log('šis ir nepara skaitlis');
}

console.log('---------');
var age = 40;
if (age > 0 && age <= 18) {
    console.log('0 - 18 years')
}
if (age > 19 && age <= 30) {
    console.log('19 - 30 years')
}
if (age > 31 && age <= 40) {
    console.log('31 - 40 years')
}
if (age > 41 && age <= 50) { 
    console.log('41 - 50 years')
}
if (age > 50) {
    console.log('50 + years')
}

console.log('---------');
var num = 1; // kurā brīdī raksta "var" un kad "const"?
if (num % 2 ==0 & num % 3 == 0) {
    console.log('Fizz Bazz');
}
else if (num % 2 == 0) {
    console.log('Fizz');
}
else if (num % 3 == 0) {
    console.log('Bazz');
}

else {
    console.log(num);
}
