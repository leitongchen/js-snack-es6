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

console.log(`La ${bikeName} è la bici che pesa di meno, ${weight}kg.`);