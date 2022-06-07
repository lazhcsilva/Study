/*

    Uma função JS tem a mesma função que um Verbo para a linguagem comum, realiza uma ação.
    Uma função pode ou não ter um paramtrô estabelecido, como também ter até 4 parametros.

*/

// Função sem retorno
function imprimirSoma(a, b){
    console.log(a + b)
}

// Função com dois valores propostos e retornando corretamente a soma
imprimirSoma(2, 3)

// Função com um valor, retornando NaN
imprimirSoma(2)

// Função com 7 valores, porém como a função tem apenas 2 parametros, será somado apenas os dois primeiros valores
// e ignorado os outros
imprimirSoma(2, 3, 4, 5, 6, 7, 8)

// Função não passando nenhum valor, retorna um NaN
imprimirSoma()


// Função com retorno
function soma(a, b = 0){
    return a + b
}

console.log(soma(2, 3))