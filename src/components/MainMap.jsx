import { useRef } from "react";
import { useMap } from "../hooks/useMap";

export const MainMap = () => {
  const mapContainerRef = useRef(null);

  const { isMapReady } = useMap(mapContainerRef);

  return (
    <div style={{ position: "relative", width: "100vw", height: "100vh" }}>
      {!isMapReady && (
        <div
          style={{
            position: "absolute",
            top: 10,
            left: 10,
            zIndex: 1,
            background: "rgba(0,0,0,0.7)",
            color: "white",
            padding: "8px 12px",
            borderRadius: "4px",
          }}
        >
          Cargando mapa...
        </div>
      )}

      <div ref={mapContainerRef} style={{ width: "100%", height: "100%" }} />
    </div>
  );
};
