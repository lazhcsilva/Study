function area(largura, altura){
    const area = largura * altura
    if (area > 20) {
        console.log(`Valor acima do permitido: ${area}m2.`)
    } else {
        return area
    }

    return 'oi'
}

console.log(area(2, 2)) // retorno esperado, informando dois parametrôs
console.log(area(2)) // retorno NaN por falta de parametros
console.log(area()) // retorno NaN por falta de paratros
console.log(area(2, 3, 15, 22, 55)) // retrono esperado, pegando apenas os dois parametros iniciais, sem dar erro
console.log(area(5, 5)) // informando estes valores, haveram dois retornos diferentes.

// primeiro retorno será o esperado ao entrar no bloco IF.
// O segundo retorno será undefined