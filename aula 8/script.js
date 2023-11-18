/* let nomeDoUsuario = prompt("Qual é seu nome")
alert("Oi"+nomeDoUsuario)

let sobrenomeDoUsuario = prompt("Qual é seu sobrenome")
alert("sobrenomeDoUsuario")*/

/*let ladoATexto = prompt("Digite a lado A quadrado")
let ladoANumero = parseInt(ladoATexto)

let ladoB = parseInt(prompt("Digite a altura do triangulo"))

alert((ladoANumero * ladoB) / 2) */

/*let idade = parseInt(prompt("Qual sua idade"))
let ehMaiorDeIdade = idade >= 18
alert(ehMaiorDeIdade) */

//let IdadeDoUsuario = prompt("Digite sua Idade")
//if (IdadeDoUsuario >= 18) = MaiorDeIdade
//if (IdadeDoUsuario <= 17) = MenorDeIdade

/* Definição básica de função: Escreva uma função chamada greet que imprima "Hello, World!" quando chamado.

const greet = () => {
    alert (Hello world)
}

greet() */

/*  Função com parâmetros: Modifique a função greet para que ela receba um nome como parâmetro e imprima "Olá, [nome]!".
const greet = (nome) => {
    alert (`Olá, $ {nome}!`)
}
const nome = prompt("Digite seu nome")
greet(nome) */

//Função com retorno: escreva uma função chamada add que receba dois números como parâmetros e retorne sua soma.

/*const add = (numero1, numero2) => {
    return numero1 + numero2;
}
const numero = Number("1")
numero + numero

const valor1Usuario = Number(prompt("Digite um numero"))

const valor2Usuario = Number(prompt("Digite Outro numero"))

const resultadoDaFuncao = add(valor1Usuario, valor2Usuario)
alert(resultadoDaFuncao) */

// Vários parâmetros: crie uma função de multiplicação que receba três números e retorne seu produto.

/*const calculaProduto = (numero1, numero2, numero3) => {
    return numero1 * numero2 * numero3;
}

const numero = Number("1")
numero * numero * numero 

const resultado = calculaProduto(3, 3, 3)
alert(resultado)*/

// Função com vários parâmetros, parâmetros padrão e retorno: Faça uma função que recebe a idade da pessoa e se esta acompanhada dos pais, a função deve retornar “pode entrar” caso a idade seja maior de 18 ou esteja acompanhado dos pais, e deve retornar “não pode entrar” caso seja menor de 18 e não esteja acompanhado dos pais

const checarSePodeEntrar = (idade, acompanhado = falso) => {
 if (idade>= 18 || acompanhado) {
     return "Pode Entrar"

 }
   return "Não Pode Entrar"
}
 const idade = Number (prompt ("Digite sua idade"))
 let acompanhado;
 if (idade < 18) {
     const resposta = prompt("Está acompanhado dos pais? (sim/não")
     if (resposta == "sim"){
        acompanhado = true  
     }
     else{
        alert ("Resposta invalida")
     }
    
}
 const checagem = checarSePodeEntrar (idade, acompanhado)
 alert (checagem)


