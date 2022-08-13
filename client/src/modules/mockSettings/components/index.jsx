import { Spacer } from "@nextui-org/react";

import { Grid } from "@nextui-org/react";
import React, { useContext, useEffect, useState } from "react";
import { mockPreviewContext } from "../../../actions/mockPreview/store/mockpreview.store";
import billy from "../../../assets/videos/billy.mp4";
import { angryModeContext } from "../../../context/angryMode.context";
import MockMetadata from "./MockMetadata";
import MockRequest from "./MockRequest";
import MockResponse from "./MockResponse";

const MockSettingsEditor = () => {
  const { mockpreview } = useContext(mockPreviewContext);
  const { angryMode } = useContext(angryModeContext);
  const [show, setShow] = useState(true);
  useEffect(() => {
    // BECAUSE NEXT UI INPUTS COMPONENTS BUG
    // DOESNT DETECT DEFAULT VALUE CHANGES
    let id;
    const randomCondition = Math.random() < 0.04;
    setShow(false);
    if (!angryMode && randomCondition) {
      id = setTimeout(() => {
        setShow(true);
      }, 1376);
    } else {
      id = setTimeout(() => {
        setShow(true);
      }, 1);
    }

    return () => {
      clearTimeout(id);
    };
  }, [mockpreview]);
  return (
    <div>
      <Grid.Container gap={0}>
        {show ? (
          <>
            <MockMetadata />
            <MockRequest />
            <Spacer />
            <MockResponse />
          </>
        ) : angryMode ? null : (
          <video src={billy} autoPlay volume={0.2} />
        )}
        <Spacer />
      </Grid.Container>
    </div>
  );
};

export default MockSettingsEditor;
