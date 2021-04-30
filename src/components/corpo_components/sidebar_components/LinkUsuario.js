export default function LinkUsuario(props){
    return(
        <div class="usuario">
            <img src="assets/img/catanacomics.svg" />
            <div class="texto">
                <strong>{props.perfil}</strong>
                {props.nome}
            </div>
        </div>
    );
}