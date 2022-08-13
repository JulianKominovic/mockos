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
import { MockModuleConfigure } from "../../../modules/mockSettings/index";
import "../styles/reset.css";
import handleSubmit from "../logic/handleSubmit";
const MockConfigure = () => {
  return (
    <Card as="form" onSubmit={handleSubmit}>
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
        <MockModuleConfigure />
      </Card.Body>
      <Card.Divider />
      <Card.Footer>
        <Grid.Container wrap="nowrap" gap={1}>
          <Grid css={{ width: "100%" }}>
            <Button
              ghost
              css={{ width: "100%" }}
              type="clear"
              color={"error"}
              flat
            >
              Me arrepentí
            </Button>
          </Grid>
          <Grid css={{ width: "100%" }}>
            <Button
              ghost
              css={{ width: "100%" }}
              type="submit"
              color="success"
              flat
            >
              Crear Mocko
            </Button>
          </Grid>
        </Grid.Container>
      </Card.Footer>
    </Card>
  );
};

export default MockConfigure;
