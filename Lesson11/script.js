// Task 1

// function camelize ( str ){
//     let arr=str.split('');
//     for (let i=0;i<arr.length;i++){
//         if (arr[i]=="-"){
//             arr[i]='';
//             let temp = arr[i+1];
//             temp = temp.toUpperCase();
//             arr[i+1]=temp;
//         }
//     }
//     str=arr.join('');
//     return(str);
// }
// let str=prompt("enter your frace");
// alert(camelize(str));

// Task 2

// function filterRange (arr,a,b){
//     let resultArr=[];
//     for(let i=0;i<arr.length;i++){
//         if((arr[i]<=b)&&(arr[i]>=a)){
//             resultArr[resultArr.length]=arr[i];
//         }
//     }
//     return resultArr;
// }

// let arr = [5, 3, 8, 1];
// let filtered = filterRange(arr, 1, 4);
// alert(filtered); // 3,1 (збігаються значення)
// alert(arr); // 5,3,8,1 (без змін)

// Task 3

// function filterRangeInPlace(arr, a, b){
//         for(let i=0;i<arr.length;i++){
//             if((arr[i]>b)||(arr[i]<a)){
//                 arr.splice(i,1)
//             }
//         }
// };

// let arr = [5, 3, 8, 1];
// filterRangeInPlace(arr, 1, 4); // видалені числа поза діапазоном 1..4
// console.log(arr);// Добавил что б не запускать браузер
// alert(arr ); // [3, 1]

// Task 4

// function compareNumber(a,b){
//     if (a>b)return -1;
//     if (a == b)return 0;
//     if (a<b)return 1;

// }

// let arr = [5, 2, 1, -10, 8];
// arr.sort(compareNumber);
// console.log(arr);
// alert(arr); // 8, 5, 2, 1, -10

// Task 5

// function copySorted(arr){
//     let res;
//     res = arr.map((x) => x);
//     function compareNumber(a,b){
//         if (a>b)return 1;
//         if (a == b)return 0;
//         if (a<b)return -1;
//     }
//     res.sort(compareNumber);
//     return res;
// }

// let arr = ["HTML", "JavaScript", "CSS"];
// let sorted = copySorted(arr);
// console.log(sorted);
// console.log(arr);
// alert (sorted); // CSS, HTML, JavaScript
// alert(arr); // HTML, JavaScript, CSS (без змін)

// Task 6
// function chooseMode() { // function of the main menu
//     let temp = 0; // position of first space
//     let input = prompt("Enter what you need to calculate (+,-,/,*,**) like `2 + 2` ");
//     temp = input.indexOf(" ");
//     a = +input.slice(0, temp);
//     if (input[temp+1] == input[temp + 2]) {
//         b = +input.slice(temp + 3, input.length);
//         pow(a, b);
//     } else b = +input.slice(temp + 2, input.length);
//     if (input[temp + 1] == "+") {
//         sum(a, b);
//     } else if (input[temp + 1] == "-") {
//         min(a, b);
//     } else if ((input[temp + 1] == "*")&&(input[temp+1] != input[temp + 2])) {
//         mno(a, b);
//     } else if (input[temp + 1] == "/") {
//         del(a, b);
//     } else if (input=="exit"){
//         return 0;
//     }
//     return 1;
// }

// function  sum(a, b) { // + function
//     alert(a+b);
// }

// function   min(a, b) { // - function
//     alert(a-b);
// }
// function  mno(a, b) { // * function
//     alert(a*b);
// }
// function   del(a, b) { // / function
//     alert(a/b);
// }
// function pow(x,n ){
//         let y=1;
//         for(let i=0;i<n;i++){
//             y = y*x;
//         }
//         alert(y);
//     }

// function Main() {
//     let num;
//     let mode;
//     do {
//         mode = chooseMode(); // state of mode

//     } while (mode != 0)
// }
// Main(); // call of the main function

// Task 7

// let vasya = { name: "Вася", age: 25};
// let petya = { name: "Петя", age: 30};
// let masha = { name: "Маша", age: 28};
// let users = [ vasya, petya, masha ];
// let names = [];
// users.forEach((item,index,array) =>
//     names[index]=item.name)
// console.log(names);
// alert(names); // Вася, Петя, Маша

// Task 8

// function sortByAge(arr) {
//     arr.sort((a, b) => a.age - b.age);
//   }

// let vasya = {name : " Вася ", age: 25};
// let petya = {name : " Петя ", age: 30};
// let masha = {name : " Маша ", age: 28};

// let arr = [ vasya , petya , masha ] ;

// sortByAge(arr);

// // тепер : [ vasya , masha , petya ]
// alert( arr [0].name); // Вася
// alert ( arr [1].name); // Маша
// alert ( arr [2].name); // Петро

// Task 9

// function getAverageAge(arr){
//     return arr.reduce((prev, user) => prev + user.age, 0) / arr.length;
// }

// let vasya = { name: "Вася", age: 25};
// let petya = { name: "Петя", age: 30};
// let masha = { name: "Маша", age: 29};
// let arr = [ vasya, petya, masha ];
// alert(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28

// Task 10

// function unique(arr) {
//     let f; // задаём флаг похожести 
//     let res=[]; // массив вывода
//     for(let i=0;i<arr.length;i++){ 
//         f=false; // обнуляем влаг
//         for(let j=0;j<arr.length;j++){
//             if ((arr[i]==arr[j])&&i!=j){ // проверка на уникальность
//                 f=true;
//             }
//         }
//         if (f==false){res[res.length]=arr[i]} // если не похоже то добавляется в массив вывода
//     }
//     return res;
//     }

//     let strings = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "крішна", ":-O"];
//     alert (unique (strings)); // кришна, харе, :-O

// Task 11

// function unique(arr) {
//     let res = new Set;
//     arr.forEach(element => {
//         res.add(element);
//     });
//     return res;
//     }

// let values = ["Hare", "Krishna", "Hare", "Krishna",
// "Krishna", "Krishna", "Hare", "Hare", ":-O"];
// console.log(unique(values));
// alert(unique(values)); // Hare,Krishna,:-O

// Task 12

// function makeCounter() {
//     let count = 0;
//     return function () {
//         return count++;
//     };
// }
// let counter = makeCounter();
// let counter2 = makeCounter();
// alert(counter()); // 0
// alert(counter()); // 1
// alert(counter2()); //0
// alert(counter2()); //1
// Это получается из-за разных лексических окружений, так как одна и та же функция вызывается для разных счетчиков то и разные числа , в первом счетчике будет последняя цифра 1 а во втором ещё ноль.

// Task 13

// function Counter() {
//     let count = 0;
//     this.up = function () {
//         return ++count;
//     };
//     this.down = function () {
//         return -count;
//     };
// }
// let counter = new Counter(); //тут вместо New было написано новий 
// alert(counter.up()); //1
// alert(counter.up()); //1        
// alert(counter.down()); //-2
// работать будет

// Task 14
function fak(n){
    if(n == 1){return n }else{
    return n * fak(n-1);}
}
let n = +prompt("enter your number");
alert(fak(n));