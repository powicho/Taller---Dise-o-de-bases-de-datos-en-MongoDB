# Tarea Final - Diseño de Bases de Datos en MongoDB

Este proyecto contiene el modelado, la creación, y el análisis de una base de datos para un e-commerce basado en los wireframes proporcionados.

## Contenido y Estructura de la Entrega

*   /script_final.js:
    Script principal que se debe ejecutar en `mongosh`. Este archivo realiza toda la configuración inicial de la base de datos:
    1.  Crea las tres colecciones (`customers`, `carts`, `orders`) con sus reglas de validación `$jsonSchema`.
    2.  Establece todos los índices de rendimiento, incluyendo el índice TTL.
    3.  Opcionalmente, contiene comentado el código para insertar el dataset de prueba.

*   /Colecciones/:
    Esta carpeta contiene las exportaciones en formato JSON de las tres colecciones principales, pobladas cada una con 20 documentos de prueba. Estos archivos pueden ser importados a través de MongoDB Compass o `mongoimport` para poblar la base de datos después de ejecutar el script de setup.

*   /documentacion de consultas/:
    Esta carpeta contiene 5 scripts `.js` separados. Cada uno corresponde a una de las consultas requeridas por la tarea. Incluyen el comando de la consulta, el resultado completo del comando `.explain()` y un análisis detallado del plan de ejecución y el rendimiento.

*   `Informe_Fichas_UIF.pdf`:
    Este documento contiene el análisis de diseño para cada wireframe (Perfil, Carrito, Pedido), justificando las decisiones de modelado como `Embed vs. Reference`, la atomicidad y la cardinalidad.

## Instrucciones para Revisión y Ejecución

1.  Configuración de la Estructura:
    Ejecutar el contenido completo del archivo `script_final.js` en una instancia de `mongosh`. Esto creará la estructura vacía pero validada e indexada de la base de datos.

2.  Población de Datos:
    Utilizar la herramienta de importación de MongoDB Compass para cargar los 3 archivos JSON ubicados en la carpeta `/Colecciones/`.

3.  Análisis de Rendimiento:
    Revisar individualmente cada uno de los 5 scripts ubicados en la carpeta `/documentacion de consultas/`. El contenido de estos archivos muestra la evidencia (`explain`) del rendimiento de las consultas sobre la base de datos ya poblada.

4.  Análisis de Diseño:
    Leer el archivo `Informe_Fichas_UIF.pdf` para una comprensión completa de las decisiones de arquitectura de la base de datos.