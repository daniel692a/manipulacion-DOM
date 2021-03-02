# Manipulación del DOM
# Nodos
### Leer Nodos
* document.getElementById -> Obtener por ID

* parent.getElementByTagName -> Obtener por etiqueta

* parent.getElementByClassName -> Obtener por Clase
### Aunque funcionan estos selectores, es mejor usar:
  * ### parentElement.querySelector:
  Nos permite buscar clases, id's y etiquetas, por ello es necesario indicar el tipo de selector #id .class, este sólo devuelve uno que es el primero que encuentra.
  * ### parentElement.querySelectorAll:
  Nos permite buscar por selectores de CSS igual que querySelector pero notrae todos los que encuentre.

  Es importante mencionar que devuelve un tipo llamado NodeList, que no es un arreglo ya que no cuenta con métodos como map, filter, reduce o some

  Puedo convertir mi NodeList a un array
  ```javascript
  const nodeList = document.querySelectorAll('div');
  const nodeListAsArray = [ ...nodeList ];
  /* Spread Operator */
  ```
