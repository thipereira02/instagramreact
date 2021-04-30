import AcoesFundo from "./fundo_components/AcoesFundo";
import Curtidas from "./fundo_components/Curtidas";

export default function Fundo(){
    return(
        <div class="fundo">
            <AcoesFundo icone1="heart-outline" icone2="chatbubble-outline" icone3="paper-plane-outline" icone4="bookmark-outline" />
            <Curtidas curtidas="{i.curtidas.image}" por="{i.curtidas.usuario}" num="{i.curtidas.num}"/>
        </div>
    );
}