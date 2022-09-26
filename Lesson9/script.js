// Task1
// let i = 3;
// while (i) {
// alert(i--);
// } // виведеться в кінці 1, бо спочатку виведеться 1 а потім і стане 0 і нова ітерація циклу не почнеться,а отже і 0 не виведеться.

// Task2

// let arr=[];
// for(let i=0;i<3;i++){ //процес заповнення массиву
//     arr[i]= +prompt(`Enter number #${i+1}`);
// }
// if ((arr[0]<arr[1])&&(arr[1]<arr[2])&&(arr[2]>arr[0])){  //перевірка елементів масссиву на зростання 
//     for(let j=0;j<3;j++){  // процес подвоєння всіх елементів
//         arr[j]*=2 ;
//     }
// }else {
//     for(let k=0;k<3;k++){  // процес перетворення чисел на зворотні 
//         arr[k]*=(-1) ;
//     }
// }
// alert(arr); // виведення масиву

// Task3

// let arr=[];
// for(let i=0;i<3;i++){ //процес заповнення массиву
//     arr[i]= +prompt(`Enter number #${i+1}`);
// }
// if (((arr[0]<arr[1])&&(arr[1]<arr[2])&&(arr[2]>arr[0]))||((arr[0]>arr[1])&&(arr[1]>arr[2])&&(arr[2]<arr[0]))){  //перевірка елементів масссиву на зростання або спадання
//     for(let j=0;j<3;j++){  // процес подвоєння всіх елементів
//         arr[j]*=2 ;
//     }
// }else {
//     for(let k=0;k<3;k++){  // процес перетворення чисел на зворотні 
//         arr[k]*=(-1) ;
//     }
// }
// alert(arr); // виведення масиву

// Task4

// let arr=[];
// for(let i=0;i<3;i++){ //процес заповнення массиву arr[0]->A arr[1]->B arr[2]->C
//     arr[i]= +prompt(`Enter point #${i+1}`);
// }
// let dist1=Math.pow((Math.pow((arr[1]-arr[0]),2)),0.5); //дистанція від А до В
// let dist2=Math.pow((Math.pow((arr[2]-arr[0]),2)),0.5); //дистанція від А до C
// alert(dist1<dist2?`B ${dist1}`:dist1>dist2?`C ${dist2}`:"They are on the same distance")// порівняння та виведення дистанціїї і точки

// Task5

// let x=prompt("Enetr x position"),
//     y=prompt("Emter y position"); //input block
// let res; //declaring result variable
// if((x==0)&&(y==0)){  //checkin if (0;0)
//     res=0;
// } else if(x==0){   //checking if (0;y)
//     res=2;
// }else if(y==0){   //checking if(x;0)
//     res=1;
// }else{res=3;}    //writing if not begin of koordinates or spot not on the axes
// alert(res);

// Task6

// let x=prompt("Enetr x position"),
//     y=prompt("Emter y position"); //input block
// let res;
// if (x<0){  //checking if 1 or 3 part 
//     if (y<0){    // checking if 3 part
//         res=3;  
//     }else{    //checking if 1 part
//         res=1;  
//     }
// }else{  //checking if 2 or 4 part
//     if (y<0){  // checking if 4 part       
//         res=4;
//     }else{  //checking if 2 part
//         res=2;
//     }
// }
// alert(res);

// Task7

// let x=[],
//     y=[];

// for (let i=0;i<3;i++){ //filling arrays of x and y
//     x[i]=prompt(`Enter x of the spot #${i+1}`); 
//     y[i]=prompt(`Enter y of the spot #${i+1}`);
// }
// if(x[0]==x[1]){ //checking x and calculating x of 4 spot
//     x[3]=x[2];
// }else if(x[0]==x[2]){
//     x[3]=x[1];
// }else if(x[1]==x[2]){
//     x[3]=x[0];
// }
// if(y[0]==y[1]){ //chrcking y and calculating y of 4 spot
//     y[3]=y[2];
// }else if(y[0]==y[2]){
//     y[3]=y[1];
// }else if(y[1]==y[2]){
//     y[3]=y[0];
// }
// alert(`The forth spot is:${x[3]}:${y[3]}`);

// Task8

// let year= +prompt("Enter the year"), // asking a year
//     res;
// if ((year%4)==0){ //first check
//     if (((year%100)==0)&&((year%400)==0)){ //extra check
//         res=365;
//     }else {res=366;};
// }else{res=365;}
// alert(res==365?`${year} не є вискосним (365 днів)`:`${year} є вискосним (366 днів)`); //output

// Task9

// let num = +prompt("Enter your number"), // asking a number
//     res="";
// if (num<0){   // checking if negativ
//     res+="Негативне ";
// }else {res+= "Позитивне "}  
// if ((num%2)==0){  // checking if num%2 =0
//     res+="парне ";
// }else {res+= "непарне "}
// res+="число"; 
// alert(res);

// Task10

// let num = prompt("Enter your number"), // asking a number
//     res="";
// if (num.length==3){   
//     res+="тризначне ";
// } else if (num.length==2){
//     res+="двохзначне ";
// } else if (num.length==1){
//     res+="однозначне ";
// }
// if ((num%2)==0){  // checking if num%2 =0
//     res ="Парне " + res;
// }else {res = "Непарне " + res}
// res+="число"; 
// alert(res);

// Task11

// Префіксний варіант ++i:
// let i = 0;
// while (++i < 5) alert(i);  // у цьому випадку останнім числом буде 4, адже префіксний варіант інкременту зобов'язує цикл спочатку виконувати функцію інкременту, а потім проводити перевірку умови циклу, одже після виводу 4, цикл спочатку додасть 1, отримає 5 потім він він перевірить свою умову і зупинеться, так і не вивевши 5 на єкран.
// // Постфіксний варіант i++
// let i = 0;
// while (i++ < 5) alert(i); //у цьому випадку останнім числом, що виведе цикл буде 5, бо постфіксна форма інкременту каже циклу спочатку зробити перевірку , а потім збільшити і і отримати 5. Тобто массив спочатку порівнює і та 5, бачить, що і=4 і подає команду на виконання скрипту циклу, в цей час інкрементується і і стає 5 , після виконання скрипту, цикл не починає нову ітерацію, бо і вже 5 і умова не правдива.

// Task12

//Постфіксна форма :
// for (let i = 0; i < 5; i++) {alert(i);};

// //Префіксна форма :
// for (let i = 0; i < 5; ++i) alert(i);

//Висновок : для цього типу циклу немає різниці між префіксним і постфіксним інкрементом, адже він спочатку перевіряє умову, а потім вже виконує тіло циклу, а потім інкрементує лічильниу ітерацій, в результаті мі отримаємо , що в обох випадках виведе останнім числом 4.

// Task13

// for (let i=2;i<9;i++){
//     if (i%2==0){ // checking if i%2 = 0
//         alert(i);
//     }
// }

// Task14

// let i=0;
// while (i<3) {
//     alert(`number ${i}!`);
//     i++
// }

// Task15

// do {
//     num=+prompt("Enter number bigger then 100",0);
// } while ((num<100)||(num==null));

// Task16

// let arr=[2]; //масив, який запам'ятовує прості числа
// let n=prompt("Enter amount of natural numbers"); // кількість ітерацій
// let flag=0; //флаг, що відловлє числа, що діляться на числа з массиву з простими числами
// for (let i=2;i<n;i++){ // основний цикло
//     if (((i%2!=0)&&(i%3!=0)&&(i%5!=0))||(i==3)||(i==5)){ // умова, яка потрібна для того, що б додати числа 3 та 5 та відсортувати числа, які на них дільться
//         for(let j=0;j<arr.length;j++){ // цикл, який перевіряє чи ділеться число на якесь з массиву простих чисел
//             if((i%arr[j])==0){ // перевірка
//                 flag=1;
//                 break;
//             }
//         }
//         if(flag==0){arr[arr.length]=i;} // перевірка стану прапора і запис числа
//         flag=0; // обнулення прапору
//     }
// }
// alert(arr); // вивід

// Task17

// let a=+prompt("Enter first number");
// let b=+prompt("Enter second number");
// alert((a+b)/2);

// Task18

// let a=+prompt("Enter number");
// alert(a*a);

// Task19

// let arr=[];
// for (let i=0;i<3;i++){
//     arr[i]= +prompt(`Enter value number ${i+1}`);
// }
// alert(Math.max.apply(null,arr)-Math.min.apply(null,arr));

// Task20

// let num=prompt("Enter your number");
// if(num%2==0){
//     alert("парне");
// }else {alert("непарне");}

// Task21
// let num;
// do{
//     num=prompt("Enter your number (number<100)");
// }while(num>=100);
// let result=0;
// for(let i=0;i<num.length;i++){
//     result=result + +num[i];
// }
// alert(`lenght: ${num.length},sum: ${result}`);

// Task22

// function chooseMode(){  // function of the main menu
//     mode=prompt("Enter the mode you want to use (inch->sm or sm->inch, exit - to finish)");
//     if (mode=="exit"){
//         mode=0;
//         return(0);
//     }else if (mode=="inch->sm"){
//         return(1);
//     }else if( mode=="sm->inch"){
//         return(2);
//     }
// }
// function calcInch(sm){ //convertion function
//     return (+sm / 2.54);
// }
// function calcSm(inch){ // convertion function
//     return (+inch * 2.54);
// }
// function Main(){
//     let num;
//     let mode;
//     do{
//     mode=chooseMode(); // state of mode
//     switch (mode) { // action processor
//         case 1:
//             do{ //inch->sm convertion
//                 num=prompt("Enter your inches or back to choose another mode");
//                 if (num!="back"){
//                     num= +num;
//                     alert(calcSm(num));
//                 }
//             }while(num!="back")
//             break;
//         case 2:
//             do{ // sm->inch convertion
//                 num=prompt("Enter your sm`s or back to choose another mode");
//                 if (num!="back"){
//                     alert(calcInch(+num));
//                 }
//             }while(num!="back")
//             break;   
//     }
//     }while(mode!=0)  
// }
// Main(); // call of the main function

// Task23

// alert("Hello gamer");
// alert("if you need a help just type help in the answer field");
// let bankOfQuestion=["Какой продукт в разных странах называют папиной бородой и бабушкиными волосами? A.Сахарную вату B.Маринованую Капусту С.Заливніе яблоки D.Пицца","Какой головной убор был во время бала на Татьяне Лариной, героине романа «Евгений Онегин»? А.Синий платок В.Малиновый берет С.Голубой плащ D.Черній зонт","Какое астрономическое явление жители Земли могут наблюдать раз в 75–76 лет? А.Перевыборы в России В.ПРилет метеорита С.Появление кометы Галлея D.Падение атомной бомбы","В каком немецком городе родилась будущая императрица России Екатерина II: Цербсте или Штеттине? А.В Штеттине B.Цербсте","Название какого алкогольного напитка переводится с немецкого как «полынь»? A.Вермут B.Марихуана C.Одуванчик D.Репях"];
// let bankOfAnswers=["A","B","C","A","A"];
// let bAnkofHelps=["A,C","B,A","D,C","A,B","A,C"];
// let sizeOfBank=5;
// let pointCounter=0;
// let questionNumber;
// let answer;
// let question;

// function AskQuestion(){
//     let number=Math.floor(Math.random() * sizeOfBank);
//     return(number);
// }
// function Help(questionNumber){
//     alert(bAnkofHelps[questionNumber]);
//     pointCounter-=500;
// }
// for(let i=0;i<3;i++){
//     questionNumber=AskQuestion();
//     question=bankOfQuestion[questionNumber];
//     answer=prompt(question);
//     if (answer==bankOfAnswers[questionNumber]){
//         pointCounter+=1000;
//         alert(`Great! Your score: ${pointCounter*10}$`);
//     }else if(answer=="help"){
//         Help(questionNumber);
//         answer=prompt(bankOfQuestion[questionNumber]);
//         if (answer==bankOfAnswers[questionNumber]){
//             pointCounter+=1000;
//             alert(`Great! Your score: ${pointCounter*100}$`);
//         }else{alert("You lose");
//         pointCounter=0;
//         break;}
//     }else {alert("You lose");
//     pointCounter=0;
//     break;};
//     bankOfQuestion.splice(questionNumber, 1);
//     bAnkofHelps.splice(questionNumber, 1);
//     bankOfAnswers.splice(questionNumber,1);
//     sizeOfBank--;
// }
// if (pointCounter!=0){
//     alert(`Your score is ${pointCounter*10}$`);
// }

// Task24

// let num= prompt("Enter your number (1000>number>100");
// let res;
// if (num%2==0){
//     res= +num[0]+ +num[1]+ +num[2];
// }else if(num%2!=2){
//     res= +num[0] * +num[1] * +num[2];
// }
// alert(res);

// Task25

// let a=+prompt("Enter first side"),b=+prompt("Enter secons side"),c=+prompt("Enter third side");
// let max=Math.max(a,b,c);
// if((max==c)&&(a+b)>c){
//     alert("this triengle is real");
// }else if ((max==b)&&(a+c)>b){
//     alert("this triengle is real");
// }else if ((max==a)&&(c+b)>a){
//     alert("this triengle is real");
// }else {alert("tis thiengle is not real");}


// Task26

// let x= +prompt("Enter x of your spot");
// let y= +prompt("Enter y of your spot");
// if ((Math.pow((0-x),2) + Math.pow((0-y),2))<=10*10){
//     alert("Належить");
// } else {alert("Не належить");}

// Task27

// let user ={
//     name:"John",
//     surname:"Smith",
// };
// user.name="Pete";
// delete user.name;

// Task28

// Чи можна змінити об'єкт, оголошений за допомогою const ?
// const user = {
// name: "John"
// };
// user.name = "Pete"; // Це працюватиме?

// Це буде працювати,  бо конст захищає посилання на об'єкт від зміни, але не сам о'єкт і тому щого можна змінити.

// Task29

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//     }
// let res=0;
// for (let key in salaries){
//     res += salaries[key];
// }
// alert(res);

// Task30

// let obj={
//     first:2,
//     second:3,
//     third:4,
// }

// function multiplyNumeric(obj){
//     for(let key in obj){
//         obj[key]*=2;
//     }
// }

// multiplyNumeric(obj);
// console.log(obj);