import { Avatar } from "@nextui-org/react";
import { Text } from "@nextui-org/react";
import { Tooltip } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { Grid } from "@nextui-org/react";
import { Card } from "@nextui-org/react";
import React, { useContext, useEffect } from "react";
import Icon from "supercons";
import { MODULE_COLOR } from "../config/constants";
import { MockSettingsEditor } from "../../../modules/mockSettings";
import "../styles/reset.css";
import { mockPreviewContext } from "../../../actions/mockPreview/store/mockpreview.store";
import { Image } from "@nextui-org/react";

import NoMockPreviewing from "../../collections/components/NoMockPreviewing";
import useHandleSubmit from "../logic/useHandleSubmit";

const MockConfigure = () => {
  const { startNewMocko, isMockEditorActive, cancelNewMocko } =
    useContext(mockPreviewContext);
  const { search } = useHandleSubmit();

  return (
    <Card as="form" onSubmit={search}>
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
              <Button auto rounded color={MODULE_COLOR} onPress={startNewMocko}>
                +
              </Button>
            </Tooltip>
          </Grid>
        </Grid.Container>
      </Card.Header>
      <Card.Divider />
      <Card.Body css={{ py: "0", overflowY: "auto" }}>
        {isMockEditorActive ? <MockSettingsEditor /> : <NoMockPreviewing />}
      </Card.Body>
      <Card.Divider />
      <Card.Footer css={{ py: "$10" }}>
        <Grid.Container wrap="nowrap" gap={1}>
          <Grid css={{ width: "100%" }}>
            {isMockEditorActive ? (
              <Button
                ghost
                css={{ width: "100%" }}
                type="submit"
                color="success"
                flat
              >
                Crear Mocko
              </Button>
            ) : null}
          </Grid>
          <Grid css={{ width: "100%" }}>
            {isMockEditorActive ? (
              <Button
                ghost
                css={{ width: "100%" }}
                type="clear"
                color={"error"}
                flat
                onPress={cancelNewMocko}
              >
                Me arrepentí
              </Button>
            ) : null}
          </Grid>
        </Grid.Container>
      </Card.Footer>
    </Card>
  );
};

export default MockConfigure;
