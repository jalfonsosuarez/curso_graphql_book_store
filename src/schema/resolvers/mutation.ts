import { IResolvers } from '@graphql-tools/utils';
import { IBook } from '../../interfaces/book.interface';
import { IPeople } from '../../interfaces/people.interface';
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
        },

        updateBook: ( _: void, args: { book: IBook }): {
            status: boolean,
            message: string,
            item?: IBook
        } => {

            if ( data.books.filter( (value: IBook) => value.id === args.book.id ).length === 0 ) {
                return {
                    status: false,
                    message: `No existe un libro con el id ${args.book.id}`
                }
            } 
            
            for( let i = 0; i < data.books.length; i++ ) {
                if ( data.books[i].id === args.book.id ) {
                    (data.books[i] as IBook) = args.book;
                    break;
                }
            }
            return {
                status: true,
                message: 'Libro actualizado',
                item: args.book
            };
        },
        
        deleteBook: ( _:void, args: { id: string } ): {
            status: boolean,
            message: string
        } => {

            if ( data.books.filter( (value: IBook) => value.id === args.id ).length === 0 ) {
                return {
                    status: false,
                    message: `No existe un libro con el id ${args.id}`
                }
            } 
            
            let deleteItem = false;
            for( let i = 0; i < data.books.length; i++ ) {
                if ( data.books[i].id === args.id ) {
                    data.books.splice(i, 1);
                    deleteItem = true;
                    break;
                }
            }
            return {
                status: deleteItem,
                message: deleteItem ? 'Libro eliminado' : 'Libro no eliminado',
            };
        },

        addPeople: ( _: void, args: { people: IPeople }): {
            status: boolean,
            message: string,
            item?: IPeople
        } => {

            if ( data.people.filter( (value: IPeople) => value.name.toLocaleLowerCase() === args.people.name.toLocaleLowerCase() ).length > 0 ) {
                return {
                    status: false,
                    message: `Ya existe un persona con el nombre ${args.people.name}`
                }
            } 

            const idValue = +data.people[data.people.length-1].id + 1;
            args.people.id = String( idValue );
            (data.people as IPeople[]).push(args.people);
            return {
                status: true,
                message: 'Persona añadido',
                item: args.people
            };
        },

        updatePeople: ( _: void, args: { people: IPeople }): {
            status: boolean,
            message: string,
            item?: IPeople
        } => {

            if ( data.people.filter( (value: IPeople) => value.id === args.people.id ).length === 0 ) {
                return {
                    status: false,
                    message: `No existe una persona con el id ${args.people.id}`
                }
            } 
            
            for( let i = 0; i < data.people.length; i++ ) {
                if ( data.people[i].id === args.people.id ) {
                    (data.people[i] as IPeople) = args.people;
                    break;
                }
            }
            return {
                status: true,
                message: 'Persona actualizada',
                item: args.people
            };
        },

        deletePeople: ( _:void, args: { id: string } ): {
            status: boolean,
            message: string
        } => {

            if ( data.people.filter( (value: IPeople) => value.id === args.id ).length === 0 ) {
                return {
                    status: false,
                    message: `No existe una persona con el id ${args.id}`
                }
            } 
            
            let deleteItem = false;
            for( let i = 0; i < data.people.length; i++ ) {
                if ( data.people[i].id === args.id ) {
                    data.people.splice(i, 1);
                    deleteItem = true;
                    break;
                }
            }
            return {
                status: deleteItem,
                message: deleteItem ? 'Persona eliminada' : 'Persona no eliminada',
            };
        },
    }

}

export default mutationResolvers;