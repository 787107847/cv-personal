# Luis Miguel Trujillo — Portfolio profesional

Currículum web y portfolio de **Luis Miguel Trujillo**, Ingeniero Informático (Cybersecurity · AI · Cloud · IT Infrastructure).
Estética **Dark Neon Tech**, mobile-first, construido solo con **HTML5, CSS3 y JavaScript vanilla**.
No usa frameworks, backend ni pasos de compilación, así que funciona directamente en GitHub Pages.

## Estructura

```text
/
├── index.html              # Estructura semántica, SEO y secciones
├── favicon.svg
├── README.md
└── assets/
    ├── css/style.css       # Variables de diseño, layout, componentes y responsive
    ├── js/data.js          # Contenido editable: competencias, proyectos y certificaciones
    ├── js/main.js          # Navegación, menú móvil, render de datos, carrusel y animaciones
    └── img/
        ├── og-image.svg    # Imagen Open Graph
        ├── projects/       # Imágenes de proyectos
        └── certifications/ # Insignias de certificaciones (opcional)
```

## Ver en local

Abre `index.html` en el navegador, o levanta un servidor estático:

```bash
python3 -m http.server 8080
# http://localhost:8080
```

## Mantenimiento

### Añadir un proyecto
Agrega un objeto al array `window.PROJECTS` en `assets/js/data.js`:

```js
{
  title: 'Nombre del proyecto',
  subtitle: 'Descripción corta',            // opcional
  year: '2026',
  category: 'IoT y Sostenibilidad',         // opcional
  description: 'Descripción del proyecto.',
  image: 'assets/img/projects/mi-proyecto.jpg', // opcional (16:9 recomendado)
  imageAlt: 'Texto alternativo de la imagen',
  tags: ['Python', 'AWS'],                  // tecnologías (opcional)
  github: 'https://github.com/usuario/repo',// '' si no existe → se oculta el botón
  demo: ''                                  // '' si no existe → se oculta el botón
}
```

### Añadir una certificación
Agrega un objeto a `window.CERTIFICATIONS` en `assets/js/data.js`. El carrusel y sus indicadores se actualizan solos.

```js
{
  title: 'Nombre de la certificación',
  issuer: 'Entidad emisora',
  year: '2026',
  area: 'Ciberseguridad',                         // opcional
  badge: 'assets/img/certifications/insignia.png',// opcional; sin él se muestra una tarjeta tipográfica
  credentialUrl: 'https://...'                    // opcional; sin él no se muestra "Verificar credencial"
}
```

### Actualizar competencias
Edita `window.SKILLS` en `assets/js/data.js`. Iconos disponibles: `code`, `database`, `cloud`, `shield` y `git` (se definen en `ICONS` dentro de `main.js`).

### Actualizar experiencia, educación, idiomas o contacto
Edita directamente las secciones correspondientes de `index.html` (`#experiencia`, `#educacion`, `#idiomas` y `#contacto`). Cada bloque de experiencia es un `<li class="timeline__item">`; copia uno para añadir otro y mantén el orden de más reciente a más antiguo.

### Cambiar enlaces
Los enlaces de LinkedIn, el correo y el sitio anterior están en el hero, en `#contacto` y en el footer de `index.html`.

### Cambiar colores
Todos los colores están centralizados en `:root` al inicio de `assets/css/style.css` (`--bg`, `--neon`, `--electric`, etc.).

### Imágenes e insignias
- Proyectos: guarda la imagen en `assets/img/projects/` y referencia la ruta en `image`.
- Certificaciones: guarda la insignia en `assets/img/certifications/` y referencia la ruta en `badge`.
- Usa siempre rutas relativas (sin `/` inicial) para que funcionen en GitHub Pages.

## Publicar en GitHub Pages

1. Haz merge de los cambios en la rama de despliegue (`main`).
2. En el repositorio ve a **Settings → Pages**.
3. En **Build and deployment**, elige **Source: Deploy from a branch**, rama **`main`** y carpeta **`/ (root)`**, y luego **Save**.
4. El sitio quedará disponible en `https://<usuario>.github.io/cv-personal/` en uno o dos minutos.

No se ha configurado ningún dominio personalizado (no hay archivo `CNAME`).

## Decisiones técnicas

- **Sin dependencias:** solo HTML, CSS y JS nativos. Las fuentes Inter y Space Grotesk se cargan desde Google Fonts y tienen fuentes del sistema como respaldo.
- **Contenido centralizado:** proyectos, certificaciones y competencias se renderizan desde `data.js` para que añadir elementos no requiera tocar el HTML. El texto se escapa antes de insertarse.
- **Carrusel:** usa CSS Scroll Snap (táctil nativo) y JS para flechas, teclado (←/→/Inicio/Fin) e indicadores. Los controles se ocultan cuando todas las tarjetas caben en pantalla.
- **Animaciones:** las secciones aparecen con IntersectionObserver, los dibujos del hero se animan una sola vez y las tarjetas tienen efectos al pasar el cursor. Se respeta `prefers-reduced-motion` y no hay animaciones infinitas.
- **Accesibilidad:** HTML semántico, enlace "Saltar al contenido", foco visible, `aria-expanded` en el menú, cierre con Escape, indicador de sección activa (`aria-current`) y `alt` en las imágenes.
- **Privacidad:** el teléfono del CV no se publica.
