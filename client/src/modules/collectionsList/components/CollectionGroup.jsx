import { Text } from "@nextui-org/react";
import { Collapse } from "@nextui-org/react";
import React from "react";
import CollectionItem from "./CollectionItem";

const CollectionGroup = ({ collections, title }) => {
  const numberOfCollections = collections?.filter(
    (item) => item.activated
  )?.length;
  return (
    <Collapse
      title={title}
      animated
      subtitle={
        <>
          <Text b>{collections?.length}</Text> mockos.{" "}
          <Text b color={numberOfCollections >= 1 ? "success" : "error"}>
            {numberOfCollections}
          </Text>{" "}
          activados.
        </>
      }
    >
      {collections.map((item) => (
        <CollectionItem {...item} key={item.id} />
      ))}
    </Collapse>
  );
};

export default CollectionGroup;
