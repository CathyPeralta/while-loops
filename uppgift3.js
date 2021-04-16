/*
Skriv ett "program" där datorn slår två stycken olika 6-sidiga tärningar 
(alltså inte samma tärning två gånger). 
Efter varje slag ska vardera tärnings värde skrivas ut i konsollen, samt dess sammanslagna värde. 
Datorn ska slå tärningarna om och om igen tills dess att den får par,
 alltså samma tal på båda tärningarna. 
*/

var tarning1 = Math.random();
tarning1 = tarning1 * 6;
tarning1 = Math.ceil(tarning1);
console.log(tarning1 + " Tärning1")

var tarning2 = Math.random();
tarning2 = tarning2 * 6;
tarning2 = Math.ceil(tarning2);
console.log(tarning2 + " Tärning2")

console.log(tarning1 + tarning2 + " Tillsammans")


while (tarning1 != tarning2) {
 tarning1 = Math.random();
    tarning1 = tarning1 * 6;
tarning1 = Math.ceil(tarning1);
console.log(tarning1 + " Tärning1")

tarning2 = Math.random();
tarning2 = tarning2 * 6;
tarning2 = Math.ceil(tarning2);
console.log(tarning2 + " Tärning2")

console.log(tarning1 + tarning2 + " Tillsammans")
}