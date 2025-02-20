/**********************************************************************************************************************************
 *                                          Exercicios Vetor Matriz
 ****************************************************************************************************************************/
// crie um vetor que receberá dados de um usuario.
var dados = [];
console.log("favor informar seu nome");
dados.push("gustavo");

console.table(dados);

console.log("informe seu cpf");
dados.push("123.456.789-09");

console.table(dados);

// mostre ao usuario os dados e da um bom dia
console.log("ola", dados[0], "seu cpf é:", dados[1]);
