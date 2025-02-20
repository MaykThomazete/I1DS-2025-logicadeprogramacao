// Criando variáveis com "var" (var nome_variavel = <valor>;) 
var nome = "Tibúrcio"; 
console.log("Meu nome é", nome); 
var idade = 23; 
console.log("Meu nome é", nome, ", e eu tenho ", idade, "anos"); 
idade = idade + 1; 
console.log("Meu nome é", nome, ", e agora eu tenho ", idade, "anos"); 
console.log("----------------------------------------------------------------------------------")

//javascript trabalha com sistema case sensitive (maiuscula são diferentes de minusculas)
console.log("criando uma variavel teste e tentando acessar como testE.")
let Teste = "variavel teste!"
// console.log(testE);
console.log(Teste);

//regras para nomear identificadores(variaveis)
//podem iniciar com 'a'-'z','a'-'z','_' ou $
let minhaVariavel = 10;
let outraVariavel = 2.65
const _minhaConstante = "uma constante qualquer!";
var $minhaVariavel = -5;
 
//variaveis logicas (boolean)
var nome = "mayk";
var rico = false;
var ealuno = true;
console.log("nome:",nome,"|é aluno?",ealuno,"|é rico?", rico);
