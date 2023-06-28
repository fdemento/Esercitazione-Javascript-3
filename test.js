/* ESERCIZIO 3
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8 (suggerimento: ripassa l'uso di "continue").
*/

for (let i = 0; i <= 10; i++) {
    if (i === 3) {
        continue;
    } else if (i===8){
        continue;
    } else {
        console.log(i)
    }
}

