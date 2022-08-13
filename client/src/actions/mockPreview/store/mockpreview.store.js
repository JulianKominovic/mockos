import useMockPreview from "../hooks/useMockPreview";

export const mockPreviewContext = React.createContext(null);

const MockPreviewProvider = ({ children }) => {
  const mockMethods = useMockPreview();
  return (
    <mockPreviewContext.Provider value={mockMethods}>
      {children}
    </mockPreviewContext.Provider>
  );
};

export default MockPreviewProvider;
