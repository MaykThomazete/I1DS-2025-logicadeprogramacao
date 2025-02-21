//laco de repeticao - FOR

// O professor colocou de castigo e pediu pra voce escrever mil vezes a frase "eu vou prestar atenção as aulas."
for (let i = 0; i < 1000; i++) {
  console.log("eu vou prestar atenção na aula");
}

//Escreva todos os números de 1 a 20
for (let i = 1; i <= 20; i++) {
  console.log(i);
}
console.log(
  "====================================================================="
);
//Mostre no console do sistema os  números pares entre 1 e 20

for (let i = 1; i <= 20; i++) {
  i % 2 == 0 && console.log(i);
}
console.log(
  "====================================================================="
);
//Dados um vetor, calcule e exiba o somatorio de seus elementos
var numeros = [5, 6, 8, 14, 0, 9, 7, 2];
console.log(numeros.length);
var soma = 0;
for (let i = 0; i < numeros.length; i++) {
  soma += numeros[i];
}
console.log("soma dos elementos:", soma);
console.log(
  "================================================================================"
);
//dado um vetor, calcule e exiba a quantidade de pares e de impares
var numeros = [5, 6, 8, 14, 0, 9, 7, 2];
var pares = 0;
var impares = 0;

for (let i = 0; i < numeros.length; i++) {
  numeros[i] % 2 == 0 ? pares++ : impares++;
}
console.log("total de pares:", pares);
console.log("total de impares:", impares);
console.log(
  "=========================================================================================================="
);

// dado um vetor, multiplique todos os seus elementos por 3 com o laco FOR
console.log(
  "-------------------------------------------------------------------------------------------"
);
var numeros = [5, 6, 8, 14, 0, 9, 7, 2];
console.table(numeros);

for (let i = 0; i < numeros.length; i++) {
  numeros[i] *= 3;
}
console.log(numeros);

console.log(
  "===================================================================================="
);

// dada uma matriz 2x3, mostre ao usuario todos os seus elementos com as respectivas posicoes
var matriz = [
  [8, 4, 1],
  [3, 7, 8],
];
for (let linha = 0; linha < matriz.length; linha++) {
  for (let coluna = 0; coluna < matriz[0].length; coluna++) {
    //console.log("matriz[", linha, "][", coluna, "]", matriz[linha][coluna]);
    console.log(`matriz[${linha} ][${coluna}] = ${matriz[linha][coluna]}`);
  }
}

//laço repetição - while / do While
//---------------------------laço repetição - while / do While--------------------------------
//testa a condição antes de entrar no laco de repetição
//se a condição for inicialmente falsa, o laço não é executado nenhuma vez.
var t = 10;

while (t >= 10) {
  console.log("entrei no laço While...");
  t = 0;
}
console.log("terminei!");

//Exemplo de White com escrita de 1000 linhas
var i = 0;
while (i <= 100) {
  console.log(`Escrita de linha ${i}`);
  i++;
}

//laço repetição While
// while(condição){
//  fragmento de codigo
//  fragmento de codigo
//  fragmento de codigo
// contador ++ | nesta parte o computador e variavel de controle de acesso
// }
//exemplo que funciona somente no navegador
//var senhaCorreta = "1234";
//var te//ntativa = "";
//whil//e(tentativa !== senhaCorreta) {
//tentativa = prompt("digite a senha:");
//}
//console.log("acesso concedido");

// Do while testa a condição somente no final do laço de repetição.
//sendo assim qualquer que seja a condição, o laço é executado pelo menos uma vez
var x = 10;

do {
  console.log("entrei no laço do-white...");
  x = 0;
} while (x > 10);

console.log("terminei!");
