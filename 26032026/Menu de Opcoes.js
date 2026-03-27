//Menu Opcao

// Menu de opções
let opcao = prompt(
  "Escolha uma Cerveja:\n" +
  "1 - Skol\n" +
  "2 - Kaiser\n" +
  "3 - Bavaria\n" +
  "4 - Corona"
);

// Converter a entrada do usuário para número
opcao = Number(opcao);

// Avaliar a escolha
switch(opcao) {
  case 1:
    console.log("Você optou por Skol ");
    break;
  case 2:
    console.log("Você optou por Kaiser ");
    break;
  case 3:
    console.log("Você optou por Bavaria ");
    break;
  case 4:
    console.log("Você optou por Corona ");
    break;
  default:
    console.log("Opção inválida ");
}


