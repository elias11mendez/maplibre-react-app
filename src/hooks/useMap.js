// src/hooks/useMap.js
import { useEffect } from "react";
import * as maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { useMapInstance } from "../context/MapContext";

const OSM_STYLE = {
  version: 8,
  sources: {
    "osm-tiles": {
      type: "raster",
      tiles: [
        "https://a.tile.openstreetmap.org/{z}/{x}/{y}.png",
        "https://b.tile.openstreetmap.org/{z}/{x}/{y}.png",
        "https://c.tile.openstreetmap.org/{z}/{x}/{y}.png",
      ],
      tileSize: 256,
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  },
  layers: [
    {
      id: "osm-tiles-layer",
      type: "raster",
      source: "osm-tiles",
      minzoom: 0,
      maxzoom: 19,
    },
  ],
};

export const useMap = (containerRef) => {
  const { mapRef, isMapReady, setIsMapReady } = useMapInstance();

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    const map = new maplibregl.Map({
      container: containerRef.current,
      style: OSM_STYLE, 
      center: [-3.70379, 40.416775], 
      zoom: 12,
    });

    mapRef.current = map;

    // Handler para activar el estado cuando todo cargue
    const handleLoad = () => {
      setIsMapReady(true);
    };

    if (map.isStyleLoaded()) {
      setIsMapReady(true);
    } else {
      map.once("load", handleLoad);
    }

    return () => {
      map.off("load", handleLoad);
      map.remove();
      mapRef.current = null;
      setIsMapReady(false);
    };
  }, [containerRef, mapRef, setIsMapReady]);

  return { map: mapRef.current, isMapReady };
};