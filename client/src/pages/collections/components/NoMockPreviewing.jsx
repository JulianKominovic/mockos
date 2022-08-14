import { Text } from "@nextui-org/react";
import { Spacer } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { Image } from "@nextui-org/react";
import React, { useContext, useState } from "react";
import billyMocos from "../../../assets/images/billy-moquito.webp";
import PlusIcon from "@iconscout/react-unicons/icons/uil-plus-circle";
import { Card } from "@nextui-org/react";
import { mockPreviewContext } from "../../../actions/mockPreview/store/mockpreview.store";
import { angryModeContext } from "../../../context/angryMode.context";

const NoMockPreviewing = () => {
  const { startNewMocko } = useContext(mockPreviewContext);
  const { angryMode } = useContext(angryModeContext);

  return (
    <Card css={{ my: "$6", py: "$6", alignItems: "center" }} variant="flat">
      <Text
        h1
        css={{
          textAlign: "center",
          textGradient: "30deg, #67CF3A 0%, #048a23 100%",
        }}
      >
        Creemos un Mocko
      </Text>
      {angryMode ? null : (
        <>
          <Image
            src={billyMocos}
            alt="billy mocos"
            css={{
              borderRadius: "10px",
            }}
          />
          <Spacer y={2}></Spacer>
        </>
      )}

      <Text
        weight={"medium"}
        css={{
          textAlign: "center",
        }}
      >
        Probá creando un Mocko nuevo
        {angryMode ? null : (
          <Text weight={"light"} css={{ my: "0" }}>
            (Para incluir en la nariz de Billy)
          </Text>
        )}
      </Text>
      <Button
        color={"success"}
        flat
        icon={<PlusIcon />}
        css={{ width: "min-content" }}
        onPress={startNewMocko}
      >
        Nuevo Mockito
      </Button>
    </Card>
  );
};

export default NoMockPreviewing;
