import * as React from 'react'
import Layout from '../../components/Layout'
import Locations from '../Locations'
import {Link} from 'gatsby'


const SanFrancisco = () => {
    return (
        <Layout>
        
            <h1>San Francisco</h1>
            <p>Check out our San Francisco office</p>
            <Link to="/Locations">Back to Locations</Link>
        </Layout>
    )
}

export default SanFrancisco