
import NavBarCity from '../../Components/NavComponentCity/NavBarCity';
import { Outlet } from "react-router-dom"
import './cyti.css'
const City = () => {


    return (

        <>
            <div id="info">
                <NavBarCity/>
               <Outlet ></Outlet>
            </div>
        </>

    )

};

export default City;