# Tareas de implementación

Los números de criterios corresponden a [context.md](../../context.md), fuente
principal de requisitos. Las tareas se mantienen sin marcar hasta completar sus
comprobaciones. Los archivos indicados son previstos y pueden dividirse para
respetar la responsabilidad única y el límite aproximado de 80 líneas.

## Fase 1: Preparación

- [x] **T01. Verificar requisitos, entorno y referencias.** Dependencias:
  ninguna. Archivos a consultar: `context.md`, `references/`, `package.json`,
  `next.config.ts` y `node_modules/next/dist/docs/`. Criterios: **11, 23**.
  Comprobación: revisar estado e historial de Git, scripts disponibles y
  documentación Next.js 16 sobre parámetros dinámicos y `cacheComponents`;
  confirmar que las tres vistas tienen captura y especificación documentadas
  antes de implementar. Conservar los cambios existentes.
- [ ] **T02. Preparar tipos y datos locales.** Depende de T01. Los contratos
  están definidos en `types/listing.ts` y las rutas importan los alojamientos
  existentes desde `data/listings`. El contenido de `data/` está excluido de
  esta auditoría y no se lee. Criterios: **9, 11**. Comprobación pendiente:
  revisar los datos tipados, unicidad de IDs y correspondencia de categorías
  cuando la política permita esa lectura. TypeScript y build confirman que la
  integración actual compila, pero no verifican esas invariantes.

## Fase 2: Componentes y Home

- [x] **T03. Crear navegación, tarjetas e indicador compartidos.** Depende de
  T01. Implementados en `components/Header.tsx`, `SearchBar.tsx`,
  `ListingCard.tsx`, `ListingGrid.tsx`, `LoadingState.tsx` e `Icon.tsx`.
  Criterios: **5, 9, 12–15, 22**.
  Comprobación: props tipadas; componentes independientes declarados como
  `const`; tarjetas con placeholder, título, precio y estrellas; enlaces
  internos con `Link`, navbar con logo, buscador e iconos SVG propios, sin
  dependencia de una biblioteca de iconos.
- [ ] **T04. Implementar Home.** Depende de T03. Implementación presente en
  `app/page.tsx`, `components/CategoryFilters.tsx` y `HomeView.tsx`. Criterios:
  **2–3, 8, 14–16**. Comprobación: lista inicialmente vacía e indicador
  durante `useEffect` y `setTimeout`; búsqueda por pulsación mediante
  `useState`, categoría activa resaltada y mensaje sin resultados. Pendiente:
  prueba interactiva en navegador con datos cargados.

## Fase 3: Catálogo y detalle

- [ ] **T05. Implementar catálogo.** Depende de T03. Implementación presente en
  `app/catalog/page.tsx`, `components/SortControl.tsx`, `MapPlaceholder.tsx`
  y `CatalogView.tsx`. Criterios: **4–5, 17**. Comprobación: cantidad correcta,
  ambos órdenes por precio con `useState`, tarjetas de Home reutilizadas y
  placeholder debajo en móvil y a la derecha en escritorio. Pendiente: probar
  ordenación y layout visualmente en navegador.
- [ ] **T06. Conectar detalle y carga por `id`.** Depende de T02 y T03. La ruta
  `app/rooms/[id]/page.tsx` y `components/RoomView.tsx` ya están conectados a
  los datos. Criterios: **8, 18**.
  Comprobación: carga simulada visible con `useEffect` y `setTimeout`, datos
  del `id` correcto, temporizador limpiado y mensaje para un `id` inexistente.
  Build confirma la ruta y sus parámetros; pendiente comprobar carga y estados
  en navegador con datos reales.
- [ ] **T07. Completar contenido del detalle.** Depende de T06. Los componentes
  `components/ImageGallery.tsx`, `ListingDetails.tsx`, `HostInfo.tsx` y
  `AmenitiesList.tsx` están integrados en `components/RoomView.tsx`.
  Criterios: **6, 19–20**. Comprobación: galería con
  índice en `useState` y botones Anterior y Siguiente dentro del rango;
  cabecera, avatar placeholder, anfitrión y cuadrícula de servicios visibles
  en la vista de detalle. Implementación revisada; falta confirmación visual.
- [ ] **T08. Crear tarjeta de reserva.** Depende de T06. `components/BookingCard.tsx`
  está integrada en `components/RoomView.tsx`. Criterios: **7, 21**. Comprobación:
  precio por noche, contador con `useState` entre 1 y la capacidad, CTA sin
  reserva real y enlace de regreso mediante `Link`. Código revisado; falta
  prueba interactiva con alojamiento cargado.

T05 y T06 pueden desarrollarse en paralelo después de sus dependencias; T07 y
T08 pueden desarrollarse en paralelo después de T06, coordinando la integración
en `RoomView.tsx`.

## Fase 4: Validación

- [ ] **T09. Ajustar responsive.** Depende de T04, T05, T07 y T08. Las clases
  responsive están implementadas en las rutas y componentes. Criterios: **1,
  16–17**. Comprobación pendiente: navegador con viewports 375 y 768 px para
  descartar desbordamiento y verificar mapa y columnas.
- [x] **T10. Revisar arquitectura y estilos.** Depende de T03. Revisados `app/`,
  `components/` y `types/`; `app/globals.css` conserva la directiva necesaria
  de Tailwind CSS y no añade estilos de interfaz fuera de utilidades.
  Criterios: **10–13**. Comprobación: estado React, componentes `const` con
  responsabilidad única y tamaño aproximado requerido, Tailwind sin estilos
  inline ni bibliotecas preconstruidas; `npm run lint`, `npx tsc --noEmit` y
  `npm run build` completados. Los 17 archivos `.tsx` de componentes tienen
  menos de 80 líneas; no se detectaron estilos inline ni librerías de UI.
- [ ] **T11. Verificar navegación y accesibilidad.** Depende de T09. Revisar
  rutas y componentes afectados. Criterios: **5, 9, 22**. Comprobación:
  recorrer Home → detalle y catálogo → detalle → catálogo sin recarga; probar
  teclado, etiquetas, semántica y textos alternativos.
- [ ] **T12. Verificar entrega.** Depende de T10 y T11. Revisar `context.md` y
  la configuración del repositorio. Criterio: **24**. Comprobación: confirmar
  que el repositorio final es público y conserva `context.md` en la raíz; mapa
  interactivo y date picker funcional permanecen fuera del alcance inicial.

## Trazabilidad de criterios

`Cumplido` indica evidencia directa en código o validaciones ejecutadas;
`Parcial` indica que la implementación existe pero falta una prueba de
navegador, datos o viewport; `Pendiente` se reserva para requisitos sin
evidencia de implementación. En esta auditoría no hay criterios totalmente
pendientes, pero los parciales no deben interpretarse como aceptación final.

| Criterio | Tareas | Resultado de auditoría |
| --- | --- | --- |
| 1 | T09 | Parcial: breakpoints implementados; no hay prueba visual 375/768. |
| 2 | T04 | Parcial: filtro en código; interacción con datos no probada. |
| 3 | T04 | Parcial: efecto y temporizador revisados; no se midió en navegador. |
| 4 | T05 | Parcial: orden asc/desc en código; datos e interacción no auditados. |
| 5 | T03, T05, T11 | Parcial: `Link` declarado y build pasa; no se probó navegación cliente. |
| 6 | T07 | Parcial: componentes presentes; galería no probada en navegador. |
| 7 | T08 | Parcial: límites implementados en código; interacción no ejecutada. |
| 8 | T04, T06 | Parcial: estados vacíos implementados; no probados con datos reales. |
| 9 | T02, T03, T11 | Parcial: no hay backend y se usa `Link`; falta prueba de navegación. |
| 10 | T10 | Cumplido: hooks, lint, TypeScript y build verificados. |
| 11 | T01, T02, T10 | Cumplido: Next, React, TypeScript, Tailwind, App Router y carpetas comprobados. |
| 12 | T03, T10 | Cumplido: componentes `const`, archivos separados y bajo 80 líneas. |
| 13 | T03, T10 | Cumplido: sin estilos inline ni dependencias de UI preconstruidas. |
| 14 | T03, T04 | Parcial: navbar y filtros constan en código; sin prueba visual/teclado. |
| 15 | T03, T04 | Parcial: búsqueda y campos de tarjeta en código; resultado no comprobado. |
| 16 | T04, T09 | Parcial: clases de cuadrícula presentes; viewport no inspeccionado. |
| 17 | T05, T09 | Parcial: layout y control presentes; disposición visual no verificada. |
| 18 | T06 | Parcial: parámetros promesa, `Suspense` y build verificados; datos no auditados. |
| 19 | T07 | Parcial: controles y cabecera en código; interacción no ejecutada. |
| 20 | T07 | Parcial: anfitrión y servicios integrados; contenido no auditado. |
| 21 | T08 | Parcial: contador y CTA implementados; prueba interactiva pendiente. |
| 22 | T03, T11 | Parcial: enlaces `Link` presentes; falta comprobar navegación sin recarga. |
| 23 | T01 | Cumplido: tres capturas referenciadas y especificaciones documentadas. |
| 24 | T12 | Cumplido: repo público, `context.md` en raíz y opcionales excluidos. |

## Revalidación del 24 de noviembre de 2026

La tabla anterior conserva los resultados de la auditoría previa. En esta
revalidación pasaron `npm run lint`, `npx tsc --noEmit` y `npm run build`.
El repositorio figura como público y `context.md` está en la raíz.

La política de exclusión de contenido denegó el acceso a la documentación local
de Next.js, cuya consulta es obligatoria antes de escribir código. Por ello no
se añadió código de pruebas ni se modificó la aplicación. Playwright no estaba
instalado; no se instaló al no poder desarrollar la automatización requerida.
No se ejecutaron pruebas funcionales, visuales ni de teclado, ni se generaron
capturas. Los datos locales siguen fuera de la auditoría por la exclusión
indicada en T02. No se detectaron fallos en las tres comprobaciones ejecutadas;
esto no acredita el comportamiento en navegador.

### Estado actual de las tareas

| Tarea | Resultado de esta revalidación |
| --- | --- |
| T01 | Previamente completada; la consulta actual de la documentación Next.js está bloqueada por la política. |
| T02 | Pendiente: las invariantes de datos no se han auditado; TypeScript y build pasan. |
| T03 | Previamente completada; lint, TypeScript y build pasan, sin prueba interactiva nueva. |
| T04 | Pendiente: falta comprobar Home en navegador. |
| T05 | Pendiente: faltan la ordenación y el layout en navegador. |
| T06 | Pendiente: faltan la carga, los datos y el ID inexistente en navegador. |
| T07 | Pendiente: faltan la galería y la comprobación visual. |
| T08 | Pendiente: falta probar los límites del contador. |
| T09 | Pendiente: faltan los tres viewports y la detección de desbordamientos. |
| T10 | Previamente completada; lint, TypeScript y build pasan nuevamente. |
| T11 | Pendiente: faltan navegación, teclado y accesibilidad en navegador. |
| T12 | Pendiente: visibilidad pública y archivo raíz confirmados; falta la validación de entrega. |

### Estado actual de los criterios

| Criterio | Resultado de esta revalidación |
| --- | --- |
| 1 | Pendiente de prueba visual y desbordamiento en 375, 768 y 1440 px. |
| 2 | Pendiente de prueba interactiva de búsqueda y categoría. |
| 3 | Pendiente de observar la carga en navegador. |
| 4 | Pendiente de comprobar cantidad, ordenación y mapa en navegador. |
| 5 | Pendiente de comprobar los enlaces al detalle correcto. |
| 6 | Pendiente de comprobar galería, anfitrión y servicios. |
| 7 | Pendiente de probar los límites de huéspedes y el CTA. |
| 8 | Pendiente de probar resultados vacíos e ID inexistente. |
| 9 | Pendiente de comprobar navegación en navegador; build pasa. |
| 10 | Lint, TypeScript y build pasan; se conserva la auditoría previa de código. |
| 11 | Stack y estructura documentados previamente; TypeScript y build pasan. |
| 12 | Se conserva la auditoría previa; no se volvió a inspeccionar cada componente. |
| 13 | Se conserva la auditoría previa; no se volvió a inspeccionar cada estilo. |
| 14 | Pendiente de comprobación visual y con teclado. |
| 15 | Pendiente de comprobar búsqueda y tarjetas en navegador. |
| 16 | Pendiente de comprobar cuadrícula y carga en navegador. |
| 17 | Pendiente de comprobar ordenación y distribución en navegador. |
| 18 | Build reconoce la ruta dinámica; falta comprobar carga e ID en navegador. |
| 19 | Pendiente de comprobar galería y cabecera en navegador. |
| 20 | Pendiente de comprobar anfitrión y servicios en navegador. |
| 21 | Pendiente de comprobar tarjeta, contador y regreso en navegador. |
| 22 | Pendiente de comprobar navegación interna sin recarga. |
| 23 | Se conserva la auditoría previa de especificaciones y referencias. |
| 24 | Repositorio público y archivo raíz confirmados; opcionales fuera del alcance inicial. |