const entrada = require('readline-sync');

const peso = entrada.question("Digite o peso da peca: ");

if (peso < 95) {
    console.log(`PEÇA REPROVADA | ${peso} kg`)
} else if (peso > 105) {
    console.log(`PEÇA REPROVADA | ${peso} kg`)
} else {
    console.log(`PEÇA APROVADA | ${peso} kg`)
}

