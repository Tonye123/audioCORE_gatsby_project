import * as React from "react";
import { Link } from "gatsby";
import Layout from "../../components/Layout";

export const query = graphql`
  query MyQuery {
    allContentfulCity {
      edges {
        node {
          description
          name
          location
          gatsbyPath(filePath: "/city/{contentfulCity.name}")
        }
      }
    }
  }
`;
const City = ({ data }) => {
  return (
    <Layout>
      <div>
        <title>Home Page</title>
        <h1>Locations</h1>
        <ul>
          {data.allContentfulCity.edges.map(({ node: city }) => (
            <li key={city.name}>
              <Link to={city.gatsbyPath}> {city.name} </Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default City;
