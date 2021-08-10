import React from 'react'
import {NavLink} from 'react-router-dom'
import('./navbar.css')
const Navbar = () => {
    return (

        <div className="navbarContainer">
            <div className="navbar">
                <ul >
                    <li>
                        <NavLink
                            className='link'
                            exact
                            to=""
                            activeStyle={{
                                
                                textDecoration: "underline"
                                
                             
                                
                            }}
                        >
                            About Me
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                              exact
                              className='link'
                            to="skills"
                            activeStyle={{
                                
                                textDecoration: "underline"
                            }}
                        >
                            Skills
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            exact
                            to="portfolio"
                            className='link'
                            activeStyle={{
                                
                                textDecoration: "underline"
                            }}
                        >
                            Portfolio
                        </NavLink>
                    </li>
                    
                </ul>
            </div>
        </div>
    )
}

export default Navbar
