import { SwapiDataSource } from "./swapiDataSource";
import { TDataSources } from "./types/TDataSources";

export const dataSources = (): TDataSources => ({
  swapiDataSource: new SwapiDataSource(),
});
