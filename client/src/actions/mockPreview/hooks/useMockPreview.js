import { useState } from "react";

const useMockPreview = () => {
  const [mockpreview, setMockpreview] = useState({});

  const isMockEditorActive = Object.keys(mockpreview)?.length > 0;
  const setNewMockPreview = (mock) => {
    setMockpreview(mock);
  };
  const cancelNewMocko = () => setMockpreview({});
  const startNewMocko = (collection) => {
    setMockpreview({
      name: "Nuevo mockito",
      collection,
    });
  };

  return {
    mockpreview,
    setNewMockPreview,
    startNewMocko,
    isMockEditorActive,
    cancelNewMocko,
  };
};

export default useMockPreview;
