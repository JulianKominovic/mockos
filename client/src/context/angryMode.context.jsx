import React, { createContext, useState } from "react";

export const angryModeContext = createContext(false);

const AngryModeProvider = ({ children }) => {
  const [angryMode, setAngryMode] = useState(
    localStorage.getItem("angry-mode") === "true"
  );

  const deactivateAngryMode = () => {
    localStorage.setItem("angry-mode", "false");

    setAngryMode(false);
  };
  const activateAngryMode = () => {
    localStorage.setItem("angry-mode", "true");
    setAngryMode(true);
  };
  const toggleAngryMode = () => {
    setAngryMode((prev) => {
      localStorage.setItem("angry-mode", prev ? "false" : "true");
      return !prev;
    });
  };
  return (
    <angryModeContext.Provider
      value={{
        angryMode,
        deactivateAngryMode,
        activateAngryMode,
        toggleAngryMode,
      }}
    >
      {children}
    </angryModeContext.Provider>
  );
};

export default AngryModeProvider;
