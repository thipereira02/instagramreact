import Usuario from "./sidebar_components/Usuario";
import Sugestoes from "./sidebar_components/Sugestoes";
import Links from "./sidebar_components/Links";
import Copyright from "./sidebar_components/Copyright";

export default function Sidebar(){
    return(
        <div class="sidebar">
            <Usuario />
            <Sugestoes />
            <Links />
            <Copyright />
        </div>
    );
}