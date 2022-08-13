import React from "react";

import { Collapse, Text, Switch, Row, Col, Button } from "@nextui-org/react";
import chooseMethodColor from "../utils/chooseMethodColor";
import { Link } from "@nextui-org/react";
import { Grid } from "@nextui-org/react";
import { Tooltip } from "@nextui-org/react";
import Icon from "supercons";

const CollectionItem = ({ name, url, method, activated, description }) => {
  const colorVariant = chooseMethodColor(method);
  const chooseItemName = name || url;
  const sliceItemName = chooseItemName?.slice(0, 14);
  return (
    <Grid.Container align="center" justify="flex-start" wrap="nowrap">
      <Grid>
        {" "}
        <Switch
          animated
          size={"xl"}
          checked={activated}
          bordered
          color={colorVariant}
        />
      </Grid>
      <Grid css={{ width: "100%" }}>
        <Tooltip
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
            className="w-100__button__inner-div"
            color={colorVariant}
            flat
            css={{ justifyContent: "flex-end", width: "100%" }}
            icon={
              <Link color={colorVariant} href="#">
                {method}
              </Link>
            }
          >
            {chooseItemName.length > 14 ? sliceItemName + "..." : sliceItemName}
          </Button>
        </Tooltip>
      </Grid>
    </Grid.Container>
  );
};

export default CollectionItem;
