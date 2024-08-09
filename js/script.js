// console.log("Bem vindo novamente!");

//Declarando um array de frutas do Brasil.
let frutas = ["Maçã", "Banana", "Laranja",
    "Manga", "Açaí", "Goiaba", "Ameixa",
    "Cereja", "Mirtilo", "Uva"];

const arrayDeObj = frutas.map((fruta, indice) => {
    return { id: indice + 1, nome: fruta }
})
console.log(arrayDeObj);

//Criando um array de objetos de preçoes de frutas;

let precos = [
    { id: 1, preco: 5.60 },
    { id: 2, preco: 8.80 },
    { id: 3, preco: 4.50 },
    { id: 4, preco: 7.90 },
    { id: 5, preco: 30.60 },
    { id: 6, preco: 2.30 },
    { id: 7, preco: 10.90 },
    { id: 8, preco: 20.40 },
    { id: 9, preco: 25.55 },
    { id: 10, preco: 9.27 },
];

//Gerando uma lista de frutas precificadas;

const frutasPrecificadas = arrayDeObj.map((fruta) => {
    const preco = precos.find(p => p.id === fruta.id);
    //console.log(preco);
    return { id: fruta.id, nome: fruta.nome, preco: preco.preco }
});
console.log(frutasPrecificadas);
