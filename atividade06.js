/***************************************************** 
                Lista de Exercício🙌🙌🙌🙌06
********************************************************

criar uma função que receba o nome e a idade de uma pessoa e retorne uma pessoa e retorne uma mensagem informa se ela pode vorar no brasil
]regras para votação no brasil:
menores de 16 anos: Não podem votar.
entre 16 e 17 anos ou acima de 70 anos: o voto é facultativo.
entre 18 e 70 anos: o voto é obrigatorio.
*/
const podeVotar = (idade) => {
  // isso é uma função!
  if (idade < 16) {
    return "Não pode votar";
  } else if (idade >= 18 && idade < 70) {
    return " pode votar!";
  } else {
    return "voto facultativo";
  }
};
var nome = ["ygona", "Batata", "fernanda", "kelly","erick"];

console.log("olá", nome[0], "voce tem 16 anos e", podeVotar(16));
console.log("olá", nome[1], "voce tem 22 anos e", podeVotar(22));
console.log("olá", nome[2], "voce tem 70 anos e", podeVotar(70));
console.log("olá", nome[3], "voce tem 12 anos e", podeVotar(12));
console.log("olá", nome[4], "voce tem 67 anos e", podeVotar(67));
