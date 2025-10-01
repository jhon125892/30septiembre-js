document.getElementById("btn-hoy").addEventListener("click", () => {
  let hoy = new Date();
  document.getElementById("fecha-hoy").textContent = "Hoy es: " + hoy.toDateString();
});

document.getElementById("btn-navidad").addEventListener("click", () => {
  let hoy = new Date();
  let navidad = new Date(hoy.getFullYear(), 11, 25);
  if (hoy > navidad) {
    navidad.setFullYear(hoy.getFullYear() + 1);
  }
  let diferencia = navidad - hoy;
  let dias = Math.ceil(diferencia / (1000 * 60 * 60 * 24));
  document.getElementById("contador-navidad").textContent = "Faltan " + dias + " días para Navidad";
});
