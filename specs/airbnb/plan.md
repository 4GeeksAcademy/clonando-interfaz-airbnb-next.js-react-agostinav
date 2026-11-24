# Plan de implementación

[context.md](../../context.md) es la fuente principal de requisitos; la
[especificación](spec.md) y las [tareas](tasks.md) la complementan.

## Comprobaciones previas

Antes de implementar, revisar el estado e historial de Git y los scripts
disponibles en `package.json`. La última revisión identificó `dev`, `build`,
`start` y `lint`; comprobarlos nuevamente antes de utilizarlos y conservar los
cambios existentes del usuario.

Consultar la documentación instalada de Next.js 16 en
`node_modules/next/dist/docs/`, especialmente la guía de rutas dinámicas,
los parámetros dinámicos de página y el comportamiento con `cacheComponents` activado.
La guía de rutas dinámicas, los componentes de servidor/cliente y el modelo de
caché se consultaron antes de implementar. Con `cacheComponents` activado,
`params` es una promesa y el acceso dinámico sin `generateStaticParams` queda
dentro de un límite `Suspense`; se mantiene la configuración existente.

## Estructura prevista

```text
app/
  layout.tsx
  globals.css
  page.tsx
  catalog/page.tsx
  rooms/[id]/page.tsx
components/
  Header.tsx, SearchBar.tsx, CategoryFilters.tsx
  ListingCard.tsx, ListingGrid.tsx, LoadingState.tsx
  SortControl.tsx, MapPlaceholder.tsx
  ImageGallery.tsx, ListingDetails.tsx, HostInfo.tsx
  AmenitiesList.tsx, BookingCard.tsx
  HomeView.tsx, CatalogView.tsx, RoomView.tsx
types/
  listing.ts
data/
  listings.ts
  categories.ts
```

Los controladores de vista se dividen en componentes adicionales de una sola
responsabilidad si superan aproximadamente 80 líneas de JSX y lógica. Las
rutas utilizan App Router; los componentes interactivos se declaran como
componentes de cliente. Cada componente se define como `const` en su propio
archivo dentro de `/components`.

## Datos y reutilización

Definir las interfaces descritas en [spec.md](spec.md) y utilizar los datos
simulados locales existentes en `data/`. Las rutas los importan directamente;
el contenido de esa carpeta está excluido de esta auditoría y no se inspecciona.
`ListingCard` y `ListingGrid` se reutilizan
entre Home y catálogo; `LoadingState` entre Home y detalle. `Header` comparte
la navegación, con buscador en Home.

## Estado y navegación

- Home: `useState` para búsqueda, categoría, lista inicialmente vacía y carga;
  `useEffect` y `setTimeout` para simular la carga y limpiar el temporizador.
- Catálogo: `useState` para la dirección de ordenación; calcular resultados
  ordenados sin mutar los datos originales.
- Detalle: mantener `cacheComponents` activado. Sin `generateStaticParams`,
  pasar la promesa `params` a un componente de servidor dentro de un límite
  `Suspense` con indicador de carga; allí resolver el `id` y pasarlo al
  controlador de cliente. Este usa `useEffect` y `setTimeout` para la carga
  local simulada, y `useState` para galería y huéspedes. El indicador de
  `Suspense` no sustituye al indicador de la carga simulada del cliente.
- Utilizar `Link` para todas las transiciones internas, incluidas las tarjetas
  hacia el detalle y el regreso al catálogo. No hay backend ni reserva real.

## Fases y validación

1. Verificar Git, scripts, documentación de Next.js, requisitos y capturas.
2. Crear tipos, datos locales y componentes compartidos.
3. Implementar Home, catálogo y detalle según sus tareas y dependencias.
4. Verificar interacciones, estados vacíos, navegación y accesibilidad.
5. Revisar las tres vistas a 375 px y desde 768 px; ejecutar los scripts de
   lint y compilación disponibles y corregir únicamente problemas del alcance.
6. Confirmar para la entrega final que el repositorio sea público y conserve
   `context.md` en la raíz. El mapa interactivo y el date picker funcional
   permanecen fuera del alcance inicial.