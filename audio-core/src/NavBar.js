import * as React from 'react'
import { Link } from 'gatsby'
import about from './pages/about'
import location from './pages/location'

const linkStyles = {
    textDecoration:"none"
}


const navStyles = {
    
    justifyContent: "space-around",
    display: "flex",
    backgroundColor: "#80808024",
    listStyle: "none",
    fontSize: "1.3rem",
    minHeight: "10vh",
    alignItems: "center",
    marginTop: 0
       
  }




const NavBar = () => {
    return (
    <nav >
        <ul style={navStyles}>
            <li><Link style={linkStyles} to='/'>Home</Link></li>
            <li><Link style={linkStyles} to='/about'>About</Link></li>
            <li><Link style={linkStyles} to='/location'>Location </Link></li>
        </ul>
        
    </nav>
    )

}


export default NavBar