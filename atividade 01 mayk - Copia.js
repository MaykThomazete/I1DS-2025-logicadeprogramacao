/***************************************************** 
                Exercícios para fixação 
*****************************************************/
/* 
1. Crie uma variável e atribua o nome de uma pessoa; 
2. Crie uma variável e atribua o nome de um banco; 
3. Crie uma variável e atribua o número da agência; 
4. Crie uma variável e atribua o número da conta; 
5. Crie uma variável e atribua o saldo da conta; 
6. Imprima os dados e o saldo da conta; 
7. Efetue e imprima 5 movimentações na conta; 
8. Imprima novamente os dados e o saldo da conta;
*/
// var nome = "mayk";
// console.log("Meu nome é", nome);
// var nome = "nubank";
// console.log("meu nome é", nome);
// var agencia = "123456";
// console.log("minha agencia é", agencia);
// var conta = "10";
// console.log("minha conta é", conta);

// var saldo = "1000";
// console.log("meu saldo é", conta);
// var tranferencia = "mayk---->1000<----erick"
// console.log("minha tranferencia é", tranferencia);
// var tranferencia = "mayk---->1000<----gaby"
// console.log("minha tranferencia é", tranferencia);
// var tranferencia = "mayk---->1000<----maria luiza"
// console.log("minha tranferencia é", tranferencia);
// var tranferencia = "mayk---->1000<----kaique"
// console.log("minha tranferencia é", tranferencia);
// var tranferencia = "mayk---->1000<----larissa"
// console.log("minha tranferencia é", tranferencia);
// console.log("------------------------------------------------");
// var saldo = "1000";
// var agencia = "123456";
// var nome = "nubank";

let nome = "mayk";
let banco = "bradesco";
let agencia = 5866;
let conta = "15874-9";
let saldo = 500;
console.log(
  "**********************************",
  banco,
  "*************************************"
);
console.log("cliente:", nome);
console.log("agencia:", agencia, "| conta:", conta);
console.log("seu conta é de r$", conta);
console.log("seu saldo é de r$", saldo);

console.log("   + deposito: r$75,00");
saldo = saldo + 75;
console.log("   + deposito: r$100,00");
saldo = saldo + 75;

console.log("   + deposito: r$200,00");
saldo = saldo + 75;
console.log("   - saque: r$200,00");
saldo = saldo - 200;
console.log(
  "**********************************",
  banco,
  "*************************************"
);
console.log("cliente:", nome);
console.log("agencia:", agencia, "| conta:", conta);
console.log("sua conta é:", conta);
console.log("seu saldo é de r$", saldo);

console.log(
  "----------------------------------------------------------------------------------------------------------------------"
);

//Desvio Condicional - switch Case
console.log("----------------switch Case-----------------------");
switch (1) {
  case 1:
    console.log("o usuario digitou o numero 1");
    break;

  default:
    console.log("o usuario informou um numero diferente de 1");
    break;
}
console.log("---------------------------------------");
//menu de seleção
var menuSelecionado = "Home";

switch (menuSelecionado) {
  case "Home":
    console.log("voce clicou no link 'Home'!");
    break;

  case "Quem somos":
    console.log("voce clicou no link 'Quem somos'");
    break;

  case "Contato":
    console.log("voce clicou no link 'Contato'");
    break;

  default:
    console.log("Opção é inválida!");
    break;
}
//Varias opcoes com mesmo case - Switch Case
var mes = 4;

switch (mes) {
  case 1:
  case 2:
  case 3:
    console.log("primeiro trimestre!");
    break;
  case 4:
  case 5:
  case 6:
    console.log("segundo trimestre!");
    break;
  case 7:
  case 8:
  case 9:
    console.log("terceiro trimestre");
    break;
  case 10:
  case 11:
  case 12:
    console.log("quarto trimestre");
    break;
  default:
    console.log("mes invalido!");
    break;
}
