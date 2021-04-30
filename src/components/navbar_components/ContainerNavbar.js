import Logo from "./container-components/Logo";
import LogoMobile from "./container-components/LogoMobile";
import InstagramMobile from "./container-components/InstagramMobile";
import Icones from "./container-components/Icones";
import IconesMobile from "./container-components/IconesMobile";

export default function ContainerNavbar(){
    return(
        <div class="container">
            <Logo />
            <LogoMobile />
            <InstagramMobile />

            <div class="pesquisa">
                <input type="text" placeholder="Pesquisar" />
            </div>
            
            <Icones />
            <IconesMobile />               
        </div>
    );
}