document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault();  // Evita que el formulario se envíe realmente
  alert("Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.");
  // Puedes agregar código para enviar el formulario al backend si es necesario
});
