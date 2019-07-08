/*ESERCIZIO: Generare due numeri random (da 1 a 5) per il computer
e dichiariamo chi ha vinto. */


// Creo la funzione per la generazione del numero casuale
function numcasuale (da1a5) {
  var risultato = Math.floor(Math.random() * (da1a5 + 1));
  return risultato;
}

// Richiamo la funzione per visualizzare i due numeri casuali
var numRandom1 = numcasuale (5);
var numRandom2 = numcasuale (5);
console.log("NUMERO GIOCATORE1: " + numRandom1);
console.log("NUMERO GIOCATORE2: " + numRandom2);

// Confronto la somma dei due numeri e dichiaro il vincitore
if ((numRandom1+numRandom2) % 2 === 0) {
  console.log("PARI: Vince GIOCATORE1");
} else {
  console.log("DISPARI: Vince GIOCATORE2");
}
