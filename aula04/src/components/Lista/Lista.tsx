export default function Lista() {


    const nomes = ["Hughinho", "Zezinho", "Luizinho", "Toninho"];

    return (
        <ul>
            {nomes.map((nome, indice) => (
                <li key={indice}>{nome == "lion" ? <Imagem /> : ""}</li>
            ))}
        </ul>
    )

}