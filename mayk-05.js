/**************************************************************************************************************
 *                                    lista de Exercicios 05
 * ************************************************************************************************************/
// 1. crie uma função que receba como parametro o ano de nascimento de uma pessoa a retorne sua idade.
// 2. crie uma função que receba a quantidade de cmbustivel de um carro e retorne quantos kms ele pode viajar com esse combustivel. considere que o veiculo faz uma media de 12 kms/l
function nascimento(nome, ano) {
  let idade = 2025 - ano;
  console.log("a/o", nome, "nasceu no ano", ano, "e tem", idade, "anos");
}
nascimento(" a anna", "2005");
2005;

const combustivel = (litros) => {
  return litros * 12;
};
var car1 = 20
var car2 = 8
var car3 = 2
console.log("carro 1: ", car1,"->", combustivel(car1), "kms.");
console.log("carro 1: ", car2,"->", combustivel(car2), "kms.");
console.log("carro 1: ", car3,"->", combustivel(car3), "kms.");
