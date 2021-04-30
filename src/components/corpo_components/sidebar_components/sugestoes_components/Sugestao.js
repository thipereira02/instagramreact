export default function Sugestao(){
    const dados = [
        {
            image: "assets/img/bad.vibes.memes.svg",
            usuario: "bad.vibes.memes",
            razao: "Segue você"
        },
        {
            image: "assets/img/chibirdart.svg",
            usuario: "chibirdart",
            razao: "Segue você"
        },
        {
            image: "assets/img/razoesparaacreditar.svg",
            usuario: "razoesparaacreditar",
            razao: "Novo no Instagram"
        },
        {
            image: "assets/img/adorable_animals.svg",
            usuario: "adorable_animals",
            razao: "Segue você"
        },
        {
            image: "assets/img/smallcutecats.svg",
            usuario: "smallcutecats",
            razao: "Segue você"
        }
    ]
    return(
        dados.map(i => (
            <div class="sugestao">
                <div class="usuario">
                    <img src={i.image} />
                    <div class="texto">
                        <div class="nome">{i.usuario}</div>
                        <div class="razao">{i.razao}</div>
                    </div>
                </div>
                <div class="seguir">Seguir</div>
            </div>
        ))
    );
}