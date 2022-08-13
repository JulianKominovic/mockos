import { Radio } from "@nextui-org/react";
import { Text } from "@nextui-org/react";
import { Spacer } from "@nextui-org/react";
import { Divider } from "@nextui-org/react";
import { Card } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { Input, Grid } from "@nextui-org/react";
import React, { useContext } from "react";
import { mockPreviewContext } from "../../../actions/mockPreview/store/mockpreview.store";

import chooseMethodColor from "../../../utils/chooseMethodColor";
import chooseStatusCodeColor from "../../../utils/chooseStatusCodeColor";
import { INPUTS_STYLES } from "../config/constants";
import { RADIO_BUTTONS } from "../config/FormConfig";
import useForm from "../states/useForm";
import MockMetadata from "./MockMetadata";
import MockRequest from "./MockRequest";
import MockResponse from "./MockResponse";

const MockHeaders = () => {
  return (
    <div>
      <Grid.Container gap={0}>
        <MockMetadata />
        <MockRequest />
        <Spacer />
        <MockResponse />
      </Grid.Container>
    </div>
  );
};

export default MockHeaders;
