import React from "react"
import Header from "./header"
import Navbar from "./navbar"

import "../styles/layout.scss"


export default function Layout ({ children }) {
    return (

        <div className="layout">
            <Header/>
            <Navbar/>
            {children}
        </div>
    )
}