// condicionais simples com IF
var anoNascimento = 2002;
if (anoNascimento > 2003) {
  console.log(" a pessoa nasceu depois de 2003");
}

if (anoNascimento < 2003) {
  console.log("a pessoa nasceu antes de 2003.");
}

if (anoNascimento == 2003) {
  console.log(" a pessoa nasceu em 2003.");
}

// condicoes simples com if-else
var anoNascimento = 2005;
if (anoNascimento > 2000) {
  console.log("a pessoa nasceu depois de 2000");
} else {
  console.log("a pessoa nasceu em 2000 ou antes");
}

//condicoes compostas com IF
const login = "admin";
const senha = "12345";

var loginUser = "admin";
var SenhaUser = "12345";

if (loginUser == login && SenhaUser == senha) {
  console.log("acesso permitido!");
} else {
  console.log("acesso negado!");
}

// Desvio condicional aninhado - IF-ELSEID-ELSE
var semaforo = "vermelho";

if (semaforo == "verde") {
  console.log("siga");
} else if (semaforo == "amarelo") {
  console.log("atenção!");
} else {
  console.log("pare!");
}
// desvio condicional IF com blocos de comandos
var idade = 18;

if (idade <= 18) {
  console.log("entrei no if...");
  console.log("a nova idade é", idade);
  console.log("agora estou saindo do bloco if");
}
console.log("terminei");

// criando variaveis locais com "let" (so existe dentro do bloco onde foram criadas)
var mes = "agosto";
var dia = 15;

if (dia == 15 && mes == "agosto") {
  let mensagem = "hoje é dia 15 de agosto";
  console.log(mensagem);
}
console.log("tentando acessar a variavel local fora do bloco, vai dar erro!");
//console.log(mensagem);

//criando uma função com desvio condicional IF
const desconto = (valorCompra) => {
  let desconto = 0;
  if (valorCompra >= 1000) {
    desconto = (valorCompra * 12) / 100;
  }
  return desconto;
};

var totalCompra = 950;
console.log(
  "valor total da compra: r$",
  totalCompra,
  "::: desconto r$",
  desconto(totalCompra)
);
var totalCompra = 1800;
console.log(
  "valor total da compra: r$",
  totalCompra,
  "::: desconto r$",
  desconto(totalCompra)
);

// Desvio condicional if inline (ternário)
//condição ? expressão_se_verdadeiro : expressão_se_falso
var preco = 500;
var resultado = preco <= 100 ? "ta barato!" : "vish, ta muito caro!";

// o operador acima e o mesmo que escrever: if(preco <=100){
//resultado = "ta barato!""
// }else{
//resultado = "vish, ta muito caro!"
// }
console.log("preco: r$", preco, "-", resultado);
// if ternario com somente uma expressão
//condição && expressão
var logado = true;
logado && console.log("usuario esta logado!");
