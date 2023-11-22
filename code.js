/*1- Scrivi una funzione "crazySum" che riceve due numeri interi come parametri. La funzione deve ritornare la somma di quei due valori, 
ma se il loro valore è lo stesso, allora deve ritornare la loro somma moltiplicata per 3.*/

function crazySum (firstNum,secondNum) {
    let sumResult = firstNum + secondNum; 
    if (firstNum === secondNum) {
        sumResult = (firstNum + secondNum)* 3;
    }
    return sumResult;
}

//prove:
console.log (crazySum(7,9));
console.log (crazySum (12, 12));
console.log (crazySum (50, 50));

/*2- Scrivi una funzione chiamata "boundary" che accetta un numero intero come parametro e ritorna true se tale parametro è 
incluso tra 20 e 100 o se è esattamente uguale a 400 */ 

function boundary (x) {
    if ((x >= 20 && x <= 100) || x === 400) {
        return true; 
    } else {
        return false;
    }
}
// prove:
console.log (boundary (30)); 
console.log (boundary (400)); 
console.log (boundary (350));

/*3- Scrivi una funzione chiamata "reverseString" che accetta una stringa come parametro e la ritorna invertita (es. EPICODE --> EDOCIPE).
Sugg: trasforma la stringa in array per invertirla più facilmente! */

function reverseString (string) {
    let revString = string.split("");
    revString.reverse();
    let newRevString = revString.join("");
    return newRevString;
}
//prova:
console.log (reverseString ("FEDERICA"));

//4- Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola

// RISPOSTA

/*5- Scrivi una funzione "giveMeRandom" che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
Sugg: per generare un numero random ti serviranno Math.random() e Math.floor() */

function giveMeRandom (n) {
    let randomNum = [];
    for (let i=0; i < n; i ++) {       // impostando i < n il numero di valori contenuti nell'array è pari a n; si può anche impostare ad es. su 9, e l'array avrà sempre 10 valori e così via
        randomNum.push(Math.floor(Math.random() * 11));
    }
    return randomNum;

}

//prove:
console.log (giveMeRandom (6));
console.log (giveMeRandom (22));

//EXTRA FACOLTATIVI: 
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/
function area (l1, l2) {
    let rettArea = l1 * l2;
    return rettArea;
}
//prove:
console.log (area (3, 4));

/*2- Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19. Se il valore calcolato è più
grande di 19, la funzione deve ritornare tale risultato moltiplicato per 3 */

function crazyDiff (x, y = 19) {
    let absolRes = Math.abs( x - y );
    if ( x - y > 19 ) {
        absolRes = (x - y) *3; 
    }
    return absolRes;
}
//prove:
console.log (crazyDiff(50));

/*3- Scrivi una funzione chiamata "codify" che accetta una stringa come parametro. La funzione deve aggiungere la parola "code" all'inizio della stringa fornita
e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" deve ritornarla senza modifiche */

let substr = "code";

function codify (string) {    
    let concString = substr + string;    
    if (string.includes(substr)) {
       concString = string;
    }
    return concString;
}
//prove:
console.log (codify ("codemynumber"));
console.log (codify ("uppercase")); 

/*4- Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro. La funzione deve controllare 
che tale parametro sia un multiplo di 3 o 7, e in tal caso tornare true; altrimenti deve tornare false.
SUGGERIMENTO: operatore modulo */ 

function check3and7 (num) {
    if ((num > 0) && num % 3 === 0 || num % 7 === 0) {
        num = true;
    } else {num = false;}
    return num; 
}
//prove
console.log (check3and7 (14));
console.log (check3and7(5)); 

/*5 - Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

function cutString (string) {
    let cuttedString = string.slice(1, -1);
    return cuttedString;
}
//prove:
console.log (cutString ("let's test this string")); 