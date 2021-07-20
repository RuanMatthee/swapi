import React from "react";
import { Dimmer, Loader, Segment } from "semantic-ui-react";

const sayings = [
  "“Try not. Do or do not. There is no try.”",
  "“Your eyes can deceive you; don’t trust them.”",
  "“No longer certain that one ever does win a war, I am.”",
  "“The ability to speak does not make you intelligent.”",
  "“Sorry lady. I don’t understand frog.”"
];

export const Loading = () => (
  <div className="w-full h-screen grid justify-items-center grid-cols-1">
    <Segment className="h-1/2 w-1/3">
      <Dimmer active>
        <Loader>{sayings[Math.floor(Math.random() * 4)]}</Loader>
      </Dimmer>
    </Segment>
  </div>
);
