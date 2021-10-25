import { IResolvers } from '@graphql-tools/utils';
import data from '../../../data';
import { IPeople } from '../../../interfaces/people.interface';

// Resolvers
const queryPepopleResolvers: IResolvers = {
    Query: {
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

export default queryPepopleResolvers;