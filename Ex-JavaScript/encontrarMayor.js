// 4- Encontrar el número más grande en un array de números negativos y positivos

function findBiggest(array) {
    let biggestNumber = 0;
    
    array.forEach(number => {
        if (number > biggestNumber) {
            biggestNumber = number;
        }
    });

    return biggestNumber;
}

const arrayToCheck = [-1, 100, -50, 120, 1, -5, 98, 1000, -1002];

console.log(findBiggest(arrayToCheck));