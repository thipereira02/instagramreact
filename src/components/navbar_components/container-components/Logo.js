import LinkLogo from "./LinkLogo";

export default function Logo(){
    const logo = "logo-instagram";
    const image = "assets/img/logo.png"

    return(
        <LinkLogo namelogo={logo} image={image} />
    );
}