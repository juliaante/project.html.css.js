var botonVerMas = document.getElementById("ver-mas");
var informacionAdicional = document.getElementById("informacion-adicional");

botonVerMas.addEventListener("click", function() {
  if (informacionAdicional.style.display === "none") {
    informacionAdicional.style.display = "block";
    botonVerMas.innerHTML = "Ver menos";
  } else {
    informacionAdicional.style.display = "none";
    botonVerMas.innerHTML = "Ver más";
  }
  
});
