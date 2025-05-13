let nota = 0;
let somaNotas = 0;
let quantidadeNotas = 0;

while (nota >= 0) {
    nota = parseFloat(prompt("Digite uma nota de 0 e 10. Digite um número negativo para encerrar:"));

    if (nota >= 0 && nota <= 10) {
        somaNotas = somaNotas + nota;
        quantidadeNotas = quantidadeNotas + 1;
    } else {
        if (nota > 10) {
            alert("Nota invalida!");
        }
    }
}

if (quantidadeNotas > 0) {
    let media = somaNotas / quantidadeNotas;
    alert("Média das notas: " + media.toFixed(2));
} else {
    alert("Nenhuma nota valida foi digitada.");
}
