# 🗺️ Construyendo un mapa con MapLibre GL JS + React

> En este tutorial vamos a crear desde cero una pequeña aplicación web capaz de mostrar un mapa interactivo utilizando **React** y **MapLibre GL JS**.

---

## 🚀 Características del Proyecto

- **Mapa Interactivo:** Renderizado dinámico y optimizado a pantalla completa.
- **OpenStreetMap Integration:** Uso de capas base *Raster* ligeras y de acceso libre.
- **Arquitectura Escalable:** Gestión de estado global de la instancia (`mapRef`) a través de **Context API**.
- **Gestión de Estado Reactivo:** Notificación y control del estado de carga (`isMapReady`) para prevenir errores de ejecución en frío.
- **Custom Hooks:** Encapsulamiento de la lógica del mapa en `useMap` para evitar la propagación innecesaria de *props* (*prop drilling*).

---

## 🛠️ Tecnologías Utilizadas

- ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
- ![MapLibre](https://img.shields.io/badge/MapLibre_GL-3388ff?style=for-the-badge&logo=maplibre&logoColor=white)
- ![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
- ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

---

## 📁 Estructura del Proyecto

```text
src/
├── components/
│   └── MainMap.jsx       # Contenedor del lienzo del mapa
├── context/
│   └── MapContext.jsx    # Contexto global para la instancia y estados
├── hooks/
│   └── useMap.js         # Custom Hook con el ciclo de vida de MapLibre
├── App.jsx               # Integración de Provider y componentes
└── index.css             # Resets críticos para el contenedor fullscreen
