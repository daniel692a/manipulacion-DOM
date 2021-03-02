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
# Crear Nodos con JavaScript

## El crear un elemento no quiere decir que se agregue al DOM, esto sucede en memoria

* ```javascript
  document.createElement()
  ```

  Le puedo pasar como parámetro un div, h1, section, etc, se pasa cualquier tipo de etiqueta

* ```javascript
  document.createTextContent()
  ```

  No importa si pasó un nombre de tag, siempre crea texto

# Agregar Nodos

## Ya que lo tengo creado lo puedo agregar al DOM

* ```javascript
  parentElement.appendChild();
  ```

  Siempre nos va a agregar un nodo al final del parent que tenga, es muy antiguo y se recomienda usar append

* ```javascript
  parentElement.append();
  ```

  Es la evolución de appendChild, se puede agregar más de un nodo, puedes agregar texto. También se agregan al final

* ```javascript
  document.insertBefore(nodo, referencia);
  ```

  Ya hemos hecho que se agreguen al final, pero puedo insertarlo antes con este método,

  #### El nodo de referencia tiene que ser hijo directo del nodo base

  ```html
  <section class="form">
       <h1>Nombre</h1>
       <input type="text" class="name">
  </section>
  ```

  ```javascript
  const node = document.createElement("h2");
  const parentElement = document.querySelector(".form");
  const reference = document.querySelector(".name");
  parentElement.insertBefore(node, reference);
  ```

* ```javascript
  reference.insertAdjacentElement();
  ```
  Es complicado pero muy poderoso

  ```javascript
  referecia.insertAdjacentElement( Poscición: 'beforebegin', 'afterbegin', 'beforeend', 'afterend', nuevoNodo);
  ```

  Su poder se debe a las opciones de colocar mi nodo:

  ```javascript
  referencia.insertAdjacentElement("beforebegin", nodo);
  ```

  Lo inserta antes de la referencia

  ```javascript
  referencia.insertAdjacentElement("afterbegin", nodo);
  ```

  Lo inserta justo después de donde incia mi referencia, si es un h2, después de donde se abre mi h2 se coloca ahí, ejemplo:

  ```javascript
  const nodo = document.createElement("span");
  ref.insertAdjacentElement("afterbegin", nodo);
  ```

  Resultado:

  ```html
  <h2>
      <span></span>Bienvenido
  </h2>
  ```

  ```javascript
  ref.insertAdjacentElement("beforeend", nodo);
  ```

  Lo inserta antes de donde cierra mi referencia, si seguimos el ejemplo anterior nos da como resultado:

  ```html
  <h2>
      Bienvenido<span></span>
  </h2>
  ```

  ```javascript
  ref.insertAdjacentElement("afterend", nodo);
  ```

  Lo coloca después del cierre de mi nodo de referencia

Para comprender un como más veamos el siguiente ejemplo:

```html
'beforebegin'
<nodoRefencia>
    'afterbegin'
    Contenido
    'beforeend'
</nodoRefencia>
'afterend'
```

# Otras Formas

## Existen otros dos métodos para agregar nodos, pero no deben ser usadas porque puede escribir XSS que es peligroso

* ```javascript
  node.outerHTML()
  ```

  Nos sirve para leer HTML porque transforma el nodo selecionado y tranforma todo su contenido a String

* ```javascript
  node.innerHTML()
  ```

  Nos sirve para escribir HTML y texto

### Si utilizamos innerHTML debemos pasarlo por un proceso de limpieza para evitar problemas