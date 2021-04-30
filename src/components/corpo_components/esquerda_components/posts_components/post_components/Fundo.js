import AcoesFundo from "./fundo_components/AcoesFundo";
import Curtidas from "./fundo_components/Curtidas";

export default function Fundo(props){
    console.log(props)
    return(
        <div class="fundo">
            <AcoesFundo icone1="heart-outline" icone2="chatbubble-outline" icone3="paper-plane-outline" icone4="bookmark-outline" />
            <Curtidas curtidas={props.curtidas.image} por={props.curtidas.usuario} num={props.curtidas.num} />
        </div>
    );
}