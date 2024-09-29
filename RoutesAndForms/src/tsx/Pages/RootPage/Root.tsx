import './root.css'

import Header from "../../Components/HeaderComponent/Header"
import { Outlet } from "react-router-dom"
const Root = () => {


    return (
        <>
            <Header/>
            <section id="content">
               <Outlet></Outlet>
            </section>
        </>
    )




}

export default Root