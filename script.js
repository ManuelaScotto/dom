// Chiedere 3 colori in input all'utente:
//    - 1 per il testo
//    - 1 per lo sfondo
//    - 1 per il titolo
//    - chiedere all'utente la dimensione del carattere di base da 1 a 7
//    - determinare la dimensione e la caratteristica di h1  h2  h3( corsivo) rispetto alle caratteristiche inserite dall'utente per il carattere.
// Creare un testo in cui siano evidenti queste caratteristiche.
// Controllare che il colore dello sfondo quello del titolo e quello del testo siano diversi.

/* *******************************************************************
COSTANTI
********************************************************************** */
const body = document.getElementById('body')
const form = document.getElementById('form');
const title = document.getElementById('title')
const ground = document.getElementById('ground')
const text = document.getElementById('text')
const titleFont = document.getElementById('titleFont')

const h1 = document.querySelector('.container h1')
const h2 = document.querySelector('.container h2')
const h3 = document.querySelector('.container h3')
const p = document.querySelectorAll('p') //prendo tutte le p (restituisce una NodeList quindi devo convertirla in array)
const arrayP = Array.from(p);


/* *******************************************************************
EVENTO
********************************************************************** */

form.addEventListener('submit', insertColor);


/* *******************************************************************
CALLBACK
********************************************************************** */

function insertColor(e) {
    let titleValue = title.value;
    let groundValue = ground.value;
    let textValue = text.value;
    let titleFontValue = titleFont.value;
    let fontValueNum = parseInt(titleFontValue); //lo trasformo in numero per poterlo sommare

    if (titleValue === groundValue || groundValue === textValue) {
        alert('hai inserito lo stesso colore! Scegline un altro')
    } else if (fontValueNum > 0 && fontValueNum < 8) {
        arrayP.forEach(e => {
            e.style.color = textValue;
            e.style.fontSize = 12 + fontValueNum + 'px';
            console.log(e.style.fontSize);
        })
        h1.style.fontSize = 40 + fontValueNum + 'px';
        h2.style.fontSize = 32 + fontValueNum + 'px';
        h3.style.fontSize = 20 + fontValueNum + 'px';
        h1.style.color = titleValue;
        h2.style.color = titleValue;
        h3.style.color = titleValue;
        h3.style.fontStyle = 'italic';
        body.style.backgroundColor = groundValue;
    } else {
        alert('inserisci un numero tra 1 e 7')
    }
    e.preventDefault();
}