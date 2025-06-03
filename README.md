# Sistema de Gestión de Usuarios y Administración

Este proyecto es una aplicación web desarrollada con Flask que proporciona un sistema de gestión de usuarios con funcionalidades de registro, inicio de sesión y administración.

## Acerca del Proyecto

GoExplore es una plataforma web diseñada para facilitar la gestión y administración de usuarios, proporcionando una interfaz intuitiva y moderna que permite:
- Registro e inicio de sesión de usuarios
- Panel de administración para gestión de usuarios
- Interfaz personalizada para diferentes roles de usuario
- Sistema de autenticación seguro

## Desarrollado por:
- Aguilar tomas Randal Steven 
- González Domínguez Angel Dario 
- Hernández Storey Roberto de Jesús 
- Jiménez Valdés ya zirí
- Rivera Couoh Yael Eduardo

## Supervisado por:
- Molina Gomez Kevin David

Materia: Fundamentos de Ingeniería de Software
Semestre: 6to semestre
Instituto Tecnologico de Minatitlan. Ver

## 🚀 Características

### Funcionalidades de Usuario
- Registro de nuevos usuarios
- Inicio de sesión para usuarios existentes
- Almacenamiento seguro de contraseñas con hash
- Sistema de mensajes flash para retroalimentación al usuario

### Funcionalidades de Administrador
- Panel de administración protegido
- Inicio de sesión específico para administradores
- Capacidad de limpiar registros de usuarios
- Administrador por defecto preconfigurado

## 🛠️ Tecnologías Utilizadas

- **Framework Principal**: Flask 2.0.1
- **Base de Datos**: SQLAlchemy 1.4.23
- **ORM**: Flask-SQLAlchemy 2.5.1
- **Servidor de Producción**: Gunicorn 20.1.0
- **Base de Datos en Producción**: PostgreSQL (psycopg2-binary 2.9.9)

## 📁 Estructura del Proyecto

```
proyecto/
├── app.py                 # Aplicación principal de Flask
├── requirements.txt       # Dependencias del proyecto
├── render.yaml           # Configuración para despliegue en Render
├── README.md             # Este archivo
├── .gitignore           # Configuración de archivos ignorados por Git
├── static/              # Archivos estáticos (CSS, JS, imágenes)
├── templates/           # Plantillas HTML
│   ├── index.html      # Página principal
│   └── iniciosesion/   # Plantillas de inicio de sesión
│       ├── usuario.html # Formulario de registro de usuario
│       ├── login.html   # Formulario de inicio de sesión
│       └── admin.html   # Formulario de inicio de sesión de admin
└── instance/           # Directorio para la base de datos SQLite
```

## 🗄️ Modelos de Base de Datos

### Usuario
- `id`: Identificador único
- `nombre`: Nombre del usuario
- `email`: Email único del usuario
- `password`: Contraseña hasheada
- `fecha_registro`: Fecha de registro del usuario

### Admin
- `id`: Identificador único
- `username`: Nombre de usuario único
- `password`: Contraseña hasheada

## 🚀 Configuración y Despliegue

### Configuración Local

1. Clonar el repositorio:
```bash
git clone [URL_DEL_REPOSITORIO]
cd [NOMBRE_DEL_DIRECTORIO]
```

2. Crear y activar entorno virtual:
```bash
python -m venv venv
# En Windows:
venv\Scripts\activate
# En Unix o MacOS:
source venv/bin/activate
```

3. Instalar dependencias:
```bash
pip install -r requirements.txt
```

4. Configurar variables de entorno:
```bash
# En Windows:
set SECRET_KEY=tu_clave_secreta
# En Unix o MacOS:
export SECRET_KEY=tu_clave_secreta
```

5. Iniciar la aplicación:
```bash
python app.py
```

### Despliegue en Render

1. Asegurarse de tener todos los archivos necesarios:
   - `requirements.txt`
   - `render.yaml`
   - Código de la aplicación

2. Variables de Entorno en Render:
   - `SECRET_KEY`: Clave secreta para la aplicación
   - `DATABASE_URL`: URL de la base de datos PostgreSQL (proporcionada por Render)

3. La aplicación estará disponible en:
   - `https://flask-app.onrender.com` (o el dominio asignado por Render)

## 🔐 Seguridad

- Todas las contraseñas se almacenan hasheadas usando Werkzeug
- Protección contra inyección SQL mediante SQLAlchemy
- Variables de entorno para información sensible
- Sesiones seguras con SECRET_KEY

## 📝 Rutas de la Aplicación

- `/`: Página principal
- `/registro`: Registro de nuevos usuarios
- `/login`: Inicio de sesión de usuarios
- `/admin/login`: Inicio de sesión de administradores
- `/admin/limpiar-registros`: Endpoint para limpiar registros (solo admin)

## ⚙️ Configuración de Base de Datos

### Desarrollo (SQLite)
- Base de datos local en `instance/goexplore.db`
- Creación automática de tablas al iniciar la aplicación
- Creación automática de admin por defecto

### Producción (PostgreSQL)
- Utiliza la base de datos PostgreSQL proporcionada por Render
- Configuración automática mediante variable de entorno DATABASE_URL
- Migración automática de SQLite a PostgreSQL

## 👥 Usuarios por Defecto

### Administrador
- Username: admin
- Password: password123 (se recomienda cambiar en producción)

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu función (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 🎯 Estado del Proyecto

El proyecto está actualmente en desarrollo activo y acepta contribuciones. 