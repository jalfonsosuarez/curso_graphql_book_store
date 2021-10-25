import { IResolvers } from '@graphql-tools/utils';
import data from '../../../data';
import { IBook } from '../../../interfaces/book.interface';

// Resolvers
const queryBookResolvers: IResolvers = {
    Query: {
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
    },
};

export default queryBookResolvers;