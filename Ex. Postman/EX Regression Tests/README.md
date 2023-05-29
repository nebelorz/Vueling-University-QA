Para correr los tests en Newman ejecutar el siguiente comando desde consola:

    newman run Regression_Tests.postman_collection.json -e PROD_PETSTORE.postman_environment.json
Si quisieras generar un nuevo report, añadir al comando de arriba:

    -r cli,htmlextra

❗El archivo "dog.jpg" hay que meterlo en "C:\Users\USERNAME\Postman\files", si no, el test "Add image to pet" fallará al no encontrar el archivo.

Docu de la API: https://petstore.swagger.io/