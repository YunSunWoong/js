// 1. String concatenation
console.log('my' + ' cat ');
console.log('1' + 2);
console.log('string literals: 1 + 2 = ${1 + 2}');

// 2. Numeric operators
console.log(1 + 1); // 더하기
console.log(1 - 1); // 빼기
console.log(1 / 1); // 나누기
console.log(1 * 1); // 곱하기
console.log(5 % 2); // 나머지
console.log(2 ** 3); // 2의3승

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;

// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x=x+y;
x -= y;
x *= y;
x /= y;

// 5. comparison operators
console.log(10 < 6);
console.log(10 <= 6);
console.log(10 > 6);
console.log(10 >= 6);

// 6. Logical operators: || (or), && (and), ! (not)
const value1 = false;
const value2 = 4 < 2;

// || (or), finds the first falsy value
console.log(`or: ${value1 || value2 || check()}`);

// && (and), finds the first falsy value
console.log(`and: ${value1 && value2 && check()}`);

function check(){
    for (let i = 0; i < 10; i++){
        //wasting time
        console.log('★');
    }
    return true;
}

// ! (not)
console.log(!value1);

// 0~10까지 짝수만
for (let i = 0; i < 11; i++){
    if (i %2 ===0){
        console.log(`q1. ${i}`);
    }
}