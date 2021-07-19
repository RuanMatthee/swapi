import React, { useContext } from "react";
import { Card, Icon } from "semantic-ui-react";
import { detailsContext } from "../store/DetailsStore";

export const Details = () => {
  const detailsStore = useContext(detailsContext);
  
  return (
    <>
      <Card>
        <Card.Content header={detailsStore.getActivePerson?.name} />
        <Card.Content description="" />
        <Card.Content extra>
          <Icon name="user" />4 Friends
        </Card.Content>
      </Card>
    </>
  );
};
