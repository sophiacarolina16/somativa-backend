const entrada = require('readline-sync');

const temp = entrada.question("Digite a temperatura: ");

if (temp > 80) {
    console.log(`Situacao CRITICA | ${temp} C`)
} else if (temp > 60 ) {
    console.log(`Situacao ATENCAO | ${temp} C`)
} else {
    console.log(`Situação NORMAL | ${temp} C`)
};

