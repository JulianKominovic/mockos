import { Text } from "@nextui-org/react";
import { Grid } from "@nextui-org/react";
import { Radio } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { Divider } from "@nextui-org/react";
import { Card } from "@nextui-org/react";
import React from "react";
import chooseMethodColor from "../../../utils/chooseMethodColor";
import { INPUTS_STYLES } from "../config/constants";
import { RADIO_BUTTONS } from "../config/FormConfig";

const MockRequest = () => {
  return (
    <Card variant="bordered">
      <Card.Header>
        <Text size={20}>Request</Text>
      </Card.Header>
      <Divider></Divider>
      <Card.Body
        css={{
          gap: "20px",
        }}
      >
        <Grid
          css={{
            width: "100%",
          }}
        >
          <Input
            clearable
            shadow={false}
            placeholder="Podés usar expresiones REGEX"
            width="100%"
            labelLeft="http://"
            type={"url"}
            {...INPUTS_STYLES}
            label="Mocko URL"
            name="url"
          />
        </Grid>
        <Grid>
          <Radio.Group
            label="Método"
            defaultValue="GET"
            orientation="horizontal"
            name="method"
          >
            {RADIO_BUTTONS.map((button) => {
              const color = chooseMethodColor(button.value);
              return (
                <Radio
                  key={button.value}
                  color={color}
                  labelColor={color}
                  value={button.value}
                >
                  {button.value}
                </Radio>
              );
            })}
          </Radio.Group>
        </Grid>
      </Card.Body>
    </Card>
  );
};

export default MockRequest;
