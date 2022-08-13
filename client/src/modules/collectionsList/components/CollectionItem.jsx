import React from "react";

import { Collapse, Text, Switch, Row, Col, Button } from "@nextui-org/react";
import chooseMethodColor from "../../../utils/chooseMethodColor";
import { Link } from "@nextui-org/react";
import { Grid } from "@nextui-org/react";
import { Tooltip } from "@nextui-org/react";
import "../styles/reset.css";

const CollectionItem = ({ name, url, method, activated, description }) => {
  const colorVariant = chooseMethodColor(method);
  const chooseItemName = name || url;
  const sliceItemName = chooseItemName?.slice(0, 20);
  return (
    <Grid.Container align="center" justify="flex-start" wrap="nowrap">
      <Grid>
        <Switch
          animated
          size={"lg"}
          checked={activated}
          bordered
          color={colorVariant}
        />
      </Grid>
      <Grid css={{ width: "100%", marginInlineStart: "$10" }}>
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
            color={colorVariant}
            flat
            css={{ justifyContent: "flex-end", width: "100%" }}
            icon={
              <Link color={colorVariant} href="#">
                {method}
              </Link>
            }
          >
            {chooseItemName.length > 20 ? sliceItemName + "..." : sliceItemName}
          </Button>
        </Tooltip>
      </Grid>
    </Grid.Container>
  );
};

export default CollectionItem;
