import React, { useContext } from "react";
import { TPerson } from "../store/types/TPerson";
import { detailsContext } from "../store/DetailsStore";
import { Link } from "react-router-dom";
import { Divider } from "semantic-ui-react";

interface IPersonCardProps {
  person: TPerson;
}
export const PersonCard: React.FC<IPersonCardProps> = ({ person }) => {
  const detailsStore = useContext(detailsContext);

  return (
    <Link
      className="justify-self-center w-10/12 text-center mb-20 mt-10 shadow-cust-blue p-10 rounded
      hover:text-red-800"
      onClick={() => detailsStore.setActivePerson(person)}
      to={detailsStore.detailsLink}
    >
      <div className="text-center">
        <div className="mb-6">
          <i
            style={{ fontSize: "1.85em" }}
            className="user outline icon"
          ></i>
        </div>
        <div className="text-2xl sm:text-lg font-mono mt-4">{person.name}</div>
        <Divider />
        <div className="tracking-cust-wider">{person.homeworld.name}</div>
      </div>
    </Link>
  );
};
