# Transporte Castoya — Landing page

Landing page tipo biolink de **Transporte Castoya**, servicio de transporte, mudanzas y traslados en La Paz, Bolivia.

La implementación activa está desarrollada con React, TypeScript y Vite. Se publica automáticamente en GitHub Pages mediante GitHub Actions.

## Enlaces

- [Sitio publicado en GitHub Pages](https://transportecastoya.github.io/lp/)
- [Workflow de despliegue](https://github.com/transportecastoya/lp/actions/workflows/deploy-pages.yml)
- [Repositorio en GitHub](https://github.com/transportecastoya/lp)

## Tecnologías

- React 18
- TypeScript
- Vite 5
- Bootstrap Icons
- CSS responsivo
- GitHub Actions y GitHub Pages

## Estado del proyecto

El desarrollo actual se realiza en [`react/`](./react). La carpeta [`angular/`](./angular) conserva la versión anterior como referencia y no forma parte del despliegue vigente.

Los archivos compilados que existen en la raíz corresponden a publicaciones anteriores. El workflow actual genera una compilación limpia desde `react/` y publica únicamente `react/dist`.

## Requisitos

- Node.js 20, la misma versión utilizada por GitHub Actions
- npm

## Desarrollo local

```bash
cd react
npm ci
npm run dev
```

Vite mostrará en la terminal la dirección local, normalmente `http://localhost:5173/lp/`.

## Comandos disponibles

Todos los comandos se ejecutan dentro de `react/`:

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Inicia el servidor de desarrollo con recarga automática. |
| `npm run build` | Genera la versión de producción en `react/dist` y crea `404.html` para GitHub Pages. |
| `npm run preview` | Sirve localmente la compilación de producción. |
| `npm run typecheck` | Comprueba los tipos de TypeScript sin generar archivos. |

Para una instalación reproducible se recomienda `npm ci`. Use `npm install` solamente cuando necesite agregar o actualizar dependencias y guardar los cambios en `package-lock.json`.

## Estructura principal

```text
.
├── .github/workflows/deploy-pages.yml  # Compilación y despliegue automático
├── react/                              # Aplicación activa
│   ├── public/                         # Imágenes, favicon, robots.txt y sitemap.xml
│   ├── src/
│   │   ├── components/                 # Vista del biolink y botones
│   │   ├── data/content.ts             # Enlaces visibles de la página
│   │   ├── types/                      # Tipos de TypeScript
│   │   ├── App.tsx                     # Componente raíz
│   │   └── index.css                   # Estilos globales y responsivos
│   ├── index.html                      # Metadatos SEO y datos estructurados
│   ├── package.json                    # Dependencias y scripts
│   └── vite.config.ts                  # Configuración de Vite y ruta base /lp/
├── angular/                            # Implementación anterior, solo como referencia
└── README.md
```

## Actualizar el contenido

Los botones y sus destinos se administran en `react/src/data/content.ts`.

Cada entrada puede definir:

- `label`: texto visible.
- `url`: enlace de destino.
- `icon`: clase de Bootstrap Icons.
- `highlight`: aplica el estilo de botón principal.
- `social`: identifica enlaces de redes sociales.

La cabecera, el banner y la composición de la página se encuentran en `react/src/components/LinkBio.tsx`. Los estilos están en `react/src/index.css`.

Los archivos servidos sin transformación —imágenes sociales, favicons, `robots.txt`, `sitemap.xml` y la verificación de Google— están en `react/public/`.

Al cambiar el dominio, el nombre del repositorio o la ruta pública también se deben revisar:

- `base` en `react/vite.config.ts`.
- La URL canónica, Open Graph, Twitter Card y JSON-LD en `react/index.html`.
- Las URL declaradas en `react/public/robots.txt` y `react/public/sitemap.xml`.

## Validación antes de publicar

```bash
cd react
npm ci
npm run typecheck
npm run build
npm run preview
```

Después de compilar, revise la vista previa y compruebe que los botones externos, imágenes, favicon y metadatos apunten a los destinos correctos.

## Despliegue

El workflow [`.github/workflows/deploy-pages.yml`](./.github/workflows/deploy-pages.yml) se ejecuta:

- automáticamente con cada `push` a `main`;
- manualmente desde **GitHub → Actions → Deploy React to GitHub Pages → Run workflow**.

El proceso instala las dependencias con `npm ci`, compila la aplicación React, valida elementos esenciales del resultado, sube `react/dist` como artefacto y lo publica mediante GitHub Pages.

La ruta base de Vite es `/lp/` porque el sitio se sirve como página de proyecto. No debe cambiarse a `/` mientras se publique en `https://transportecastoya.github.io/lp/`.

## Consideraciones

- No edite manualmente `react/dist`; se vuelve a generar en cada compilación.
- No agregue credenciales, tokens ni datos privados al repositorio.
- Mantenga `package-lock.json` versionado para que el entorno local y GitHub Actions instalen las mismas versiones.
- Compruebe los números telefónicos, redes sociales y enlaces comerciales antes de cada publicación.
