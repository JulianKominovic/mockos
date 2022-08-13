import { useEffect, useState } from "react";
import getCollections from "../../getCollections";

const useCollections = () => {
  const [collections, setCollections] = useState({});
  const [refreshSignal, setRefreshSignal] = useState(0);

  useEffect(() => {
    getCollections()
      .then((res) => setCollections(res))
      .catch((err) => console.log(err));
  }, [refreshSignal]);

  const refreshCollections = () => setRefreshSignal((prev) => prev + 1);

  return {
    collections,
    refreshCollections,
  };
};

export default useCollections;
