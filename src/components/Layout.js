import React from 'react'
import {Link } from "gatsby"
import Footer from "./Footer"
function Layout({children}) {
    return (
        <div>
            <Link to="/">HOME</Link>
            <br>
            </br>
            <br></br>
            <Link to="/contact">CONTACT US</Link>

            {children}
            <Footer />
        </div>
    )
}

export default Layout
