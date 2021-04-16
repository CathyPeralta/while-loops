/* 
Titta på koden nedanför och svara på följande frågor:
1. Vad finns det för likheter mellan en while-loop och en if-sats?
- Båda kommer köras om påståendet är sant. 

2. Hur skiljer sig en while-loop från en if-sats?
- While loopen kommer fortsätta köras tills påsteendet blir falsk. If satsen kollar bara en gång. 


3. Ta bort prompten inne i whileloopen, vad händer? Varför?
- While loopen kommer att forstätta köras men eftersom input fältet är bortagen kan man inte ändra påstende tills dess att den blir falsk. 
*/

var pin = "1234";

var input = prompt("Welcome to the bank, please enter your pin:");

while (input != pin) {
  alert("WRONG PIN, TRY AGAIN");
  input = prompt("Enter your pin again.")
}

alert("Pin accepted");
