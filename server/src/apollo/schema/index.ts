import { gql } from "apollo-server";

export default gql`
type Query {
        person(page: String): [Person]
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