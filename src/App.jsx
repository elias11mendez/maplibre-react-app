// src/App.jsx
import { MapProvider } from "./context/MapContext";
import { MainMap } from "./components/MainMap";

function App() {
  return (
    <MapProvider>
      <MainMap />
    </MapProvider>
  );
}

export default App;