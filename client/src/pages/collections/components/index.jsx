import React from "react";

import { Card, Row, Text, Button, Col } from "@nextui-org/react";
import { CollectionList } from "../../../modules/collectionsList";
import { Grid } from "@nextui-org/react";

const Collections = () => {
  return (
    <Card>
      <Card.Header>
        <Grid.Container alignItems="center" justify="space-between">
          <Grid>
            <Text b size={20}>
              Collections
            </Text>
          </Grid>
          <Grid
            css={{
              textAlign: "right",
            }}
          >
            <Button auto rounded>
              +
            </Button>
          </Grid>
        </Grid.Container>
      </Card.Header>
      <Card.Divider />
      <Card.Body css={{ py: "0", overflowY: "auto" }}>
        <CollectionList />
      </Card.Body>
      <Card.Divider />
      <Card.Footer>
        <Row justify="flex-end"></Row>
      </Card.Footer>
    </Card>
  );
};

export default Collections;
