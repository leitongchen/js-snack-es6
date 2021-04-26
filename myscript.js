/*
Snack 1:
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal
*/

const bicycles = [
    {
        bikeName: 'Kirito',
        weight: 15,
    },
    {
        bikeName: 'Asuna',
        weight: 12,
    }, 
    {
        bikeName: 'Yui',
        weight: 11,
    }, 
    {
        bikeName: 'Silica',
        weight: 9,
    }, 
    {
        bikeName: 'Leafa',
        weight: 10,
    }, 
    {
        bikeName: 'Agil',
        weight: 12,
    }
];

const [bikeOne, bikeTwo, bikeThree, bikeFour, bikeFive, bikeSix] = bicycles; 

const {bikeName, weight} = bikeFour;

console.log(`ESERCIZIO JSNACK 1 ---------------------`);
console.log(`La ${bikeName} è la bici che pesa di meno, ${weight}kg.`);



/*
Snack2
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0. Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/

const squadreCalcio = [
    {
        nomeSquadra: 'Ito',
        punteggio: 0,
        falliSubiti: 0,
    },
    {
        nomeSquadra: 'Fujisawa',
        punteggio: 0,
        falliSubiti: 0,
    },
    {
        nomeSquadra: 'Chubu',
        punteggio: 0,
        falliSubiti: 0,
    },
    {
        nomeSquadra: 'Kasai',
        punteggio: 0,
        falliSubiti: 0,
    },
    {
        nomeSquadra: 'Nanbu',
        punteggio: 0,
        falliSubiti: 0,
    },
];

const datiSquadre = [];

for (let i=0; i < squadreCalcio.length; i++) {
    const squadraInAnalisi = squadreCalcio[i];

    // genero punteggi e falli numeri random
    squadraInAnalisi.punteggio = numRandomGen(100, 1000);
    squadraInAnalisi.falliSubiti = numRandomGen(1, 20);


    // per ogni oggetto dell'array squadreCalcio, estraggo solo nomeSquadra e falliSubiti 
    const {nomeSquadra, falliSubiti} = squadraInAnalisi;

    const datoDaPushare = {
        nomeSquadra,
        falliSubiti,
    }

    datiSquadre.push(datoDaPushare);
}

console.log(`ESERCIZIO JSNACK 2 ---------------------`);

for (let i=0; i < datiSquadre.length; i++) {
    const datoSquadra = datiSquadre[i];

    console.log(`La squadra ${datoSquadra.nomeSquadra} ha subito ${datoSquadra.falliSubiti} falli.`)
}

console.log(squadreCalcio);
console.log(datiSquadre)


/**
 * Funzione che genera numeri random
 * @param {number} min numero più piccolo generabile
 * @param {number} max numero più grande generabile
 */
function numRandomGen(min, max) {
    const minMax = max - min;

    let randomNumber = Math.floor(Math.random() * (minMax+1) + min); 
    return randomNumber;
}
