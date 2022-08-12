import { Collapse } from "@nextui-org/react";
import React from "react";
import CollectionItem from "./CollectionItem";

const CollectionGroup = ({ collections, title }) => {
  return (
    <Collapse title={title} divider={false} animated>
      {collections.map((item) => (
        <CollectionItem {...item} key={item.id} />
      ))}
    </Collapse>
  );
};

export default CollectionGroup;
