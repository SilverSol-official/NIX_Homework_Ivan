// Task 1

// let obj={ // creating an object
    
// }
// if (Object.keys(obj).length==0){ // checking if object is empty
//     console.log("empty");
// } else {console.log("not empty");}

// Task 2

// function multiplyNumeric(obj){
//     for(let key in obj){
//         if (typeof(obj[key])=="number"){
//         obj[key]*=2;
//         }
//     }
// }

// let obj={ // creating an object
//     first:1,
//     second:2,
//     third:3,
//     fourth:"four",
// }
// multiplyNumeric(obj);
// console.log(obj);

// Task 3
// let flag = 0;

// function readNumber() {
//     do {
//         let pro = prompt('Type a number!'); //  asking

//         if (pro == null) {
//             break; //breaking if null
//         } else if (isNaN(+pro)) { // NaN means Not a Number check if it is + convert
//             alert('It is not a number'); //there is not a number

//         } else {
//             alert("is number"); // Here it is a number
//             flag = 1
//         }
//     } while (flag == 0);
// }
// readNumber();

// Task 4

// function random(min, max) {
//     return Math.random() * (max - min) + min;
//   }
// let min= +prompt("Enter minimum");
// let max= +prompt("Enter maximum");
// alert(random(min,max));
 
// Task 5

// function randomInteger( min , max){
//     return Math.round(Math.random() * (max - min) + min);
// }

// let min= +prompt("Enter minimum");
// let max= +prompt("Enter maximum");
// alert(randomInteger(min,max));

// Task 6

// let str1 = prompt("enter your word");
// function ucFirst( str ){
//     return str.charAt(0).toUpperCase() + str.slice(1); 
// }
// alert(ucFirst(str1));

// Task 7
// let substring1 = "viagra";
// let substring2 = "xxx"
// let flag = 0;

// function checkSpam1(str) {
//     for (let y = 0; y < str.length; y++) {
//         for (let x = 0; x < 6; x++) {
//             if ((substring1.charAt(x).toUpperCase() == str[x + y]) || (str[x + y] == substring1[x])) {
//                 flag = 1;
//             } else {
//                 flag = 0;
//             }
//         }
//     }
//     if (flag == 1) {
//         return true;
//     } else {
//         return false;
//     }
// }

// function checkSpam2(str) {
//     for (let y = 0; y < str.length; y++) {
//         for (let x = 0; x < 6; x++) {
//             if ((substring2.charAt(x).toUpperCase() == str[x + y]) || (str[x + y] == substring2[x])) {
//                 flag = 1;
//             } else {
//                 flag = 0;
//             }
//         }
//     }
//     if (flag == 1) {
//         return true;
//     } else {
//         return false;
//     }
// }

// function checkSpam(str) {
//     if ((checkSpam1(str) == true) || (checkSpam2(str) == true)) {
//         return "spam was detected";
//     } else {
//         return "spam was`nt detected"
//     }
// }

// let str = prompt("Enter your message");
// alert(checkSpam(str));

// Task 8

// function truncate(str , maxlength){
//     if (str.length>maxlength){
//         return ((str.slice(0 , maxlength))+"...");
//     }else {return str;}
// }
// let str=prompt("Enter your string");
// let maxlength = +prompt("enter the size of the string you want");
// alert(truncate(str,maxlength));


// Task 9
// function extractCurrencyValue(str) {
//     return +(str.slice(1))
// }
// let str=prompt("Enter your string");
// alert(extractCurrencyValue(str)===120); // true

// Task 10

// let arr=[];
// let sum=0;
// let i=-1;
// function sumInput( ){
//     do{
//         i++;
//         arr[i]=prompt("enter number");
//         if (arr[i]==null){
//             break;
//         }else if(arr[i]==""){
//             break;
//         }else if(isNaN(+arr[i])){
//             break;
//         }

//     }while (true)
//     for (let y=0;y<arr.length-1;y++){
//         sum+= +arr[y];
//     }
//     alert(sum);
// }
// sumInput();

// Task 11

// function checkAge (age) {
//     if (age > 18) {
//     return true;
//     } else {
//     // ...
//     return confirm( ' Батьки дозволили ?');
//     }
//     }
//   //  Чи буде ця функція працювати якось інакше, якщо прибрати else ?
//     function checkAge (age) {
//     if (age > 18) {
//     return true;
//     }
//     // ...
//     return confirm( ' Батьки дозволили ?');
//     } 

// Відповідь: на мою думку різниці не буде, адже у обох випадках є перший іф, і якщо буде виконана умова, то виконання функціїї далі не піде через ретурн, а якщо не виконеється то не важливо буде це просто ретурн , чи єлсе

// Task 12

// function checkAge1 (age){
//     return age>18?true:confirm( ' Батьки дозволили ?');
// }
// function checkAge2 (age){
//     return (age>18)||confirm( ' Батьки дозволили ?');
// }

// Task 13

// function min(a,b){
//     return (a>b?b:a)
// }

// let a= +prompt("Enter a");
// let b= +prompt("Enter b");
// alert(min(a,b));

// Task 14

// function pow(x,n ){
//     let y=1;
//     for(let i=0;i<n;i++){
//         y = y*x;
//     }
//     return y;
// }
// let x= +prompt("Enter x^2");
// let n= +prompt("Enter 2^n");
// alert(pow(x,n));

// Task 15

    // const ask = (question,yes,no) => {confirm(question)?yes():no()};
    // ask(question,()=>{alert("you agree")}, ()=>{alert("you dont agree")});

// Task 16

// let income=3333;
// let spendings=1750;
// let need=8000;

// Variant 1
// let month=0;
// // while(need>0){ 
// //     need=need-(income-spendings);
// //     month+=1;
// // }
// console.log(month);

// Variant 2
//console.log(Math.ceil(need/(income-spendings))); 

// Task 17

// let sum=0;
// let temp;
// for(let i=0;i<10;i++){
//     temp= +prompt(`enter number #${i+1}`);
//     if(temp < 0){
//         sum = sum + temp;
//     }
// }
// alert(sum);
 


