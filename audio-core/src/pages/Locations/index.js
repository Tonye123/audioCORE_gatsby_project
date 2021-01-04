import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../../components/Layout'
import LosAngeles from '../Locations/LosAngeles'
import SanDiego from '../Locations/SanDiego'
import SanFrancisco from '../Locations/SanFrancisco'




const Location = () => {
    return (
        <Layout>
           
            <h1>Locations</h1>
            <ul style={{listStyle:"none"}}>
                <li><Link to='LosAngeles'>Los Angeles</Link></li>
                <li><Link to='SanDiego'> San Diego </Link></li>
                <li><Link to ='SanFrancisco'> San Francisco </Link></li>
               
            </ul>
        </Layout>
    )
}

export default Location