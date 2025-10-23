const arButton = document.getElementById('ar-button-js');

function manejarBotonAR() {
    // Esto se ejecuta JUSTO antes de que se inicie la experiencia AR en el móvil.
    alert('¡El visor AR se está iniciando! Usa dos dedos (gesto de pinza) para escalar y reubicar el modelo.');
}

// Vincula la función 'manejarBotonAR' al evento de 'click' del botón
if (arButton) {
    arButton.addEventListener('click', manejarBotonAR);
}
