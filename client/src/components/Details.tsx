import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Divider } from "semantic-ui-react";
import { detailsContext } from "../store/DetailsStore";

export const Details = () => {
  const detailsStore = useContext(detailsContext);
  const gender = detailsStore.getActivePerson?.gender;
  const genderIconValue =
    gender === "male"
      ? "man icon"
      : gender === "female"
      ? "woman icon"
      : "question icon";

  return (
    <>
      <div className="h-screen w-full text-center">
        <h3 className="font-Prompt text-7xl sm:text-8xl mb-20 pt-20 px-4">
          {detailsStore.getActivePerson?.name}
        </h3>

        <div className="text-2xl sm:text-3xl mb-24 sm:mb-36 lg:mb-40 tracking-cust-wider">
          <i className="globe icon block" />
          <span className="block mt-4"></span>
          {detailsStore.getActivePerson?.homeworld.name}
        </div>

        <div className="grid grid-cols-1 grid-flow-col justify-items-center">
          <div className="grid grid-cols-1 md:grid-cols-3 grid-flow-row md:grid-flow-col w-2/3 md:gap-20">
            <div className="mb-14">
              <span className="font-Prompt tracking-cust-prompt-wider block uppercase">
                Gender
              </span>
              <Divider />
              <i className={`${genderIconValue} genderIcon`} />
            </div>
            <div className="mb-14">
              <span className="font-Prompt tracking-cust-prompt-wider block uppercase">
                Height
              </span>
              <Divider />
              {detailsStore.getActivePerson?.height}
            </div>
            <div className="mb-14">
              <span className="font-Prompt tracking-cust-prompt-wider block uppercase">
                Mass
              </span>
              <Divider />
              {detailsStore.getActivePerson?.mass}
            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-44">
          <Link className="hover:text-red-800" to="/"><i className="block arrow alternate circle left outline icon backIcon"></i></Link>
        </div>
      </div>
    </>
  );
};
