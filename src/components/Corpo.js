import Esquerda from "./corpo_components/Esquerda";
import Sidebar from "./corpo_components/Sidebar"; 

export default function Corpo(){
    return(
        <div class="corpo">
            <Esquerda />
            <Sidebar />
        </div>
    );
}