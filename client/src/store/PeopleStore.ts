import { makeAutoObservable, action, runInAction } from "mobx";
import { TPerson } from "./types/TPerson";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { createContext } from "react";
import { GET_PEOPLE } from "../apollo/queries";
import { TResults } from "./types/TResults";

class PeopleStore {
  constructor() {
    makeAutoObservable(this, {
      getPeople: action,
    });
  }
  readonly apolloClient = new ApolloClient({
    uri: "http://localhost:3001/",
    cache: new InMemoryCache(),
  });

  people: TPerson[] = [];
  loading: boolean = true;

  async getPeople() {
    this.loading = true;
    console.log("calling getPeople");

    this.apolloClient
      .query<TResults>({
        query: GET_PEOPLE,
      })
      .then((response) => {
        console.log("data", response);

        runInAction(() => {
          this.people = response.data.people.results;
        });
      })
      .finally(() => {
        runInAction(() => {
          this.loading = false;
        });
      });
  }
}

export const peopleStore = new PeopleStore();
export const PeopleContext = createContext<PeopleStore>(peopleStore);
