import { GraphQLSchema } from 'graphql';
import { makeExecutableSchema } from '@graphql-tools/schema';

import 'graphql-import-node';
import resolvers from './resolvers';

import path from 'path';
import { loadFilesSync } from '@graphql-tools/load-files';
import { mergeTypeDefs } from '@graphql-tools/merge';

const typesArray = loadFilesSync(path.join(__dirname, './graphql'), { extensions: [ 'graphql' ] });
const typeDefs = mergeTypeDefs(typesArray);

// Construir schema ejecutable
const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

export default schema;
