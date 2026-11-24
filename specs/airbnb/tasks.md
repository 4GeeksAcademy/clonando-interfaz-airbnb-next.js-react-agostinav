# Tareas de implementación

Los números de criterios corresponden a [context.md](../../context.md), fuente
principal de requisitos. Las tareas se mantienen sin marcar hasta completar sus
comprobaciones. Los archivos indicados son previstos y pueden dividirse para
respetar la responsabilidad única y el límite aproximado de 80 líneas.

## Fase 1: Preparación

- [ ] **T01. Verificar requisitos, entorno y referencias.** Dependencias:
  ninguna. Archivos a consultar: `context.md`, `references/`, `package.json`,
  `next.config.ts` y `node_modules/next/dist/docs/`. Criterios: **11, 23**.
  Comprobación: revisar estado e historial de Git, scripts disponibles y
  documentación Next.js 16 sobre parámetros dinámicos y `cacheComponents`;
  confirmar que las tres vistas tienen captura y especificación documentadas
  antes de implementar. Conservar los cambios existentes.
- [ ] **T02. Preparar tipos y datos locales.** Depende de T01. Crear
  `types/listing.ts`, `data/listings.ts` y `data/categories.ts`. Criterios:
  **9, 11**. Comprobación: interfaces y datos tipados, identificadores únicos,
  categorías coherentes y ausencia de backend.

## Fase 2: Componentes y Home

- [ ] **T03. Crear navegación, tarjetas e indicador compartidos.** Depende de
  T02. Crear `components/Header.tsx`, `SearchBar.tsx`, `ListingCard.tsx`,
  `ListingGrid.tsx` y `LoadingState.tsx`. Criterios: **5, 9, 12–15, 22**.
  Comprobación: props tipadas; componentes independientes declarados como
  `const`; tarjetas con placeholder, título, precio y estrellas; enlaces
  internos con `Link` y navbar con logo, buscador e iconos de usuario.
- [ ] **T04. Implementar Home.** Depende de T03. Modificar `app/page.tsx`;
  crear `components/CategoryFilters.tsx` y `HomeView.tsx`. Criterios:
  **2–3, 8, 14–16**. Comprobación: lista inicialmente vacía e indicador
  durante `useEffect` y `setTimeout`; búsqueda por pulsación mediante
  `useState`, categoría activa resaltada y mensaje sin resultados.

## Fase 3: Catálogo y detalle

- [ ] **T05. Implementar catálogo.** Depende de T03. Crear
  `app/catalog/page.tsx`, `components/SortControl.tsx`, `MapPlaceholder.tsx`
  y `CatalogView.tsx`. Criterios: **4–5, 17**. Comprobación: cantidad correcta,
  ambos órdenes por precio con `useState`, tarjetas de Home reutilizadas y
  placeholder debajo en móvil y a la derecha en escritorio.
- [ ] **T06. Conectar detalle y carga por `id`.** Depende de T02 y T03. Crear
  `app/rooms/[id]/page.tsx` y `components/RoomView.tsx`. Criterios: **8, 18**.
  Comprobación: carga simulada visible con `useEffect` y `setTimeout`, datos
  del `id` correcto, temporizador limpiado y mensaje para un `id` inexistente.
- [ ] **T07. Completar contenido del detalle.** Depende de T06. Crear
  `components/ImageGallery.tsx`, `ListingDetails.tsx`, `HostInfo.tsx` y
  `AmenitiesList.tsx`; modificar `components/RoomView.tsx` para integrar los
  cuatro componentes. Criterios: **6, 19–20**. Comprobación: galería con
  índice en `useState` y botones Anterior y Siguiente dentro del rango;
  cabecera, avatar placeholder, anfitrión y cuadrícula de servicios visibles
  en la vista de detalle.
- [ ] **T08. Crear tarjeta de reserva.** Depende de T06. Crear
  `components/BookingCard.tsx`; modificar `components/RoomView.tsx` para
  integrarla y enlazar al catálogo. Criterios: **7, 21**. Comprobación:
  precio por noche, contador con `useState` entre 1 y la capacidad, CTA sin
  reserva real y enlace de regreso mediante `Link`.

T05 y T06 pueden desarrollarse en paralelo después de sus dependencias; T07 y
T08 pueden desarrollarse en paralelo después de T06, coordinando la integración
en `RoomView.tsx`.

## Fase 4: Validación

- [ ] **T09. Ajustar responsive.** Depende de T04, T05, T07 y T08. Modificar
  rutas y componentes afectados. Criterios: **1, 16–17**. Comprobación: revisar
  las tres vistas a 375 px y desde 768 px, sin desbordamiento horizontal;
  verificar columnas de tarjetas y posición del mapa.
- [ ] **T10. Revisar arquitectura y estilos.** Depende de T09. Revisar `app/`,
  `components/` y `types/`; ajustar `app/globals.css` para retirar estilos de
  interfaz que no sean utilidades, conservando las directivas necesarias de
  Tailwind CSS. Modificar solo lo necesario.
  Criterios: **10–13**. Comprobación: estado React, componentes `const` con
  responsabilidad única y tamaño aproximado requerido, Tailwind sin estilos
  inline ni bibliotecas preconstruidas; ejecutar `npm run lint` y `npm run build`.
- [ ] **T11. Verificar navegación y accesibilidad.** Depende de T09. Revisar
  rutas y componentes afectados. Criterios: **5, 9, 22**. Comprobación:
  recorrer Home → detalle y catálogo → detalle → catálogo sin recarga; probar
  teclado, etiquetas, semántica y textos alternativos.
- [ ] **T12. Verificar entrega.** Depende de T10 y T11. Revisar `context.md` y
  la configuración del repositorio. Criterio: **24**. Comprobación: confirmar
  que el repositorio final es público y conserva `context.md` en la raíz; mapa
  interactivo y date picker funcional permanecen fuera del alcance inicial.

## Trazabilidad de criterios

| Criterio | Tareas |
| --- | --- |
| 1 | T09 |
| 2 | T04 |
| 3 | T04 |
| 4 | T05 |
| 5 | T03, T05, T11 |
| 6 | T07 |
| 7 | T08 |
| 8 | T04, T06 |
| 9 | T02, T03, T11 |
| 10 | T10 |
| 11 | T01, T02, T10 |
| 12 | T03, T10 |
| 13 | T03, T10 |
| 14 | T03, T04 |
| 15 | T03, T04 |
| 16 | T04, T09 |
| 17 | T05, T09 |
| 18 | T06 |
| 19 | T07 |
| 20 | T07 |
| 21 | T08 |
| 22 | T03, T11 |
| 23 | T01 |
| 24 | T12 |