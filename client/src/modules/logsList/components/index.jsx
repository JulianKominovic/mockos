import { Collapse } from "@nextui-org/react";
import React from "react";
import useLogs from "../state/useLogs";
import LogItem from "./LogItem";

const LogsList = () => {
  const { logs } = useLogs();
  return (
    <Collapse.Group shadow>
      {logs?.length > 0
        ? logs.map((log, index) => <LogItem key={"log" + index} {...log} />)
        : null}
    </Collapse.Group>
  );
};

export default LogsList;
