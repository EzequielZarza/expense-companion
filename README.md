# Projecto del curso: Expenses companion

Se desarrollara durante el transcurso del curso, una aplicacion de *tracking* de gastos

## Etapa 1

### Definicion de la entidad principal

La entidad a trabajar sera "Gastos", la cual tendra los campos:

 - payer: *Objeto Usuario*
 - descripcion: *String*
 - amount: *Number*
 - currency: *String*
 - date: *Date*
 - splitType: eg, se pago y se divide en partes iguales, usuario x paga totalidad *String*

### Definicion del Contecto de Negocio

EL problema a resolver con esta API es tener una forma facil de trackear los gastos una o varias personas,
y poder gestionar la division de los gastos de manera automatica

## Etapa 2

### Instalacion y ejecucion del projecto

Para instalar las dependencias del *package.json*, ejecutar ``npm install``

Para ejecutar el servidor: ``npm start``

Para ejecutar el servidor en modo de desarrollo (se volvera a ejecutar al hacer un cambio de codido): ``npm run dev``

### Conexions a MongoDB

La conexion se realiza a MongoDB Atlas, cuya URI y nombre de la DB son obtenidas como variables de entorno, mediante el archivo *.env*


### Endpoints

Se tiene el *endpoint* 'expenses', el cual actualmente soporta las siguientes funcionalidades

<details>
 <summary><code>GET</code> <code><b>/expenses</b></code> <code>gets all expenses done</code></summary>

##### Parameters

> | name      |  type     | data type               | description                                                           |
> |-----------|-----------|-------------------------|-----------------------------------------------------------------------|
> | None      |  none | none   | returns an array of all expenses objects  |


##### Responses

> | http code     | content-type                      | status                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `text/plain;charset=UTF-8`        | `success`                                |

</details>

<details>
 <summary><code>GET</code> <code><b>/expenses/:id</b></code> <code>gets the expense that matches the expense id</code></summary>

##### Parameters

> | name      |  type     | data type               | description                                                           |
> |-----------|-----------|-------------------------|-----------------------------------------------------------------------|
> | id      |  required | string   | the id to be used for searching the specific expense  |


##### Responses

> | http code     | content-type                      | status                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `text/plain;charset=UTF-8`        | `success`                                |
> | `404`         | `text/plain;charset=UTF-8`        | `error`                                |
</details>

<details>
 <summary><code>POST</code> <code><b>/expenses</b></code> <code>creates a new expense</code></summary>

##### Parameters

> | name      |  type     | data type               | description                                                           |
> |-----------|-----------|-------------------------|-----------------------------------------------------------------------|
> | body      |  required | object (JSON)   | the body must follow the Expense Schema, where description and amount ar required values  |


##### Responses

> | http code     | content-type                      | status                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `text/plain;charset=UTF-8`        | `success`                                |
> | `404`         | `text/plain;charset=UTF-8`        | `error`                                |
</details>

<details>
 <summary><code>PATCH</code> <code><b>/expenses/:id</b></code> <code>updates the expense with matching id</code></summary>

##### Parameters

> | name      |  type     | data type               | description                                                           |
> |-----------|-----------|-------------------------|-----------------------------------------------------------------------|
> | body      |  required | object (JSON)   | the body must follow the Expense Schema, it only needs the attribute to be updated  |
> | id      |  required | string   | the id to be used for updating the specific expense  |


##### Responses

> | http code     | content-type                      | status                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `text/plain;charset=UTF-8`        | `success`                                |
> | `404`         | `text/plain;charset=UTF-8`        | `error`                                |
</details>

<details>
 <summary><code>DELETE</code> <code><b>/expenses/:id</b></code> <code>deletes an expense</code></summary>

##### Parameters

> | name      |  type     | data type               | description                                                           |
> |-----------|-----------|-------------------------|-----------------------------------------------------------------------|
> | id      |  required | string   | the id to be used for deleting the specific expense  |


##### Responses

> | http code     | content-type                      | status                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `text/plain;charset=UTF-8`        | `success`                                |
> | `404`         | `text/plain;charset=UTF-8`        | `error`                                |
</details>