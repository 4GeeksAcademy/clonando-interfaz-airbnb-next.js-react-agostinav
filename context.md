# Contexto del proyecto

## Objetivo

Reproducir tres vistas inspiradas en la interfaz de Airbnb con Next.js 16,
React, TypeScript, Tailwind CSS y App Router. El diseño será mobile-first
desde 375 px y se adaptará a escritorio a partir de 768 px.

## Arquitectura y configuración

- Usar Next.js 16, React, TypeScript, Tailwind CSS y App Router.
- Organizar las rutas en `/app`, los componentes en `/components` y las
   interfaces de datos en `/types`.
- Definir cada componente como `const`, con una única responsabilidad y en
   su propio archivo dentro de `/components`.
- Mantener cada componente por debajo de aproximadamente 80 líneas de JSX y
   lógica.
- Usar exclusivamente clases de utilidad de Tailwind CSS, sin estilos inline
   ni bibliotecas de componentes preconstruidos.

## Perfil del usuario

Persona que busca alojamiento y quiere comparar opciones de forma rápida
desde su teléfono o computadora.

### Objetivos del usuario

- Buscar alojamientos y filtrar por categoría.
- Comparar resultados y ordenarlos por precio.
- Consultar fotos, servicios y datos del anfitrión.
- Seleccionar una cantidad de huéspedes y consultar el resumen de reserva.

## Páginas

### Home: `/`

- Navegación superior con acceso a las vistas principales.
- Búsqueda con filtrado en tiempo real.
- Filtros por categoría.
- Tarjetas de alojamientos que enlazan a su detalle.
- Estado de carga simulado antes de mostrar los datos.
- Navbar con logo, buscador e iconos del menú de usuario.
- La búsqueda utiliza `useState` y actualiza la lista local de tarjetas en
   cada pulsación.
- Fila horizontal de categorías con iconos y etiquetas; la categoría activa
   se gestiona con `useState` y se resalta visualmente.
- Cada tarjeta muestra un placeholder de fotografía, título, precio por
   noche y valoración con estrellas.
- Cuadrícula de una columna en móvil y varias columnas en escritorio.
- La carga utiliza `useEffect` y `setTimeout`: comienza con una lista vacía
   y muestra un indicador hasta que los datos estén disponibles.

### Catálogo: `/catalog`

- Cantidad de resultados visibles.
- Ordenación por precio ascendente y descendente.
- Reutilización de las tarjetas de alojamientos.
- Área de mapa como placeholder, sin integración cartográfica.
- La ordenación se gestiona con `useState`.
- El placeholder del mapa aparece a la derecha de las tarjetas en escritorio
   y debajo de ellas en móvil.

### Detalle: `/rooms/[id]`

- Galería de imágenes navegable.
- Información del alojamiento y del anfitrión.
- Lista de servicios.
- Tarjeta de reserva con contador de huéspedes.
- Estado claro cuando el alojamiento no existe.
- Carga simulada con `useEffect` y `setTimeout` usando el `id` de la URL,
   con un indicador visible mientras se buscan los datos locales.
- Galería superior con placeholders de fotografías, índice gestionado con
   `useState` y botones Anterior y Siguiente.
- Cabecera con título, valoración con estrellas, número de reseñas y ubicación.
- Anfitrión con placeholder de avatar, nombre y años como anfitrión.
- Servicios organizados en una cuadrícula de iconos y etiquetas.
- Tarjeta de reserva con precio por noche, contador de huéspedes mediante
   `useState`, límites mínimo y máximo, y botón CTA sin reserva real.
- Botón de volver o breadcrumb con enlace al catálogo.

## Componentes reutilizables

Los nombres y props siguientes son una propuesta; los componentes aún no existen.

| Componente | Responsabilidad | Props principales | Uso |
| --- | --- | --- | --- |
| `Header` | Mostrar logo, navegación, buscador e iconos de usuario. | `searchValue`, `onSearchChange` cuando se muestra el buscador. | Todas las páginas. |
| `SearchBar` | Capturar la búsqueda. | `value`, `onChange`. | Home. |
| `CategoryFilters` | Seleccionar una categoría. | `categories`, `selectedCategory`, `onSelect`. | Home. |
| `ListingCard` | Mostrar resumen y enlace al detalle. | `listing`. | Home y catálogo. |
| `ListingGrid` | Organizar tarjetas y mostrar un estado vacío. | `listings`. | Home y catálogo. |
| `LoadingState` | Indicar la carga simulada. | Ninguna obligatoria. | Home y detalle. |
| `SortControl` | Elegir el orden por precio. | `value`, `onChange`. | Catálogo. |
| `MapPlaceholder` | Reservar el área visual del mapa. | Ninguna obligatoria. | Catálogo. |
| `ImageGallery` | Mostrar y navegar imágenes. | `images`, `title`. | Detalle. |
| `HostInfo` | Mostrar información del anfitrión. | `host`. | Detalle. |
| `AmenitiesList` | Mostrar los servicios disponibles. | `amenities`. | Detalle. |
| `BookingCard` | Mostrar precio y controlar huéspedes. | `pricePerNight`, `maxGuests`. | Detalle. |

Las páginas proporcionan datos y coordinan sus componentes. Las tarjetas
enlazan al detalle mediante el identificador de cada alojamiento.

## Datos principales

Definir interfaces TypeScript para:

- `Listing`: identificador, título, ubicación, categoría, precio por noche,
  imágenes, descripción, valoración, número de reseñas, anfitrión, servicios
  y capacidad máxima.
- `Host`: nombre, datos de presentación, avatar y años como anfitrión.
- `Category`: identificador, nombre e icono.
- `Amenity`: identificador, etiqueta e icono de cada servicio.
- `ListingImage`: fuente o referencia del placeholder y texto alternativo.

Los datos serán locales y compartidos entre las vistas. No habrá backend,
pagos ni reservas reales.

## Comportamiento técnico

- Usar `useState` para búsqueda, categoría, ordenación, galería y huéspedes.
- Usar `useEffect` y `setTimeout` para simular la carga; limpiar el
  temporizador al desmontar el componente.
- Usar `Link` de Next.js para la navegación interna.
- Utilizar exclusivamente `Link` para navegar entre páginas, sin recargas
   completas; las tarjetas de Home y catálogo enlazan al detalle correspondiente.
- Marcar como componentes de cliente aquellos que necesiten estado,
  efectos o interacción.
- Declarar los componentes funcionales con `const`.
- Utilizar exclusivamente clases de Tailwind CSS para los estilos de la
  interfaz, sin bibliotecas de componentes preconstruidos.
- Mantener la cantidad de huéspedes entre 1 y la capacidad del alojamiento.
- La tarjeta de reserva es una simulación y no confirma reservas.

## Flujo de trabajo con prompts de visión

1. Utilizar tres capturas originales de Airbnb realizadas a 375 px: Home,
   Catálogo y Detalle.
2. Generar mediante prompts de visión una especificación para cada vista que
   identifique nombres de componentes, props y relaciones de layout.
3. Documentar las especificaciones derivadas de las capturas en este archivo
   antes de implementar las vistas.

### Especificaciones derivadas de capturas

Las observaciones describen las capturas móviles de 375 px. Las decisiones
de implementación priorizan los requisitos del ejercicio cuando difieren de
la interfaz original.

#### Tipos y componentes compartidos

Interfaces TypeScript propuestas en `/types`:

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

La fuente de una imagen puede representar un placeholder. Los componentes
compartidos propuestos son:

| Componente | Responsabilidad | Props TypeScript | Uso |
| --- | --- | --- | --- |
| `Header` | Mostrar logo, navegación, buscador e iconos de usuario. | `searchValue?: string`, `onSearchChange?: (value: string) => void` | Las tres vistas; buscador en Home. |
| `ListingCard` | Mostrar fotografía placeholder, título, precio por noche y estrellas; enlazar al detalle. | `listing: Listing` | Home y catálogo. |
| `ListingGrid` | Organizar tarjetas y mostrar un estado vacío. | `listings: Listing[]` | Home y catálogo. |
| `LoadingState` | Indicar la carga simulada. | `label?: string` | Home y detalle. |

Cada componente se declara como `const`, tiene una sola responsabilidad y
su propio archivo en `/components`, con un máximo aproximado de 80 líneas de
JSX y lógica. Los componentes que utilizan estado, efectos o interacción son
componentes de cliente. La navegación interna usa exclusivamente `Link`.

#### Home `/`

**Referencia:** [captura móvil de Home](references/home-mobile.png).

**Observado:** buscador superior y categorías horizontales con iconos y
etiquetas; secciones de tarjetas en filas horizontales con fotografías,
favoritos, textos y valoraciones; navegación inferior móvil y pie extenso.

**Decisiones del ejercicio:** sustituir las filas de alojamientos por la
cuadrícula obligatoria y mostrar logo, buscador e iconos de usuario en el
`Header`. Los controles decorativos observados no requieren implementar
favoritos ni autenticación.

| Componente | Responsabilidad | Props TypeScript |
| --- | --- | --- |
| `Header` | Navegación superior; contiene `SearchBar`. | Props compartidas de `Header`. |
| `SearchBar` | Capturar la búsqueda. | `value: string`, `onChange: (value: string) => void` |
| `CategoryFilters` | Mostrar categorías horizontales y resaltar la activa. | `categories: Category[]`, `selectedCategory: string \| null`, `onSelect: (id: string \| null) => void` |
| `ListingGrid`, `ListingCard`, `LoadingState` | Mostrar resultados, tarjetas o carga. | Props compartidas. |

**Jerarquía:** página → `Header` → `SearchBar`; después `CategoryFilters` y
`LoadingState` o `ListingGrid` → `ListingCard`.

**Estado e interacciones:** `useState` mantiene búsqueda, categoría, lista
inicialmente vacía y carga. Cada pulsación actualiza los resultados locales;
la búsqueda y la categoría se aplican conjuntamente. `useEffect` y
`setTimeout` simulan la carga y limpian el temporizador al desmontar. Cada
tarjeta usa `Link` al detalle correspondiente.

**Adaptación:** desde 375 px, categorías desplazables y una columna de
tarjetas; desde 768 px, varias columnas sin desbordamiento horizontal.

**Criterios de aceptación:** 1–3, 5, 8, 14–16 y 22.

#### Catálogo `/catalog`

**Referencia:** [captura móvil de Catálogo](references/catalog-mobile.png).

**Observado:** barra superior con regreso, resumen de búsqueda y filtro;
cantidad de alojamientos; lista vertical con fotografías, valoraciones,
precios y distintivos; franja de mapa, botón flotante de mapa y navegación
inferior.

**Decisiones del ejercicio:** mostrar el mapa como placeholder debajo de
las tarjetas en móvil y a su derecha en escritorio, en lugar de reproducir
su presentación en la captura. La ordenación por precio es funcional; el
mapa interactivo y el date picker funcional son opcionales y quedan fuera
del alcance inicial.

| Componente | Responsabilidad | Props TypeScript |
| --- | --- | --- |
| `Header` | Mostrar la navegación común. | Props compartidas de `Header`. |
| `SortControl` | Elegir el orden por precio. | `value: "asc" \| "desc"`, `onChange: (value: "asc" \| "desc") => void` |
| `ListingGrid`, `ListingCard` | Mostrar los resultados con las tarjetas reutilizadas de Home. | Props compartidas. |
| `MapPlaceholder` | Reservar el área visual del mapa. | Sin props obligatorias. |

**Jerarquía:** página → `Header` → cabecera con cantidad de resultados y
`SortControl` → área con `ListingGrid` → `ListingCard` y `MapPlaceholder`.
El mapa y la cuadrícula son elementos hermanos dentro del área de resultados.

**Estado e interacciones:** `useState` conserva el orden ascendente o
descendente. La lista se ordena por `pricePerNight` sin modificar los datos
originales y su longitud determina la cantidad mostrada. Las tarjetas usan
`Link` al detalle correspondiente.

**Adaptación:** desde 375 px, tarjetas seguidas del mapa; desde 768 px,
tarjetas a la izquierda y mapa a la derecha.

**Criterios de aceptación:** 1, 4–5, 8, 17 y 22.

#### Detalle `/rooms/[id]`

**Referencia:** [captura móvil de Detalle](references/room-mobile.png).

**Observado:** barra superior con regreso, compartir y favorito; fotografía
principal con contador de imágenes; título, ubicación, capacidad, valoración,
reseñas y anfitrión; descripción y servicios con iconos. La zona de reserva
muestra precio total y CTA.

**Decisiones del ejercicio:** añadir botones Anterior y Siguiente a la
galería, aunque no se ven en la captura; mostrar precio por noche y contador
de huéspedes. El regreso enlaza al catálogo. Compartir y favoritos no
requieren funcionalidad y el CTA no realiza reservas reales.

| Componente | Responsabilidad | Props TypeScript |
| --- | --- | --- |
| `Header` | Mostrar la navegación común. | Props compartidas de `Header`. |
| `ImageGallery` | Mostrar placeholders de fotografías y controles de navegación. | `images: ListingImage[]`, `title: string` |
| `ListingDetails` | Mostrar título, ubicación, valoración y reseñas. | `listing: Listing` |
| `HostInfo` | Mostrar avatar placeholder, nombre y años de experiencia. | `host: Host` |
| `AmenitiesList` | Mostrar servicios en una cuadrícula de iconos y etiquetas. | `amenities: Amenity[]` |
| `BookingCard` | Mostrar precio por noche, contador de huéspedes y CTA. | `pricePerNight: number`, `maxGuests: number` |
| `LoadingState` | Indicar la carga simulada. | Props compartidas. |

**Jerarquía:** página → `Header` y enlace al catálogo → `LoadingState` o
contenido con `ImageGallery`, `ListingDetails`, `HostInfo`, descripción,
`AmenitiesList` y `BookingCard`.

**Estado e interacciones:** la ruta obtiene el `id`; el componente
interactivo usa `useEffect` y `setTimeout` para buscar el alojamiento local,
mostrar el indicador y limpiar el temporizador. Si no existe, muestra un
estado claro. `ImageGallery` mantiene el índice con `useState`; los botones
avanzan o retroceden sin salir del rango. `BookingCard` mantiene los huéspedes
con `useState`, entre 1 y `maxGuests`, y no genera una reserva real.

**Adaptación:** desde 375 px, contenido en una columna; desde 768 px, la
información principal y la tarjeta de reserva pueden disponerse en columnas.

**Criterios de aceptación:** 1, 6–8 y 18–22.

#### Correspondencia transversal

Los criterios 9–13 y 22 se aplican a las tres vistas: datos locales, `Link`,
React, Next.js 16 con App Router, TypeScript, Tailwind CSS, carpetas y límites
de componentes, sin estilos inline ni bibliotecas de componentes. El criterio
23 se cubre con estas tres especificaciones derivadas de las capturas. El
criterio 24 mantiene los retos opcionales fuera del alcance inicial y exige un
repositorio público con este archivo en la raíz para la entrega final. La
accesibilidad incluye controles etiquetados, navegación por teclado y textos
alternativos para imágenes.

## Alcance y entrega

- Un mapa interactivo real y un date picker funcional son retos opcionales,
  fuera del alcance obligatorio inicial.
- El repositorio final debe ser público y contener `context.md` en la raíz.

## Criterios de calidad

- Interfaz clara, coherente y usable en móvil y escritorio.
- Estructura accesible: HTML semántico, etiquetas para controles, textos
  alternativos para imágenes y navegación mediante teclado.
- Componentes reutilizables, con responsabilidades y props bien definidos.
- Datos tipados y sin duplicación innecesaria.
- Estados de carga, resultados vacíos y alojamiento inexistente visibles.
- Sin errores de TypeScript ni de lint relacionados con la implementación.

## Criterios de aceptación

1. A 375 px las tres vistas son utilizables sin desbordamiento horizontal;
   desde 768 px el diseño se adapta al espacio disponible.
2. En Home, la búsqueda actualiza los resultados al escribir y el filtro
   por categoría muestra los alojamientos correspondientes.
3. Home muestra un estado de carga simulado antes de presentar los datos.
4. En catálogo se muestra la cantidad de resultados y se pueden ordenar
   por precio en ambos sentidos; el mapa es solo un placeholder.
5. Las tarjetas de Home y catálogo llevan al detalle del alojamiento correcto.
6. En detalle se puede navegar la galería y consultar anfitrión y servicios.
7. El contador de huéspedes respeta los límites y no genera una reserva real.
8. Una búsqueda sin coincidencias y un identificador inexistente muestran
   mensajes claros.
9. La navegación interna funciona con `Link` y no requiere backend.
10. Los componentes interactivos usan estado de React y los estilos de la
    interfaz se implementan con Tailwind CSS.
11. La aplicación usa Next.js 16, React, TypeScript, Tailwind CSS y App Router,
   con rutas en `/app`, componentes en `/components` e interfaces en `/types`.
12. Cada componente se define con `const`, tiene una responsabilidad, vive en
   su propio archivo y no supera aproximadamente 80 líneas de JSX y lógica.
13. No se utilizan estilos inline ni bibliotecas de componentes preconstruidos.
14. La navbar muestra logo, buscador e iconos del menú de usuario; las
   categorías forman una fila horizontal con iconos, etiquetas y selección
   visual gestionada con `useState`.
15. La búsqueda usa `useState` y actualiza la lista local en cada pulsación;
   las tarjetas muestran fotografía placeholder, título, precio y estrellas.
16. La cuadrícula tiene una columna en móvil y varias en escritorio; Home
   parte de una lista vacía y muestra un indicador durante la carga simulada
   con `useEffect` y `setTimeout`.
17. El catálogo ordena por precio con `useState`, reutiliza las tarjetas de
   Home y sitúa el mapa debajo en móvil y a la derecha en escritorio.
18. El detalle carga el alojamiento por el `id` de la URL mediante
   `useEffect` y `setTimeout` y muestra un indicador durante la espera.
19. La galería superior usa placeholders, un índice en `useState` y botones
   Anterior y Siguiente; la cabecera muestra título, estrellas, reseñas y
   ubicación.
20. El detalle muestra avatar placeholder, nombre y años del anfitrión, y
   presenta los servicios en una cuadrícula de iconos y etiquetas.
21. La tarjeta de reserva muestra precio, contador con `useState` y límites
   mínimo y máximo, y un CTA; existe un enlace de regreso al catálogo.
22. Toda navegación interna entre páginas usa `Link`, sin recargas completas.
23. Antes de implementar las vistas, se documenta aquí una especificación por
   vista derivada de tres capturas originales de Airbnb a 375 px, con
   componentes, props y relaciones de layout.
24. El mapa interactivo y el date picker funcional son opcionales; el
   repositorio final es público y contiene este archivo en la raíz.