import React, { useContext } from "react";
import { Card } from "semantic-ui-react";
import { TPerson } from "../store/types/TPerson";
import { detailsContext } from "../store/DetailsStore";
import { Link } from "react-router-dom";

interface IPersonCardProps {
  person: TPerson;
}
export const PersonCard: React.FC<IPersonCardProps> = ({ person }) => {
  const detailsStore = useContext(detailsContext);

  return (
    <Card
      onClick={() => {
        detailsStore.setActivePerson(person);
      }}
      color="violet"
      as="div"
      className="margin"
    >
      <Card.Header>
        <Link to={detailsStore.detailsLink}>{person.name}</Link>
      </Card.Header>
      <Card.Content extra>{person.homeworld.name}</Card.Content>
    </Card>
  );
};
