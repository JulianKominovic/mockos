import { Text } from "@nextui-org/react";
import React, { useContext } from "react";
import { collectionsContext } from "../../../actions/collections/store/collections.store";
import CollectionGroup from "./CollectionGroup";

const CollectionList = () => {
  const { collections } = useContext(collectionsContext);
  return (
    <>
      {Object.entries(collections)?.map(([key, values]) => (
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
