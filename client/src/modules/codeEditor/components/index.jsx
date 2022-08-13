import React, { useState } from "react";
import Editor from "@monaco-editor/react";

import chooseBorderColor from "../logic/chooseBorderColor";
import useEditor from "../state/useEditor";

function CodeEditor({ initialValue }) {
  const { code, setCode, focused, setFocused, hasError } = useEditor();
  return (
    <>
      <input
        type="text"
        hidden
        name="response_body"
        className={hasError ? "has-error" : ""}
        value={code}
        defaultValue={initialValue}
        readOnly
      />
      <Editor
        defaultValue={initialValue}
        onChange={setCode}
        name="response_body"
        language="json"
        height={600}
        theme="vs-dark"
        style={{
          borderRadius: "0.875rem",
          boxShadow: `0 0 0 2px ${chooseBorderColor(hasError, focused)}`,
        }}
      ></Editor>
    </>
  );
}

export default CodeEditor;
