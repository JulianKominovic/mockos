import React, { useContext, useState } from "react";
import Icon from "supercons";
import { Card, Row, Text, Button, Col } from "@nextui-org/react";
import { CollectionList } from "../../../modules/collectionsList";
import { Grid } from "@nextui-org/react";
import { Avatar } from "@nextui-org/react";
import { Tooltip } from "@nextui-org/react";
import { mockPreviewContext } from "../../../actions/mockPreview/store/mockpreview.store";
import createCollection from "../../../actions/collections/createCollection";
import { collectionsContext } from "../../../actions/collections/store/collections.store";
import deleteCollection from "../../../actions/collections/deleteCollection";
import CustomModal from "./Modal";

const Collections = () => {
  const [visible, setVisible] = useState(false);

  const { refreshCollections } = useContext(collectionsContext);
  return (
    <Card>
      <CustomModal
        title={"Crear colección"}
        visible={visible}
        setVisible={setVisible}
        onSubmit={({ new_collection }) => {
          if (new_collection)
            createCollection(new_collection)
              .then((res) => console.log(res))
              .catch((err) => console.log(err))
              .finally(() => {
                setVisible(false);
                refreshCollections();
              });
        }}
      />

      <Card.Header>
        <Grid.Container alignItems="center" justify="space-between">
          <Grid
            css={{
              display: "flex",
              alignItems: "center",
              gap: "$4",
            }}
          >
            <Avatar icon={<Icon glyph="docs" />} color="primary" />
            <Text b size={20}>
              Collections
            </Text>
          </Grid>
          <Grid
            css={{
              textAlign: "right",
            }}
          >
            <Tooltip
              color={"primary"}
              placement="right"
              content="Crear collection"
            >
              <Button
                auto
                rounded
                onClick={() => {
                  setVisible(true);
                }}
              >
                +
              </Button>
            </Tooltip>
          </Grid>
        </Grid.Container>
      </Card.Header>
      <Card.Divider />
      <Card.Body css={{ py: "0", overflowY: "scroll" }}>
        <CollectionList />
      </Card.Body>
    </Card>
  );
};

export default Collections;
