let arr = [];
console.log(arr);

// ------------

let arr1 = [10];
console.log(arr1);

let arr2 = [10, 20];
console.log(arr2[1]); // 1번 인덱스 참조

let arr3 = [10, "abc", true, null, undefined, function(){}, {}]
console.log(arr3);

// -----------------

let student1 = [90, 70, 80, 60];

console.log(student1[0]);
console.log(student1[1]);
console.log(student1[2]);
console.log(student1[3]);

// ---------------

let student2 = {
    koreanScore:90,
    englishScore:70,
    mathScore:80,
    scienceScore:60
}

// 대괄호 연산자
console.log(student2["koreanScore"]);

//점 연산자
console.log(student2.englishScore);