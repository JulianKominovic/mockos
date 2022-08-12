import React from "react";

import { Collapse, Text, Switch, Row, Col, Button } from "@nextui-org/react";
import chooseMethodColor from "../logic/chooseMethodColor";

const CollectionItem = ({ name, url, method, activated }) => {
  const colorVariant = chooseMethodColor(method);
  return (
    <Row justify="center" align="center">
      <Col
        css={{
          textAlign: "center",
        }}
      >
        <Button auto rounded disabled={!method} color={colorVariant} light>
          {method}
        </Button>
      </Col>
      <Col
        css={{
          textAlign: "left",
          overflow: "hidden",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
        }}
      >
        {name || url}
      </Col>
      <Col
        css={{
          textAlign: "center",
        }}
      >
        <Switch animated checked={activated} bordered color={colorVariant} />
      </Col>
    </Row>
  );
};

export default CollectionItem;
