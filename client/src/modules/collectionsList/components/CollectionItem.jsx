import React, { useContext } from "react";

import { Collapse, Text, Switch, Row, Col, Button } from "@nextui-org/react";
import chooseMethodColor from "../../../utils/chooseMethodColor";
import { Link } from "@nextui-org/react";
import { Grid } from "@nextui-org/react";
import { Tooltip } from "@nextui-org/react";
import "../styles/reset.css";
import { mockPreviewContext } from "../../../actions/mockPreview/store/mockpreview.store";
import refreshActivationStatus from "../../../actions/mocks/refreshActivationStatus";

const CollectionItem = (mock) => {
  const { id, name, url, method, activated, description } = mock;
  const { setNewMockPreview } = useContext(mockPreviewContext);

  const colorVariant = chooseMethodColor(method);
  const chooseItemName = name || url || id;
  const sliceItemName = chooseItemName?.slice(0, 16);
  return (
    <Grid.Container align="center" justify="flex-start" wrap="nowrap">
      <Grid>
        <Switch
          onChange={(e) => {
            refreshActivationStatus(mock, e.target.checked)
              .then(() => console.log("OK"))
              .catch((err) => console.log(err));
          }}
          animated
          size={"lg"}
          checked={activated}
          bordered
          color={colorVariant}
        />
      </Grid>
      <Grid css={{ width: "100%", marginInlineStart: "$10" }}>
        {description ? (
          <Tooltip
            className="w-100__button__inner-div"
            content={
              <>
                <Text>{description}</Text>
              </>
            }
            shadow
            placement="right"
            rounded
            color={colorVariant}
            hideArrow
          >
            <Button
              onPress={() => setNewMockPreview(mock)}
              color={colorVariant}
              flat
              css={{ justifyContent: "flex-end", width: "100%" }}
              icon={
                <Link color={colorVariant} href="#">
                  {method}
                </Link>
              }
            >
              {chooseItemName?.length > 20
                ? sliceItemName + "..."
                : sliceItemName}
            </Button>
          </Tooltip>
        ) : (
          <Button
            onPress={() => setNewMockPreview(mock)}
            color={colorVariant}
            flat
            css={{ justifyContent: "flex-end", width: "100%" }}
            icon={
              <Link color={colorVariant} href="#">
                {method}
              </Link>
            }
          >
            {chooseItemName?.length > 16
              ? sliceItemName + "..."
              : sliceItemName}
          </Button>
        )}
      </Grid>
    </Grid.Container>
  );
};

export default CollectionItem;
