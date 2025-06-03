from flask import Flask, render_template, redirect, url_for
import os

app = Flask(__name__)
app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY', 'default-key-dev')

# Configuración para producción
if os.environ.get('FLASK_ENV') == 'production':
    app.config['DEBUG'] = False
    app.config['PROPAGATE_EXCEPTIONS'] = True
else:
    app.config['DEBUG'] = True

@app.route('/')
def index():
    try:
        return render_template('index.html')
    except Exception as e:
        app.logger.error(f"Error en la ruta /: {str(e)}")
        return "Error al cargar la página", 500

@app.route('/registro', methods=['GET', 'POST'])
def registro():
    try:
        return render_template('iniciosesion/usuario.html')
    except Exception as e:
        app.logger.error(f"Error en la ruta /registro: {str(e)}")
        return "Error al cargar la página de registro", 500

@app.route('/login', methods=['GET', 'POST'])
def login():
    try:
        return render_template('iniciosesion/login.html')
    except Exception as e:
        app.logger.error(f"Error en la ruta /login: {str(e)}")
        return "Error al cargar la página de login", 500

@app.route('/admin/login', methods=['GET', 'POST'])
def admin_login():
    try:
        return render_template('iniciosesion/admin.html')
    except Exception as e:
        app.logger.error(f"Error en la ruta /admin/login: {str(e)}")
        return "Error al cargar la página de admin", 500

# Manejador de errores 404
@app.errorhandler(404)
def not_found_error(error):
    return render_template('404.html'), 404

# Manejador de errores 500
@app.errorhandler(500)
def internal_error(error):
    return render_template('500.html'), 500

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)
