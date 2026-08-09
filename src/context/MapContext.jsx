// src/context/MapContext.jsx

import { createContext, useContext, useState, useRef } from "react";

const MapContext = createContext(null);

export function MapProvider({ children }) {
  const mapRef = useRef(null);
  const [isMapReady, setIsMapReady] = useState(false);

  return (
    <MapContext.Provider
      value={{
        mapRef,
        isMapReady,
        setIsMapReady,
      }}
    >
      {children}
    </MapContext.Provider>
  );
}

export const useMapInstance = () => {
  const context = useContext(MapContext);
  if (!context) {
    throw new Error("useMapInstance debe usarse dentro de un MapProvider");
  }
  return context;
};
