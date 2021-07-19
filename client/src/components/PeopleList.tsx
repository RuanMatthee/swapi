import React, { useContext } from "react";
import { observer } from "mobx-react";
import { peopleContext } from "../store/PeopleStore";
import { PersonCard } from "./PersonCard";
import { Grid } from "semantic-ui-react";

export const PeopleList: React.FC = observer(() => {
  const peopleStore = useContext(peopleContext);

  return (
    <Grid columns={2} divided>
      <Grid.Row>
        {peopleStore.people.map((person, index) => {
          return <PersonCard person={person} />;
        })}
      </Grid.Row>
    </Grid>
  );
});
