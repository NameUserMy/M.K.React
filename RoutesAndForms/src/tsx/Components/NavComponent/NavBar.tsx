
import { Link } from "react-router-dom"
import './navBar.css'
const NavBar = () => {

    return (
        <>
            <nav id="nav-Header">
                <Link to='/'>Одесса</Link>
                <Link to='/form'>Форма</Link>

            </nav>

        </>
    )

}

export default NavBar