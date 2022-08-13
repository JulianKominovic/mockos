import { Text } from "@nextui-org/react";
import { Grid } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";
import { Spacer } from "@nextui-org/react";
import { Radio } from "@nextui-org/react";
import { Code } from "@nextui-org/react";
import { Divider } from "@nextui-org/react";
import { Card } from "@nextui-org/react";
import React, { useContext } from "react";
import { mockPreviewContext } from "../../../actions/mockPreview/store/mockpreview.store";
import chooseStatusCodeColor from "../../../utils/chooseStatusCodeColor";
import { CodeEditor } from "../../codeEditor";
import useForm from "../states/useForm";

const MockResponse = () => {
  const {
    statuses,

    setResponseType,
  } = useForm();
  const { mockpreview } = useContext(mockPreviewContext);

  return (
    <Card variant="bordered">
      <Card.Header>
        <Text size={20}>Response</Text>
      </Card.Header>
      <Divider></Divider>
      <Card.Body>
        <Grid.Container wrap="nowrap">
          <Grid css={{ width: "100%" }}>
            {/* <Textarea
              {...INPUTS_STYLES}
              {...responseBodybindings}
              color={responseBodyStyles.color}
              status={responseBodyStyles.status}
              helperColor={responseBodyStyles.helperColor}
              helperText={responseBodyStyles.helperText}
              placeholder="Description"
              css={{ width: "100%" }}
              label="Response body"
            /> */}

            <Radio.Group
              label="Response type"
              defaultValue={mockpreview?.response?.responseType || "JSON"}
              onChange={setResponseType}
              orientation="horizontal"
              name="response_type"
            >
              {["JSON", "TEXT"].map((type) => {
                return (
                  <Radio value={type} key={type}>
                    {type}
                  </Radio>
                );
              })}
            </Radio.Group>
            <Spacer />

            <Radio.Group
              label="Status"
              defaultValue={+mockpreview?.response?.statusCode || 200}
              aria-required="true"
              name="response_status"
              required
            >
              {statuses.map((statusCode) => {
                const color = chooseStatusCodeColor(statusCode.code);
                return (
                  <Radio
                    key={statusCode.code}
                    value={statusCode.code}
                    description={statusCode.short}
                    labelColor={color}
                    color={color}
                  >
                    {statusCode.code}
                  </Radio>
                );
              })}
            </Radio.Group>
            <Spacer />
            <Spacer />
            <CodeEditor initialValue={mockpreview?.response?.body} />
          </Grid>
        </Grid.Container>
      </Card.Body>
    </Card>
  );
};

export default MockResponse;
