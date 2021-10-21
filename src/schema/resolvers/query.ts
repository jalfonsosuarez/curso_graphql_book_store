import { IPeople } from './../../interfaces/people.interface';
import { IResolvers } from '@graphql-tools/utils';
import data from '../../data';
import { IBook } from '../../interfaces/book.interface';


// Resolvers
export const queryResolvers: IResolvers = {
    Query: {
        hello: (): string => "Hola graphQL!",
        helloWithName: (
        _: void,
        args: { name: string },
        context: any,
        info: object
        ) => {
        return `Hola ${args.name}`;
        },
        peopleNumber: (): number => 143,
        bookList: ():Array<IBook> => {
            return data.books;
        },
        peopleList: ():Array<IPeople> => {
            return data.people;
        }
    },
};