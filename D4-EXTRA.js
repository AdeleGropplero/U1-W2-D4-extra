// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") 
 e per ogni elemento stampa in console se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const giveMeRandom = function (n) {
  const randomArray = [];
  for (let i = 0; i < n; i++) {
    randomArray.push(Math.floor(Math.random() * 10));
  }
  return randomArray;
};
console.log(giveMeRandom(10));

const checkArray = function (randomArray1) {
  let sumArray = 0;
  const sumArray1 = [];
  for (let i = 0; i < randomArray1.length; i++) {
    if (randomArray1[i] >= 5) {
      console.log("Questo valore è maggiore di 5 - ", randomArray1[i]);
      sumArray += randomArray1[i];
    }
  }

  console.log("somma valori > di 5:", sumArray);
};

checkArray(giveMeRandom(10));

/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". 
 Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const shoppingCart = [
  {
    price: 90,
    name: "Gioele",
    id: "01",
    quantity: 3,
  },
  {
    price: 40,
    name: "Adele",
    id: "02",
    quantity: 1,
  },
  {
    price: 120,
    name: "Ema",
    id: "03",
    quantity: 5,
  },
];

const shoppingCartTotal = function (total) {
  let total1 = 0;
  let total2 = 0;
  for (let i = 0; i < shoppingCart.length; i++) {
    const carrello = shoppingCart[i];
    total1 = carrello.price * carrello.quantity;
    total2 += carrello.price * carrello.quantity;
    console.log("totale ad oggetto", total1);
  }
  console.log("Totale dovuto al negozio", total2);
};
shoppingCartTotal(shoppingCart);

/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart".
 Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo,
lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const newObj = {
  price: 80,
  name: "Adreea",
  id: "04",
  quantity: 2,
};

const addToShoppingCart = function (newItem) {
  shoppingCart.push(newItem);
  return shoppingCart.length;
};
console.log("Nuovo totale elementi nel carrello:", addToShoppingCart(newObj));
console.log("Contenuto del carrello aggiornato:", shoppingCart);

/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". 
 Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const maxShoppingCart = function (shoppingCart) {
  let maxPrice = 0;
  for (let i = 0; i < shoppingCart.length; i++) {
    const newCart = shoppingCart[i];
    if (newCart.price > maxPrice) {
      maxPrice = newCart.price;
    }
  }
  return maxPrice;
};
console.log(maxShoppingCart(shoppingCart));

/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart".
  Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*  const latestShoppingCart = function (params) {
  return shoppingCart[params.length - 1]; // in questo modo è dinamico e sempre valido
};
console.log(latestShoppingCart(shoppingCart));*/

const latestShoppingCart = function (params) {
  const lastEl = [];
  for (let i = 0; i < params.length; i++) {
    const element = params[i];
    lastEl.push(element.quantity);
  }
  return lastEl;
}; //latestShoppingCart(shoppingCart)
console.log(latestShoppingCart(shoppingCart));

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num1 = [];
const ordinate = [];
const loopUntil = function (x) {
  let count = 0;

  while (count < 3) {
    let casualNum = Math.floor(Math.random() * 10);
    num1.push(casualNum);
    if (casualNum > x) {
      count++;
      ordinate.push(casualNum);
      console.log(
        "Il numero " +
          casualNum +
          " è il " +
          count +
          " ad essere stato generato"
      );
    } else if (x > 9) {
      console.log("Il numero", num1, "non è compreso tra 0 e 9");
    } else {
      count = 0;
    }
  }
  return ordinate;
};
if (num1 >= 0 && num1 <= 9) {
  loopUntil(num1);
} else {
  console.log("Il numero", num1, "non è compreso tra 0 e 9");
}
console.log(loopUntil(5));

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */
