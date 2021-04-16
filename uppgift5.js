/*
Gå till din förbättrade version av siffergissarspelet du har gjort i uppgift 2 och 
lägg till en räknare som håller koll på antalet gissningar. 
När spelaren sedan gissar rätt, skriv ut antalet gissningar det tog innan användaren svarade rätt
*/

var nummer = Math.random();
nummer = nummer * 10;
nummer = Math.round(nummer);
var tries = 0

let user = Number(prompt("Enter a number betwwen 0-10") )
tries++

while (user != nummer) {
    alert("Wrong number, try again!");
    user = Number(prompt("Enter a number betwwen 0-10"))
    tries++
}

alert("You win! You guest right on " + tries + " tries.");
