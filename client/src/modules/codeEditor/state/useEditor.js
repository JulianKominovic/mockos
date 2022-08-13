import React, { useState } from "react";
import verifyJson from "../../../utils/verifyJson";

const useEditor = () => {
  const [code, setCode] = useState(``);
  const [focused, setFocused] = useState(false);

  const hasError = !verifyJson(code);

  return { code, setCode, focused, setFocused, hasError };
};

export default useEditor;
