use("ecommerceTareaTaller");
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
  {
    orderNumber: "A-10252",
    customerId: ObjectId("670000000000000000000002"),
    items: [
      {
        productId: ObjectId(),
        name: "Mouse Inalámbrico",
        price: Double(250),
        quantity: 1,
      },
    ],
    shippingDetails: {
      address: "Avenida Siempre Viva 456",
      city: "Metropolis",
    },
    total: Double(320.5),
    status: "Enviado",
    createdAt: new Date("2025-08-20T11:30:00Z"),
  },
  {
    orderNumber: "A-10253",
    customerId: ObjectId("670000000000000000000003"),
    items: [
      {
        productId: ObjectId(),
        name: "Monitor Curvo 27''",
        price: Double(2500),
        quantity: 1,
      },
    ],
    shippingDetails: {
      address: "Boulevard de los Sueños 789",
      city: "Ciudad Capital",
    },
    total: Double(2650),
    status: "Pagado",
    createdAt: new Date("2025-09-01T09:00:00Z"),
  },
  {
    orderNumber: "A-10254",
    customerId: ObjectId("670000000000000000000001"),
    items: [
      {
        productId: ObjectId(),
        name: "Webcam HD",
        price: Double(300),
        quantity: 1,
      },
    ],
    shippingDetails: { address: "Calle Falsa 123", city: "Ciudad Capital" },
    total: Double(350),
    status: "Entregado",
    createdAt: new Date("2025-09-05T14:00:00Z"),
  },
  {
    orderNumber: "A-10255",
    customerId: ObjectId("670000000000000000000004"),
    items: [
      {
        productId: ObjectId(),
        name: "Disco SSD 1TB",
        price: Double(800),
        quantity: 1,
      },
    ],
    shippingDetails: { address: "Calle Luna 101", city: "Pueblo Nuevo" },
    total: Double(875),
    status: "Pagado",
    createdAt: new Date("2025-09-10T16:00:00Z"),
  },
  {
    orderNumber: "A-10256",
    customerId: ObjectId("670000000000000000000005"),
    items: [
      {
        productId: ObjectId(),
        name: "Memoria RAM 16GB",
        price: Double(600),
        quantity: 2,
      },
    ],
    shippingDetails: { address: "Plaza Central 202", city: "Metropolis" },
    total: Double(1350),
    status: "Enviado",
    createdAt: new Date("2025-09-12T18:00:00Z"),
  },
  {
    orderNumber: "A-10257",
    customerId: ObjectId("670000000000000000000006"),
    items: [
      {
        productId: ObjectId(),
        name: "Tarjeta Gráfica RTX",
        price: Double(4500),
        quantity: 1,
      },
    ],
    shippingDetails: { address: "Ruta del Sol 303", city: "Ciudad Capital" },
    total: Double(4700),
    status: "Cancelado",
    createdAt: new Date("2025-09-15T10:00:00Z"),
  },
  {
    orderNumber: "A-10258",
    customerId: ObjectId("670000000000000000000007"),
    items: [
      {
        productId: ObjectId(),
        name: "Silla Gamer",
        price: Double(2800),
        quantity: 1,
      },
    ],
    shippingDetails: {
      address: "Pasaje de las Flores 404",
      city: "Pueblo Nuevo",
    },
    total: Double(3000),
    status: "Pagado",
    createdAt: new Date("2025-10-02T11:00:00Z"),
  },
  {
    orderNumber: "A-10259",
    customerId: ObjectId("670000000000000000000002"),
    items: [
      {
        productId: ObjectId(),
        name: "Auriculares Pro",
        price: Double(450),
        quantity: 1,
      },
    ],
    shippingDetails: {
      address: "Avenida Siempre Viva 456",
      city: "Metropolis",
    },
    total: Double(510),
    status: "Entregado",
    createdAt: new Date("2025-10-03T15:00:00Z"),
  },
  {
    orderNumber: "A-10260",
    customerId: ObjectId("670000000000000000000008"),
    items: [
      {
        productId: ObjectId(),
        name: "Gabinete ATX",
        price: Double(900),
        quantity: 1,
      },
    ],
    shippingDetails: {
      address: "Centro Comercial Norte 505",
      city: "Metropolis",
    },
    total: Double(980),
    status: "Enviado",
    createdAt: new Date("2025-10-04T12:00:00Z"),
  },
  {
    orderNumber: "A-10261",
    customerId: ObjectId("670000000000000000000009"),
    items: [
      {
        productId: ObjectId(),
        name: "Fuente de Poder 750W",
        price: Double(850),
        quantity: 1,
      },
    ],
    shippingDetails: { address: "Calle del Rio 606", city: "Ciudad Capital" },
    total: Double(925),
    status: "Pagado",
    createdAt: new Date("2025-10-05T09:30:00Z"),
  },
  {
    orderNumber: "A-10262",
    customerId: ObjectId("670000000000000000000010"),
    items: [
      {
        productId: ObjectId(),
        name: "Procesador Core i7",
        price: Double(3200),
        quantity: 1,
      },
    ],
    shippingDetails: { address: "Edificio Central 707", city: "Metropolis" },
    total: Double(3350),
    status: "Entregado",
    createdAt: new Date("2025-10-06T13:00:00Z"),
  },
  {
    orderNumber: "A-10263",
    customerId: ObjectId("670000000000000000000011"),
    items: [
      {
        productId: ObjectId(),
        name: "Motherboard Z690",
        price: Double(1800),
        quantity: 1,
      },
    ],
    shippingDetails: {
      address: "Colonia Las Palmeras 808",
      city: "Pueblo Nuevo",
    },
    total: Double(1950),
    status: "Enviado",
    createdAt: new Date("2025-10-07T16:00:00Z"),
  },
  {
    orderNumber: "A-10264",
    customerId: ObjectId("670000000000000000000012"),
    items: [
      {
        productId: ObjectId(),
        name: "Cooler CPU",
        price: Double(400),
        quantity: 1,
      },
      {
        productId: ObjectId(),
        name: "Mousepad XL",
        price: Double(150),
        quantity: 1,
      },
    ],
    shippingDetails: { address: "Zona Industrial 909", city: "Metropolis" },
    total: Double(610),
    status: "Pagado",
    createdAt: new Date("2025-10-08T10:00:00Z"),
  },
  {
    orderNumber: "A-10265",
    customerId: ObjectId("670000000000000000000013"),
    items: [
      {
        productId: ObjectId(),
        name: "Micrófono Condensador",
        price: Double(1100),
        quantity: 1,
      },
    ],
    shippingDetails: {
      address: "Residenciales El Bosque 111",
      city: "Ciudad Capital",
    },
    total: Double(1200),
    status: "Cancelado",
    createdAt: new Date("2025-10-09T14:30:00Z"),
  },
  {
    orderNumber: "A-10266",
    customerId: ObjectId("670000000000000000000014"),
    items: [
      {
        productId: ObjectId(),
        name: "Escritorio Eléctrico",
        price: Double(3500),
        quantity: 1,
      },
    ],
    shippingDetails: { address: "Calle ancha 222", city: "Pueblo Nuevo" },
    total: Double(3750),
    status: "Pagado",
    createdAt: new Date("2025-10-10T09:00:00Z"),
  },
  {
    orderNumber: "A-10267",
    customerId: ObjectId("670000000000000000000015"),
    items: [
      {
        productId: ObjectId(),
        name: "Luz LED RGB",
        price: Double(200),
        quantity: 3,
      },
    ],
    shippingDetails: { address: "Torre Empresarial 333", city: "Metropolis" },
    total: Double(680),
    status: "Entregado",
    createdAt: new Date("2025-10-11T11:00:00Z"),
  },
  {
    orderNumber: "A-10268",
    customerId: ObjectId("670000000000000000000016"),
    items: [
      {
        productId: ObjectId(),
        name: "Hub USB-C",
        price: Double(450),
        quantity: 1,
      },
    ],
    shippingDetails: {
      address: "Avenida Las Americas 444",
      city: "Ciudad Capital",
    },
    total: Double(500),
    status: "Pagado",
    createdAt: new Date("2025-10-12T15:00:00Z"),
  },
  {
    orderNumber: "A-10269",
    customerId: ObjectId("670000000000000000000017"),
    items: [
      {
        productId: ObjectId(),
        name: "Set de Cables",
        price: Double(180),
        quantity: 1,
      },
    ],
    shippingDetails: {
      address: "Calle de los Arboles 555",
      city: "Pueblo Nuevo",
    },
    total: Double(240),
    status: "Enviado",
    createdAt: new Date("2025-10-13T16:30:00Z"),
  },
  {
    orderNumber: "A-10270",
    customerId: ObjectId("670000000000000000000018"),
    items: [
      {
        productId: ObjectId(),
        name: "Monitor Curvo 27''",
        price: Double(2500),
        quantity: 2,
      },
    ],
    shippingDetails: { address: "Parque Tecnologico 666", city: "Metropolis" },
    total: Double(5200),
    status: "Pagado",
    createdAt: new Date("2025-10-14T18:00:00Z"),
  },
]);
print(">>> 20 pedidos insertados.");
