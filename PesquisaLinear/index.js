let listNumber = [15, 45, 31, 7, 5, 43, 4, 487, 8, 7, 6, 5, 13];

// 1 - Verificar se um número está presente em uma lista desordenada
function linearSearch(array, target) {
    for (let index=0; index <= array.length -1; index++) {
        hi(index);
        if (array[index] === target) {
            return console.log(`value: ${array[index]} | index: ${index}`);
        }
    }

    return console.log('not found!');
}

function hi(v) {
    console.log('hi', v)
}

// linearSearch(listNumber, 1);
// linearSearch(listNumber, 46);
linearSearch(listNumber, 13);
// linearSearch(listNumber, 43);


// 2 - Encontrar o maior número em uma lista
function biggerNumber(array) {
    if (!(array instanceof Array)) {
        return console.log('is not valid')
    }

    let currentMax = 0;

    for (let index=0; index <= array.length-1; index++) { // O(n) N é o número de elementos no array
        if (array[index] > currentMax) {
            currentMax = array[index];
        }
    }

    console.log('bigger number is: ', currentMax);
}

// biggerNumber(listNumber);

// 2 - Encontrar o maior número em uma lista
let max = Math.max(...listNumber);
// console.log(max)