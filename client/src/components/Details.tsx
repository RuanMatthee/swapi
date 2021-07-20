import React, { useContext } from "react";
import { detailsContext } from "../store/DetailsStore";

export const Details = () => {
  const detailsStore = useContext(detailsContext);

  return (
    <>
      <h3 className="text-7xl">{detailsStore.getActivePerson?.name}</h3>
      <div className="text-3xl">
        {detailsStore.getActivePerson?.homeworld.name}
      </div>
    </>
  );
};
