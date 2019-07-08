/* Scrivere un programma per verificare se la Parola
inserita è palindroma*/


// Chiedo all'utente di inserire una parola o una frase
var userWord = prompt("Inserisci una parola per controllare se è palindroma");
console.log("La parola inserita è: " + userWord);

/* Descrizione del funzionamento dei metodi split(), reverse() e join() */
// il metodo split() suddivide una stringa in un array di sottostringhe e restituisce un nuovo array
console.log("Metodo split: " , userWord.split(""));
// il metodo reverse() inverte la posizione degli elementi all'interno dell'array
console.log("Metodo split + reverse: " , userWord.split("").reverse());
// il metodo join() converte gli elementi di un array in una stringa
console.log("Metodo split + reverse + join: " , userWord.split("").reverse().join(""));


// Creazione della funzione
function parolapalindroma(word) {
  if (word == word.split("").reverse().join("")) {
    return "La parola inserita è palindroma";
  } else {
    return "La parola inserita non è palindroma";
  }
}

// Stampo la verifica della parola
console.log(parolapalindroma(userWord));
