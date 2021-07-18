import React from "react";
import { ApolloError } from "@apollo/client";

export const Error: React.FC<ApolloError> = (apolloError) => {
  return (
    <>
      <h1>Error</h1>
      <div>
        <p>{apolloError.message}</p>
      </div>
    </>
  );
};
