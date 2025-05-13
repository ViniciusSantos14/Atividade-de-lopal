let primeiroNome = "";
let sobrenome = "";
while (primeiroNome === "") {
    primeiroNome = prompt(" Digite o seu nome:");
}
while (sobrenome === "") {
    sobrenome = prompt(" Digite o sobrenome:");
}
alert("Nome completo: " + primeiroNome + " " + sobrenome);