import { makeAutoObservable, action, computed } from "mobx";
import { TPerson } from "./types/TPerson";
import { createContext } from "react";

class DetailsStore {
  constructor() {
    makeAutoObservable(this, {
      setActivePerson: action,
      getActivePerson: computed,
      detailsLink: computed,
    });
  }

  private activePerson?: TPerson;

  setActivePerson(person: TPerson) {
    this.activePerson = person;
  }

  get detailsLink() {
    return "/details";
  }

  get getActivePerson() {
    return this.activePerson;
  }
}

export const detailsStore = new DetailsStore();
export const detailsContext = createContext<DetailsStore>(detailsStore);
