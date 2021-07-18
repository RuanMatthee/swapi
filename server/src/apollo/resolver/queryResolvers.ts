import { SwapiDataSource } from "../data/swapiDataSource";
import { IPerson } from "../../models/IPerson";
import { IResults } from "../../models/IResults";

export const queryResolvers = {
  people: async (parent, args, { dataSources }, info): Promise<IResults> => {
    const swapiDataSource: SwapiDataSource = dataSources.swapiDataSource;
    const { page } = args;

    const people = await swapiDataSource.getPeople(page);
    return people;
  },

  searchPeople: async (parent, args, { dataSources }, info): Promise<IPerson[]> => {
    const swapiDataSource: SwapiDataSource = dataSources.swapiDataSource;
    const { searchTerm } = args;

    const searchResult = await swapiDataSource.searchPeople(searchTerm);
    return searchResult.results;
  }
};
