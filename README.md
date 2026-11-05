# Casa Nómada — tienda de ropa en Angular

Frontend de una tienda online de ropa con estética editorial y responsive. El proyecto está construido con Angular standalone y datos de catálogo simulados en el cliente; no incluye backend ni procesamiento real de pagos.

## Requisitos

- Node.js compatible con Angular CLI 22
- npm

## Ejecutar en local

```bash
npm install
npm start
```

La aplicación estará disponible en `http://localhost:4200`.

## Compilar

```bash
npm run build
```

## Funcionalidades

- Catálogo de productos con filtros por categoría.
- Carrito lateral interactivo con cantidades, subtotal y eliminación de productos.
- Notificaciones al añadir productos y al suscribirse.
- Diseño adaptable a móvil, tablet y escritorio.
- Etiquetas accesibles, navegación por teclado y carga diferida de imágenes.

## Estructura

- `src/app/app.component.ts`: datos de ejemplo y estado reactivo con signals.
- `src/app/app.component.html`: página de tienda y carrito.
- `src/app/app.component.css`: estilos de componentes y responsive.
- `src/styles.css`: estilos globales.

Las imágenes del catálogo se sirven desde Unsplash y requieren conexión a internet.
