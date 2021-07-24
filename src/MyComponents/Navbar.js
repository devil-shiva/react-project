import React from 'react'
import PropTypes from 'prop-types'
import './Navbar.css'
import {
    Link
  } from "react-router-dom";
export const Navbar = (props) => {
    return(
        
            <header>
                <div className="navigation">
                    <div className="nav">
                        <li><Link className="navItem" to="/home">Home</Link></li>
                        <li><Link className="navItem" to="/blogs">Blogs</Link></li>
                        <li><Link className="navItem" to="/contact">Contact</Link></li>
                        <li><Link className="navItem" to="/donate">Donate</Link></li>
                    </div>
                    <div className="logo">
                        {props.title}
                    </div>
                </div>
            </header>
    )
}




Navbar.defaultProps={
    title: "Shivam Saksham"
}
Navbar.propTypes={
    title: PropTypes.string
}

