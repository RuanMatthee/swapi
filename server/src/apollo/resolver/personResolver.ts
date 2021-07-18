import { SwapiDataSource } from "../data/swapiDataSource";
import { IHomeWorld } from "../../models/IHomeWorld";

export const personResolver = {
  homeworld: async (
    parent,
    args,
    { dataSources },
    info
  ): Promise<IHomeWorld> => {
    const swapiDataSource: SwapiDataSource = dataSources.swapiDataSource;
    const homeWorld = await swapiDataSource.getHomeWorld(parent.homeworld);

    return homeWorld;
  },
};
