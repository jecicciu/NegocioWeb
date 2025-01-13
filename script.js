document.querySelector("form").addEventListener("submit", function(event) {
  if (!document.getElementById("nombre").value || !document.getElementById("email").value || !document.getElementById("mensaje").value) {
      event.preventDefault();
      alert("Por favor, completa todos los campos.");
  }
});
