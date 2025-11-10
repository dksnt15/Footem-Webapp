import { createContext, useState } from "react";

export const TurfContext = createContext();

export const TurfProvider = ({ children }) => {
  const [selectedTurf, setSelectedTurf] = useState(null);

  const handleSelectedTurf = (turf) => {
    setSelectedTurf(turf);
  };

  return (
    <TurfContext.Provider value={{ selectedTurf, handleSelectedTurf }}>
      {children}
    </TurfContext.Provider>
  );
};
