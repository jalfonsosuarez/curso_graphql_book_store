import { IResolvers } from "@graphql-tools/utils";
import { rootCertificates } from "tls";
import data from "../../data";

const typesResolvers: IResolvers = {
  Data: {
    __resolveType(obj: { name: string; isbn: string }) {
      if (obj.name) {
        return "People";
      }

      if (obj.isbn) {
        return "Book";
      }

      return null;
    },
  },

  People: {
    booksBuy: (root: { books: Array<string> }) => {
      return data.books.filter((book) => root.books.indexOf(book.id) > -1);
    },
    email: (root: { email: string }) => {
      return root.email === undefined ? "" : root.email;
    },
    website: (root: { website: string }) => {
      return root.website === undefined ? "" : `http://www.${root.website}`;
    },
    github: (root: { github: string }) => {
      return root.github === undefined
        ? ""
        : `http://www.github.com/${root.github}`;
    },
    twitter: (root: { twitter: string }) => {
      return root.twitter === undefined
        ? ""
        : `http://www.twitter.com/${root.twitter}`;
    },
  },

  Book: {
    byPeopleBuy: (root: { id: string }) => {
      return data.people.filter((people) => people.books.indexOf(root.id) > -1);
    },
    publishedDate: (root: { publishedDate: string }) => {
      return root.publishedDate === undefined ? "?" : root.publishedDate;
    },
    thumbnailUrl: (root: { thumbnailUrl: string }) => {
      return root.thumbnailUrl === undefined ? "-" : root.thumbnailUrl;
    },
    shortDescription: (root: { shortDescription: string }) => {
      return root.shortDescription === undefined ? "-" : root.shortDescription;
    },
    longDescription: (root: { longDescription: string }) => {
      return root.longDescription === undefined ? "-" : root.longDescription;
    },
  },
};

export default typesResolvers;
