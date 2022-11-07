//The Age Calculator
var a1=new Date().getFullYear();
var a2=prompt("Key in Birth Year: ");

var diff = a1 - a2;

console.log("They are either "+ diff +" or "+ diff);

console.log("")

//The Lifetime Supply Calculator
var myAge = prompt("Key in Your Age: ");
var maxAge = prompt("Key in Your Max Estimated Age: ")
var estNum = prompt("Key in Your Estimated Meal Daily:");

var cnt = (maxAge - myAge) * estNum;

console.log("You will need " + cnt + " to last you until the ripe old age of " + maxAge);

//The Geometrizer
let rr = prompt("Please key in radius");
const pi = Math.PI;

let diameter = rr * 2;
let circumference = diameter * pi;
console.log("The circumference is " + circumference);

let area = pi * Math.pow(rr,2);
console.log("The area is " + area);

//Temperature Converter
let Temp = prompt("Key in temperature: ");

// celsius to fahrenheit
let convertToFahrenheit = (Temp * 9/5) + 32;
console.log(Temp + decodeURIComponent("\u2103") + " is " + convertToFahrenheit + decodeURIComponent("\u2109"));

// fahrenheit to celsius
let convertToCelsius = (Temp - 32) * 5/9;
console.log(Temp + decodeURIComponent("\u2109") + " is " + convertToCelsius + decodeURIComponent("\u2103"));

//The World Translator
var language = prompt("Key in Language:");
var show;
if(language=="English"){
    show = "Hello World";
}
else if(language=="French"){
    show = "Bonjour le monde";
}
else if(language=="Malay"){
    show = "Hai dunia";
}
console.log(show);

//The Grade Assigner
var testScore = prompt("Key in Score:");
var grade;

if (testScore >= 75) {
    grade = 'A';
}
else if (testScore >= 65)
{
    grade = 'B';
}
else if (testScore >= 55)
{
    grade = 'C';
}
else if (testScore >= 45)
{
    grade = 'D';
}
else
{
    grade = 'F';
}
console.log(grade);

//Air Conditioning
var functioning = true
var desireTemp = 18;
var currentTemp = prompt("Key in Current Temp");
var output;

if (functioning == true && currentTemp > desireTemp){
    output = "Turn on the A/C Please";
}
else if (functioning == false && currentTemp > desireTemp){
    output = "Fix the A/C now! It's hot!";
}
else if (functioning == false && currentTemp < desireTemp){
    output = "Fix the A/C whenever you have the chance... It's cool...";
};
console.log(output);

//You and Your Government
var age = prompt("Key in Age:")
var text;
if (age>=35){
    text = "You can vote AND hold any place in government!"
}
else if (age>=25){
    text = "You can vote AND run for the Senate!"
}
else if (age>= 18){
    text = 'You can vote!'
}
else{
    text = "You can't vote yet"
}
console.log(text)

//Golf
//........


//Serge Says
var t1 = prompt("say a thing:")
var tout;

if (t1.slice(-1) == '?'){
    tout="Sure."
}
else if (t1.trim() != "" && t1 == t1.toUpperCase()){
    tout="Woah, chill out!"
}
else if (t1.trim() == ""){
    tout="Fine. Be that way!"
}
else
    tout = 'Whatever!'

console.log(tout);

//The Pluralizer
//........

//The Rest
//........


//The even/odd reporter
for (let i = 0; i <= 20; i++) {
     if(i % 2 == 0) console.log(i + "is even")
    else console.log(i + "is odd")
}


//Multiplication Tables
for (let j = 0; j <= 12; j++) {
    for (let k = 0; k <= 12; k++) {
      let result = j * k;
      console.log(`${k} * ${j} = ${result}`);
    }
   }




//The Grade Assigner
let grade1;
for (let i = 100; i >= 60; i--) {
    if (i >= 90) grade1 = 'A';
    else if (i >= 80) grade1 = 'B';
    else if (i >= 70) grade1 = 'C';
    else if (i >= 65) grade1 = 'D';
    else grade1 = 'F';
    console.log("For "+ i +"you got a " + grade1);
}



//Golf


//99 Bottles of Beer
var bottles;
for (counter = 99; counter >= 1; counter = counter - 1) 
{
    if (counter == 1) {
        bottles = 'bottle';
    } else {
        bottles = 'bottles';
    }
    console.log(counter+" "+bottles+" of beer on the wall.");
    if (counter < 99) {
        console.log("");
        console.log(counter+" "+bottles+" of beer on the wall.");
    }
    console.log(counter+" "+bottles+" of beer.");
    console.log("Take one down.");
    console.log("Pass it around.");
    if (counter == 1) {
        console.log("No bottles of beer on the wall.");
    }
}




