document.getElementById("floating-icon").addEventListener("click", function () {
  document.getElementById("chat-box").classList.toggle("hidden");
});

document.getElementById("close-chat").addEventListener("click", function () {
  document.getElementById("chat-box").classList.add("hidden");
});

// Función para cambiar al modo oscuro
function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle("dark-mode");

  // Guardar el estado en el almacenamiento local
  const isDarkModeEnabled = body.classList.contains("dark-mode");
  localStorage.setItem("dark-mode", isDarkModeEnabled);
}

// Escuchar el clic en el botón
document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("toggle-dark-mode");

  // Establecer el estado inicial según el almacenamiento local
  const isDarkModeEnabled = localStorage.getItem("dark-mode") === "true";
  if (isDarkModeEnabled) {
    document.body.classList.add("dark-mode");
  }

  toggleButton.addEventListener("click", toggleDarkMode);
});

/* Validacion de formulario */
$(document).ready(function () {
  $("#myForm").submit(function (e) {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente

    // Restablece los mensajes de error
    $("#emailError, #messageError, #radioError, #checkboxError").text("");

    // Obtiene los valores de los campos de entrada
    var email = $("#inputEmail3").val();
    var message = $("#inputPassword3").val();
    var radioChecked = $('input[name="gridRadios"]:checked').length;
    var checkboxChecked = $("#gridCheck1").prop("checked");

    // Validación de campos vacíos
    if (email === "") {
      $("#emailError").text("Por favor, introduce tu email.");
    }
    if (radioChecked === 0) {
      $("#radioError").text("Por favor, selecciona una opción de radio.");
    }
    if (!checkboxChecked) {
      $("#checkboxError").text("Por favor, acepta los términos y condiciones.");
    }

    // Si todos los campos requeridos están completos, envía el formulario
    if (email !== "" && radioChecked > 0 && checkboxChecked) {
      this.submit();
    }
  });
});
