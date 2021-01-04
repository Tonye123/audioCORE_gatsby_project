import * as React from 'react'
import Layout from '../../components/Layout'
import Locations from '../Locations'
import {Link} from 'gatsby'


const SanDiego = () => {
    return (
        <Layout>
        
            <h1>San Diego</h1>
            <p>Check out our San Diego office</p>
            <Link to="/Locations">Back to Locations</Link>
        </Layout>
    )
}

export default SanDiego