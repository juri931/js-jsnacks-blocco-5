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

// JSnack 1: Peso di tutte le zucchine

const snack1 = document.querySelector('.snack1-output');

let pesoTotale = zucchine.reduce((acc, curr) => acc + curr.peso, 0);

snack1.innerHTML = "Il peso totale delle zucchine è di: " + pesoTotale + "gr";

