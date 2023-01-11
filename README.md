# Challenge tuGerente API - Node.js & Express

## Endpoints creados

* ### ***GET /rooms***
#### _Es necesario para que los clientes puedan ver las habitaciones disponibles para reservar y seleccionar una._
#### _*Este endpoint devuelve una lista de habitaciones disponibles para reservar, junto con información adicional como el precio, las características, etc.*_

* ### ***POST /reservations***
#### Es necesario para que los clientes puedan crear una reserva proporcionando los detalles necesarios.
#### Este endpoint permite a los clientes crear una reserva, proporcionando información como el ID de la habitación seleccionada, el rango de fechas de estadía, los datos de facturación y los detalles de identificación del cliente. 


* ### ***GET /reservations/:id***
#### _Es necesario para que los clientes puedan ver los detalles de una reserva específica._
#### _Este endpoint permite a los clientes ver los detalles de una reserva específica, utilizando el ID de la reserva como parámetro._

* ### ***PUT /reservations/:id***
#### _Es necesario para que los clientes puedan actualizar los detalles de una reserva existente._
#### _Este endpoint permite a los clientes actualizar una reserva existente, como cambiar el rango de fechas de estadía, los datos de facturación, etc._


* ### ***DELETE /reservations/:id***
#### _Es necesario para que los clientes puedan cancelar una reserva existente y modificar el estado._
#### _Este endpoint permite a los clientes cambiar el estado de una reserva a "Cancelado", utilizando el ID de la reserva como parámetro._


* ### ***GET /reservations***
#### _Es necesario para obtener un listado de reservas con un estado específico._


* ### ***PUT /reservations/:id/pay***
#### _Es necesario para que los clientes puedan actualizar el estado de una reserva a "Pagado", proporcionando el importe pagado y el método de pago._


