// Dichiarazione cassetta di zucchine
const zucchine = [
  {
    varieta: "Nero di Milano",
    peso: 200,
    lunghezza: 20,
  },
  {
    varieta: "Romanesco",
    peso: 250,
    lunghezza: 25,
  },
  {
    varieta: "Striato di Napoli",
    peso: 200,
    lunghezza: 20,
  },
  {
    varieta: "Bianco Triestino",
    peso: 150,
    lunghezza: 20,
  },
  {
    varieta: "Pâtisson",
    peso: 150,
    lunghezza: 15,
  },
  {
    varieta: "Crookneck",
    peso: 200,
    lunghezza: 20,
  },
  {
    varieta: "Giallo",
    peso: 200,
    lunghezza: 20,
  },
  {
    varieta: "Lungo Fiorentino",
    peso: 250,
    lunghezza: 25,
  },
  {
    varieta: "Trombetta di Albenga",
    peso: 250,
    lunghezza: 25,
  },
  {
    varieta: "Ad Alberello",
    peso: 200,
    lunghezza: 20,
  },
];

//                        JSnack 1: Peso di tutte le zucchine

const snack1 = document.querySelector('.snack1-output');

let pesoTotale = zucchine.reduce((acc, curr) => acc + curr.peso, 0);

snack1.innerHTML = "Il peso totale delle zucchine è di: " + pesoTotale + "gr";


//                      JSnack 2: Dividi le zucchine per lunghezza

const snack2 = document.querySelector(".snack2-output");


const zucchineCorte = [];
const zucchineLunghe = [];

zucchine.forEach(zucchina => {
  if (zucchina.lunghezza <= 15) {
    zucchineCorte.push(zucchina);
  } else {
    zucchineLunghe.push(zucchina);
  }
});

const totaleZucchineCorte = zucchineCorte.reduce((acc, curr) => acc + curr.peso, 0);
const totaleZucchineLunghe = zucchineLunghe.reduce((acc, curr) => acc + curr.peso, 0);

snack2.innerHTML = 
  "Il peso totale delle zucchine corte è di: " + totaleZucchineCorte + "gr<br>" + 
  "Il peso totale delle zucchine lunghe è di: " + totaleZucchineLunghe + "gr";


//                            JSnack 3: Stringa inversa 
const snack3 = document.querySelector(".snack3-output");

const stringa = "zucchine ovunque!";

function stringaInversa(stringa) {
  return stringa.split('').reverse().join('');
}

const inversa = stringaInversa(stringa); 
snack3.innerHTML =
  "Questa è una funzione che inverte una stringa, es: <br>La frase: " +
  '"' + stringa + '"' +"<br> diventa: " + '"' + inversa + '"';


//                            JSnack 4: Fusione di Array
const snack4 = document.querySelector(".snack4-output");

function fondiArray(arr1, arr2) {
  const bigArray = [];
  for (let i = 0; i < arr1.length; i++) {
    bigArray.push(arr1[i], arr2[i]);
  }
  return bigArray;
}

const arr1 = [" 1"," 2"," 3"];
const arr2 = [" Zucchina", " Zucchine", " Zucchini"];
const bigArray = fondiArray(arr1, arr2);

snack4.innerHTML =
  "Il primo array è: " + arr1 + "<br>" +
  "Il secondo array è: " + arr2 + "<br>" +
  "La fusione di entrambi gli array è: " + bigArray;


//                       JSnack 5: Selezione di elementi in un array
const snack5 = document.querySelector(".snack5-output");

const array = ["mela", " carota", " zucchina", " zucchina", " zucchina", " pomodoro"];
const a = 2;
const b = 4;

function estraiElementiInRange(range, a, b) {

  const risultato = [];
  
  for (let i = a; i <= b; i++) {
    risultato.push(range[i]);
  }

  return risultato;
}

const risultato = estraiElementiInRange(array, a, b);

snack5.innerHTML = 
  "Il nostro carrello contiene: " + array + "<br>" +
  "Ma chi ha fatto la spesa?! correggiamo subito: " + risultato;