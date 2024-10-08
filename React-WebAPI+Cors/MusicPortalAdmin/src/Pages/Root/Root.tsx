
import { Outlet } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Aside from "../../Components/Aside/Aside";
import Footer from "../../Components/Footer/Footer";

const Root = () => {

    return (

        <>
            <Header />
            <Aside/>
            <section className="item3">
                <Outlet />
            </section>
            <Footer/>

        </>

    )

}

export default Root;