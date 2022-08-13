import { Spacer } from "@nextui-org/react";

import { Grid } from "@nextui-org/react";
import React from "react";

import MockMetadata from "./MockMetadata";
import MockRequest from "./MockRequest";
import MockResponse from "./MockResponse";

const MockSettingsEditor = () => {
  return (
    <div>
      <Grid.Container gap={0}>
        <MockMetadata />
        <MockRequest />
        <Spacer />
        <MockResponse />
        <Spacer />
      </Grid.Container>
    </div>
  );
};

export default MockSettingsEditor;
