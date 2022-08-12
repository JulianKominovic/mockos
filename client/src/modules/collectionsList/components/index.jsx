import { Text } from "@nextui-org/react";
import { Grid } from "@nextui-org/react";
import React from "react";
import useCollectionList from "../states/useCollectionList";
import CollectionGroup from "./CollectionGroup";

const CollectionList = () => {
  const { collection, setCollection } = useCollectionList();
  return (
    <Grid.Container>
      <Grid
        css={{
          width: "100%",
        }}
      >
        {Object.entries(collection)?.map(([key, values]) => (
          <CollectionGroup
            title={<Text size={18}>{key}</Text>}
            collections={values}
            key={key}
          />
        ))}
      </Grid>
    </Grid.Container>
  );
};

export default CollectionList;
