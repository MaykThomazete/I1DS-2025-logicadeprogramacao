// criando uma função que soma dois valores e retorna o resultado
function somar2Mais2() {
  return 2 + 2;
}
console.log(somar2Mais2());
function somar(val1, val2) {
  return val1 + val2;
}
console.log("5+3 =", somar(5, 3));
console.log("12 + 8 =", somar(12, 8));
console.log("6,5 + 2,12 =", somar(6.5, 2.12));

var v1 = 9;
var v2 = 6;
console.log("v1 + v2 =", somar(v1, v2));

//criando uma função que escreve "Bom dia!"
function BomDia(nome) {
  console.log("ola,", nome, ",\nMuito bom dia pra você!");
}

BomDia("Mayk");

// criando uma função que calcula e retorna o desconto em uma venda

function desconto(valor) {
  return (valor * 5) / 100;
}

var TotalPedido = 300;
var TotalDesconto = desconto(TotalPedido);
var valorFinal = TotalPedido - TotalDesconto;
console.log(
  "------------------------------------------------------------------"
);
console.log("total do pedido: r$", TotalPedido);
console.log("total dos descontos: R$", TotalDesconto);
console.log("valor liquido: R$", valorFinal);
console.log("---------------------------------------------------------")

// Criando uma função que apresenta pessoas com arrow function
const apresentapessoas = (nomePessoa,idade,cidade) => {
    //apresento a voces: "nome_ pessoa", que tem "XX" anos e mora em "cidade"
    console.log("apresento a voces:", nomePessoa,"que tem",idade,"anos e mora em,",cidade);
}
apresentapessoas("zuleika", 19, "brotas");
apresentapessoas("pafuncio",21, "jau")
apresentapessoas("epaminondas",16, "barra bonita")

    

