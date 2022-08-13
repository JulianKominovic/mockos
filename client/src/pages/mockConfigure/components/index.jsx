import { Avatar } from "@nextui-org/react";
import { Text } from "@nextui-org/react";
import { Tooltip } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { Row } from "@nextui-org/react";
import { Grid } from "@nextui-org/react";
import { Card } from "@nextui-org/react";
import React from "react";
import Icon from "supercons";
import { MODULE_COLOR } from "../config/constants";
import UrlBar from "./UrlBar";
const MockConfigure = () => {
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
            <Avatar icon={<Icon glyph="compass" />} color={MODULE_COLOR} />
            <Text b size={20}>
              Mocko preview
            </Text>
          </Grid>
          <Grid
            css={{
              textAlign: "right",
            }}
          >
            <Tooltip
              color={MODULE_COLOR}
              placement="right"
              content="Crear mocko"
            >
              <Button auto rounded color={MODULE_COLOR}>
                +
              </Button>
            </Tooltip>
          </Grid>
        </Grid.Container>
      </Card.Header>
      <Card.Divider />
      <Card.Body css={{ py: "0", overflowY: "auto" }}>
        <UrlBar />
      </Card.Body>
      <Card.Divider />
      <Card.Footer>
        <Row justify="flex-end"></Row>
      </Card.Footer>
    </Card>
  );
};

export default MockConfigure;
