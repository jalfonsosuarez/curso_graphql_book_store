import { IResolvers } from '@graphql-tools/utils';
import data from '../../../data/index';

const typesPeopleResolvers: IResolvers = {
  People: {
    booksBuy: (root: { books: Array<string> }) => {
      return data.books.filter((book) => root.books.indexOf(book.id) > -1);
    },
    email: (root: { email: string }) => {
      return root.email === undefined ? '' : root.email;
    },
    website: (root: { website: string }) => {
      return root.website === undefined ? '' : `http://www.${root.website}`;
    },
    github: (root: { github: string }) => {
      return root.github === undefined
        ? ''
        : `http://www.github.com/${root.github}`;
    },
    twitter: (root: { twitter: string }) => {
      return root.twitter === undefined
        ? ''
        : `http://www.twitter.com/${root.twitter}`;
    },
  },
};

export default typesPeopleResolvers;
