function realizarOperacao() {
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);
    const operacao = document.getElementById('operacao').value;
    let resultado;

    switch (operacao) {
        case "soma":
            resultado = num1 + num2;
            break;
        case "subtracao":
            resultado = num1 - num2;
            break;
        case "divisao":
            if (num2 === 0) {
                resultado = "Erro: divisão por zero!";
            } else {
                resultado = num1 / num2;
            }
            break;
        case "multiplicacao":
            resultado = num1 * num2;
            break;
        default:
            resultado = "Erro: operação inválida!";
    }
    
    document.getElementById('resultado').innerHTML = "Resultado: " + resultado;
}