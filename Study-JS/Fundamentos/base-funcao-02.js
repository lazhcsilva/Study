// Armazenando uma função em uma variavel

const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)

// Armazenando uma função arrow em uma variavel

const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))

// retorno implícito

const subtracao = (a, b) => a - b

// Neste exemplo, poderia até mesmo diminuir mais o codigo, removendo os parenteses se houvesse apenas um parametro

console.log(subtracao(3, 2))
