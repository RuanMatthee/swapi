import { ApolloServer } from "apollo-server";
import typeDefs from "./src/apollo/schema";
import resolvers from "./src/apollo/resolver";
import { dataSources } from "./src/apollo/data/index";
import { APOLLO_PORT } from "./src/config";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources
});

server.listen(APOLLO_PORT).then(({ url }) => {
  console.log("Apollo is listening on: ", url);
});
