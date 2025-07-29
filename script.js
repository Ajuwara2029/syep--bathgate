console.log ( " Hello world!");

 let myString="a2b3c";
 console.log (myString);
 
 let myNumbvar=123;
console.log(typeof myNumbvar);  

console.log(10 + "eggs");
console.log(10 +7+"eggs");
console.log ("eggs" +10 +7);

// Both conditions need to be true
console.log(7>3)&&(5<10);

//only one conditions must be true
console.log (10>3)||(10>12);

// If the statement is logical or not
console.log (!5>3); 


function introduction(name,age){
console.log("Hello, my nameis "+ name + and" I am " + age +"year old. ")
}

introduction("aisha",14)

const hour = new Date().getHours();
let greeting= "";

if (hour<12){
greeting="good morning"
}else if (hour<18){
  greeting="good afternoon";
}else{
 greeting="good evening"
}

document.getElementById("greeting").innerText = greeting;