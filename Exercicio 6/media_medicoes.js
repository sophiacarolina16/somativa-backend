const entrada = require('readline-sync');

const teste = [];


for (let i = 0; i < 5; i++) {
    console.log(`\n--- Medicao ${i+1} ---`);
    let medicao = entrada.question("Digite o valor: ");

    

    const novaMedida = {
        valor: medicao
    };
    
    teste.push(novaMedida);
};


console.log("\n======= RELATORIO FINAL =======");


for (let i = 0; i < teste.length; i++) {
    console.log(`teste ${i+1}: ${teste[i].valor}`);

    console.log(`Resultado da media dos 5 testes deu: `)
}

    //não consegui fazer a media