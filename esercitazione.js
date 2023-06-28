//ESERCIZI SUGLI IF: 

/* ESERCIZIO 1:  Scrivi un algoritmo per trovare il piÃ¹ grande tra due numeri interi. */

let n1 = 11
let n2 = 4
let result 

if (n1<n2){
  result=`${n1} è minore di ${n2}`
} else {
  result=`${n1} è maggiore di ${n2}`
}

console.log(result)

/* ESERCIZIO 2: Crea un blocco condizionale if/else per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

for (let i=0; i<=20; i++) {
  if (i < 5) {
  console.log("Tiny " + i);
  } else if (i < 10) {
      console.log("Small " + i);
  } else if (i < 15) {
      console.log("Medium " + i);
  } else if (i < 20) {
      console.log("Large " + i);
  } else if (i >= 20){
      console.log("Huge " + i);
  }
}

/* ESERCIZIO 3 : Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8 (suggerimento: ripassa l'uso di "continue"). */

for (let i = 0; i <= 10; i++) {
  if (i === 3) {
      continue;
  } else if (i===8){
      continue;
  } else {
      console.log(i)
  }
}

/* ESERCIZIO 4: Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare che il valore corrente sia pari o dispari, e mostrare il risultato in console suggerimento: ripassa l'operatore modulo: */

let num;

for (let num = 0; num <= 15; num++) {
    if (num % 2 === 0) {
        console.log(num + " è pari!")
    } else {
        console.log(num + " è dispari!")
    }
}

// ESERCIZIO EXTRA 1: Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
//

let n1= 8;
let n2= 16;

if (n1||n2===8){
  console.log("Uno dei valori à uguale a 8!")
} else if (n1-n2 === 8) {
  console.log("La sottrazione da risultato 8!")
} else if (n1+n2 === 8) {
  console.log("La somma da risultato 8!")
}

// ESERCIZIO EXTRA 2: Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShopping Cart". C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10). Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
//

let totalShoppingCart = 25;
let totalAmount;

if (totalShoppingCart > 50) {
    totalAmount = totalShoppingCart;
    console.log("🟢 Hai diritto alla spedizione gratuita! " + "Il totale è: " + totalAmount)
} else {
    totalAmount = totalShoppingCart + 10
    console.log("🔴 Devi pagare i costi di spedizione. " + "Il totale è: " + totalAmount)
}

/* ESERCIZIO EXTRA 3: Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando, usando l'algoritmo del codice precedente, se le spedizioni siano gratuite oppure no e e calcolando il totale.
*/

let totalShoppingCart = 50;
let blackFriday= (totalShoppingCart * 20) / 100;
let totalAmount;

if (totalShoppingCart > 50) {
    totalAmount = totalShoppingCart - blackFriday;
    console.log("🟢 Hai diritto alla spedizione gratuita! " + "Il totale è: " + totalAmount)
} else {
    totalAmount = totalShoppingCart + 10
    console.log("🔴 Devi pagare i costi di spedizione. " + "Il totale è: " + totalAmount)
}

/*  ESERCIZIO EXTRA 4
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female". La scelta deve essere basata sul valore di un'altra variabile booleana chiamata isMale.
  Es. se isMale e' vero, il valore di gender deve essere "male"
*/

let isMale = true;

let gender = isMale = true ? "male" : "female";
console.log(gender)

/* ESERCIZIO EXTRA 5
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia Ã¨ multiplo di 3 (operatore modulo!), stampa al suo posto la parola "Fizz" e se il numero Ã¨ multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/

for (i = 0; i <= 100; i++) {
  if ((i % 5 === 0)&&(i % 3 === 0)) {
      console.log("FizzBuzz" + i);
  } else if (i % 5 === 0) {
      console.log("Buzz" + i);
  } else if (i % 3 === 0) {
      console.log("Fizz" + i)
}
}

//