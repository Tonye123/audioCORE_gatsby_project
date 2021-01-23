import * as React from "react";
import { graphql, Link } from "gatsby";
import city from "./index";

export const query = graphql`
  query($id: String = " ") {
    contentfulCity(id: { eq: $id }) {
      name
      description
      location
    }
  }
`;

export default function City({ data }) {
  return (
    <div>
      <h1> {data.contentfulCity.name} </h1>
      <p>Check out our {data.contentfulCity.name} office </p>
      <Link to="/city">Back to Locations</Link>
    </div>
  );
}
