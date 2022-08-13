import { Row, Col, Text } from "@nextui-org/react";
import { Dropdown } from "@nextui-org/react";
import { Switch } from "@nextui-org/react";
import { Divider } from "@nextui-org/react";
import { Grid } from "@nextui-org/react";
import { Container } from "@nextui-org/react";

import React, { useContext } from "react";
import Icon from "supercons";
import { angryModeContext } from "../../../context/angryMode.context";

const Header = () => {
  const { toggleAngryMode, angryMode } = useContext(angryModeContext);

  return (
    <Grid.Container
      alignItems="center"
      display="flex"
      css={{
        backdropFilter: "blur(10px)",
        bgBlur: true,
        bgColor: "$black",
        height: "60px",
        width: "100%",
        margin: "0!important",
        maxWidth: "unset",
        px: "$10",
      }}
      gap={1}
      justify="space-between"
    >
      <Grid>
        <Row>
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
        </Row>
      </Grid>
      <Grid>
        <Dropdown placement="bottom-right">
          <Dropdown.Button color="secondary" flat>
            <Icon glyph="settings" />
          </Dropdown.Button>
          <Dropdown.Menu
            color="secondary"
            onAction={(key) => {
              switch (key) {
                case "angry-mode":
                  toggleAngryMode();
                  break;

                default:
                  break;
              }
            }}
          >
            <Dropdown.Section title="Ajustes">
              <Dropdown.Item
                color="secondary"
                key="dark-mode"
                description="Habilitar/deshabilitar modo oscuro."
                icon={<Icon glyph="moon" />}
              >
                Modo oscuro
              </Dropdown.Item>
            </Dropdown.Section>
            <Dropdown.Section title="Miscelaneo">
              <Dropdown.Item
                color="secondary"
                key="angry-mode"
                description={`${
                  angryMode ? "Deshabilitar" : "Habilitar"
                } referencias a la serie.`}
                icon={<Icon glyph="idea" />}
                css={{ whiteSpace: "break-spaces!important" }}
              >
                Modo serio
              </Dropdown.Item>
            </Dropdown.Section>
          </Dropdown.Menu>
        </Dropdown>
      </Grid>
    </Grid.Container>
  );
};

export default Header;
