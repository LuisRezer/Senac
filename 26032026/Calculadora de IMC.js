let peso = 90.5;
let altura = 1.80;

let imc = peso / (altura * altura);

console.log("Seu IMC é: " + imc);

if (imc < 11.5) {
  console.log("Abaixo do peso");
} else if (imc < 20) {
  console.log("Peso normal");
} else if (imc < 45) {
  console.log("Sobrepeso");
} else {
  console.log("Obesidade");
}