const entrada = require('readline-sync');

const equipe = [];


for (let i = 0; i < 5; i++) {
    console.log(`\n--- Cadastro de Operador ${i+1} ---`);
    let nomeOperador = entrada.question("Nome: ");

    

    const novoOperador = {
        nome: nomeOperador
    };
    
    equipe.push(novoOperador);
};

console.log("\n======= RELATORIO FINAL =======");
for (let i = 0; i < equipe.length; i++) {
    console.log(`${i}- ${equipe[i].nome}`);
};
