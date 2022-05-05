let btnAlt = document.getElementById("btnAltura");
btnAlt.addEventListener("click", () => {
  let alturaPermitida = 1.3;
  let alturaPersona = dato1.value;
  if (alturaPersona <= alturaPermitida) {
    console.log("La persona no puede subir al juego");
  } else {
    console.log("La persona puede subir al juego");
  }
});
