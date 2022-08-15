import { Text } from "@nextui-org/react";
import { Avatar } from "@nextui-org/react";
import { Link } from "@nextui-org/react";
import { Table } from "@nextui-org/react";
import { Collapse } from "@nextui-org/react";
import React from "react";
import Icon from "supercons";
import chooseMethodColor from "../../../utils/chooseMethodColor";
import chooseStatusCodeColor from "../../../utils/chooseStatusCodeColor";

const LogItem = ({ request, response, key }) => {
  const requestEntries = Object.entries(request);
  const responseEntries = Object.entries(response);
  return (
    <>
      <Collapse
        title={<Text h4>Incoming request</Text>}
        subtitle={
          <>
            <Text b color={chooseMethodColor(request.method)}>
              {request.method}
            </Text>{" "}
            - {request.fullUrl}
          </>
        }
        contentLeft={
          <Avatar
            size="lg"
            icon={<Icon glyph="cloud-download" />}
            color="primary"
            bordered
            squared
          />
        }
      >
        <Table
          bordered
          shadow={false}
          aria-label="Details"
          css={{
            height: "auto",
            minWidth: "100%",
          }}
        >
          <Table.Header>
            {["Key", "Value"].map((item) => {
              return (
                <Table.Column key={key + "header" + item}>{item}</Table.Column>
              );
            })}
          </Table.Header>
          <Table.Body>
            {requestEntries.map(([k, value]) => {
              return (
                <Table.Row key={key + k}>
                  <Table.Cell>{k}</Table.Cell>
                  <Table.Cell>
                    {typeof value === "object" || typeof value === typeof []
                      ? JSON.stringify(value, null, 2)
                      : value}
                  </Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      </Collapse>

      <Collapse
        title={<Text h4>Outcoming request</Text>}
        subtitle={
          <>
            <Text b color={chooseMethodColor(request.method)}>
              {request.method}
            </Text>{" "}
            - {request.fullUrl} -{" "}
            <Text b color={chooseStatusCodeColor(response?.status)}>
              {response?.status}
            </Text>
          </>
        }
        contentLeft={
          <Avatar
            size="lg"
            icon={<Icon glyph="cloud-upload" />}
            color={chooseStatusCodeColor(response?.status)}
            bordered
            squared
          />
        }
      >
        <Table
          bordered
          shadow={false}
          aria-label="Details"
          css={{
            height: "auto",
            minWidth: "100%",
          }}
        >
          <Table.Header>
            {["Key", "Value"].map((item) => {
              return (
                <Table.Column key={key + "header" + item}>{item}</Table.Column>
              );
            })}
          </Table.Header>
          <Table.Body>
            {responseEntries.map(([k, value]) => {
              return (
                <Table.Row key={key + k}>
                  <Table.Cell>{k}</Table.Cell>
                  <Table.Cell>
                    {typeof value === "object" || typeof value === typeof []
                      ? JSON.stringify(value, null, 2)
                      : value}
                  </Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      </Collapse>
    </>
  );
};
export default LogItem;
