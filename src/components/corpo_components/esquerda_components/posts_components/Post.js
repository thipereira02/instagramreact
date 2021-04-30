import Topo from "./post_components/Topo";
import Conteudo from "./post_components/Conteudo";
import Fundo from "./post_components/Fundo";

export default function Post(){
    const dados = [
        {
            topo: {
                image: "assets/img/meowed.svg",
                usuario: "meowed"   
            },
            conteudo: "assets/img/gato-telefone.svg",
            curtidas: {
                image: "assets/img/respondeai.svg", 
                usuario: "respondeai",
                num: "101.523"
            }
        },
        {
            topo: {
                image: "assets/img/barked.svg",
                usuario: "barked"   
            },
            conteudo: "assets/img/dog.svg",
            curtidas: {
                image: "assets/img/adorable_animals.svg", 
                usuario: "adorable_animals",
                num: "99.159"
            }
        }
    ]

    return(
        dados.map(i => (
            <div class="post">
                <Topo topo={i.topo}/>
                <Conteudo conteudo={i.conteudo}/>              
                <Fundo curtidas={i.curtidas}/>
            </div>
        ))
    );
}