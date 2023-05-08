
function menu() {
    let opcion = document.getElementById("opcion");
  while (opcion != 0) {
    opcion = parseInt(prompt("------------------MENU------------------\n1. Lectura de datos\n2. Crear Objeto\n3. Mostrar objeto\n4. Crear Array\n5. Mostrar Array\n6. Elimine primer elemento del array\n7. Elimine ultimo elemento del array\n8. Elimine cualquier elemento del array\n9. Agregar elemento al comienzo del array\n10. Agregar elemento al final del array\n11. Crear array con objetos\n12. Iterar array con objetos con FOR\n13. Iterar array con objetos con FOREACH\n14. Iterar array con objetos con MAP y crear copia\n15. Proceso personal\n0. Salir"));
    switch(opcion) {
      case 1:
        //Lectura de datos
        alert("Has seleccionado la opción de Lectura de datos");
        break;
      case 2:
        //Crear objeto
        alert("Has seleccionado la opción de Crear Objeto");
        break;
      case 3:
        //Mostrar objeto
        alert("Has seleccionado la opción de Mostrar objeto");
        break;
      case 4:
        //Crear array
        alert("Has seleccionado la opción de Crear Array");
        break;
      case 5:
        //Mostrar array
        alert("Has seleccionado la opción de Mostrar Array");
        break;
      case 6:
        //Eliminar primer elemento del array
        alert("Has seleccionado la opción de Eliminar primer elemento del array");
        break;
      case 7:
        //Eliminar último elemento del array
        alert("Has seleccionado la opción de Eliminar último elemento del array");
        break;
      case 8:
        //Eliminar cualquier elemento del array
        alert("Has seleccionado la opción de Eliminar cualquier elemento del array");
        break;
      case 9:
        //Agregar elemento al comienzo del array
        alert("Has seleccionado la opción de Agregar elemento al comienzo del array");
        break;
      case 10:
        //Agregar elemento al final del array
        alert("Has seleccionado la opción de Agregar elemento al final del array");
        break;
      case 11:
        //Crear array con objetos
        alert("Has seleccionado la opción de Crear array con objetos");
        break;
      case 12:
        //Iterar array con objetos con FOR
        alert("Has seleccionado la opción de Iterar array con objetos con FOR");
        break;
      case 13:
        //Iterar array con objetos con FOREACH
        alert("Has seleccionado la opción de Iterar array con objetos con FOREACH");
        break;
      case 14:
        //Iterar array con objetos con MAP y crear copia
        alert("Has seleccionado la opción de Iterar array con objetos con MAP y crear copia");
        break;
      case 15:
        //Proceso personal
        alert("Has seleccionado la opción de Proceso personal");
        break;
      case 0:
        //Salir
        alert("Saliendo del programa");
        break;
      default:
        alert("Opción no válida");
        break;
    }
  }
}
