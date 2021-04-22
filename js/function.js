function printFruit(name){
    console.log(name);
}
printFruit('banana');
printFruit('apple');

//-------------------

function printqq(name, price){
    console.log(name+"는 "+ price +"원 입니다.");
}
printqq('banana', 2000);

//--------------------

function printArr(arr){
    console.log(arr[0]+"는 "+ arr[1] +"원 입니다.");
}
printArr(['tomato', 2000]);

function printObj(obj){
    console.log(obj.name +"은 "+ obj.price +"원 입니다.");
}
printObj({name:'apple', price:3000});