import React from "react";
import useCollections from "../hooks/useCollections";

export const collectionsContext = React.createContext(null);

const CollectionsProvider = ({ children }) => {
  const collectMethods = useCollections();
  return (
    <collectionsContext.Provider value={collectMethods}>
      {children}
    </collectionsContext.Provider>
  );
};

export default CollectionsProvider;
