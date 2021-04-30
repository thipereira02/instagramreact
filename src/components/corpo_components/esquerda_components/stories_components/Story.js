export default function Story(){
    const images = [
        "assets/img/9gag.svg", 
        "assets/img/meowed.svg", 
        "assets/img/barked.svg", 
        "assets/img/nathanwpylestrangeplanet.svg",
        "assets/img/wawawicomics.svg",
        "assets/img/respondeai.svg",
        "assets/img/filomoderna.svg",
        "assets/img/memeriagourmet.svg"
    ]

    const usuarios = [
        "9gag",
        "meowed", 
        "barked",
        "nathanwpylestrangeplanet",
        "wawawicomics",
        "respondeai",
        "filomoderna",
        "memeriagourmet"
    ]

    return(
        <div class="story">
            <div class="imagem">
                {images.map((i) => (
                    <img src={i} />
                ))}
            </div>
            <div class="usuario">
                {usuarios.map((u) => (
                    <>{u}</>
                ))}
            </div>
        </div>
    );
}