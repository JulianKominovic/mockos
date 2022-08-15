import { Text } from "@nextui-org/react";
import { Grid } from "@nextui-org/react";
import { Radio } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { Divider } from "@nextui-org/react";
import { Card } from "@nextui-org/react";
import React, { useContext } from "react";
import { mockPreviewContext } from "../../../actions/mockPreview/store/mockpreview.store";
import chooseMethodColor from "../../../utils/chooseMethodColor";
import { INPUTS_STYLES } from "../config/constants";
import { RADIO_BUTTONS } from "../config/FormConfig";

const MockRequest = () => {
  const { mockpreview } = useContext(mockPreviewContext);

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
            placeholder="Podés usar expresiones REGEX para los endpoints"
            width="100%"
            {...INPUTS_STYLES}
            label="Mocko URL"
            name="url"
            required
            initialValue={mockpreview?.url}
          />
        </Grid>
        <Grid>
          <Radio.Group
            label="Método"
            defaultValue={mockpreview?.method || "GET"}
            orientation="horizontal"
            name="method"
            required
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
