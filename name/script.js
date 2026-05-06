let Nome = ""
let sobrenome = ""

while (!Nome || Nome.trim() === "") {
    Nome = prompt("digite seu primeiro nome:")
    if (!Nome || Nome.trim() === "") {
        alert("0 primeiro nome não pode ficar em branco.")
    }
}

while (!sobrenome || sobrenome.trim() === "") {
    sobrenome = prompt("digite seu sobrenome:")
    if (!sobrenome || sobrenome.trim() === "") {
        alert("0 sobrenome não pode ficar em branco.")
    }
}
console.log(`nome completo: ${Nome.trim()} ${sobrenome.trim()}`)
alert(`nome completo: ${Nome.trim()} ${sobrenome.trim()}`)
//primeira vez que faço isso mas
//O método
//.trim() 
//serve para limpar strings, removendo espaços em branco extras do início e do fim do texto.