export default function LinkLogo(props){
    return(
        <div class="logo">
            <ion-icon name={props.namelogo}></ion-icon>
            <div class="separador"></div>
            <img src={props.image} />
        </div>
    );
}
