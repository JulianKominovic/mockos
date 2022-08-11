import React from "react";

import { Container, Card, Row, Text } from "@nextui-org/react";
import { CollectionList } from "../../../modules/collectionsList";

const Collections = () => {
  return (
    <Container>
      <CollectionList />
    </Container>
  );
};

export default Collections;
