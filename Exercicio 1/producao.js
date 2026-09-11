const entrada = require('readline-sync');

const qtd = entrada.questionInt("Digite quantidade de pecas produzidas por hora:");
const horas = entrada.questionInt("Digite tempo trabalhado:");


const total = qtd * horas


console.log(`Producao por hora: ${qtd} | Horas trabalhadas: ${horas} | Total produzido: ${total}`);