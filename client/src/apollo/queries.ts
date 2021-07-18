import { gql } from "@apollo/client";

export const GET_PEOPLE = gql`
  query GetPeople {
    people {
      count
      results {
        name
      }
    }
  }
`;
