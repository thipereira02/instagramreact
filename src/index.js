import ReactDOM from "react-dom";

import Navbar from "./components/Navbar";

function App(){
    return (
        <Navbar />
    )   
}

ReactDOM.render(<App />, document.querySelector(".root"));