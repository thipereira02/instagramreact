export default function Story(){
    const dados = [
        {
            image: "assets/img/9gag.svg",
            usuario:  "9gag"
        },
        {
            image: "assets/img/meowed.svg",
            usuario:  "meowed"
        },
        {
            image: "assets/img/barked.svg", 
            usuario:  "barked"
        },
        {
            image: "assets/img/nathanwpylestrangeplanet.svg",
            usuario:  "nathanwpylestrangeplanet"
        },
        {
            image: "assets/img/wawawicomics.svg",
            usuario:  "wawawicomics"
        },
        {
            image: "assets/img/respondeai.svg",
            usuario:  "respondeai"
        },
        {
            image: "assets/img/filomoderna.svg",
            usuario:  "filomoderna"
        },
        {
            image: "assets/img/memeriagourmet.svg"
            usuario:  "memeriagourmet"
        }
    ]

    return(
        dados.map((i) => (
            <div class="story">
                <div class="imagem">
                    <img src={i.image} />
                </div>
                <div class="usuario">
                    <>{i.usuario}</>
                </div>
            </div> 
        ))
    );
}