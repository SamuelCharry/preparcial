README 

la aplicación esta organizada en capas

En el pre parcial, yo habia creado un formulario simple y le impmente todo lo del cambiar el idioma de la interfaz,
 header,Context y una prueba de validar campos, realmente no me toco modificar mucho, si no que me toco añadir cosas
 nuevas, porejempo la pagina de favoritos mediante un componente.


-app: define las rutas principales (cada uno es una pag)
                            (/authors,
                             /crear, 
                             /favoritos, ESTO ES NUEVO PARA EL PARCIAL EL RESTO YA ESTABA 
                             /prefs).



-components: contiene los componentes reutilizables como 
                            AuthorList, MODIFICADO PARA EL PARCIAL
                            AuthorForm y, MODIFICADO PARA EL PARCIAL
                            Header.

-context: provee AuthorsContext y UserPrefsContext, ambas son encargadas
de manejar el estado global de autores, edición y favoritos.

-hooks:  API 

-types: define los tipos TypeScript para los autores.


Parte B

Eligí la opción Pruebas unitarias.

Se intento implementar una suite con dos pruebas: 

el render del formulario : valida que los campos birthDate, 
                                                 description, 
                                                 image y name 
                            se rendericen correctamente y estén listos para la interacción.

(ESTA SU FUNCIONO)Validación de envío: simula un envío con campos vacíos y comprueba que el botón de crear permanezca deshabilitado


-COMO EJECUTAR: 

-Clonar el repositorio:

git clone 
cd next-crud-autores https://github.com/SamuelCharry/bookstore-back.git


instalar las dependecias:

npm install


Levantar el back API de autores:

docker build ./ -t bookstore

docker run -d -p 127.0.0.1:8080:8080 bookstore


-Para correr Next.js:

Clonar tambien el repositorio: https://github.com/SamuelCharry/preparcial.git

npm run dev

Acceder en el url local 


-Para Ejecutar pruebas unitarias, tienes que abrir una nueva terminal y luego le das a

npm test

solo va a funcionar una ya que no alcance a implementar la otra  :(







