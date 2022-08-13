import React from "react";
import Icon from "supercons";
import { Card, Row, Text, Button, Col } from "@nextui-org/react";
import { CollectionList } from "../../../modules/collectionsList";
import { Grid } from "@nextui-org/react";
import { Avatar } from "@nextui-org/react";
import { Tooltip } from "@nextui-org/react";

const Collections = () => {
  return (
    <Card>
      <Card.Header>
        <Grid.Container alignItems="center" justify="space-between">
          <Grid
            css={{
              display: "flex",
              alignItems: "center",
              gap: "$4",
            }}
          >
            <Avatar icon={<Icon glyph="docs" />} color="primary" />
            <Text b size={20}>
              Collections
            </Text>
          </Grid>
          <Grid
            css={{
              textAlign: "right",
            }}
          >
            <Tooltip
              color={"primary"}
              placement="right"
              content="Crear collection"
            >
              <Button auto rounded>
                +
              </Button>
            </Tooltip>
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
