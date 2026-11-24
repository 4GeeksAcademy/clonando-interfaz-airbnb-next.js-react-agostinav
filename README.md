# Clonando la interfaz de Airbnb con Next.js y React

Ejercicio de 4Geeks para reproducir tres vistas inspiradas en Airbnb con datos
locales y diseño adaptable a dispositivos móviles y escritorio. El proyecto se
encuentra en fase de desarrollo; las vistas todavía no están implementadas.

## Tecnologías

- Next.js 16 con App Router y React.
- TypeScript y Tailwind CSS.

## Rutas previstas

- `/`: inicio con búsqueda, categorías y alojamientos.
- `/catalog`: catálogo con ordenación por precio y mapa placeholder.
- `/rooms/[id]`: detalle de alojamiento y reserva simulada.

## Comandos

Con las dependencias instaladas:

```bash
npm run dev    # Inicia el servidor de desarrollo
npm run build  # Genera la compilación de producción
npm run start  # Inicia la compilación de producción
npm run lint   # Comprueba el código con ESLint
```

Los requisitos y la planificación se encuentran en [context.md](context.md) y
en [specs/airbnb](specs/airbnb).
