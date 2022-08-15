import { useContext, useEffect, useState } from "react";
import { collectionsContext } from "../../../actions/collections/store/collections.store";
import getLogs from "../../../actions/logs/getLogs";
const controller = new AbortController();
const signal = controller.signal;

const useLogs = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const id = setInterval(() => {
      if (document.visibilityState === "visible")
        getLogs(signal)
          .then((res) => setLogs(res))
          .catch((err) => {
            console.log(err);
            setLogs([]);
          });
    }, 2000);

    return () => {
      controller.abort();
      clearImmediate(id);
    };
  }, []);
  return { logs };
};

export default useLogs;
