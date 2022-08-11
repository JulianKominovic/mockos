import { useEffect, useState } from "react";
import getCollections from "../../../actions/getCollections";

const useCollectionList = () => {
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    getCollections().then((res) => setCollection(res));
  }, []);
  return {
    setCollection,
    collection,
  };
};

export default useCollectionList;
