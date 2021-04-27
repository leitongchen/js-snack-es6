function randomNumGen() {
    return Math.ceil(Math.random()*20);
}


/*
Snack 3
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri. Usiamo i nuovi metodi degli array foreach o filter.
*/

const numberList = [];

// genera 5 numeri random
while (numberList.length < 5) {

    numberList.push(randomNumGen());
}
console.log(numberList)

/*
function sublist(array, indexStart, indexEnd){
    
    return array.filter(function(element, index) {
    
        if (index >= indexStart && index <= indexEnd) {
            return true;
        } else {
            return false;
        }
    });
}
*/

// FILTER
function sublist(array, indexStart, indexEnd){
    
    return array.filter((element, index) => index >= indexStart && index <= indexEnd)
}


const newNumberList = sublist(numberList, 1, 3);

console.log(`ecco con arrow function ${newNumberList.join(", ")} `);



// FOR EACH
function sublistForEach(array, startIndex, endIndex) {

    const result = [];

    array.forEach((number, index) => {
        if (index >= startIndex && index <= endIndex) { 
            result.push(number);
        }
    });
    return result; 
}

console.log(sublistForEach(numberList, 2, 3))




/* ************************************** */ 
/*
function raddoppio(array) {
    return array.map(number => number * 2)
}

const arrayRaddoppio = raddoppio(numberList);

console.log(`raddoppiati ${arrayRaddoppio}`)
*/