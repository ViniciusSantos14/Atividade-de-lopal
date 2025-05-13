let totalCompra = 0;
let valorCompra = 0;

do {
    valorCompra = parseFloat(prompt("Digite o valor da compra (Digite 0 para finalizar):"));

    if (valorCompra > 0) {
        totalCompra = totalCompra + valorCompra; 
    } else {
        if (valorCompra < 0) {
            alert("Valor invalido! Digite um valor positivo.");
        }
    }

} while (valorCompra == 0 || valorCompra > 0);

alert("Total da compra: R$ " + totalCompra.toFixed(2));