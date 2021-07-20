import React, { useContext } from "react";
import { observer } from "mobx-react";
import { peopleContext } from "../store/PeopleStore";
import { PersonCard } from "./PersonCard";

export const PeopleList: React.FC = observer(() => {
  const peopleStore = useContext(peopleContext);

  return (
    <div className="grid justify-items-center w-full">
      <div
        className={`grid justify-items-center sm:grid-cols-2 grid-cols-1 gap-4 clear-both mb-16 w-full lg:w-2/3`}
      >
        {peopleStore.people.map((person, index) => {
          return <PersonCard person={person} />;
        })}
      </div>
    </div>
  );
});
