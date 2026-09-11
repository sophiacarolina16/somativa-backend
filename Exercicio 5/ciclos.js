const entrada = require('readline-sync');

const producao = [];

for (let i = 0; i < 10; i++) {
    console.log(`\n--- Turno ${i+1} ---`);
    let pecaQtd = entrada.question("Quantidade de peca produzida: ");

    

    const novaPeca = {
        nome: pecaQtd
    };
    
    producao.push(novaPeca);
};


console.log("\n---Relatorio---");
for (let i = 0; i < producao.length; i++) {
    console.log(`Turno numero ${i}: ${producao[i].nome} `);

};
console.log(`Soma de todas as pecas deu: `)

//não consegui fazer o calculo de todas juntas