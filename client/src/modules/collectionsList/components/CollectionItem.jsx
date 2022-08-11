import React from "react";

import { Collapse, Text } from "@nextui-org/react";

const CollectionItem = ({ title, subtitle }) => {
  return (
    <Collapse title={title} subtitle={subtitle}>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </Text>
    </Collapse>
  );
};

export default CollectionItem;
