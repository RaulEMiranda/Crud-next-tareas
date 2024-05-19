import { conn } from "@/libs/db";
import { jwtVerify } from "jose";
import { NextRequest, NextResponse } from "next/server";

interface Tarea {
  titulo: string;
  descripcion: string;
  fecha_limite: string;
}

export async function GET() {
  try {
    //const tasks = await conn.query("SELECT * FROM tareas");

    return NextResponse.json([
      {
      "id": 1,
      "titulo": "Completar informe",
      "descripcion": "Completar el informe mensual de ventas",
      "fecha_creacion": "2024-05-15T04:18:49.000Z",
      "fecha_limite": "2024-05-10T05:00:00.000Z",
      "estado": "pendiente",
      "id_usuario": 1
      },
      {
      "id": 2,
      "titulo": "Reunión de equipo",
      "descripcion": "Preparar agenda para la reunión semanal",
      "fecha_creacion": "2024-05-15T04:18:49.000Z",
      "fecha_limite": "2024-05-08T05:00:00.000Z",
      "estado": "pendiente",
      "id_usuario": 2
      },
      {
      "id": 3,
      "titulo": "Enviar presupuesto",
      "descripcion": "Enviar presupuesto a clientes potenciales",
      "fecha_creacion": "2024-05-15T04:18:49.000Z",
      "fecha_limite": "2024-05-12T05:00:00.000Z",
      "estado": "pendiente",
      "id_usuario": 3
      },
      {
      "id": 4,
      "titulo": "Preparar presentación",
      "descripcion": "Preparar la presentación para el cliente",
      "fecha_creacion": "2024-05-15T04:18:49.000Z",
      "fecha_limite": "2024-05-15T05:00:00.000Z",
      "estado": "pendiente",
      "id_usuario": 4
      },
      {
      "id": 5,
      "titulo": "Revisar código",
      "descripcion": "Revisar y corregir errores en el código",
      "fecha_creacion": "2024-05-15T04:18:49.000Z",
      "fecha_limite": "2024-05-14T05:00:00.000Z",
      "estado": "pendiente",
      "id_usuario": 5
      },
      {
      "id": 6,
      "titulo": "Planificar proyecto",
      "descripcion": "Elaborar un plan detallado para el nuevo proyecto",
      "fecha_creacion": "2024-05-15T04:18:49.000Z",
      "fecha_limite": "2024-05-20T05:00:00.000Z",
      "estado": "pendiente",
      "id_usuario": 6
      },
      {
      "id": 7,
      "titulo": "Realizar pruebas de usuario",
      "descripcion": "Realizar pruebas de usuario para la nueva funcionalidad",
      "fecha_creacion": "2024-05-15T04:18:49.000Z",
      "fecha_limite": "2024-05-18T05:00:00.000Z",
      "estado": "pendiente",
      "id_usuario": 7
      },
      {
      "id": 8,
      "titulo": "Actualizar documentación",
      "descripcion": "Actualizar la documentación del producto",
      "fecha_creacion": "2024-05-15T04:18:49.000Z",
      "fecha_limite": "2024-05-17T05:00:00.000Z",
      "estado": "pendiente",
      "id_usuario": 8
      },
      {
      "id": 9,
      "titulo": "Enviar recordatorio de pago",
      "descripcion": "Enviar recordatorio de pago a clientes pendientes",
      "fecha_creacion": "2024-05-15T04:18:49.000Z",
      "fecha_limite": "2024-05-16T05:00:00.000Z",
      "estado": "pendiente",
      "id_usuario": 9
      },
      {
      "id": 10,
      "titulo": "Preparar propuesta comercial",
      "descripcion": "Preparar propuesta comercial para cliente potencial",
      "fecha_creacion": "2024-05-15T04:18:49.000Z",
      "fecha_limite": "2024-05-13T05:00:00.000Z",
      "estado": "pendiente",
      "id_usuario": 10
      },
      {
      "id": 11,
      "titulo": "Actualizar diseño del sitio web",
      "descripcion": "Actualizar el diseño del sitio web con nuevas tendencias",
      "fecha_creacion": "2024-05-15T04:18:49.000Z",
      "fecha_limite": "2024-05-11T05:00:00.000Z",
      "estado": "pendiente",
      "id_usuario": 1
      },
      {
      "id": 12,
      "titulo": "Revisar inventario",
      "descripcion": "Revisar el inventario de productos en stock",
      "fecha_creacion": "2024-05-15T04:18:49.000Z",
      "fecha_limite": "2024-05-19T05:00:00.000Z",
      "estado": "pendiente",
      "id_usuario": 2
      },
      {
      "id": 13,
      "titulo": "Organizar evento de lanzamiento",
      "descripcion": "Organizar evento de lanzamiento para el nuevo producto",
      "fecha_creacion": "2024-05-15T04:18:49.000Z",
      "fecha_limite": "2024-05-22T05:00:00.000Z",
      "estado": "pendiente",
      "id_usuario": 3
      },
      {
      "id": 14,
      "titulo": "Resolver incidencias de usuarios",
      "descripcion": "Resolver incidencias reportadas por usuarios",
      "fecha_creacion": "2024-05-15T04:18:49.000Z",
      "fecha_limite": "2024-05-21T05:00:00.000Z",
      "estado": "pendiente",
      "id_usuario": 4
      },
      {
      "id": 15,
      "titulo": "Entrenamiento del equipo",
      "descripcion": "Programar sesión de entrenamiento para el equipo",
      "fecha_creacion": "2024-05-15T04:18:49.000Z",
      "fecha_limite": "2024-05-23T05:00:00.000Z",
      "estado": "pendiente",
      "id_usuario": 5
      },
      {
      "id": 16,
      "titulo": "Preparar informe de ventas",
      "descripcion": "Preparar informe detallado de ventas del trimestre",
      "fecha_creacion": "2024-05-15T04:18:49.000Z",
      "fecha_limite": "2024-05-25T05:00:00.000Z",
      "estado": "pendiente",
      "id_usuario": 6
      },
      {
      "id": 17,
      "titulo": "Realizar backup de datos",
      "descripcion": "Realizar copia de seguridad de los datos del sistema",
      "fecha_creacion": "2024-05-15T04:18:49.000Z",
      "fecha_limite": "2024-05-28T05:00:00.000Z",
      "estado": "pendiente",
      "id_usuario": 7
      },
      {
      "id": 18,
      "titulo": "Enviar felicitaciones de cumpleaños",
      "descripcion": "Enviar felicitaciones de cumpleaños a clientes",
      "fecha_creacion": "2024-05-15T04:18:49.000Z",
      "fecha_limite": "2024-05-26T05:00:00.000Z",
      "estado": "pendiente",
      "id_usuario": 8
      },
      {
      "id": 19,
      "titulo": "Actualizar políticas de seguridad",
      "descripcion": "Actualizar políticas de seguridad de la empresa",
      "fecha_creacion": "2024-05-15T04:18:49.000Z",
      "fecha_limite": "2024-05-27T05:00:00.000Z",
      "estado": "pendiente",
      "id_usuario": 9
      },
      {
      "id": 20,
      "titulo": "Investigar nuevas tecnologías",
      "descripcion": "Investigar nuevas tecnologías para mejorar la productividad",
      "fecha_creacion": "2024-05-15T04:18:49.000Z",
      "fecha_limite": "2024-05-29T05:00:00.000Z",
      "estado": "pendiente",
      "id_usuario": 10
      },
      {
      "id": 21,
      "titulo": "Realizar análisis de mercado",
      "descripcion": "Realizar un análisis detallado del mercado para identificar oportunidades",
      "fecha_creacion": "2024-05-15T04:18:49.000Z",
      "fecha_limite": "2024-05-10T05:00:00.000Z",
      "estado": "pendiente",
      "id_usuario": 1
      },
      {
      "id": 22,
      "titulo": "Actualizar perfil en redes sociales",
      "descripcion": "Actualizar el perfil de la empresa en redes sociales con contenido relevante",
      "fecha_creacion": "2024-05-15T04:18:49.000Z",
      "fecha_limite": "2024-05-11T05:00:00.000Z",
      "estado": "pendiente",
      "id_usuario": 1
      },
      {
      "id": 23,
      "titulo": "Resolver problemas de servidor",
      "descripcion": "Solucionar problemas de rendimiento en el servidor de la aplicación",
      "fecha_creacion": "2024-05-15T04:18:49.000Z",
      "fecha_limite": "2024-05-12T05:00:00.000Z",
      "estado": "pendiente",
      "id_usuario": 1
      },
      {
      "id": 24,
      "titulo": "Preparar presentación de ventas",
      "descripcion": "Preparar una presentación persuasiva para cerrar nuevos clientes",
      "fecha_creacion": "2024-05-15T04:18:49.000Z",
      "fecha_limite": "2024-05-13T05:00:00.000Z",
      "estado": "pendiente",
      "id_usuario": 1
      },
      {
      "id": 25,
      "titulo": "Revisar políticas de privacidad",
      "descripcion": "Revisar y actualizar las políticas de privacidad del sitio web",
      "fecha_creacion": "2024-05-15T04:18:49.000Z",
      "fecha_limite": "2024-05-14T05:00:00.000Z",
      "estado": "pendiente",
      "id_usuario": 1
      },
      {
      "id": 26,
      "titulo": "Diseñar nueva interfaz de usuario",
      "descripcion": "Diseñar una nueva interfaz de usuario para mejorar la experiencia del usuario",
      "fecha_creacion": "2024-05-15T04:18:49.000Z",
      "fecha_limite": "2024-05-10T05:00:00.000Z",
      "estado": "pendiente",
      "id_usuario": 2
      },
      {
      "id": 27,
      "titulo": "Optimizar el rendimiento del sitio web",
      "descripcion": "Realizar mejoras en el rendimiento del sitio web para reducir los tiempos de carga",
      "fecha_creacion": "2024-05-15T04:18:49.000Z",
      "fecha_limite": "2024-05-11T05:00:00.000Z",
      "estado": "pendiente",
      "id_usuario": 2
      },
      {
      "id": 28,
      "titulo": "Resolver errores de compatibilidad",
      "descripcion": "Identificar y corregir errores de compatibilidad del sitio web con diferentes navegadores",
      "fecha_creacion": "2024-05-15T04:18:49.000Z",
      "fecha_limite": "2024-05-12T05:00:00.000Z",
      "estado": "pendiente",
      "id_usuario": 2
      },
      {
      "id": 29,
      "titulo": "Enviar boletín de noticias",
      "descripcion": "Preparar y enviar el boletín de noticias mensual a los suscriptores",
      "fecha_creacion": "2024-05-15T04:18:49.000Z",
      "fecha_limite": "2024-05-13T05:00:00.000Z",
      "estado": "pendiente",
      "id_usuario": 2
      },
      {
      "id": 30,
      "titulo": "Actualizar contenido del blog",
      "descripcion": "Actualizar el contenido del blog con nuevas publicaciones relevantes",
      "fecha_creacion": "2024-05-15T04:18:49.000Z",
      "fecha_limite": "2024-05-14T05:00:00.000Z",
      "estado": "pendiente",
      "id_usuario": 2
      },
      {
      "id": 31,
      "titulo": "Desarrollar nueva funcionalidad",
      "descripcion": "Desarrollar una nueva funcionalidad para la aplicación según los requisitos del cliente",
      "fecha_creacion": "2024-05-15T04:18:49.000Z",
      "fecha_limite": "2024-05-10T05:00:00.000Z",
      "estado": "pendiente",
      "id_usuario": 3
      },
      {
      "id": 32,
      "titulo": "Realizar pruebas de usabilidad",
      "descripcion": "Realizar pruebas de usabilidad con usuarios reales para validar la nueva funcionalidad",
      "fecha_creacion": "2024-05-15T04:18:49.000Z",
      "fecha_limite": "2024-05-11T05:00:00.000Z",
      "estado": "pendiente",
      "id_usuario": 3
      },
      {
      "id": 33,
      "titulo": "Implementar sistema de notificaciones",
      "descripcion": "Implementar un sistema de notificaciones para informar a los usuarios sobre eventos importantes",
      "fecha_creacion": "2024-05-15T04:18:49.000Z",
      "fecha_limite": "2024-05-12T05:00:00.000Z",
      "estado": "pendiente",
      "id_usuario": 3
      },
      {
      "id": 34,
      "titulo": "Actualizar documentación del producto",
      "descripcion": "Actualizar la documentación del producto con los cambios más recientes",
      "fecha_creacion": "2024-05-15T04:18:49.000Z",
      "fecha_limite": "2024-05-13T05:00:00.000Z",
      "estado": "pendiente",
      "id_usuario": 3
      },
      {
      "id": 35,
      "titulo": "Analizar métricas de rendimiento",
      "descripcion": "Analizar métricas de rendimiento para identificar áreas de mejora en la aplicación",
      "fecha_creacion": "2024-05-15T04:18:49.000Z",
      "fecha_limite": "2024-05-14T05:00:00.000Z",
      "estado": "pendiente",
      "id_usuario": 3
      },
      {
      "id": 36,
      "titulo": "Revisar estrategia de marketing",
      "descripcion": "Revisar y ajustar la estrategia de marketing según los resultados obtenidos",
      "fecha_creacion": "2024-05-15T04:18:49.000Z",
      "fecha_limite": "2024-05-10T05:00:00.000Z",
      "estado": "pendiente",
      "id_usuario": 4
      },
      {
      "id": 37,
      "titulo": "Enviar correos electrónicos de seguimiento",
      "descripcion": "Enviar correos electrónicos de seguimiento a clientes potenciales para cerrar ventas",
      "fecha_creacion": "2024-05-15T04:18:49.000Z",
      "fecha_limite": "2024-05-11T05:00:00.000Z",
      "estado": "pendiente",
      "id_usuario": 4
      },
      {
      "id": 38,
      "titulo": "Participar en reunión con el equipo de ventas",
      "descripcion": "Participar en una reunión con el equipo de ventas para discutir estrategias",
      "fecha_creacion": "2024-05-15T04:18:49.000Z",
      "fecha_limite": "2024-05-12T05:00:00.000Z",
      "estado": "pendiente",
      "id_usuario": 4
      },
      {
      "id": 39,
      "titulo": "Actualizar base de datos de clientes",
      "descripcion": "Actualizar la base de datos de clientes con información actualizada",
      "fecha_creacion": "2024-05-15T04:18:49.000Z",
      "fecha_limite": "2024-05-13T05:00:00.000Z",
      "estado": "pendiente",
      "id_usuario": 4
      },
      {
      "id": 40,
      "titulo": "Preparar informe de gastos",
      "descripcion": "Preparar un informe detallado de los gastos del mes para presentar a la dirección",
      "fecha_creacion": "2024-05-15T04:18:49.000Z",
      "fecha_limite": "2024-05-14T05:00:00.000Z",
      "estado": "pendiente",
      "id_usuario": 4
      },
      {
      "id": 41,
      "titulo": "Investigar nuevas tecnologías",
      "descripcion": "Investigar nuevas tecnologías para mejorar la eficiencia y productividad del equipo",
      "fecha_creacion": "2024-05-15T04:18:49.000Z",
      "fecha_limite": "2024-05-10T05:00:00.000Z",
      "estado": "pendiente",
      "id_usuario": 5
      },
      {
      "id": 42,
      "titulo": "Capacitar al equipo en nuevas herramientas",
      "descripcion": "Impartir una capacitación sobre el uso de nuevas herramientas y tecnologías",
      "fecha_creacion": "2024-05-15T04:18:49.000Z",
      "fecha_limite": "2024-05-11T05:00:00.000Z",
      "estado": "pendiente",
      "id_usuario": 5
      },
      {
      "id": 43,
      "titulo": "Desarrollar plan de mejora continua",
      "descripcion": "Desarrollar un plan de mejora continua para optimizar los procesos internos",
      "fecha_creacion": "2024-05-15T04:18:49.000Z",
      "fecha_limite": "2024-05-12T05:00:00.000Z",
      "estado": "pendiente",
      "id_usuario": 5
      },
      {
      "id": 44,
      "titulo": "Realizar revisión de código",
      "descripcion": "Realizar una revisión exhaustiva del código para garantizar su calidad",
      "fecha_creacion": "2024-05-15T04:18:49.000Z",
      "fecha_limite": "2024-05-13T05:00:00.000Z",
      "estado": "pendiente",
      "id_usuario": 5
      },
      {
      "id": 45,
      "titulo": "Enviar informe de progreso al cliente",
      "descripcion": "Enviar un informe detallado de progreso al cliente sobre el estado del proyecto",
      "fecha_creacion": "2024-05-15T04:18:49.000Z",
      "fecha_limite": "2024-05-14T05:00:00.000Z",
      "estado": "pendiente",
      "id_usuario": 5
      },
      {
      "id": 46,
      "titulo": "Realizar análisis de mercado",
      "descripcion": "Realizar un análisis detallado del mercado para identificar oportunidades",
      "fecha_creacion": "2024-05-15T04:18:49.000Z",
      "fecha_limite": "2024-05-10T05:00:00.000Z",
      "estado": "pendiente",
      "id_usuario": 6
      },
      {
      "id": 47,
      "titulo": "Actualizar perfil en redes sociales",
      "descripcion": "Actualizar el perfil de la empresa en redes sociales con contenido relevante",
      "fecha_creacion": "2024-05-15T04:18:49.000Z",
      "fecha_limite": "2024-05-11T05:00:00.000Z",
      "estado": "pendiente",
      "id_usuario": 6
      },
      {
      "id": 48,
      "titulo": "Resolver problemas de servidor",
      "descripcion": "Solucionar problemas de rendimiento en el servidor de la aplicación",
      "fecha_creacion": "2024-05-15T04:18:49.000Z",
      "fecha_limite": "2024-05-12T05:00:00.000Z",
      "estado": "pendiente",
      "id_usuario": 6
      },
      {
      "id": 49,
      "titulo": "Preparar presentación de ventas",
      "descripcion": "Preparar una presentación persuasiva para cerrar nuevos clientes",
      "fecha_creacion": "2024-05-15T04:18:49.000Z",
      "fecha_limite": "2024-05-13T05:00:00.000Z",
      "estado": "pendiente",
      "id_usuario": 6
      },
      {
      "id": 50,
      "titulo": "Revisar políticas de privacidad",
      "descripcion": "Revisar y actualizar las políticas de privacidad del sitio web",
      "fecha_creacion": "2024-05-15T04:18:49.000Z",
      "fecha_limite": "2024-05-14T05:00:00.000Z",
      "estado": "pendiente",
      "id_usuario": 6
      },
      {
      "id": 51,
      "titulo": "Diseñar nueva interfaz de usuario",
      "descripcion": "Diseñar una nueva interfaz de usuario para mejorar la experiencia del usuario",
      "fecha_creacion": "2024-05-15T04:18:49.000Z",
      "fecha_limite": "2024-05-10T05:00:00.000Z",
      "estado": "pendiente",
      "id_usuario": 7
      },
      {
      "id": 52,
      "titulo": "Optimizar el rendimiento del sitio web",
      "descripcion": "Realizar mejoras en el rendimiento del sitio web para reducir los tiempos de carga",
      "fecha_creacion": "2024-05-15T04:18:49.000Z",
      "fecha_limite": "2024-05-11T05:00:00.000Z",
      "estado": "pendiente",
      "id_usuario": 7
      },
      {
      "id": 53,
      "titulo": "Resolver errores de compatibilidad",
      "descripcion": "Identificar y corregir errores de compatibilidad del sitio web con diferentes navegadores",
      "fecha_creacion": "2024-05-15T04:18:49.000Z",
      "fecha_limite": "2024-05-12T05:00:00.000Z",
      "estado": "pendiente",
      "id_usuario": 7
      },
      {
      "id": 54,
      "titulo": "Enviar boletín de noticias",
      "descripcion": "Preparar y enviar el boletín de noticias mensual a los suscriptores",
      "fecha_creacion": "2024-05-15T04:18:49.000Z",
      "fecha_limite": "2024-05-13T05:00:00.000Z",
      "estado": "pendiente",
      "id_usuario": 7
      },
      {
      "id": 55,
      "titulo": "Actualizar contenido del blog",
      "descripcion": "Actualizar el contenido del blog con nuevas publicaciones relevantes",
      "fecha_creacion": "2024-05-15T04:18:49.000Z",
      "fecha_limite": "2024-05-14T05:00:00.000Z",
      "estado": "pendiente",
      "id_usuario": 7
      },
      {
      "id": 56,
      "titulo": "Desarrollar nueva funcionalidad",
      "descripcion": "Desarrollar una nueva funcionalidad para la aplicación según los requisitos del cliente",
      "fecha_creacion": "2024-05-15T04:18:49.000Z",
      "fecha_limite": "2024-05-10T05:00:00.000Z",
      "estado": "pendiente",
      "id_usuario": 8
      },
      {
      "id": 57,
      "titulo": "Realizar pruebas de usabilidad",
      "descripcion": "Realizar pruebas de usabilidad con usuarios reales para validar la nueva funcionalidad",
      "fecha_creacion": "2024-05-15T04:18:49.000Z",
      "fecha_limite": "2024-05-11T05:00:00.000Z",
      "estado": "pendiente",
      "id_usuario": 8
      },
      {
      "id": 58,
      "titulo": "Implementar sistema de notificaciones",
      "descripcion": "Implementar un sistema de notificaciones para informar a los usuarios sobre eventos importantes",
      "fecha_creacion": "2024-05-15T04:18:49.000Z",
      "fecha_limite": "2024-05-12T05:00:00.000Z",
      "estado": "pendiente",
      "id_usuario": 8
      },
      {
      "id": 59,
      "titulo": "Actualizar documentación del producto",
      "descripcion": "Actualizar la documentación del producto con los cambios más recientes",
      "fecha_creacion": "2024-05-15T04:18:49.000Z",
      "fecha_limite": "2024-05-13T05:00:00.000Z",
      "estado": "pendiente",
      "id_usuario": 8
      },
      {
      "id": 60,
      "titulo": "Analizar métricas de rendimiento",
      "descripcion": "Analizar métricas de rendimiento para identificar áreas de mejora en la aplicación",
      "fecha_creacion": "2024-05-15T04:18:49.000Z",
      "fecha_limite": "2024-05-14T05:00:00.000Z",
      "estado": "pendiente",
      "id_usuario": 8
      },
      {
      "id": 61,
      "titulo": "Revisar estrategia de marketing",
      "descripcion": "Revisar y ajustar la estrategia de marketing según los resultados obtenidos",
      "fecha_creacion": "2024-05-15T04:18:49.000Z",
      "fecha_limite": "2024-05-10T05:00:00.000Z",
      "estado": "pendiente",
      "id_usuario": 9
      },
      {
      "id": 62,
      "titulo": "Enviar correos electrónicos de seguimiento",
      "descripcion": "Enviar correos electrónicos de seguimiento a clientes potenciales para cerrar ventas",
      "fecha_creacion": "2024-05-15T04:18:49.000Z",
      "fecha_limite": "2024-05-11T05:00:00.000Z",
      "estado": "pendiente",
      "id_usuario": 9
      },
      {
      "id": 63,
      "titulo": "Participar en reunión con el equipo de ventas",
      "descripcion": "Participar en una reunión con el equipo de ventas para discutir estrategias",
      "fecha_creacion": "2024-05-15T04:18:49.000Z",
      "fecha_limite": "2024-05-12T05:00:00.000Z",
      "estado": "pendiente",
      "id_usuario": 9
      },
      {
      "id": 64,
      "titulo": "Actualizar base de datos de clientes",
      "descripcion": "Actualizar la base de datos de clientes con información actualizada",
      "fecha_creacion": "2024-05-15T04:18:49.000Z",
      "fecha_limite": "2024-05-13T05:00:00.000Z",
      "estado": "pendiente",
      "id_usuario": 9
      },
      {
      "id": 65,
      "titulo": "Preparar informe de gastos",
      "descripcion": "Preparar un informe detallado de los gastos del mes para presentar a la dirección",
      "fecha_creacion": "2024-05-15T04:18:49.000Z",
      "fecha_limite": "2024-05-14T05:00:00.000Z",
      "estado": "pendiente",
      "id_usuario": 9
      },
      {
      "id": 66,
      "titulo": "Investigar nuevas tecnologías",
      "descripcion": "Investigar nuevas tecnologías para mejorar la eficiencia y productividad del equipo",
      "fecha_creacion": "2024-05-15T04:18:49.000Z",
      "fecha_limite": "2024-05-10T05:00:00.000Z",
      "estado": "pendiente",
      "id_usuario": 10
      },
      {
      "id": 67,
      "titulo": "Capacitar al equipo en nuevas herramientas",
      "descripcion": "Impartir una capacitación sobre el uso de nuevas herramientas y tecnologías",
      "fecha_creacion": "2024-05-15T04:18:49.000Z",
      "fecha_limite": "2024-05-11T05:00:00.000Z",
      "estado": "pendiente",
      "id_usuario": 10
      },
      {
      "id": 68,
      "titulo": "Desarrollar plan de mejora continua",
      "descripcion": "Desarrollar un plan de mejora continua para optimizar los procesos internos",
      "fecha_creacion": "2024-05-15T04:18:49.000Z",
      "fecha_limite": "2024-05-12T05:00:00.000Z",
      "estado": "pendiente",
      "id_usuario": 10
      },
      {
      "id": 69,
      "titulo": "Realizar revisión de código",
      "descripcion": "Realizar una revisión exhaustiva del código para garantizar su calidad",
      "fecha_creacion": "2024-05-15T04:18:49.000Z",
      "fecha_limite": "2024-05-13T05:00:00.000Z",
      "estado": "pendiente",
      "id_usuario": 10
      },
      {
      "id": 70,
      "titulo": "Enviar informe de progreso al cliente",
      "descripcion": "Enviar un informe detallado de progreso al cliente sobre el estado del proyecto",
      "fecha_creacion": "2024-05-15T04:18:49.000Z",
      "fecha_limite": "2024-05-14T05:00:00.000Z",
      "estado": "pendiente",
      "id_usuario": 10
      },
      {
      "id": 71,
      "titulo": "Hacer diarias",
      "descripcion": "lets play a game",
      "fecha_creacion": "2024-05-17T03:56:55.000Z",
      "fecha_limite": "2023-12-03T05:00:00.000Z",
      "estado": "en_progreso",
      "id_usuario": 15
      }
      ], {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*', 
        'Access-Control-Allow-Methods': 'GET', 
        'Access-Control-Allow-Headers': 'Content-Type',
      }
    });
  } catch (error) {
    return NextResponse.json(
      {
        message: "No hemos encontrado tareas",
      },
      {
        status: 500,
      }
    );
  }
}

export async function POST(req: NextRequest, res: Response) {
  try {
    const tokenJWT = req.cookies.get("tokenSession")?.value;

    if (tokenJWT) {
      const data: Tarea = await req.json();

      const { payload } = await jwtVerify(
        tokenJWT,
        new TextEncoder().encode(process.env.SECRET)
      );

      console.log(payload, 1);

      console.log(data, 2);

      const tasks = await conn.query("INSERT INTO tareas SET ?", {
        titulo: data.titulo,
        descripcion: data.descripcion,
        fecha_limite: data.fecha_limite,
        id_usuario: payload.id,
      });

      return NextResponse.json(
        {
          message: "Tarea creada",
        },
        {
          status: 200,
        }
      );
    } else {
      return NextResponse.json(
        {
          message: "Debes iniciar sesión",
        },
        {
          status: 401,
        }
      );
    }
  } catch (error) {
    return NextResponse.json(
      {
        error: error,
      },
      {
        status: 500,
      }
    );
  }
}
