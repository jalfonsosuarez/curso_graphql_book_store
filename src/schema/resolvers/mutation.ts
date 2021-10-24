import { IResolvers } from '@graphql-tools/utils';
import { IBook } from '../../interfaces/book.interface';
import data from '../../data/index';

const mutationResolvers: IResolvers = {

    Mutation: {
        addBook: ( _: void, args: { book: IBook }): {
            status: boolean,
            message: string,
            item: IBook
        } => {

            const idValue = +data.books[data.books.length-1].id + 1;
            args.book.id = String( idValue );
            (data.books as IBook[]).push(args.book);
            return {
                status: true,
                message: 'Libro añadido',
                item: args.book
            };
        } 
        // updateBook( id: ID! ): Boolean
        // deleteBook( id: ID! ): Boolean        
    }

}

export default mutationResolvers;