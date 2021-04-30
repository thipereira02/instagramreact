import Usuario from "./topo_components/Usuario";
import AcoesTopo from "./topo_components/AcoesTopo";

export default function Topo(props){
    return(
        <div class="topo">
            <Usuario image={props.topo.image} usuario={props.topo.usuario} />
            <AcoesTopo />
        </div>
    );
}