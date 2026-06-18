# Documentación del Desarrollo del Blog: Vida Saludable

## 1. Introducción
El objetivo de esta actividad ha sido poner en práctica los conocimientos fundamentales de desarrollo web (HTML y CSS) mediante la creación de un blog estático centrado en el tema de la vida saludable. Se han priorizado buenas prácticas de diseño y semántica web, manteniendo el código limpio y accesible.

## 2. Herramientas Utilizadas
Para el desarrollo de la actividad, se seleccionó **Eleventy (11ty)** como generador de sitios estáticos. La elección se debe a que Eleventy es extremadamente ligero y permite trabajar directamente con HTML, CSS puro y Markdown, sin la sobrecarga de frameworks JavaScript complejos (como React o Vue). Esto garantiza que el enfoque principal se mantenga en los fundamentos requeridos por la actividad.

## 3. Arquitectura y Estructura del Proyecto
El proyecto se estructuró de la siguiente manera:
- **`src/`**: Carpeta principal del código fuente.
  - **`_includes/`**: Contiene las plantillas base HTML (`base.njk`, `post.njk`).
  - **`css/`**: Contiene la hoja de estilos principal (`style.css`), donde se definieron variables CSS, Flexbox y Grid.
  - **`images/`**: Almacena las imágenes autogeneradas utilizadas para ilustrar cada entrada.
  - **`posts/`**: Contiene las tres entradas del blog escritas en formato Markdown.
  - **`index.njk`**: Página principal del blog encargada de listar todas las entradas de forma dinámica.

## 4. Proceso de Desarrollo
1. **Configuración Inicial:** Se inicializó el proyecto Node.js (`npm init`) y se instaló Eleventy como dependencia de desarrollo.
2. **Diseño Visual (CSS):** Se creó un diseño atractivo y moderno ("Vida Saludable") utilizando una paleta de colores vibrante (verdes y naranjas). Se implementó un layout responsivo mediante CSS Grid para las tarjetas de las entradas, asegurando una buena visualización tanto en escritorio como en dispositivos móviles.
3. **Plantillas HTML:** Se escribieron los *layouts* base asegurando el uso de etiquetas semánticas (`<header>`, `<main>`, `<article>`, `<section>`, `<footer>`).
4. **Generación de Contenido:** Se redactaron tres entradas relacionadas con hábitos saludables sin la presión del gimnasio:
   - Comer bien sin obsesionarse.
   - Caminar: El ejercicio subestimado.
   - Ejercicio en casa sin estrés.
5. **Compilación:** Finalmente, mediante el comando de compilación de Eleventy, todos los archivos Markdown y plantillas se transformaron en un sitio estático final listo para ser desplegado.

## 5. Conclusión
El uso de un generador estático combinado con HTML y CSS puro ha permitido construir un sitio web rápido, navegable y visualmente atractivo. Se cumplieron todos los requisitos solicitados: tres entradas navegables, diseño cuidado y código estructurado.
