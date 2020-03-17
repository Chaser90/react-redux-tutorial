import React from 'react'
import { Link, NavLink,withRouter } from 'react-router-dom'

const Navbar = (props) => {
    console.log(props)
    return (
        <nav class="nav-wrapper red darken-3">
            <div class="container">
                <a class="brand-logo">Poke'Times</a>
                    <ul class="right">
                        <li><Link to="/">Home</Link></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
            </div>
        </nav>
        
    )
}

export default withRouter(Navbar)