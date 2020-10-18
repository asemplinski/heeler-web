import React from "react"
import {  StaticQuery, graphql, Link } from "gatsby"
import "../styles/navbar.scss"



const Navbar = ( data ) =>{
    return(
    <StaticQuery
        query={graphql`query NavBarQuery{
            site(siteMetadata: {title: {}, menuLinks: {}, description: {}}) {
              siteMetadata {
                menuLinks {
                  name
                  link
                }
              }
            }
          }`
        }
        render={data=> (
            <div className='Navbar'>
                <ul className='nav-list'>
                    {data.site.siteMetadata.menuLinks.map(link => (
                        <li
                            key={link.name}
                            className='nav-item'
                        >
                            <Link style={{ color: `white` }} to={link.link}>{link.name}</Link>
                            
                        </li>
                    ))}
                </ul>
            </div>
        )}
    />
    )
}


export default Navbar