import { SwapiDataSource } from "../data/swapiDataSource";
import { IPerson } from "../../models/IPerson";

export const queryResolvers = {
  person: async (parent, args, { dataSources }, info): Promise<IPerson[]> => {
    const swapiDataSource: SwapiDataSource = dataSources.swapiDataSource;
    const { page } = args;

    const people = await swapiDataSource.getPeople(page);
    
    return people.results;
  },
};
