// operadores de incremento e decremento / pre e pos incremento
var idade = 16;
console.log(idade);

idade++; //idade = idade + 1
console.log(idade);

idade--; // idade = idade - 1
console.log(idade);
console.log("---------------------------------------------------------------------");

var novaidade = idade++
console.log("idade:", idade, "| nova idade:", novaidade);

novaidade = ++idade;
console.log("idade:", idade, "| nova idade:", novaidade);

//operadores de atribuição aritmética
console.log("-------------------------------------");
var x = 10;
var y = 5;
console.log("x =", x, "| y =", y);

x += y; // x = x + y
console.log("x =", x, "| y =", y);

x-= y; // x = x - y
console.log("x =", x, "| y =", y);

x *= y; // x = x * y
console.log("x =", x, "| y =", y);

x /= y; // x = x / y
console.log("x =", x, "| y =", y);

x **= y // x = x elevado a y
console.log("x =", x, "| y =", y);

x %= y // x = resto da divisão de x por y
console.log("x =", x, "| y  =", y);

x = 13;
x %= y // x = resto da divisão de x por y
console.log("x =", x, "| y  =", y);
