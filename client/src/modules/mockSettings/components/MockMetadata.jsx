import { Input } from "@nextui-org/react";
import { Spacer } from "@nextui-org/react";
import React, { useContext, useEffect } from "react";
import { mockPreviewContext } from "../../../actions/mockPreview/store/mockpreview.store";
import { INPUTS_STYLES } from "../config/constants";

const MockMetadata = () => {
  const { mockpreview } = useContext(mockPreviewContext);
  return (
    <>
      <Spacer />
      <input readOnly hidden name="id" value={mockpreview?.id || ""} />

      <Input
        {...INPUTS_STYLES}
        name="name"
        initialValue={mockpreview?.name}
        css={{
          width: "100%",
          fontSize: "$xl4",
        }}
        labelLeft="Titulo"
        size={"xl"}
        required
      />
      <Spacer />
      <Input
        {...INPUTS_STYLES}
        initialValue={mockpreview?.description}
        name="description"
        css={{
          width: "100%",
          fontSize: "$xl4",
        }}
        labelLeft="Descripcion"
        size={"xl"}
      />
      <Spacer />
      <Input
        {...INPUTS_STYLES}
        initialValue={mockpreview?.collection}
        name="collection"
        css={{
          width: "100%",
          fontSize: "$xl4",
        }}
        labelLeft="Colección"
        size={"xl"}
      />
      <Spacer />
    </>
  );
};

export default MockMetadata;
