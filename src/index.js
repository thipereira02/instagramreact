import ReactDOM from "react-dom";

import Navbar from "./components/Navbar";
import FundoMobile from "./components/FundoMobile"

function App(){
    return (
        <Navbar />

        <FundoMobile />
    )   
}

ReactDOM.render(<App />, document.querySelector(".root"));