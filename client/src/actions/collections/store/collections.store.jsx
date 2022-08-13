import React from "react";

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
