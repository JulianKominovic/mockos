import { useState } from "react";

const useMockPreview = () => {
  const [mockpreview, setMockpreview] = useState({});

  const setNewMockPreview = (mock) => setMockpreview(mock);
  const startNewMocko = () => setMockpreview({});

  return { mockpreview, setNewMockPreview, startNewMocko };
};

export default useMockPreview;
