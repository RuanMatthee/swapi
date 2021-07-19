import { gql } from "@apollo/client";

export const GET_PEOPLE = gql`
  query GetPeople($pageNumber: String) {
    people(page: $pageNumber) {
      count
      results {
        name
        height
        mass
        gender
        homeworld {
          name
        }
      }
    }
  }
`;
