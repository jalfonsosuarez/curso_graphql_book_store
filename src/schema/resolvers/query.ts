import { IPeople } from './../../interfaces/people.interface';
import { IResolvers } from '@graphql-tools/utils';
import data from '../../data';
import { IBook } from '../../interfaces/book.interface';


// Resolvers
export const queryResolvers: IResolvers = {
    Query: {
        hello: (): string => 'Hola graphQL!',
        helloWithName: (
        _: void,
        args: { name: string },
        context: unknown,
        info: unknown
        ) => {
        return `Hola ${args.name}`;
        },
        peopleNumber: (): number => 143,

        bookList: (): {
            status: boolean,
            message: string,
            list: Array<IBook>
        } => {
            return {
                status: true,
                message: 'Lista de todos los libros',
                list: data.books
            };
        },

        book: ( _: void, args: { id: string } ): {
            status: boolean,
            message: string,
            item: IBook
        } => {
            const bookFind: IBook = data.books.filter( (value: IBook) => value.id === args.id )[0];
            return {
                status: bookFind === undefined ? false : true,
                message: bookFind === undefined ? 'Libro no encontrado' : 'Libro encontrado',
                item: bookFind
            };
        },

        peopleList: (): {
            status: boolean,
            message: string,
            list: Array<IPeople>
        } => {
            return {
                status: true,
                message: 'Lista de todas las personas',
                list: data.people
            };
        },

        people: ( _: void, args: { id: string } ): {
            status: boolean,
            message: string,
            item: IPeople
        } => {
            const peopleFind: IPeople = data.people.filter( (value: IPeople) => value.id === args.id )[0];
            return {
                status: peopleFind === undefined ? false : true,
                message: peopleFind === undefined ? 'Persona no encontrada' : 'Persona encontrada',
                item: peopleFind
            
            };
        }
    },
};