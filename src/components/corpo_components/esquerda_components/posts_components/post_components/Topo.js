import Usuario from "./topo_components/Usuario";
import AcoesTopo from "./topo_components/AcoesTopo";

export default function Topo(){
    return(
        <div class="topo">
            <Usuario image="{i.topo.image}" usuario="{i.topo.usuario}" />
            <AcoesTopo />
        </div>
    );
}