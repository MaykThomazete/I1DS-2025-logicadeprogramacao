//************************************************************************************************
//                               Lista de exercicios 03
// *********************************************************************************************************8 */
//1. crie um array de frutas com os seguintes elementoes: banana, maçã, pera, uva , morango.
//2.adicione tangerina no final.
// 3. adicione goiaba no inicio
//4.exiba o conteudo do indice 5.
//5. exclua o elemento uva.
// 6. crie uma copia do array apenas com os elementos com indices 2, 3 e 4;
var frutas = ["bananas", "maçã", "pera", "uva", "morango"];
console.log(frutas);
console.table(frutas);
frutas.push("tangerina");
console.table(frutas);
console.log("o vetor frutas tem:", frutas.length, "elementos.");

frutas.unshift("goiaba");
console.table(frutas);
console.log("o vetor frutas tem:", frutas.length, "elementos.");

console.log("1ª posição:", frutas[4]);

var elementoExcluir = "uva"
var posicao = frutas.indexOf(elementoExcluir);
frutas.splice(posicao, 1);
console.table(frutas);

var copia = frutas.slice(2,5);
console.log("copiando um vetor!");
console.table(copia);

