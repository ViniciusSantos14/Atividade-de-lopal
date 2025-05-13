let numero;
        do {
            numero = parseInt(prompt(" Digite um número positivo:"));
        } while (numero < 0 || isNaN(numero));
        alert("Você digitou um numero positivo!: " + numero);
