import { Grid } from "@nextui-org/react";
import { Text } from "@nextui-org/react";
import { Avatar } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { Card } from "@nextui-org/react";
import React from "react";
import Icon from "supercons";
import deleteLogs from "../../../actions/logs/deleteLogs";
import { LogsList } from "../../../modules/logsList";

const Logs = ({ mockId }) => {
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
            <Avatar icon={<Icon glyph="event-code" />} color="warning" />
            <Text b size={20}>
              Logs
            </Text>
          </Grid>
          <Grid>
            <Button
              onPress={() =>
                deleteLogs()
                  .then((res) => console.log(res))
                  .catch((err) => console.log(err))
              }
              color={"error"}
              auto
              rounded
            >
              <Icon glyph="delete" />
            </Button>
          </Grid>
        </Grid.Container>
      </Card.Header>
      <Card.Divider />
      <Card.Body css={{ py: "0", overflowY: "scroll" }}>
        <LogsList mockId={mockId} />
      </Card.Body>
    </Card>
  );
};

export default Logs;
