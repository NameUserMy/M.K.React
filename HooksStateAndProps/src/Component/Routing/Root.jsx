import { Outlet } from "react-router-dom"
import Header from "../Header/Header"

import './root.css'

const Root = () => {


    return (

        <>
            <Header />
            <section id="content">
                <Outlet></Outlet>
            </section>

        </>

    )


}

export default Root