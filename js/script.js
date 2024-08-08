// console.log("Bem vindo novamente!");

//Declarando um array de frutas do Brasil.
let frutas = ["Maçã", "Banana", "Laranja",
    "Manga", "Açaí", "Goiaba", "Ameixa",
    "Cereja", "Mirtilo", "Uva"];

const arrayDeObj = frutas.map((fruta, indice) => {
    
    return {id:indice+1, nome:fruta};
})
console.log(novaLista)