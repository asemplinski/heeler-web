import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

import "../styles/layout.scss"



export default function Home() {
  return (
      <Layout>
        <img style={{marginTop: '5%'}} src="https://www.buythelogo.com/wp-content/uploads/2019/03/Letter-H-geometric-line-logo-vector.jpg"></img>
        <h1> Heeler</h1>
        <p> This website is under development</p>

        <Link  className="link" to="/about">About</Link>
      </Layout>

  )
}
