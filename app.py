from flask import Flask, render_template, redirect, url_for
import os

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/registro', methods=['GET', 'POST'])
def registro():
    return render_template('iniciosesion/usuario.html')

@app.route('/login', methods=['GET', 'POST'])
def login():
    return render_template('iniciosesion/login.html')

@app.route('/admin/login', methods=['GET', 'POST'])
def admin_login():
    return render_template('iniciosesion/admin.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=int(os.environ.get('PORT', 5000)))
