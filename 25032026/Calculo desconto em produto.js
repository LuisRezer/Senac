// Calcular Desconto em Produto

let precoOriginal = 300;
let percentualDesconto = 20;

// Calculando o desconto
let valorDesconto = (precoOriginal * percentualDesconto) / 100;
let precoFinal = precoOriginal - valorDesconto;

console.log("Preço original: R$ " + precoOriginal);
console.log("Desconto de " + percentualDesconto + "%: R$ " + valorDesconto);
console.log("Preço final: R$ " + precoFinal);