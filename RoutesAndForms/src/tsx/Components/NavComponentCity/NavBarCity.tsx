
import { Link } from "react-router-dom"
import './navBarCity.css'
const NavBarCity = () => {

    return (

        <>
            <dl id="navBar">
                <Link to='/'><dt>О Городе</dt></Link>
                <Link to='/favorite'><dt>Воронцовский маяк</dt></Link>
                <Link to='/sight'><dt>Интересные места</dt></Link>
                <Link to='/photos'><dt>Фото города</dt></Link>
            </dl>
        </>

    )



};

export default NavBarCity;