import * as React from 'react'
import Layout from '../../components/Layout'
import Locations from '../Locations'
import {Link} from 'gatsby'


const LosAngeles = () => {
    return (
        <Layout>
        
            <h1>Los Angeles</h1>
            <p>Check out our Los Angeles office</p>
            <Link to="/Locations">Back to Locations</Link>
        </Layout>
    )
}

export default LosAngeles