import React from "react"

const destaqueUsuario = {
    imgUsuario: "assets/img/catanacomics.svg",
    nomeUsuario: "catanacomics",
    apelido: "Catana"
}

export default function Usuario() {
    
    return (
        <UsuarioAcimaDasSugestoes key={destaqueUsuario.nomeUsuario} imgUsuario={destaqueUsuario.imgUsuario}
            nomeUsuario={destaqueUsuario.nomeUsuario} apelido={destaqueUsuario.apelido} />
    )
}

function UsuarioAcimaDasSugestoes(props) {
    const [apelido, setApelido] = React.useState(props.apelido);
    const [imagem, setImagem] = React.useState(props.imgUsuario);

    function mudarApelido(){
        const resposta = prompt("Qual seu novo apelido?");
        if(resposta) setApelido(resposta);
    }

    function mudarImagem(){
        const link = prompt("Coloque o link da imagem que deseja:");
        if(link) setImagem(link);
    }

    return (
        <div data-test="user" className="usuario">
            <img data-test="profile-image" src={imagem} onClick={mudarImagem}/>
            <div className="texto">
                <strong>{props.nomeUsuario}</strong>
                <span>
                    <span data-test="name">{apelido}</span>
                    <ion-icon data-test="edit-name" name="pencil" onClick={mudarApelido}></ion-icon>
                </span>
            </div>
        </div>
    )
}