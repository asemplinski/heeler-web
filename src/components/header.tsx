import React from "react"
import Img from "gatsby-image"
import {  StaticQuery, graphql, Link } from "gatsby"
import "../styles/header.scss"



interface props{
    headerText: String
}

/*
export const query = graphql`
  Query {
    file(relativePath: {eq: "images/HLogotransparent.png"}) {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 250) {
          base64
        }
      }
    }
  }
  `
  */



const Header = ( data ) =>{

  //<Img fluid={data.fileName.childImageSharp.fluid} alt=""></Img>
  return (
        <StaticQuery
          query={graphql`
          query {
            file(relativePath: {eq: "images/HLogotransparent.png"}) {
              childImageSharp {
                fluid(maxWidth: 200, maxHeight: 200) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          `}
          render={data => {
            console.log(data)
            return(
            <div className="header">
              <div className="logo">
                <Link to='/'>
                <Img fluid={data.file.childImageSharp.fluid}></Img>
                </Link>
              </div>
            </div>)
          }}


        />
    
    )
    
}






  export default  Header


/*
childImageSharp {
        fluid(maxWidth: 400, maxHeight: 250) {
          ...GatsbyImageSharpFluid
        }
      }
      */