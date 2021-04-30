export default function Curtidas(props){
    return(
        <div class="curtidas">
            <img src={props.curtidas} />
            <div class="texto">
                Curtido por <strong>{props.por}</strong> e <strong>outras {props.num} pessoas</strong>
            </div>
        </div>
    );
}