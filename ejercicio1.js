document.getElementById("btn-telefono").addEventListener("click", () => {
  let tel = document.getElementById("telefono").value;
  let regex = /^\d{10}$/;
  document.getElementById("resultado-telefono").textContent = regex.test(tel) ? "Teléfono válido" : "Teléfono no válido";
});

document.getElementById("btn-url").addEventListener("click", () => {
  let url = document.getElementById("url").value;
  let regex = /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/.*)?$/;
  document.getElementById("resultado-url").textContent = regex.test(url) ? "URL válida" : "URL no válida";
});

document.getElementById("btn-password").addEventListener("click", () => {
  let pass = document.getElementById("password").value;
  let regex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
  document.getElementById("resultado-password").textContent = regex.test(pass) ? "Contraseña válida" : "Contraseña no válida";
});
