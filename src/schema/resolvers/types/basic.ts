import { IResolvers } from '@graphql-tools/utils';

const typesBasicResolvers: IResolvers = {
  Data: {
    __resolveType(obj: { name: string; isbn: string }) {
      if (obj.name) {
        return 'People';
      }

      if (obj.isbn) {
        return 'Book';
      }

      return null;
    },
  },
};

export default typesBasicResolvers;
