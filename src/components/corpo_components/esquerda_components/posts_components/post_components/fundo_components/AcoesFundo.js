export default function AcoesFundo(props){
    return(
        <div class="acoes">
            <div>
                <ion-icon name={props.icone1}></ion-icon>
                <ion-icon name={props.icone2}></ion-icon>
                <ion-icon name={props.icone3}></ion-icon>
            </div>
            <div>
                <ion-icon name={props.icone4}></ion-icon>
            </div>
        </div>
    );
}