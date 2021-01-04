import * as React from 'react'
import NavBar from '../components/NavBar'

const pageStyles = {
    color: "#232129",
    padding: "96px",
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
  }


const Layout = ({children}) => {
    return (
        <>
      <NavBar />
      <main style={pageStyles}>
        {children}
       
      </main>
      </>
    )
  }
  
  export default Layout
  