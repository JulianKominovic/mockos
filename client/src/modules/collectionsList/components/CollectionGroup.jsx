import React from "react";
import CollectionItem from "./CollectionItem";

const CollectionGroup = ({ collections }) => {
  return (
    <Collapse.Group>
      {collections.map((item) => (
        <CollectionItem {...item} />
      ))}
    </Collapse.Group>
  );
};

export default CollectionGroup;
