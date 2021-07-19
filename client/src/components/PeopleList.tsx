import React, { useContext } from "react";
import { observer } from "mobx-react";
import { peopleContext } from "../store/PeopleStore";
import { PersonCard } from "./PersonCard";

export const PeopleList: React.FC = observer(() => {
  const peopleStore = useContext(peopleContext);

  return (
    // <div className={`flex items-center justify-center grid grid-rows-${peopleStore.people.length / 2} grid-flow-col gap-4 mb-16`}>
    <div className="grid justify-items-center w-full">
      <div
        className={`grid justify-items-center grid-cols-2 gap-4 clear-both mb-16 w-1/2`}
      >
        {peopleStore.people.map((person, index) => {
          return <PersonCard person={person} />;
        })}
      </div>
    </div>
  );
});
