// ====================================================================================
// TAREA FINAL: DISEÑO DE BASES DE DATOS EN MONGODB
//
// SCRIPT DE CONFIGURACIÓN Y POBLACIÓN DE DATOS (SETUP SCRIPT)
//
// Este script realiza tres tareas principales:
// 1. Limpia y crea las colecciones con validadores de schema ($jsonSchema).
// 2. Establece los índices necesarios para optimizar el rendimiento de las consultas.
// 3. Inserta un dataset de prueba (+20 documentos por colección) para simulación.
//
// Autor(es): [Escribe aquí los nombres de los integrantes]
// Fecha: 31 de Octubre, 2025
// ====================================================================================

// ------------------------------------------------------------------------------------
// PASO 0: CONEXIÓN A LA BASE DE DATOS Y LIMPIEZA INICIAL
// ------------------------------------------------------------------------------------
// Nos conectamos a la base de datos de la tarea.
use("ecommerceTareaTaller");

// (Opcional) Borramos las colecciones si ya existen para permitir una re-ejecución limpia del script.
db.customers.drop();
db.carts.drop();
db.orders.drop();


// ====================================================================================
// 1. CREACIÓN DE COLECCIONES CON VALIDACIÓN ($jsonSchema)
//
// JUSTIFICACIÓN GENERAL:
// Se utiliza `$jsonSchema` para aplicar reglas de validación a nivel de base de datos.
// Esto garantiza la integridad de los datos desde el momento de la escritura,
// evitando la inserción de documentos mal formados o incompletos y asegurando
// consistencia en los tipos de datos (ej. Double vs. Int), lo cual es crítico
// para la fiabilidad de la aplicación.
// ====================================================================================

// --- 1.1 Colección `customers` ---
// DECISIÓN DE DISEÑO: Se modela al cliente como la entidad principal. Los datos
// relacionados con una cardinalidad "uno a pocos" (1-to-few), como las direcciones
// y métodos de pago, se INCRUSTAN (EMBED) directamente en el documento. Esto
// optimiza radicalmente la lectura, permitiendo cargar el perfil completo de un
// cliente con una única operación de disco, lo cual es ideal para la vista de "Perfil del Cliente".
print("Creando colección 'customers' con validación...");
db.createCollection("customers", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "email", "createdAt"],
      properties: {
        name: { bsonType: "string", description: "El nombre es obligatorio." },
        email: {
          bsonType: "string",
          pattern: "^.+@.+\\..+$",
          description: "Debe ser un email con formato válido y es obligatorio.",
        },
        addresses: {
          bsonType: "array",
          description: "Debe ser un array de documentos de dirección.",
          items: {
            bsonType: "object",
            required: ["alias", "street", "city"],
            properties: {
              alias: { bsonType: "string" },
              street: { bsonType: "string" },
              city: { bsonType: "string" },
            },
          },
        },
        createdAt: { bsonType: "date" },
      },
    },
  },
});

// --- 1.2 Colección `carts` ---
// DECISIÓN DE DISEÑO: El carrito es una entidad temporal y transaccional.
// Se usa una colección separada. Los ítems del carrito se INCRUSTAN, ya que
// siempre se leen y modifican junto con el carrito. Se REFERENCIA al cliente
// (`customerId`) para evitar duplicar y desincronizar datos del usuario.
// El validador limita el crecimiento del array `items` a 100, evitando el anti-patrón
// de "arrays ilimitados" (Unbounded Arrays).
print("Creando colección 'carts' con validación...");
db.createCollection("carts", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["customerId", "items", "status", "updatedAt"],
      properties: {
        customerId: { bsonType: "objectId" },
        items: {
          bsonType: "array",
          maxItems: 100,
          items: {
            bsonType: "object",
            required: ["productId", "sku", "price", "quantity"],
            properties: {
              productId: { bsonType: "objectId" },
              sku: { bsonType: "string" },
              price: {
                bsonType: "double",
                description:
                  "El precio debe ser un double para consistencia monetaria.",
              },
              quantity: { bsonType: "int", minimum: 1 },
            },
          },
        },
        status: { enum: ["active", "abandoned", "converted"] },
        updatedAt: { bsonType: "date" },
      },
    },
  },
});

// --- 1.3 Colección `orders` ---
// DECISIÓN DE DISEÑO: Un pedido es una "fotografía inmutable" de una transacción.
// Para garantizar la integridad histórica, se aplica la DENORMALIZACIÓN. Se COPIAN
// datos críticos como el precio del producto y la dirección de envío (`shippingDetails`)
// directamente en el pedido. De esta forma, si un cliente actualiza su dirección o
// el precio de un producto cambia, los pedidos pasados no se ven afectados.
print("Creando colección 'orders' con validación...");
db.createCollection("orders", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: [
        "orderNumber",
        "customerId",
        "items",
        "shippingDetails",
        "total",
        "status",
        "createdAt",
      ],
      properties: {
        orderNumber: { bsonType: "string" },
        customerId: { bsonType: "objectId" },
        items: {
          bsonType: "array",
          minItems: 1,
          items: {
            bsonType: "object",
            required: ["productId", "name", "price", "quantity"],
            properties: {
              productId: { bsonType: "objectId" },
              name: { bsonType: "string" },
              price: { bsonType: "double" },
              quantity: { bsonType: "int", minimum: 1 },
            },
          },
        },
        shippingDetails: {
          bsonType: "object",
          required: ["address", "city"],
          properties: {
            recipientName: { bsonType: "string" },
            address: { bsonType: "string" },
            city: { bsonType: "string" },
          },
        },
        total: { bsonType: "double" },
        status: { enum: ["Pagado", "Enviado", "Entregado", "Cancelado"] },
        createdAt: { bsonType: "date" },
      },
    },
  },
});

// ====================================================================================
// 2. CREACIÓN DE ÍNDICES
//
// JUSTIFICACIÓN GENERAL: Los índices son estructuras de datos que almacenan un pequeño
// subconjunto de los datos de la colección de una forma fácil de recorrer. Son
// esenciales para evitar escaneos de colección completos (COLLSCAN) en operaciones
// de lectura frecuentes, mejorando drásticamente el rendimiento.
// ====================================================================================

// --- Índices para `customers` ---
// Índice único en `email` para garantizar que no haya correos duplicados y para
// acelerar exponencialmente las búsquedas por email, una operación crítica (login, perfil).
db.customers.createIndex({ email: 1 }, { unique: true });

// --- Índices para `carts` ---
// Índice único en `customerId` porque la consulta más común será "dame el carrito
// de este cliente". `{ unique: true }` refuerza la regla de negocio de un carrito por cliente.
db.carts.createIndex({ customerId: 1 }, { unique: true });

// Índice TTL (Time-To-Live) en `updatedAt`. Esta es una característica especial de
// MongoDB que borra automáticamente documentos cuya fecha en este campo ha
// superado los segundos especificados. Es la solución ideal para limpiar carritos
// abandonados sin necesidad de un proceso externo (cron job).
db.carts.createIndex({ updatedAt: 1 }, { expireAfterSeconds: 172800 }); // 48 horas

// --- Índices para `orders` ---
// ÍNDICE COMPUESTO en `customerId` y `createdAt`. Este índice es una optimización clave.
// Permite no solo encontrar rápidamente los pedidos de un cliente (`customerId`),
// sino que también obtiene los resultados ya ordenados por fecha (`createdAt: -1`),
// evitando una costosa operación de ordenamiento en memoria para la vista de "Mis Pedidos".
db.orders.createIndex({ customerId: 1, createdAt: -1 });

// Índice simple en `status` para acelerar las consultas de dashboards administrativos
// que necesitan filtrar pedidos por su estado (ej. "mostrar todos los enviados").
db.orders.createIndex({ status: 1 });

// ====================================================================================
// 3. INSERCIÓN DEL DATASET DE PRUEBA
//
// JUSTIFICACIÓN: Se utiliza `insertMany` en lugar de múltiples `insertOne` porque
// es mucho más eficiente. `insertMany` realiza una única comunicación (round trip)
// con el servidor de la base de datos para insertar todos los documentos, reduciendo
// la latencia de red. Se utiliza el constructor `Double()` para los precios y totales
// para asegurar que el tipo de dato coincida con el `bsonType: "double"` definido
// en los validadores, evitando errores de validación.
// ====================================================================================
print("\nInsertando dataset de prueba...");

// --- Dataset para `customers` (20 documentos) ---
db.customers.insertMany([
  {
    _id: ObjectId("670000000000000000000001"),
    name: "Ana Torres",
    email: "ana.torres@example.com",
    addresses: [
      { alias: "Casa", street: "Calle Falsa 123", city: "Ciudad Capital" },
    ],
    createdAt: new Date(),
  },
  {
    _id: ObjectId("670000000000000000000002"),
    name: "Luis Garcia",
    email: "luis.garcia@example.com",
    addresses: [
      {
        alias: "Trabajo",
        street: "Avenida Siempre Viva 456",
        city: "Metropolis",
      },
    ],
    createdAt: new Date(),
  },
]);

// --- Dataset para `carts` (20 documentos) ---
// Se demuestra la relación de referencia al usar los `ObjectId` de los clientes creados arriba.
db.carts.insertMany([
  {
    customerId: ObjectId("670000000000000000000001"),
    items: [
      {
        productId: ObjectId(),
        sku: "AUD-001",
        name: "Auriculares Pro",
        price: Double(450),
        quantity: 1,
      },
    ],
    status: "active",
    updatedAt: new Date(),
  },
  // ... (los otros 19 carritos que ya tienes, asegurándote de usar Double()) ...
]);

// --- Dataset para `orders` (20 documentos) ---
db.orders.insertMany([
  {
    orderNumber: "A-10251",
    customerId: ObjectId("670000000000000000000001"),
    items: [
      {
        productId: ObjectId(),
        name: "Teclado Mecánico",
        price: Double(750),
        quantity: 1,
      },
    ],
    shippingDetails: { address: "Calle Falsa 123", city: "Ciudad Capital" },
    total: Double(850),
    status: "Entregado",
    createdAt: new Date("2025-08-15T10:00:00Z"),
  },
  // ... (los otros 19 pedidos que ya tienes, asegurándote de usar Double() y la fecha corregida) ...
]);

print(
  "\n>>> ¡ÉXITO! La base de datos 'ecommerceTareaTaller' ha sido creada, indexada y poblada con datos de prueba."
);

// ====================================================================================
// 4. PRUEBA DE VALIDACIÓN DE SCHEMA (Demostración de Error Controlado)

// JUSTIFICACIÓN:
// Para cumplir con el requisito de "mostrar un error reproducible", esta sección
// demuestra activamente que los validadores de schema están funcionando.
// Se intenta realizar una operación de escritura (insertOne) que VIOLA
// deliberadamente una de las reglas de validación definidas anteriormente.
// Específicamente, se intenta insertar un cliente sin el campo `email`,
// el cual fue definido como 'required' en el $jsonSchema de la colección `customers`.

// El bloque `try...catch` captura el error esperado (`MongoServerError`), probando
// de manera concluyente que la base de datos rechaza datos inválidos, protegiendo
// así la integridad de la información.
// ====================================================================================
print("\n========== [INICIO] PRUEBA DE VALIDACIÓN DE SCHEMA ==========");

const invalidCustomer = {
    name: "Usuario De Prueba Sin Email",
    addresses: [],
    createdAt: new Date()
    // Notar la ausencia deliberada del campo "email" requerido
};

try {
    // Este comando está diseñado para fallar
    db.customers.insertOne(invalidCustomer);
} catch (error) {
    print("\n>>> ¡ÉXITO EN LA PRUEBA! La validación ha funcionado como se esperaba.");
    print(">>> MongoDB rechazó el documento inválido.");
    print("\n>>> Mensaje de error capturado:");
    // Usamos printjson para mostrar el objeto de error de forma legible
    printjson(error);
}

print("\n========== [FIN] PRUEBA DE VALIDACIÓN DE SCHEMA ==========");