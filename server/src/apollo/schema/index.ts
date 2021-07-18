import { gql } from "apollo-server";

export default gql`
  type Query {
    people(page: String): PeopleResponse
    searchPeople(searchTerm: String!): [Person]
  }
  type PeopleResponse {
    count: Int!
    results: [Person]
  }
  type Person {
    name: String
    height: String
    mass: String
    gender: String
    homeworld: HomeWorld
  }
  type HomeWorld {
    name: String
    climate: String
    diameter: String
  }
`;
