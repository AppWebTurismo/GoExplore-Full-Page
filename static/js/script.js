// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Crear el botón de volver arriba
    const backToTopButton = document.createElement('button');
    backToTopButton.className = 'back-to-top';
    document.body.appendChild(backToTopButton);

    // Mostrar/ocultar el botón según el scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });

    // Funcionalidad de volver arriba
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Manejar el scroll suave para los enlaces de navegación
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Manejar el botón de inicio de sesión
    const loginButton = document.querySelector('.login-button');
    const modalLogin = document.getElementById('modalLogin');
    const closeModal = document.querySelector('.close-modal');

    if (loginButton && modalLogin) {
        loginButton.addEventListener('click', function() {
            modalLogin.classList.add('show');
        });

        // Cerrar modal con el botón X
        closeModal.addEventListener('click', function() {
            modalLogin.classList.remove('show');
        });

        // Cerrar modal al hacer clic fuera de él
        modalLogin.addEventListener('click', function(e) {
            if (e.target === modalLogin) {
                modalLogin.classList.remove('show');
            }
        });

        // Prevenir que el envío del formulario recargue la página
        const loginForm = modalLogin.querySelector('.login-form');
        if (loginForm) {
            loginForm.addEventListener('submit', function(e) {
                e.preventDefault();
                // Aquí irá la lógica de inicio de sesión cuando la implementemos
            });
        }
    }

    // Si hay un hash en la URL al cargar la página, hacer scroll a esa sección
    if (window.location.hash) {
        const targetElement = document.querySelector(window.location.hash);
        if (targetElement) {
            setTimeout(() => {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }, 100);
        }
    }

    // Manejar clics en los elementos del menú del footer
    document.querySelectorAll('.footer-menu li').forEach(item => {
        item.addEventListener('click', function() {
            const text = this.textContent.trim().toLowerCase();
            let targetId = '';
            
            switch(text) {
                case '📍 descubre':
                    targetId = '#descubrir';
                    break;
                case '🌐 aprende':
                    targetId = '#aprende';
                    break;
                case '🏠 comunidad':
                    targetId = '#comunidad';
                    break;
                case '💬 about':
                    targetId = '#about';
                    break;
            }
            
            if (targetId) {
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}); 