-- Tabla de usuarios
CREATE TABLE usuarios (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nombre VARCHAR(50),
  email VARCHAR(100) UNIQUE,
  contraseña VARCHAR(50)
);

-- Tabla de tareas
CREATE TABLE tareas (
  id INT PRIMARY KEY AUTO_INCREMENT,
  titulo VARCHAR(100),
  descripcion TEXT,
  fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  fecha_limite DATE,
  estado ENUM('pendiente', 'en_progreso', 'completada') DEFAULT 'pendiente',
  id_usuario INT,
  FOREIGN KEY (id_usuario) REFERENCES usuarios(id)
);

-- Insertar datos en la tabla de usuarios
INSERT INTO
  usuarios (nombre, email, contraseña)
VALUES
  ('Juan Perez', 'juan@example.com', 'clave123'),
  (
    'María Rodríguez',
    'maria@example.com',
    'password456'
  ),
  ('Pedro Gomez', 'pedro@example.com', 'secreto789'),
  (
    'Laura Martínez',
    'laura@example.com',
    'contraseña123'
  ),
  ('Carlos López', 'carlos@example.com', 'clave456'),
  ('Ana García', 'ana@example.com', 'password789'),
  ('David Ruiz', 'david@example.com', 'secreto123'),
  (
    'Sofía Hernández',
    'sofia@example.com',
    'clave789'
  ),
  (
    'Manuel González',
    'manuel@example.com',
    'contraseña456'
  ),
  ('Elena Díaz', 'elena@example.com', 'password123');

-- Insertar datos en la tabla de tareas
INSERT INTO
  tareas (titulo, descripcion, fecha_limite, id_usuario)
VALUES
  (
    'Completar informe',
    'Completar el informe mensual de ventas',
    '2024-05-10',
    1
  ),
  (
    'Reunión de equipo',
    'Preparar agenda para la reunión semanal',
    '2024-05-08',
    2
  ),
  (
    'Enviar presupuesto',
    'Enviar presupuesto a clientes potenciales',
    '2024-05-12',
    3
  ),
  (
    'Preparar presentación',
    'Preparar la presentación para el cliente',
    '2024-05-15',
    4
  ),
  (
    'Revisar código',
    'Revisar y corregir errores en el código',
    '2024-05-14',
    5
  ),
  (
    'Planificar proyecto',
    'Elaborar un plan detallado para el nuevo proyecto',
    '2024-05-20',
    6
  ),
  (
    'Realizar pruebas de usuario',
    'Realizar pruebas de usuario para la nueva funcionalidad',
    '2024-05-18',
    7
  ),
  (
    'Actualizar documentación',
    'Actualizar la documentación del producto',
    '2024-05-17',
    8
  ),
  (
    'Enviar recordatorio de pago',
    'Enviar recordatorio de pago a clientes pendientes',
    '2024-05-16',
    9
  ),
  (
    'Preparar propuesta comercial',
    'Preparar propuesta comercial para cliente potencial',
    '2024-05-13',
    10
  ),
  (
    'Actualizar diseño del sitio web',
    'Actualizar el diseño del sitio web con nuevas tendencias',
    '2024-05-11',
    1
  ),
  (
    'Revisar inventario',
    'Revisar el inventario de productos en stock',
    '2024-05-19',
    2
  ),
  (
    'Organizar evento de lanzamiento',
    'Organizar evento de lanzamiento para el nuevo producto',
    '2024-05-22',
    3
  ),
  (
    'Resolver incidencias de usuarios',
    'Resolver incidencias reportadas por usuarios',
    '2024-05-21',
    4
  ),
  (
    'Entrenamiento del equipo',
    'Programar sesión de entrenamiento para el equipo',
    '2024-05-23',
    5
  ),
  (
    'Preparar informe de ventas',
    'Preparar informe detallado de ventas del trimestre',
    '2024-05-25',
    6
  ),
  (
    'Realizar backup de datos',
    'Realizar copia de seguridad de los datos del sistema',
    '2024-05-28',
    7
  ),
  (
    'Enviar felicitaciones de cumpleaños',
    'Enviar felicitaciones de cumpleaños a clientes',
    '2024-05-26',
    8
  ),
  (
    'Actualizar políticas de seguridad',
    'Actualizar políticas de seguridad de la empresa',
    '2024-05-27',
    9
  ),
  (
    'Investigar nuevas tecnologías',
    'Investigar nuevas tecnologías para mejorar la productividad',
    '2024-05-29',
    10
  ),
  (
    'Realizar análisis de mercado',
    'Realizar un análisis detallado del mercado para identificar oportunidades',
    '2024-05-10',
    1
  ),
  (
    'Actualizar perfil en redes sociales',
    'Actualizar el perfil de la empresa en redes sociales con contenido relevante',
    '2024-05-11',
    1
  ),
  (
    'Resolver problemas de servidor',
    'Solucionar problemas de rendimiento en el servidor de la aplicación',
    '2024-05-12',
    1
  ),
  (
    'Preparar presentación de ventas',
    'Preparar una presentación persuasiva para cerrar nuevos clientes',
    '2024-05-13',
    1
  ),
  (
    'Revisar políticas de privacidad',
    'Revisar y actualizar las políticas de privacidad del sitio web',
    '2024-05-14',
    1
  ),
  (
    'Diseñar nueva interfaz de usuario',
    'Diseñar una nueva interfaz de usuario para mejorar la experiencia del usuario',
    '2024-05-10',
    2
  ),
  (
    'Optimizar el rendimiento del sitio web',
    'Realizar mejoras en el rendimiento del sitio web para reducir los tiempos de carga',
    '2024-05-11',
    2
  ),
  (
    'Resolver errores de compatibilidad',
    'Identificar y corregir errores de compatibilidad del sitio web con diferentes navegadores',
    '2024-05-12',
    2
  ),
  (
    'Enviar boletín de noticias',
    'Preparar y enviar el boletín de noticias mensual a los suscriptores',
    '2024-05-13',
    2
  ),
  (
    'Actualizar contenido del blog',
    'Actualizar el contenido del blog con nuevas publicaciones relevantes',
    '2024-05-14',
    2
  ),
  (
    'Desarrollar nueva funcionalidad',
    'Desarrollar una nueva funcionalidad para la aplicación según los requisitos del cliente',
    '2024-05-10',
    3
  ),
  (
    'Realizar pruebas de usabilidad',
    'Realizar pruebas de usabilidad con usuarios reales para validar la nueva funcionalidad',
    '2024-05-11',
    3
  ),
  (
    'Implementar sistema de notificaciones',
    'Implementar un sistema de notificaciones para informar a los usuarios sobre eventos importantes',
    '2024-05-12',
    3
  ),
  (
    'Actualizar documentación del producto',
    'Actualizar la documentación del producto con los cambios más recientes',
    '2024-05-13',
    3
  ),
  (
    'Analizar métricas de rendimiento',
    'Analizar métricas de rendimiento para identificar áreas de mejora en la aplicación',
    '2024-05-14',
    3
  ),
  (
    'Revisar estrategia de marketing',
    'Revisar y ajustar la estrategia de marketing según los resultados obtenidos',
    '2024-05-10',
    4
  ),
  (
    'Enviar correos electrónicos de seguimiento',
    'Enviar correos electrónicos de seguimiento a clientes potenciales para cerrar ventas',
    '2024-05-11',
    4
  ),
  (
    'Participar en reunión con el equipo de ventas',
    'Participar en una reunión con el equipo de ventas para discutir estrategias',
    '2024-05-12',
    4
  ),
  (
    'Actualizar base de datos de clientes',
    'Actualizar la base de datos de clientes con información actualizada',
    '2024-05-13',
    4
  ),
  (
    'Preparar informe de gastos',
    'Preparar un informe detallado de los gastos del mes para presentar a la dirección',
    '2024-05-14',
    4
  ),
  (
    'Investigar nuevas tecnologías',
    'Investigar nuevas tecnologías para mejorar la eficiencia y productividad del equipo',
    '2024-05-10',
    5
  ),
  (
    'Capacitar al equipo en nuevas herramientas',
    'Impartir una capacitación sobre el uso de nuevas herramientas y tecnologías',
    '2024-05-11',
    5
  ),
  (
    'Desarrollar plan de mejora continua',
    'Desarrollar un plan de mejora continua para optimizar los procesos internos',
    '2024-05-12',
    5
  ),
  (
    'Realizar revisión de código',
    'Realizar una revisión exhaustiva del código para garantizar su calidad',
    '2024-05-13',
    5
  ),
  (
    'Enviar informe de progreso al cliente',
    'Enviar un informe detallado de progreso al cliente sobre el estado del proyecto',
    '2024-05-14',
    5
  ),
  (
    'Realizar análisis de mercado',
    'Realizar un análisis detallado del mercado para identificar oportunidades',
    '2024-05-10',
    6
  ),
  (
    'Actualizar perfil en redes sociales',
    'Actualizar el perfil de la empresa en redes sociales con contenido relevante',
    '2024-05-11',
    6
  ),
  (
    'Resolver problemas de servidor',
    'Solucionar problemas de rendimiento en el servidor de la aplicación',
    '2024-05-12',
    6
  ),
  (
    'Preparar presentación de ventas',
    'Preparar una presentación persuasiva para cerrar nuevos clientes',
    '2024-05-13',
    6
  ),
  (
    'Revisar políticas de privacidad',
    'Revisar y actualizar las políticas de privacidad del sitio web',
    '2024-05-14',
    6
  ),
  (
    'Diseñar nueva interfaz de usuario',
    'Diseñar una nueva interfaz de usuario para mejorar la experiencia del usuario',
    '2024-05-10',
    7
  ),
  (
    'Optimizar el rendimiento del sitio web',
    'Realizar mejoras en el rendimiento del sitio web para reducir los tiempos de carga',
    '2024-05-11',
    7
  ),
  (
    'Resolver errores de compatibilidad',
    'Identificar y corregir errores de compatibilidad del sitio web con diferentes navegadores',
    '2024-05-12',
    7
  ),
  (
    'Enviar boletín de noticias',
    'Preparar y enviar el boletín de noticias mensual a los suscriptores',
    '2024-05-13',
    7
  ),
  (
    'Actualizar contenido del blog',
    'Actualizar el contenido del blog con nuevas publicaciones relevantes',
    '2024-05-14',
    7
  ),
  (
    'Desarrollar nueva funcionalidad',
    'Desarrollar una nueva funcionalidad para la aplicación según los requisitos del cliente',
    '2024-05-10',
    8
  ),
  (
    'Realizar pruebas de usabilidad',
    'Realizar pruebas de usabilidad con usuarios reales para validar la nueva funcionalidad',
    '2024-05-11',
    8
  ),
  (
    'Implementar sistema de notificaciones',
    'Implementar un sistema de notificaciones para informar a los usuarios sobre eventos importantes',
    '2024-05-12',
    8
  ),
  (
    'Actualizar documentación del producto',
    'Actualizar la documentación del producto con los cambios más recientes',
    '2024-05-13',
    8
  ),
  (
    'Analizar métricas de rendimiento',
    'Analizar métricas de rendimiento para identificar áreas de mejora en la aplicación',
    '2024-05-14',
    8
  ),
  (
    'Revisar estrategia de marketing',
    'Revisar y ajustar la estrategia de marketing según los resultados obtenidos',
    '2024-05-10',
    9
  ),
  (
    'Enviar correos electrónicos de seguimiento',
    'Enviar correos electrónicos de seguimiento a clientes potenciales para cerrar ventas',
    '2024-05-11',
    9
  ),
  (
    'Participar en reunión con el equipo de ventas',
    'Participar en una reunión con el equipo de ventas para discutir estrategias',
    '2024-05-12',
    9
  ),
  (
    'Actualizar base de datos de clientes',
    'Actualizar la base de datos de clientes con información actualizada',
    '2024-05-13',
    9
  ),
  (
    'Preparar informe de gastos',
    'Preparar un informe detallado de los gastos del mes para presentar a la dirección',
    '2024-05-14',
    9
  ),
  (
    'Investigar nuevas tecnologías',
    'Investigar nuevas tecnologías para mejorar la eficiencia y productividad del equipo',
    '2024-05-10',
    10
  ),
  (
    'Capacitar al equipo en nuevas herramientas',
    'Impartir una capacitación sobre el uso de nuevas herramientas y tecnologías',
    '2024-05-11',
    10
  ),
  (
    'Desarrollar plan de mejora continua',
    'Desarrollar un plan de mejora continua para optimizar los procesos internos',
    '2024-05-12',
    10
  ),
  (
    'Realizar revisión de código',
    'Realizar una revisión exhaustiva del código para garantizar su calidad',
    '2024-05-13',
    10
  ),
  (
    'Enviar informe de progreso al cliente',
    'Enviar un informe detallado de progreso al cliente sobre el estado del proyecto',
    '2024-05-14',
    10
  );