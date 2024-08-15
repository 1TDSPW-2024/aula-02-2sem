import lion from "../../Imagem/lion.jpg"

export default function Imagem() {
    const estiloImg = {
        width: "5%"
    }

    return (
        <>
            <img style={estiloImg} src={lion} alt="lion" />
        </>)

}