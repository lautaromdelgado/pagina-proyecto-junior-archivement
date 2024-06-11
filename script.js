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

/* Activar modo oscuro */
document
  .getElementById("darkModeToggle")
  .addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    var darkModeButton = document.getElementById("darkModeToggle");
    if (document.body.classList.contains("dark-mode")) {
      darkModeButton.innerText = "Modo Claro ☀️";
      darkModeButton.classList.remove("btn-dark");
      darkModeButton.classList.add("btn-light");
    } else {
      darkModeButton.innerText = "Modo Oscuro 🌙";
      darkModeButton.classList.remove("btn-light");
      darkModeButton.classList.add("btn-dark");
    }
  });
