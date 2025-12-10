/**
 * Archivo: script.js
 * Propósito: Añadir interactividad y mejorar la usabilidad del sitio web.
 */

document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Desplazamiento Suave (Smooth Scrolling) para la Navegación
    // Esto hace que la página se desplace suavemente cuando se hace clic en un enlace del menú
    
    const navLinks = document.querySelectorAll('nav ul li a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // -70 para dejar espacio para el encabezado fijo
                    behavior: 'smooth'
                });
            }
        });
    });

    // 2. Validación Básica del Formulario de Contacto
    // Previene el envío si los campos requeridos no están llenos
    
    const contactForm = document.getElementById('contacto').querySelector('form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            
            const nombre = document.getElementById('nombre');
            const email = document.getElementById('email');
            const mensaje = document.getElementById('mensaje');
            
            let isValid = true;

            // Validación: Campo de Nombre
            if (nombre && nombre.value.trim() === '') {
                alert('Por favor, ingrese su nombre completo.');
                nombre.focus();
                isValid = false;
            } 
            
            // Validación: Campo de Email
            else if (email && !isValidEmail(email.value.trim())) {
                alert('Por favor, ingrese un correo electrónico válido.');
                email.focus();
                isValid = false;
            }
            
            // Validación: Campo de Mensaje
            else if (mensaje && mensaje.value.trim().length < 10) {
                 alert('Por favor, describa su situación. Mínimo 10 caracteres.');
                 mensaje.focus();
                 isValid = false;
            }

            if (!isValid) {
                e.preventDefault(); // Detiene el envío del formulario si hay errores
                // En un sitio web real, usarías mensajes de error en línea, no alertas.
            } else {
                // Si el formulario fuera a enviarse, mostrar un mensaje de éxito simulado
                // IMPORTANTE: Esta es solo una SIMULACIÓN. El envío real requiere código en el SERVIDOR.
                // e.preventDefault(); 
                // alert('Gracias por contactarnos. Su mensaje ha sido enviado con éxito.');
                
                // Si deseas enviarlo realmente, ¡elimina las dos líneas anteriores!
            }
        });
    }

    /**
     * Función auxiliar para validar el formato de email.
     * @param {string} email - El correo electrónico a verificar.
     * @returns {boolean} - True si el formato es válido.
     */
    function isValidEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

});