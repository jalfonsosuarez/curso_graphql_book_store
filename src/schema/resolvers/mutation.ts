import { IResolvers } from '@graphql-tools/utils';
import { IBook } from '../../interfaces/book.interface';
import data from '../../data/index';

const mutationResolvers: IResolvers = {

    Mutation: {
        addBook: ( _: void, args: { book: IBook }): {
            status: boolean,
            message: string,
            item?: IBook
        } => {

            if ( data.books.filter( (value: IBook) => value.title.toLocaleLowerCase() === args.book.title.toLocaleLowerCase() ).length > 0 ) {
                return {
                    status: false,
                    message: `Ya existe un libro con el título ${args.book.title}`
                }
            } 

            if ( data.books.filter( (value: IBook) => value.isbn === args.book.isbn ).length > 0 ) {
                return {
                    status: false,
                    message: `Ya existe un libro con el ISBN ${args.book.isbn}`
                }
            } 

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