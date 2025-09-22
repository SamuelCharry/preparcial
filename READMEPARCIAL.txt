Visión general
---------------
Esta aplicación está organizada en capas y es un front-end construido con Next.js y TypeScript para consumir una API de autores.

Estructura del proyecto (capas)
--------------------------------
- app/: define las rutas principales (cada carpeta corresponde a una página de Next.js):
  - /authors  (lista de autores)
  - /crear    (formulario para crear/editar autores)
  - /favoritos (página nueva añadida para el parcial)
  - /prefs    (preferencias de usuario)

- components/: componentes reutilizables:
  - `AuthorList` (modificado para el parcial)
  - `AuthorForm` (modificado para el parcial)
  - `Header`

- context/: proveedores de estado global:
  - `AuthorsContext`  — maneja la lista de autores, operaciones CRUD, edición y favoritos.
  - `UserPrefsContext` — maneja preferencias del usuario (por ejemplo idioma es el la Internacionalización del bono).

- hooks/: hooks personalizados, para encapsular llamadas a la API y lógica de negocio.

- types/: definiciones TypeScript para los modelos (tipos de autor, etc.).

Parte B — Pruebas unitarias
---------------------------
Se eligió la opción de Pruebas unitarias. Se intentó implementar una pequeña suite con dos pruebas principales:

1. Render del formulario (implementada):
    - Verifica que los campos `birthDate`, `description`, `image` y `name` se rendericen correctamente y estén disponibles para interacción.

2. Validación de envío (parcial / no completada):
    - Objetivo: simular un envío con los campos vacíos y comprobar que el botón de crear permanezca deshabilitado. Solo se implementó la primera prueba.

Ubicación de pruebas relevantes:
- `src/app/prefs/prefs-form.test.tsx` (ejemplo de prueba existente en el proyecto)

Cómo ejecutar 
---------------------------------

1) Backend (API de autores)
    - Repositorio (backend): https://github.com/SamuelCharry/bookstore-back.git
    - Clonar y ejecutar con Docker :


git clone https://github.com/SamuelCharry/bookstore-back.git
cd bookstore-back
docker build . -t bookstore
docker run -d -p 127.0.0.1:8080:8080 bookstore


    - La API quedará expuesta en http://127.0.0.1:8080 

2) Frontend (esta aplicación)

# desde la raíz del repo 
npm install
npm run dev


3) Ejecutar pruebas unitarias


# desde la raíz del frontend
npm test


    - Nota: Actualmente solo una prueba está completamente implementada :(




