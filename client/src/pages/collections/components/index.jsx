import React, { useContext, useState } from "react";
import Icon from "supercons";
import { Card, Row, Text, Button, Col } from "@nextui-org/react";
import { CollectionList } from "../../../modules/collectionsList";
import { Grid } from "@nextui-org/react";
import { Avatar } from "@nextui-org/react";
import { Tooltip } from "@nextui-org/react";
import { mockPreviewContext } from "../../../actions/mockPreview/store/mockpreview.store";
import createCollection from "../../../actions/collections/createCollection";
import CreationModal from "./CreationModal";
import { collectionsContext } from "../../../actions/collections/store/collections.store";

const Collections = () => {
  const [visible, setVisible] = useState(false);
  const { refreshCollections } = useContext(collectionsContext);
  return (
    <Card>
      <CreationModal
        visible={visible}
        setVisible={setVisible}
        onSubmit={(value) => {
          if (value)
            createCollection(value)
              .then((res) => console.log(res))
              .catch((err) => console.log(err))
              .finally(() => refreshCollections());
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
