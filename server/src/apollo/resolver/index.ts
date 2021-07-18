import { queryResolvers } from "./queryResolvers";
import { personResolver } from "./personResolver";

export default {
    Query: queryResolvers,
    Person: personResolver
}