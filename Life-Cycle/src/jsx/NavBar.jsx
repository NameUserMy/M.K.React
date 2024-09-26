import { BrowserRouter, Link } from "react-router-dom";
import '../css/NavBar.css';
const NavBar = () => {

    return (
        <>
        <BrowserRouter>
        <a href="/film">Film</a>
        <a href="/clabs">Clabs</a>
        </BrowserRouter>
            
        </>
    )

}

export default NavBar;