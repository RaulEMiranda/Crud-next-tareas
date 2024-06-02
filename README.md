# CRUD de Tareas

Este es una aplicación CRUD (Crear, Leer, Actualizar, Eliminar) que te permite gestionar tareas.

## Características

- **Crear una cuenta**: Regístrate para poder acceder a las funcionalidades de la aplicación.
- **Iniciar sesión**: Accede a tu cuenta para gestionar tus tareas.
- **Agregar tareas**: Crea nuevas tareas para mantener un registro de lo que necesitas hacer.
- **Leer tareas**: Visualiza todas tus tareas en una lista ordenada.
- **Actualizar tareas**: Edita las tareas existentes para mantener tu lista actualizada.
- **Eliminar tareas**: Elimina las tareas que ya no necesites.

## Tecnologías Utilizadas

- Next.js
- MySQL
- serverless-mysql
- Axios
- Jose
- jsonwebtoken
- React Hook Form
- Nodemailer

## Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/RaulEMiranda/Crud-next-tareas.git
   cd tu-repositorio
   ```

2. Instala las dependencias:

   ```bash
   npm install
   # o
   yarn install
   ```

3. Configura las variables de entorno:
   Crea un archivo `.env` en la raíz del proyecto y añade las siguientes variables:

   ```env
   SECRET=tu_secreto
   DB_HOST=tu_host_de_base_de_datos
   DB_USER=tu_usuario_de_base_de_datos
   DB_PASSWORD=tu_contraseña_de_base_de_datos
   DB_NAME=tu_nombre_de_base_de_datos
   ```

4. Inicia la aplicación:
   ```bash
   npm run dev
   # o
   yarn dev
   ```

## Uso

1. Abre tu navegador y ve a `http://localhost:3000`.
2. Regístrate para crear una cuenta.
3. Inicia sesión con tu nueva cuenta.
4. Empieza a agregar, actualizar, leer y eliminar tus tareas.

## Middleware de Protección de Rutas

La aplicación utiliza un middleware de Next.js para proteger las rutas. Solo los usuarios autenticados pueden acceder a las páginas CRUD. Si intentas acceder a una página protegida sin estar autenticado, serás redirigido a la página de inicio de sesión.

