import { Row, Col, Text } from "@nextui-org/react";
import { Spacer } from "@nextui-org/react";
import { Container } from "@nextui-org/react";
import React from "react";

const Header = () => {
  return (
    <Container
      responsive
      alignItems="center"
      display="flex"
      css={{
        backdropFilter: "blur(10px)",
        bgBlur: true,
        bgColor: "$black",
        height: "60px",
      }}
    >
      <Row>
        <Col>
          <Text
            css={{
              display: "inline",
              marginInlineEnd: "$6",
            }}
            h4
          >
            Mockos
          </Text>
          <Text
            css={{
              display: "inline",
            }}
            weight={"light"}
          >
            UI friendly mocking server
          </Text>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default Header;
