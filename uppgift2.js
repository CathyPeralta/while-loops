/* 
Återgå till javascriptversionen av gissa-nummerspelet där datorn valde ett slumpat tal. 
Lägg till en whileloop som låter användaren gissa tills dess att denne har rätt
*/


/*
Ni ska programmera ett spel som går ut på att användaren ska gissa ett slumpvalt nummer 
mellan 0 och 10 som programmet har slumpat fram i förväg. 
Om spelaren gissar fel så ska den få ett försök till (totalt 2 gissningar) 
tillsammans med en text som berättar om gissningen var för hög eller för låg. 
Om spelaren gissar rätt ska spelet meddela spelaren att den har vunnit. 

Gör leken i verkligheten tillsammans med en bordskamrat och tänk efter hur ni gör denna process, detta kommer att underlätta tänkandet.

När ni har fått en känsla för hur detta utspelar sig mellan två människor ska ni översätta det för datorn. 
Börja med att göra en flowchart som beskriver processen. 
Gå sedan vidare och skriv pseudokod. 
Nedan finner ni en startkod för hur man gör ett slumpvalt nummer.

Start program
Set correct number 
User enter number between 0-10
If the number is correct answer "You win"
Else if the number is lower answer "To low, last chance" 
Else it the number is higher answer "to high, last chance"
User enter number agian
If the number is correct answer "You win"
Else answer "you lose"
End game


*/ 

//Tar ett slumpvalt värde mellan 0 och 10


var nummer = Math.random();
nummer = nummer * 10;
nummer = Math.round(nummer);

let user = Number(prompt("Enter a number betwwen 0-10") )

while (user != nummer) {
    alert("Wrong number, try again!");
    user = Number(prompt("Enter a number betwwen 0-10"))
}
alert("You win!");



