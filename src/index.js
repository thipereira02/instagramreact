import ReactDOM from "react-dom";

import Navbar from "./components/Navbar";
import FundoMobile from "./components/FundoMobile";
import Corpo from "./components/Corpo";

function App(){
    return (
        <>
            <Navbar />
            <Corpo />
            <FundoMobile />
        </>
    ); 
}

ReactDOM.render(<App />, document.querySelector(".root"));