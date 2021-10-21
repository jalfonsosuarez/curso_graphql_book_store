import { GraphQLSchema } from "graphql";
import { makeExecutableSchema } from "@graphql-tools/schema";

import 'graphql-import-node';
import typeDefs from './schema.graphql';
import resolvers from './resolvers';

// Construir schema ejecutable
const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

export default schema;
