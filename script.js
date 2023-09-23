// Función para ocultar el splash y mostrar el contenido principal después de cargar todo
window.addEventListener("load", function () {
  const splashScreen = document.getElementById("splash-screen");
  const mainContent = document.getElementById("main-content");

  // Espera 1.5 segundos antes de ocultar el splash y mostrar el contenido principal
  setTimeout(
    function () {
      splashScreen.style.display = "none";
      mainContent.style.display = "block";
    },
    0,
    1
  ); // Cambia este valor para ajustar el tiempo de espera

  // Agregar evento de clic al contenido principal para cerrar la barra lateral
  mainContent.addEventListener("click", function (event) {
    const sidebar = document.getElementById("sidebar");
    const toggleButton = document.getElementById("toggleButton");

    // Verificar si el clic proviene del botón VER o la barra lateral
    if (event.target !== toggleButton && event.target !== sidebar) {
      sidebar.style.left = "-250px";
    }
  });
});

// Función para mostrar/ocultar el menú al hacer clic en el botón VER
function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.style.left = sidebar.style.left === "0px" ? "-250px" : "0px";
}

// Función para mostrar el contenido del menú seleccionado
function showMenuContent(menuItem) {
  const menuContent = document.getElementById("menu-content");
  menuContent.innerHTML = `Has seleccionado ${menuItem}. Aquí se mostraría el contenido correspondiente al menú.`;
}

/* ACTUALIZAR LA FECHA CADA AÑO */
function actualizarFecha() {
  // Obtenemos la fecha actual
  var fechaActual = new Date();

  // Obtenemos el año actual
  var añoActual = fechaActual.getFullYear();

  // Actualizamos el contenido del elemento HTML con el año actual
  document.getElementById("fecha").textContent = "Año actual: " + añoActual;
}

// Llamamos a la función para actualizar la fecha cuando se carga la página
actualizarFecha();

// Programamos la actualización anual usando setInterval
setInterval(actualizarFecha, 1000 * 60 * 60 * 24 * 365); // Actualizar cada 365 días
