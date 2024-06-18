// Pag 29

// ex 1
function pesquisaBinaria(lista, item) {
    let baixo = 0;
    let alto = lista.length -1;

    while (baixo <= alto) {
        let meio = Math.floor((baixo + alto) / 2);
        let chute = lista[meio];

        if (chute == item) {
            return meio;
        }

        if (chute > item) {
            alto = meio - 1;
        } else {
            baixo = meio + 1;
        }
    }

    return -1;
}

// console.log(pesquisaBinaria([1, 3, 5, 7, 9], 5));

// ex 2
function pesquisaBinariaLetra(lista, alvo) {
    let baixoL = 0;
    let altoR = lista.length;

    while (baixoL < altoR) {
        let meio = Math.floor(baixoL + altoR / 2);
        let chute = lista[meio];

        if (chute == alvo) {
            return chute;
        }

        if (chute > alvo) {
            altoR = meio - 1;
        } else {
            baixoL = meio + 1;
        }
    }

    return -1;
}