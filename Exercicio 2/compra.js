const entrada = require('readline-sync');

const nome = entrada.question("Digite nome do material: ");
const preco = entrada.questionFloat("Digite o preco do material: R$ ");
const qtd = entrada.questionInt("Digite a quantidade comprada: ");


const total = qtd * preco

console.log(`Voce comprou ${qtd} ${nome} de R$ ${preco} | Isso deu no total ${total}`);
