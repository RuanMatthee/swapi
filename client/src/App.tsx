import { observer } from "mobx-react";
import React, { useContext } from "react";
import { PeopleContext } from "./store/PeopleStore";
import {Loading} from "./components/Loading";
import { useEffect } from "react";

export const App: React.FC = observer(() => {
  const peopleStore = useContext(PeopleContext);

  useEffect(() => {
    peopleStore.getPeople();
  }, [peopleStore]);

  if (peopleStore.loading) return <Loading />
  return (
    <>
      <h1>The App</h1>
      {peopleStore.people.map((person) => {
        return <h1>{person.name}</h1>;
      })}
    </>
  );
});
