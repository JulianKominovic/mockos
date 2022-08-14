import { Text } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { Collapse } from "@nextui-org/react";
import React, { useContext, useState } from "react";
import CollectionItem from "./CollectionItem";
import Icon from "supercons";
import { Spacer } from "@nextui-org/react";
import { mockPreviewContext } from "../../../actions/mockPreview/store/mockpreview.store";
import CustomModal from "../../../pages/collections/components/Modal";
import deleteCollection from "../../../actions/collections/deleteCollection";
import { collectionsContext } from "../../../actions/collections/store/collections.store";

const CollectionGroup = ({ collections, title, rawTitle }) => {
  const { startNewMocko } = useContext(mockPreviewContext);
  const { refreshCollections } = useContext(collectionsContext);
  const [visibleDelete, setVisibleDelete] = useState(false);

  const numberOfCollections = collections?.filter(
    (item) => item.activated
  )?.length;
  return (
    <Collapse
      title={title}
      animated
      subtitle={
        <>
          <Text b>{collections?.length}</Text> mockos.{" "}
          <Text b color={numberOfCollections >= 1 ? "success" : "error"}>
            {numberOfCollections}
          </Text>{" "}
          activados.
        </>
      }
    >
      <CustomModal
        title={"¿Seguro que deseas borrar esta coleccion?"}
        visible={visibleDelete}
        setVisible={setVisibleDelete}
        submitButtonText="Eliminar"
        submitButtonVariant={"error"}
        cancelButtonVariant={"default"}
        onSubmitButton={() => {
          deleteCollection(rawTitle)
            .then((res) => console.log(res))
            .catch((err) => console.log(err))
            .finally(() => {
              setVisibleDelete(false);
              refreshCollections();
            });
        }}
      >
        <Text color="$gray600">
          {" "}
          Vas a eliminar la colección "{rawTitle}" y todos los mockos que
          contiene
        </Text>
      </CustomModal>
      {collections.map((item) => (
        <CollectionItem {...item} key={item.id} />
      ))}
      <Spacer y={collections ? 1 : 2} />
      <Button
        color={"success"}
        flat
        onPress={() => {
          startNewMocko(rawTitle);
        }}
        css={{ width: "100%" }}
        icon={<Icon glyph="plus" />}
      >
        Nuevo mocko
      </Button>
      <Spacer y={0.6} />

      <Button
        color={"error"}
        flat
        onPress={() => {
          setVisibleDelete(true);
        }}
        css={{ width: "100%" }}
        icon={<Icon glyph="minus" />}
      >
        Borrar colleción
      </Button>
    </Collapse>
  );
};

export default CollectionGroup;
