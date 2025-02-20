//operadores logicos
var souPobre = true;
console.log("----------------------------------");
console.log("sou Pobre?",souPobre);
console.log("negação de SouPobre", !souPobre);

var manha = true;
var sono = true;
console.log("-------------------------------------");
console.log("manha:", manha, " | estou com sono:", sono);

//condicional simples
console.log("operador AND (E):", manha && sono);
console.log("operador OR (OU):", manha || sono);

manha = false;
console.log("-------------------------------------");
console.log("manha:", manha, " | estou com sono:", sono);

console.log("operador AND (E):", manha && sono);
console.log("operador OR (OU):", manha || sono);

sono = false;
console.log("-------------------------------------");
console.log("manha:", manha, " | estou com sono:", sono);

console.log("operador AND (E):", manha && sono);
console.log("operador OR (OU):", manha || sono);
