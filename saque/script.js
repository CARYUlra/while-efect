let saldo = 1000.00;
console.log(`saldo inicial: R$ ${saldo.toFixed(2)}`);
while (saldo > 0) {
    let entrada = prompt(`saldo atual: R$ ${saldo.toFixed(2)} \n digite o valor que deseja sacar:`)
    let saque = parseFloat(entrada)
    if (isNaN(saque) || saque <= 0) {
        alert("por favor, insira um valor numérico válido maior que zero.")
        continue;
    }
    if (saque <= saldo) {
        saldo -= saque;
        alert(`saque de R$ ${saque.toFixed(2)} realizado com sucesso!`)
        console.log(`sucesso: Saque de R$ ${saque.toFixed(2)}. saldo restante: R$ ${saldo.toFixed(2)}`)
    } else {
        alert(`saldo insuficiente! Você tentou sacar R$ ${saque.toFixed(2)}, mas seu saldo é de R$ ${saldo.toFixed(2)}.`)
    }
}

alert("saldo zerado ou negativo. O programa será encerrado.")
console.log("sistema encerrado.")