function sum(listNumber) {
    let total = 0; // ---> 1

    //  |  1   |        N+1          |  N | --> N+1
    for (let i=0; i<listNumber.length; i++) {
        total = total + listNumber[i]; // --> N
    }

    console.log(`soma: ${total}`); // --> 1
    // f(n) = 2n + 3
    // O(n)
}

// sum([1, 7, 6, 4, 3]);

function add(array1, array2) {
    let c = [];

    for (let i=0; i<array1.length; i++) {
        c[i] = [];
        
        for (let j=0; j<array2.length; j++) {
            c[i][j] = array1[i]+ array2[j];
        }
    }

    console.log(c);
}

add([1, 5, 7], [2, 3, 7]);