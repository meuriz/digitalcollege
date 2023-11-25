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

/*const checarSePodeEntrar = (idade, acompanhado = falso) => {
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
 alert (checagem)*/

 // Loop For, While e Do..While com intervalo: Use um loop para imprimir todos os números pares entre 2 e 20.

 /*for (let i = 2; i <=20;i++){
     const resto = 1 % 2;
     if (resto === 0){
        console.log(i);
     }
 }  */

 //Imprima todos os números de 1 a 100 que são divisíveis por 3 

 /*for(let i= 1; i <= 100 ; i++) {
    if (i , 10) {
    const resto = i % 3; 
    if (resto === 0) {
        console.log (i)
    }
 }

   }*/

   // Faça um script que leia um número do usuário e calcule a soma dos números de 1 a até o número que o usuário digitou

 /* somaNumeros(10)
  somaNumeros(20)
  somaNumeros(30)

  const numero = Number (prompt("Digite um numero"))
  let soma;
  for (let  i = 1; i <= numero; i ++) {
    soma += i;
  }
  alert (`A soma é `)


  */

  /*//const arrayDeNumeros = [ 10, 20, 30 ]
  const arrayDeTextos = [ "Fulano", "Circano"]
  // Acessar valor de um array
  // const nome = arrayDeTextos[0] // nome receberia Fulano
 let index = 1;
 arrayDeTextos[index]
 arrayDeTextos.length

  // Loop For, For Of, While e ForEach em uma lista: Crie uma lista de cinco frutas e use um loop for para imprimir cada fruta da lista.

 const frutas = ["Maçã", "Banana", "Abacate", "Acerola", "Limão"]

 for (let i = 0; i < frutas.length; i++){
    console.log(frutas[i])
 }
  for (let elemento of lista){
    console.log(elemento)
  }

  */

  // 2 Escreva um programa que conte quantas letras "a" tem em uma frase.
  /*const fruta1 = "Maçã";
  const fruta2 = "Banana";
  const frutas = [fruta1, fruta2, "Abacate","Acerola","Limão"] */



  //3. Faça um carrinho de compras com pelo menos 3 produtos e imprima o valor total dos produtos, cada produto deve ter nome e preço.

  const produto1 = { nome: "Celular", preço: 2000}
  const produto2 = { nome: "Laptop", preço: 3200}
  const produto3 = { nome: "Geladeira", preço: 4000}

  const produtos = [produto1, produto2, produto3]

  let  valorTotal = 0;
  for (let produto of produtos){
    valorTotal = 0;
    for (let produto of produto) {
        valorTotal+= produto.preço
    }
  }

  console.log (`O valor total dos produtos é $ {valorTotal}`)
  o valor total dos produtos é 9200 

  const produtoFiltrados = produtos.filter ((elemento) => {
    return elemento.preço <= 3000 || elemento.nome === "Laptop"
  })

  console(produtoFiltrados)

