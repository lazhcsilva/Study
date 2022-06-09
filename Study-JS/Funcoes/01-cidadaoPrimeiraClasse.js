/*

    Funções são blocos de construção fundamentais em JavaScript. 
    Uma função é um procedimento de JavaScript — um conjunto de instruções que executa uma tarefa ou calcula um valor. 
    Para usar uma função, você deve defini-la em algum lugar no escopo do qual você quiser chamá-la.
    Funções em Javascript são conhecidas como objetos de primeira classe (first-class objects). 
    Isso porque tudo o que você pode fazer com um objeto, você pode fazer com funções. 
    Na realidade uma função é um objeto do tipo Function.

*/

// Criando furnção de forma literal

function minhaFuncao(){} //definindo uma função

// Armazenar uma função em uma variável

const fun1 = function () {}

// Armazenar uma função em um array

const array = [function (a, b) { return a + b }, fun1, fun2]

// Uma função como parâmetro para outras funções

function minhaFuncao2(parametro) {}

minhaFuncao2(function() { console.log("Função como parametro") })

let obj = {

    start:function(){}

}

let obj = {}

obj.minhaFuncao3 = function(){}


// Retornando como resultado de uma função

function minhaFuncao4(){

    return function(){} // retornando uma função como resultado

}

// Possuir propriedades que podem ser atribuídas dinamicamente

function minhaFuncao5() {}
minhaFuncao5.startTime = 0 //Atribuindo uma propriedade para a função

// a forma abaixo também funciona
// let minhaFuncao5 = function(){}

// minhaFuncao5.startTime = 0

// Armazenar em um atributo de objeto

const obj = {}

obj.falar = function () { return 'Opa' }
console.log(obj.falar())