import React from "react"
import Header from "./header"
import "../styles/layout.scss"


export default function Layout ({ children }) {
    return (

        <div className="layout">
            <Header/>
            {children}
        </div>
    )
}