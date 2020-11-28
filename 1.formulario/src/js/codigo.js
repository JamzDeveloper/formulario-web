nombre = document.querySelector(".nombre");
apellido = document.querySelector(".apellido");
correo = document.querySelector(".correo");
passowrd = document.querySelector(".password");
checkbox = document.querySelector(".checkbox");
registrar = document.querySelector(".registrar");
fail = document.querySelector(".fail");

var envio = false;
var inicio = true;
var regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/;
registrar.addEventListener("click", (e) => {
  if (nombre.value.length < 5) {
    envio = false;
  } else {
    envio = true;
  }
  if (apellido.value.length < 4) {
    envio = false;
  } else {
    envio = true;
  }
  if (regexEmail.test(correo)) {
    envio = false;
  } else {
    envio = true;
  }
  if (passowrd.value.length < 8) {
    envio = false;
  } else {
    envio = true;
  }
  if (checkbox.checked) {
    envio = true;
  } else {
    envio = false;
  }
  if (inicio == envio) {
    alert("Datos enviados");
    nombre.value = "";
    apellido.value = "";
    correo.value = "";
    password.value = "";
    checkbox.checked = false;
    fail.innerHTML = "";
  } else {
    mensaje = `<p style="color:#95221a"><b style="background:#2c3e50" sytle=> Formulario incorrecto</b></p>`;
    fail.innerHTML = mensaje;

    const eliminar = setInterval(() => {
      fail.innerHTML = "";
    }, 4000);
    setTimeout(() => {
      clearInterval(eliminar);
    }, 4010);
  }

});

