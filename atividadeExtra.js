/*********************************************************************** 
    Lista de Exercícios – Lógica de Programação em JavaScript (Console)
 ***********************************************************************


1. Par ou Ímpar?
Escreva um programa que peça um número ao usuário e exiba no console se ele é par ou ímpar.


📌 Dica: Use o operador % para verificar o resto da divisão.
------------------------------------------------------------------------


2. Tabuada
Peça ao usuário um número e exiba no console a tabuada desse número de 1 a 10.


📌 Exemplo (se o número for 3):
3 x 1 = 3
3 x 2 = 6
...
3 x 10 = 30
------------------------------------------------------------------------


3. Fatorial de um Número
Solicite um número ao usuário e exiba no console o seu fatorial.


📌 Fatorial de 5: 5! = 5 × 4 × 3 × 2 × 1 = 120
------------------------------------------------------------------------


4. Soma dos Números de um Array
Crie um programa que tenha um array com números aleatórios e exiba no console a soma total desses números.


📌 Exemplo:
let numeros = [10, 20, 30, 40];  
// Saída: Soma = 100
------------------------------------------------------------------------


5. Ordenação de Números
Peça ao usuário para inserir vários números separados por vírgula. Depois, exiba os números ordenados de forma crescente no console.


📌 Exemplo:
Entrada: 8, 3, 5, 1, 9  
Saída: 1, 3, 5, 8, 9 
----------------------------------------------------------------------
//
*/

var numeros = [2, 6, 1, 5, 4, 8];
console.log(numeros);

numeros.sort();
console.table(numeros);

numeros[0] = numeros[0] + 2;
numeros[0] = numeros[0] + 2;
numeros[1] = numeros[1] + 2;
numeros[2] = numeros[2] + 2;
numeros[3] = numeros[3] + 2;
numeros[4] = numeros[4] + 2;
numeros[5] = numeros[5] + 2;
console.log(numeros)
//********************************** */
var tabuada = 5
console.log(tabuada, "x 1 = 5",tabuada*1);
console.log(tabuada, "x 1 = 5",tabuada*2);
console.log(tabuada, "x 1 = 5",tabuada*3);
console.log(tabuada, "x 1 = 5",tabuada*4);
console.log(tabuada, "x 1 = 5",tabuada*5);
console.log(tabuada, "x 1 = 5",tabuada*6);
console.log(tabuada, "x 1 = 5",tabuada*7);
console.log(tabuada, "x 1 = 5",tabuada*8);
console.log(tabuada, "x 1 = 5",tabuada*9);
console.log(tabuada, "x 1 = 5",tabuada*10);

//3. fatorial de um numeros
console.log("fatorial de 5! =!",5 *4 * 3 * 2 * 1);
//4

