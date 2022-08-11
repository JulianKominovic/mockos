import React from "react";
import useCollectionList from "../states/useCollectionList";
import CollectionGroup from "./CollectionGroup";

const CollectionList = () => {
  const { collection, setCollection } = useCollectionList();
  return (
    <div>
      {collection.map((item) => (
        <CollectionGroup collections={item} />
      ))}
    </div>
  );
};

export default CollectionList;
