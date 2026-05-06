let banana = Number(prompt("digite uma nota de 0 a 10 \n (negativo caso deseje a media):"));
let soma = 0; 
let quantidade = 0; 

while (banana >= 0) {
    if (banana <= 10) {
        soma = soma + banana
        quantidade++
    } else {
        alert("nota maior que 10 não vale!")
    }
    banana = Number(prompt("digite uma nota de 0 a 10 \n (negativo caso deseje a media):"))
}
if (quantidade > 0) {
    let media = soma / quantidade
    if(media > 7){
    alert(`a media de seus numeros é ${media.toFixed(2)}`)
    alert("*nota")
    } else {
        alert(`filho... \n ja tivemos essa conversa`)
        alert(`sua media é ${media}`)
    }
} else {
    alert("nenhuma nota válida foi digitada.")
}