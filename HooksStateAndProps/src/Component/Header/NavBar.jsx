
import { Link } from "react-router-dom"
import './navBar.css'
const NavBar = () => {

    return (
        <>
            <nav id="nav-Header">
                <Link to='/'>Pet</Link>
                <Link to='/magicBall'>MagicBall</Link>

            </nav>

        </>
    )

}

export default NavBar