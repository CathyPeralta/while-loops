/*
1. Byt ut i koden så att användaren blir utelåst från sitt konto efter 4 försök istället.
2. Spara ner maxförsöken till en variabel istället för ett nummer och använd den där det behövs.
*/


var pin = "1234";
var tries = 0;
var maxtries = 4

var input = prompt("Welcome to the bank, please enter your pin:");
tries++;

while (input != pin && tries < maxtries)
{
  alert("WRONG PIN, TRY AGAIN");
  input = prompt("Enter your pin");
  tries++;
}

if(input == pin)
{
  alert("Pin accepted");
}
else if (tries >= maxtries)

{
  alert("You have run out of tries, your account is now locked");
}