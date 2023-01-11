# Challenge tuGerente API - Node.js & Express

## ENDPOINTS

* ### ***GET /rooms***
#### _Es necesario para que los clientes puedan ver las habitaciones disponibles para reservar y seleccionar una._
#### _*Este endpoint devuelve una lista de habitaciones disponibles para reservar, junto con información adicional como el precio, las características, etc.*_

* ### ***POST /reservations***
#### Es necesario para que los clientes puedan crear una reserva proporcionando los detalles necesarios.
#### Este endpoint permite a los clientes crear una reserva, proporcionando información como el ID de la habitación seleccionada, el rango de fechas de estadía, los datos de facturación y los detalles de identificación del cliente. 
####  El estado por defecto de una nueva reserva es PENDIENTE.


* ### ***GET /reservations/:id***
#### _Es necesario para que los clientes puedan ver los detalles de una reserva específica._
#### _Este endpoint permite a los clientes ver los detalles de una reserva específica, utilizando el ID de la reserva como parámetro._

* ### ***PUT /reservations/:id***
#### _Es necesario para que los clientes puedan actualizar los detalles de una reserva existente._
#### _Este endpoint permite a los clientes actualizar una reserva existente, como cambiar el rango de fechas de estadía, los datos de facturación, etc._


* ### ***DELETE /reservations/:id***
#### _Es necesario para que los clientes puedan cancelar una reserva existente y modificar el estado._
#### _Este endpoint permite a los clientes cambiar el estado PENDIENTE o PAGADO de una reserva a CANCELADO, utilizando el ID de la reserva como parámetro._


* ### ***GET /reservations***
#### _Es necesario para obtener un listado de reservas con un estado específico._


* ### ***PUT /reservations/:id/pay***
#### _Es necesario para que los clientes puedan actualizar el estado de una reserva PENDIENTE a PAGADO, proporcionando el importe pagado y el método de pago._

---

## DOCKER

1. Configurar variables de entorno.

2. 

```
docker-compose up -d
```

3. Una vez que los contenedores estén en ejecución, ejecutar los siguientes comandos para migrar y seedear la base de datos.

```
docker exec api-challenge-tugerente-server-1 npm run init:db  
```

```
docker exec api-challenge-tugerente-server-1 npm run seeder 
```

4. El puerto por defecto es: 3000.

---

## POSTMAN

1. Importar en Postman el archivo de configuracion llamado "api-tugerente.postman_collection.json" del repositorio para tener acceso a la colección y a los distintos endpoints.



