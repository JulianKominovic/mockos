import { Text } from "@nextui-org/react";
import { Grid } from "@nextui-org/react";
import React from "react";
import useCollectionList from "../states/useCollectionList";
import CollectionGroup from "./CollectionGroup";

const CollectionList = () => {
  const { collection, setCollection } = useCollectionList();
  return (
    <>
      {Object.entries(collection)?.map(([key, values]) => (
        <CollectionGroup
          title={<Text size={18}>{key}</Text>}
          collections={values}
          key={key}
        />
      ))}
    </>
  );
};

export default CollectionList;
