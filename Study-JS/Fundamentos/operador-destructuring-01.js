/*

    O operador Destructuring foi introduzido na versão do ECMAScript de 2015. 
    Esse operador tem como objetivo extrair algo de uma estrutura.
    Por exemplo, com o Destructuring você pode extrair de dentro de um objeto seus atributos. 
    O mesmo acontece com uma estrutura de array, 
    no qual você pode extrair elementos desse array utilizando o operador Destructing.

*/

// Trabalhamos com duas formas de representação do Destructuring. 
// Quando você usa o operador Destructuring no âmbito de objeto, usa-se a sintaxe de chaves.

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade } = pessoa
console.log(nome, idade)

console.log("---------------------------------------")

// Caso você esteja trabalhando com arrays, o operador Destructuring utiliza-se a sintaxe de colchetes

const [n1, n2, n3, n4] = [10, 7, 9, 8]

console.log(n2, n4)

console.log("---------------------------------------")

// É possivel trocar também mesmo locais de variáveis com o operador destructuring

var a = 1;
var b = 3;

[a, b] = [b, a];
console.log(a); // 3
console.log(b); // 1

console.log("---------------------------------------")

// fazendo com que o operador destructuring chame os atributos dentro de uma variavel

const { nome: n, idade: i } = pessoa
console.log(n, i) 

console.log("---------------------------------------")

const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada)

console.log("---------------------------------------")

var url = "https://developer.mozilla.org/en-US/Web/JavaScript";

var parsedURL = /^(\w+)\:\/\/([^\/]+)\/(.*)$/.exec(url);
console.log(parsedURL); 

var [, protocol, fullhost, fullpath] = parsedURL;

console.log(protocol);
