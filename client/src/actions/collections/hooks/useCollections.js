import { useEffect, useState } from "react";
import getCollections from "../../getCollections";

const useCollections = () => {
  const [collections, setCollections] = useState({});

  useEffect(() => {
    getCollections()
      .then((res) => setCollections(res))
      .catch((err) => console.log(err));
  }, [refreshCollections]);

  return {
    collections,
    refreshCollections,
  };
};

export default useCollections;
