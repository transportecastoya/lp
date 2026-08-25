# Prompt para vista previa de WhatsApp y redes sociales

```text
Te paso esta imagen. Quiero que la mejores y la utilices como vista previa profesional cuando comparta mi página en WhatsApp, Facebook y Messenger.

Datos:

URL oficial: [PEGA AQUÍ EL ENLACE]
Título: [NOMBRE DEL NEGOCIO]
Descripción: [DESCRIPCIÓN CORTA]

Requisitos para la imagen:

- Formato JPG.
- Resolución 1200×630.
- Peso optimizado.
- Sin transparencia.
- Contenido centrado.
- Márgenes seguros para evitar recortes.
- Conservar correctamente el logo, colores, textos y teléfonos.
- No inventar ni agregar información.
- Usar un nombre estable, por ejemplo `principal-negocio.jpg`.

Configura en el HTML:

- Favicon.
- Título y descripción.
- Open Graph completo.
- `og:url` con la URL oficial.
- `og:image` con una URL absoluta.
- `og:image:url`.
- `og:image:secure_url`.
- Tipo `image/jpeg`.
- Dimensiones 1200×630.
- Texto alternativo.
- Twitter Card con `summary_large_image`.

No cambies el diseño ni agregues secciones. Solo mejora la imagen, configura la vista previa social y el favicon.

Después:

1. Compila el proyecto.
2. Corrige cualquier error.
3. Publica los cambios.
4. Comprueba que la página y la imagen respondan HTTP 200.
5. Verifica el HTML simulando el rastreador de WhatsApp.
6. Confirma la URL final que debo compartir.
7. Recuérdame usar el Depurador de contenido compartido de Meta si WhatsApp conserva una vista previa antigua.
```

# Prompt para SEO e indexación en Google

```text
Quiero optimizar esta página para que pueda aparecer correctamente en Google y otros buscadores.

Datos del sitio:

URL oficial: [PEGA AQUÍ LA URL DEFINITIVA]
Nombre del sitio o negocio: [NOMBRE]
Descripción: [DESCRIPCIÓN CLARA]
Ciudad y país: [UBICACIÓN]
Teléfono principal: [TELÉFONO]
Servicios o temas principales: [LISTA DE SERVICIOS O PALABRAS CLAVE]
Redes sociales oficiales: [ENLACES]

Requisitos de SEO:

- Crear un título SEO claro y natural.
- Crear una meta descripción relevante.
- Añadir una URL canónica absoluta.
- Permitir la indexación mediante `robots`.
- Añadir `max-image-preview:large`.
- Configurar idioma, región y ubicación cuando corresponda.
- Optimizar los metadatos Open Graph y Twitter Card.
- Añadir datos estructurados JSON-LD usando el tipo de Schema.org adecuado para el sitio.
- Incluir nombre, descripción, URL, imagen, logo, teléfono, ubicación, servicios y redes oficiales cuando esos datos existan.
- No inventar direcciones, horarios, precios, teléfonos ni información del negocio.
- Incorporar las palabras clave de forma natural y evitar repetirlas excesivamente.
- Mantener una descripción visible y útil para los visitantes.

Archivos técnicos:

- Crear `robots.txt` y permitir el rastreo.
- Crear `sitemap.xml` con la URL canónica absoluta.
- Colocar ambos archivos en la raíz pública del sitio.
- Añadir la URL del sitemap dentro de `robots.txt` cuando sea técnicamente correcto para el dominio.
- Comprobar que `robots.txt` y `sitemap.xml` respondan HTTP 200.
- Validar que `sitemap.xml` sea XML correcto.

Google Search Console:

- Indicarme cómo crear una propiedad de tipo Prefijo de URL.
- Si adjunto un archivo HTML de verificación de Google, revisar su contenido y publicarlo sin cambiar el nombre ni el texto.
- Comprobar que el archivo de verificación responda HTTP 200.
- Recordarme pulsar Verificar en Search Console.
- Indicarme cómo enviar `sitemap.xml`.
- Indicarme cómo inspeccionar la URL principal y solicitar su indexación.
- No solicitar ni almacenar mi contraseña de Google.
- Aclarar que enviar varias veces la misma URL no acelera la indexación.

Implementación y publicación:

- No cambies el diseño ni agregues secciones innecesarias.
- Conserva la tecnología y estructura actuales del proyecto.
- Compila el proyecto y corrige cualquier error relacionado.
- Publica únicamente los archivos necesarios.
- Comprueba la página simulando un rastreador de Google.
- Verifica el título, descripción, URL canónica, JSON-LD, robots y sitemap en la versión pública.
- Confirma la URL final y enumera los pasos que debo completar manualmente en Search Console.

Importante:

- El SEO orgánico, Search Console y la indexación no requieren pagar anuncios.
- No prometas una posición específica ni una aparición inmediata en Google.
- Explícame que Google puede tardar días o semanas en rastrear e indexar la página.
```
