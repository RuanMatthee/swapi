import { RESTDataSource } from "apollo-datasource-rest";
import { REST_API_BASE_URLS } from "../../config";
import { IHomeWorld } from "../../models/IHomeWorld";
import { IResults } from "../../models/IResults";

export class SwapiDataSource extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = REST_API_BASE_URLS.SWAPI
    }

    async getPeople(pageNumber?: string): Promise<IResults> {
        const getPeopleUrl = pageNumber? `/people/?page=${pageNumber}` : `/people`;
        
        const people = await this.get<IResults>(getPeopleUrl);
        return people;
    }

    async getHomeWorld(url: string): Promise<IHomeWorld> {
        const homeWorld = await this.get<IHomeWorld>(url);
        return homeWorld;
    }
}