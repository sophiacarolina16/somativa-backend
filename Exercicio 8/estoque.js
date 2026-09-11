const entrada = require('readline-sync');

const estoque = [];


for (let i = 0; i < 3; i++) {
    console.log(`\n--- Cadastro do Componente ${i+1} ---`);
    let nomeComp = entrada.question("Nome: ");
    let qtdComp = entrada.questionInt("quantidade: ");
    let estoqueMinimo = entrada.questionInt("Estoque Minimo: ");

    function verificar(qtdComp,estoqueMinimo) {
        if(qtdComp < estoqueMinimo){
            return "Repor Estoque";
    } else {
       return "Estoque OK";

    }

    };

    

    const novoComponente = {
        nome: nomeComp,
        qtd: qtdComp,
        status: verificar(qtdComp,estoqueMinimo)
    };
    
    estoque.push(novoComponente);
}


console.log("\n======= RELATORIO FINAL =======");
for (let i = 0; i < estoque.length; i++) {
    console.log(`Nome ${estoque[i].nome} - quantidade: ${estoque[i].qtd} | Status: ${estoque[i].status}`);
}