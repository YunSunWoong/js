const sum = (num1, num2) => {
    return num1 + num2;
}

const result = sum(10, 20);
console.log(result);

//------------------

// function sun(num1, num2){
//     return num1 + num2;
// }
//                                     위아래 둘다 같다.
// const sum = (num1, num2) => {
//     return num1 + num2;
// }

//------------------ 다른 특징

const sum1 = (num3, num4)=> num3 + num4;


const result1 = sum1(20, 20);
console.log(result1);

//--------------------

const pow = x => x*x;

const result2 = pow(10);
console.log(result2);

//--------------------

const printPie = () => 3.14;

const result3 = printPie();
console.log(result3);

//----------------------

const getObject = () =>{
    return{
        name:"철수",
        age:20
    }
}

const obj = getObject();
console.log(obj.name);