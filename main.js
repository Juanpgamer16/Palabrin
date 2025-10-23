// Obtiene el botón de AR usando el ID definido en el HTML
const arButton = document.getElementById('ar-button-js');

function manejarBotonAR() {
    // Esta alerta se mostrará al usuario justo antes de que se inicie la experiencia AR en el móvil.
    alert('¡El visor AR se está iniciando! Sigue las instrucciones de tu teléfono para colocar el modelo.');
    
    // Aquí puedes añadir cualquier otra funcionalidad de JavaScript que necesites, 
    // como rastrear que el botón fue presionado (Analytics).
}

// Vincula la función 'manejarBotonAR' al evento de 'click' del botón
if (arButton) {
    arButton.addEventListener('click', manejarBotonAR);
}