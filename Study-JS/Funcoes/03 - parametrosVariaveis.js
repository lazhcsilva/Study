function soma(){
    let soma = 0
    for (i in arguments) {
        soma += arguments[i]
    }
    return soma
}

console.log(soma()) // Sem nenhum paramtro, irá retornar 0 (por que dentro da função foi declarado isto)
console.log(soma(1)) // Informando um valor, ele irá retornar ele mesmo
console.log(soma(1.1, 2.2, 3.3)) // Informando N valores, irá ter o retorno da soma de todos valores
console.log(soma(1.1, 2.2, "Test")) // Informando uma String, não há quebra de código e o valor da soma é concatenado
// a impressição criada, foi por contar do ponto flutuante.

console.log(soma('a', 'b', 'c'))