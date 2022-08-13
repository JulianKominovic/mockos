import { Input } from "@nextui-org/react";
import { Spacer } from "@nextui-org/react";
import React, { useContext } from "react";
import { mockPreviewContext } from "../../../actions/mockPreview/store/mockpreview.store";
import { INPUTS_STYLES } from "../config/constants";

const MockMetadata = () => {
  const { mockPreview } = useContext(mockPreviewContext);
  return (
    <>
      <Spacer />
      <input readOnly hidden name="id" value={mockPreview?.id || ""} />

      <Input
        {...INPUTS_STYLES}
        name="name"
        initialValue={mockPreview?.name}
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
        initialValue={mockPreview?.description}
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
        initialValue={mockPreview?.collection}
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
