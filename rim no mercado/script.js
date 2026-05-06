let banana = 0;

let preço = -1; 

while (preço !== 0) {
    preço = Number(prompt("digite o valor do produto (ou 0 para finalizar):"));
    if (preço !== 0) {
        banana += preço;
    }
}
alert("total da compra R$ " + banana.toFixed(2));
