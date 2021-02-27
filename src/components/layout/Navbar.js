import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom';

function Navbar({ icon, title }) {

    return (
       <nav>
           <h1>
               <i className={icon} /> {title}
           </h1>
           <ul>
               <Link to="/">Home</Link>
               <Link to="/about">About</Link>
           </ul>
       </nav>
    )
}

Navbar.defaultProps = {
    title: 'China Virus Tracker',
    icon: 'fab fa-github'
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}

export default Navbar

