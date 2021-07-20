import { makeAutoObservable, action, runInAction } from "mobx";
import { TPerson } from "./types/TPerson";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { createContext } from "react";
import { GET_PEOPLE } from "../apollo/queries";
import { TResults } from "./types/TResults";

class PeopleStore {
  constructor() {
    makeAutoObservable(this, {
      getPeople: action
    });
  }
  readonly apolloClient = new ApolloClient({
    uri: "https://tfymi.sse.codesandbox.io/",
    cache: new InMemoryCache(),
  });

  private paginationSize: number = 10;
  people: TPerson[] = [];
  loading: boolean = true;
  pages: number = 0;
  showPersonModal: boolean = false;

  async getPeople(pageNumber?: string) {
    this.loading = true;

    const queryOptions = pageNumber
      ? {
          query: GET_PEOPLE,
          variables: { pageNumber: pageNumber },
        }
      : { query: GET_PEOPLE };

    console.log("queryOptions", queryOptions);

    this.apolloClient
      .query<TResults>(queryOptions)
      .then((response) => {
        console.log("data", response);

        runInAction(() => {
          this.people = response.data.people.results;
          this.pages = Math.ceil(
            response.data.people.count / this.paginationSize
          );
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
export const peopleContext = createContext<PeopleStore>(peopleStore);
