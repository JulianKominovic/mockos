const useMockPreview = () => {
  const [mockpreview, setMockpreview] = useState({});
  const getMockPreview = () => mockpreview;
  const setNewMockPreview = (mock) => setMockpreview(mock);

  return { getMockPreview, setNewMockPreview };
};

export default useMockPreview;
