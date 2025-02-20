// criando variaveis do tipo array (vetor)
var numeros = [1, 2, 3, 4, 5];
console.log(numeros); // imprimindo os dados do array
console.table(numeros); // imprimindo os dados em forma de tabela
console.log(numeros[1]); // imprimindo o item de indice 1
console.log("o vetor tem:", numeros.length, "elementos,");

var dinos = [
  "tiranssauro rex",
  "estegossauro",
  "anquilossauro",
  "titanossauro",
];
console.log(dinos); // imprimindo os dados
console.table(dinos); //imprimindo os dados em forma de tabela
console.log("o vetor dinos tem:", dinos.length, "elementos.");

// adicionando elementos a um vetor existente
dinos.push("brontossauro");
console.table(dinos);
console.log("o vetor dinos tem:", dinos.length, "elementos.");

dinos.unshift("triceratops");
console.table(dinos);
console.log("o vetor dinos tem:", dinos.length, "elementos.");

// obtendo um elemento com base em seu indice (posição)
console.log("1ª posição:", dinos[0]);
console.log("3ª posição:", dinos[2]);
console.log("20ª posição:", dinos[19]); // quando não temos o item, apresenta um erro (undefined)

//alterando os elementos com base em seu indice (posição)
dinos[3] = "velociraptor";
console.table(dinos);

//removendo elementos do vetor
var dinos = [
  "triceratops",
  "tiranossauro rex",
  "estegosauro",
  "anquilossauro",
  "brontossauro",
];
dinos.pop(); //remove o ultimo elemento do array (vetor)
console.table(dinos);
dinos.shift(); //removendo o primeiro elemento do array (vetor)
console.table(dinos);

dinos.splice(1, 2); //remove o elemento de indice 1 ( a partir da posição 1, exclui 1 elemento)
console.table(dinos);
var dinos = [
  "triceratops",
  "tiranossauro rex",
  "estegossauro",
  "anquilossauro",
  "brontossauro",
  "ictiossauro",
  "pterodactilo",
  "espinossauro",
];
console.table(dinos);

var elementoProcurado = "pterodactilo";

var posicao = dinos.indexOf(elementoProcurado);
console.log(elementoProcurado, "esta no indice:", posicao);

elementoProcurado = "estegossauro";
posicao = dinos.indexOf(elementoProcurado);
console.log(elementoProcurado, "esta no indice:", posicao);

elementoProcurado = "castellossauro";
posicao = dinos.indexOf(elementoProcurado);

console.log(elementoProcurado, "esta no indice:", posicao);
console.log("indexOF = -1 significa que o elemento não foi encontrado no vetor!");

var elementoExcluir = "pterodactilo"
var posicao = dinos.indexOf(elementoExcluir);
dinos.splice(posicao, 1);
console.table(dinos);

 // criando uma copia de um array (vetor)
 var copia = dinos.slice();
 console.log("copiando um vetor!");
 console.table(copia);

 //criando um array numerico
var numeros = [4,3,1,9,7,2];
console.table(numeros);

//imprimindo os elementos das posicoes impares
console.log(numeros[1]);
console.log(numeros[3]);
console.log(numeros[5]);

//verificando se o array contem um item
console.log("contem 9:",numeros.includes(9));
var contem0 = numeros.includes(0);
console.log("contem 0:", contem0);

// ordenando os elementos do vetor
numeros.sort();
console.table(numeros);

// invertendo a ordem ou posição dos itens
numeros.reverse();
console.table(numeros);

//alterando o valor de um elemento com base em sua posição
numeros[2] = 5;
console.table(numeros);

numeros[0] += 3;
console.table(numeros);
numeros[5] = numeros[0] + numeros[1];
console.table(numeros);

//criando arrays hibridos
var hibridos = [10, "pafuncio", 3.45, "zuleika", 7];
console.table(hibridos);

hibridos[1] = 9;
console.table(hibridos);

hibridos[0] = "tiburcio";
console.table(hibridos);

//criando uma matriz
var matriz = [
  [9,0,1],
  [7,1,2],
  [1,3,9],
];
  console.table(matriz);
   //obtendo elemento com base em seus indices
   console.log("matriz[1,2] =", matriz[1][2]);
   console.log("matriz[2,0] =", matriz[2][0]);

   //alterando valores de elementos com base em seus indices
   matriz[1][2] = 20
   matriz[2][0] = 30
   console.table(matriz);
  