
const entrada = require('readline-sync');
const manutencao = require('./funcoesManutencao'); // Lembre-se do ./

const nome = entrada.question("Nome da maquina:")
const preco = entrada.questionFloat("Preco peca: ");
const horario = entrada.questionFloat("Horario trabalhado: ");
const tempo = entrada.questionFloat("Meses desde a ultima manutencao: ");

const maodeObra = manutencao.calcularMaoDeObra(horario);
const total = manutencao.calcularTotal(preco,maodeObra);
const garantiaresultado = manutencao.verificarGarantia(tempo);

console.log(`Nome da maquina: ${nome} | Mao de Obra: ${maodeObra} | Valor peca: ${preco} | Total: ${total} | Garantia: ${garantiaresultado}`);