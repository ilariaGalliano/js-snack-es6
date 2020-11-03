/**
 * Jsnacks-6
 *
 */
// JSnack 1
$(document).ready(function () {
  const bicycle = [
  {
    name: 'Mountain bike',
    weight: 12
  },
  {
    name:'Bmx',
    weight: 10
  },
  {
    name:'Downhill',
    weight: 15
  }
  ];

  // Compara bici
  let smallBicycle = null;
  bicycle.forEach(element => {
    if (smallBicycle == null || smallBicycle.weight > element.weight) {
      smallBicycle = element;
    }
  });

  // Stampare a schermo la bici con peso minore con handlebars.
  const source = $("#bicycle-template").html();
  const template = Handlebars.compile(source);

  let data = {
      name: smallBicycle.name,
      weight: smallBicycle.weight,
  };

  var html = template(data);
  $('.bicycles').append(html)


  // Stampa a schermo con ES6
  const {name,weight} = smallBicycle;
  $('.container').html(
    `
    <div>
      <h3>Il nome della bici più leggera: ${name}</h3>
      <h3>Il peso della bici più leggera: ${weight}</h3>
    </div>
    `
  );

// JSnack 2
  // Partendo da un array di nomi (scelti da voi) creiamo un nuovo array.
  // Chiedere due numeri all'utente per definire la posizione iniziale
  const names = ['Luca','Marta','Lucia','Sara','Daniele','Eleonora'];
  let fix = names.length -1;
  let min = parseInt( prompt('inserisci un numero tra 0 e ' + fix).trim());
  let max = parseInt( prompt('inserisci un numero (più alto rispetto a prima) tra 0 e ' + fix).trim());

  // Il nuovo array deve contenere gli elementi dell'array originale
  // aventi la posizione (indice array) compresa tra i due numeri inseriti dall'utente.
  let newNames = [];

  newNames = names.filter((element, index) => {
    return min <= index && max >= index;
  });

  // Risultato
  console.log('Lista nomi completa : ' , names);
  console.log('Lista nomi posizioni richiste : ' , newNames);
  console.log('Posizioni richieste : ' , min , max);

// JSnack 3
  // Creiamo un array di oggetti
  const bicycle = [
   {
     name: 'Mountain bike',
     weight: 12
   },
   {
     name:'Bmx',
     weight: 10
   },
   {
     name:'Downhill',
     weight: 15
   }
   ];

  console.table(bicycle);
  // Creiamo una copia da questo array di partenza e aggiungiamo ai singoli elementi
  // una nuova proprietà position che contiene una lettera casuale.
  // Non dobbiamo modificare l'array iniziale.
  let newBicycle = [];
  const bicycles = bicycle.map((element) =>{
    const copyElement = {
      ...element,
      position: generatePosition()
    };
    return copyElement
  })

  console.table(bicycles, bicycle );

}); // <-- end doc ready

  // Funzione per generare una lettera casuale
  function generatePosition(){
    var letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var letter = letters[getRandomInt(0, letters.length -1)];

    return letter;
  }

  // Funzione per generare un numero casuale
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
