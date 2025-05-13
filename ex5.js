let saldo = 1000;
let saque = 0;

while (saldo > 0) {
    saque = parseFloat(prompt("Saldo atual: R$" + saldo.toFixed(2) + "Digite o valor do saque:"));

    if (saque > 0 && saque <= saldo) {
        saldo = saldo - saque;
        alert("Saque de R$" + saque.toFixed(2) + " Realizado. saldo restante: R$" + saldo.toFixed(2));
    } else {
        alert("Valor inválido ou maior que o saldo. Tente novamente.");
    }
}

alert("Saldo zerado.");