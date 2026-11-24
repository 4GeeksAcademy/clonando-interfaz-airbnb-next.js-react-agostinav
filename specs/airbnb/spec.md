# Especificación: interfaz de Airbnb

## Fuente y alcance

[context.md](../../context.md) es la fuente principal de requisitos y contiene
los 24 criterios de aceptación y las especificaciones visuales. Este documento
los complementa. Referencias móviles a 375 px: [Home](../../references/home-mobile.png),
[Catálogo](../../references/catalog-mobile.png) y [Detalle](../../references/room-mobile.png).

El ejercicio reproduce tres vistas con Next.js 16, React, TypeScript, Tailwind
CSS y App Router. Utiliza datos locales, sin backend, pagos ni reservas reales.
El mapa interactivo y el date picker funcional son retos opcionales fuera del
alcance inicial. Tampoco se requiere funcionalidad de favoritos ni autenticación.

## Arquitectura

- Rutas: `app/page.tsx`, `app/catalog/page.tsx` y `app/rooms/[id]/page.tsx`.
- Componentes en `/components`, interfaces en `/types` y datos simulados
  compartidos en `data/`.
- Cada componente funcional se define como `const`, tiene una responsabilidad
  y vive en su propio archivo; no debe superar aproximadamente 80 líneas de
  JSX y lógica.
- Los componentes con estado, efectos o interacción son componentes de cliente.
- Estilos exclusivamente con clases de utilidad de Tailwind CSS, sin estilos
  inline ni bibliotecas de componentes preconstruidos.
- Toda navegación interna utiliza `Link` de Next.js, sin recargas completas.

## Interfaces TypeScript

```ts
interface ListingImage {
  src: string;
  alt: string;
}

interface Host {
  name: string;
  avatar: ListingImage;
  yearsHosting: number;
  bio: string;
}

interface Category {
  id: string;
  name: string;
  icon: string;
}

interface Amenity {
  id: string;
  label: string;
  icon: string;
}

interface Listing {
  id: string;
  title: string;
  location: string;
  categoryId: string;
  pricePerNight: number;
  rating: number;
  reviewCount: number;
  images: ListingImage[];
  description: string;
  host: Host;
  amenities: Amenity[];
  maxGuests: number;
}
```

Las imágenes pueden usar referencias a placeholders. Los identificadores de
alojamiento y categoría deben ser coherentes entre las vistas.

## Contratos de componentes

| Componente | Responsabilidad | Props |
| --- | --- | --- |
| `Icon` | Renderizar iconos SVG propios desde nombres semánticos. | `name: string`, `className?: string` |
| `Header` | Logo, navegación, buscador e iconos de usuario. | `searchValue?: string`, `onSearchChange?: (value: string) => void` |
| `SearchBar` | Capturar la búsqueda. | `value: string`, `onChange: (value: string) => void` |
| `CategoryFilters` | Seleccionar y resaltar la categoría. | `categories: Category[]`, `selectedCategory: string \| null`, `onSelect: (id: string \| null) => void` |
| `ListingCard` | Mostrar fotografía placeholder, título, precio por noche y estrellas; enlazar al detalle. | `listing: Listing` |
| `ListingGrid` | Organizar tarjetas y mostrar el estado vacío. | `listings: Listing[]` |
| `LoadingState` | Indicar la carga simulada. | `label?: string` |
| `SortControl` | Elegir el orden por precio. | `value: "asc" \| "desc"`, `onChange: (value: "asc" \| "desc") => void` |
| `MapPlaceholder` | Reservar el área visual del mapa. | Sin props obligatorias. |
| `ImageGallery` | Mostrar fotografías placeholder y controles de galería. | `images: ListingImage[]`, `title: string` |
| `ListingDetails` | Mostrar título, ubicación, estrellas y reseñas. | `listing: Listing` |
| `HostInfo` | Mostrar avatar placeholder, nombre y años de experiencia. | `host: Host` |
| `AmenitiesList` | Mostrar servicios en una cuadrícula de iconos y etiquetas. | `amenities: Amenity[]` |
| `BookingCard` | Mostrar precio, huéspedes y CTA simulado. | `pricePerNight: number`, `maxGuests: number` |

## Vistas e interacciones

### Home `/`

`Header` contiene `SearchBar`; le siguen `CategoryFilters` y `LoadingState` o
`ListingGrid` con tarjetas `ListingCard`. La navegación superior incluye logo,
buscador e iconos del menú de usuario. La fila de categorías muestra iconos y
etiquetas y resalta la categoría activa.

`useState` gestiona búsqueda, categoría, datos inicialmente vacíos y carga.
Cada pulsación actualiza los resultados locales; búsqueda y categoría se aplican
conjuntamente. `useEffect` y `setTimeout` simulan la carga y limpian el
temporizador. Una búsqueda sin coincidencias muestra un estado vacío. Cada
tarjeta enlaza a su detalle mediante `Link`.

La referencia muestra filas horizontales de alojamientos; el ejercicio prioriza
la cuadrícula requerida. Corresponde a los criterios 1–3, 5, 8, 14–16 y 22.

### Catálogo `/catalog`

La página incluye `Header`, cantidad de resultados, `SortControl` y un área con
`ListingGrid` y `MapPlaceholder` como elementos hermanos. Se reutilizan las
tarjetas de Home. `useState` controla la ordenación ascendente o descendente
por precio, sin modificar los datos originales. La cantidad refleja los
resultados mostrados y las tarjetas enlazan a su detalle.

La referencia presenta el mapa de otro modo; el ejercicio exige un placeholder
debajo de las tarjetas en móvil y a su derecha en escritorio. Corresponde a los
criterios 1, 4–5, 8, 17 y 22.

### Detalle `/rooms/[id]`

La página presenta `Header`, enlace al catálogo y `LoadingState` o el contenido:
`ImageGallery`, `ListingDetails`, `HostInfo`, descripción, `AmenitiesList` y
`BookingCard`. `useEffect` y `setTimeout` buscan el alojamiento local por el
`id` de la URL; se muestra un indicador durante la carga, se limpia el
temporizador y se informa cuando el alojamiento no existe.

La galería usa `useState` para su índice y botones Anterior y Siguiente sin
salir del rango. La tarjeta de reserva usa `useState` para mantener los
huéspedes entre 1 y `maxGuests`; muestra precio por noche y CTA sin crear una
reserva. El regreso al catálogo utiliza `Link`.

La referencia muestra precio total y no muestra los botones de galería; se
priorizan el precio por noche y los controles exigidos por el ejercicio.
Corresponde a los criterios 1, 6–8 y 18–22.

## Responsive y calidad

- Desde 375 px: una columna de tarjetas, categorías horizontales desplazables,
  mapa debajo de los resultados y detalle en una columna.
- Desde 768 px: varias columnas de tarjetas, mapa a la derecha y posibilidad de
  organizar la información del detalle junto a la tarjeta de reserva.
- Evitar desbordamiento horizontal; utilizar HTML semántico, controles
  etiquetados, navegación por teclado y textos alternativos.
- Los criterios transversales 9–13 y 22 se aplican a las tres vistas. Los
  criterios 23–24 se refieren a la documentación visual y a la entrega.
  La asignación completa de criterios a tareas está en [tasks.md](tasks.md).