//Declarando um array de frutas do Brasil.
let frutas = ["Maçã", "Banana", "Laranja",
    "Manga", "Açaí", "Goiaba", "Ameixa",
    "Cereja", "Mirtilo", "Uva"];

const novaLista = frutas.map(fruta => {

    return frutas.filter(f => f.includes("n"));
})
console.log(novaLista);