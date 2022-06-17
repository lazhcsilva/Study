// Valor Padrão de Parâmetros em JavaScript

function diga(message="olá"){
    console.log(message)
}

diga(); // imprime olá

/*

    O valor padrão do parâmetro message na função say() é a string 'Hi'.
    Em JavaScript, os valores padrão dos parâmetros de uma função permitem que 
    você inicialize parâmetros nomeados com valores pré definidos, 
    caso nenhum valor (ou o valor undefined) for passado ao chamar a função.

*/

// Definição de parâmetros padrão para uma função

/*

    Em JavaScript, um parâmetro tem seu valor padrão como undefined. 
    Isso significa que se você não passar os argumentos ao chamar uma função, 
    seus parâmetros terão undefined como seus valores padrão.

*/

function diga2(message){
    console.log(message);
}

diga2(); // undefined

