function calcularMaoDeObra(horas) {
    return horas * 80.00;
}

function calcularTotal(valorPecas,calcularMaoDeObra) {
    return valorPecas + calcularMaoDeObra;
}
function verificarGarantia(meses) {
    if(meses < 6){
        return "Em Garantia"
    } else {
        return "Fora de Garantia"
    }
}

module.exports = { 
    calcularMaoDeObra,
    calcularTotal,
    verificarGarantia
};