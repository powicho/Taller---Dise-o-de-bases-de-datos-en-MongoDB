use("ecommerceTareaTaller");
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
  {
    customerId: ObjectId("670000000000000000000002"),
    items: [
      {
        productId: ObjectId(),
        sku: "MON-002",
        name: "Monitor Curvo 27''",
        price: Double(2500),
        quantity: 1,
      },
    ],
    status: "active",
    updatedAt: new Date(),
  },
  {
    customerId: ObjectId("670000000000000000000003"),
    items: [
      {
        productId: ObjectId(),
        sku: "CAM-003",
        name: "Webcam HD",
        price: Double(300),
        quantity: 2,
      },
    ],
    status: "active",
    updatedAt: new Date(),
  },
  {
    customerId: ObjectId("670000000000000000000004"),
    items: [
      {
        productId: ObjectId(),
        sku: "SSD-004",
        name: "Disco SSD 1TB",
        price: Double(800),
        quantity: 1,
      },
    ],
    status: "active",
    updatedAt: new Date(),
  },
  {
    customerId: ObjectId("670000000000000000000005"),
    items: [
      {
        productId: ObjectId(),
        sku: "RAM-005",
        name: "Memoria RAM 16GB",
        price: Double(600),
        quantity: 2,
      },
    ],
    status: "active",
    updatedAt: new Date(),
  },
  {
    customerId: ObjectId("670000000000000000000006"),
    items: [
      {
        productId: ObjectId(),
        sku: "GPU-006",
        name: "Tarjeta Gráfica RTX",
        price: Double(4500),
        quantity: 1,
      },
    ],
    status: "active",
    updatedAt: new Date(),
  },
  {
    customerId: ObjectId("670000000000000000000007"),
    items: [
      {
        productId: ObjectId(),
        sku: "KBD-001",
        name: "Teclado Mecánico",
        price: Double(750),
        quantity: 1,
      },
    ],
    status: "active",
    updatedAt: new Date(),
  },
  {
    customerId: ObjectId("670000000000000000000008"),
    items: [
      {
        productId: ObjectId(),
        sku: "MSE-010",
        name: "Mouse Inalámbrico",
        price: Double(250),
        quantity: 3,
      },
    ],
    status: "active",
    updatedAt: new Date(),
  },
  {
    customerId: ObjectId("670000000000000000000009"),
    items: [
      {
        productId: ObjectId(),
        sku: "CAS-007",
        name: "Gabinete ATX",
        price: Double(900),
        quantity: 1,
      },
    ],
    status: "active",
    updatedAt: new Date(),
  },
  {
    customerId: ObjectId("670000000000000000000010"),
    items: [
      {
        productId: ObjectId(),
        sku: "PSU-008",
        name: "Fuente de Poder 750W",
        price: Double(850),
        quantity: 1,
      },
    ],
    status: "active",
    updatedAt: new Date(),
  },
  {
    customerId: ObjectId("670000000000000000000011"),
    items: [
      {
        productId: ObjectId(),
        sku: "CPU-009",
        name: "Procesador Core i7",
        price: Double(3200),
        quantity: 1,
      },
    ],
    status: "active",
    updatedAt: new Date(),
  },
  {
    customerId: ObjectId("670000000000000000000012"),
    items: [
      {
        productId: ObjectId(),
        sku: "MBO-011",
        name: "Motherboard Z690",
        price: Double(1800),
        quantity: 1,
      },
    ],
    status: "active",
    updatedAt: new Date(),
  },
  {
    customerId: ObjectId("670000000000000000000013"),
    items: [
      {
        productId: ObjectId(),
        sku: "FAN-012",
        name: "Cooler CPU",
        price: Double(400),
        quantity: 1,
      },
    ],
    status: "active",
    updatedAt: new Date(),
  },
  {
    customerId: ObjectId("670000000000000000000014"),
    items: [
      {
        productId: ObjectId(),
        sku: "MIC-013",
        name: "Micrófono Condensador",
        price: Double(1100),
        quantity: 1,
      },
    ],
    status: "active",
    updatedAt: new Date(),
  },
  {
    customerId: ObjectId("670000000000000000000015"),
    items: [
      {
        productId: ObjectId(),
        sku: "PAD-014",
        name: "Mousepad XL",
        price: Double(150),
        quantity: 2,
      },
    ],
    status: "active",
    updatedAt: new Date(),
  },
  {
    customerId: ObjectId("670000000000000000000016"),
    items: [
      {
        productId: ObjectId(),
        sku: "CHR-015",
        name: "Silla Gamer",
        price: Double(2800),
        quantity: 1,
      },
    ],
    status: "active",
    updatedAt: new Date(),
  },
  {
    customerId: ObjectId("670000000000000000000017"),
    items: [
      {
        productId: ObjectId(),
        sku: "DSK-016",
        name: "Escritorio Eléctrico",
        price: Double(3500),
        quantity: 1,
      },
    ],
    status: "active",
    updatedAt: new Date(),
  },
  {
    customerId: ObjectId("670000000000000000000018"),
    items: [
      {
        productId: ObjectId(),
        sku: "LT-017",
        name: "Luz LED RGB",
        price: Double(200),
        quantity: 5,
      },
    ],
    status: "active",
    updatedAt: new Date(),
  },
  {
    customerId: ObjectId("670000000000000000000019"),
    items: [
      {
        productId: ObjectId(),
        sku: "CAB-018",
        name: "Set de Cables",
        price: Double(180),
        quantity: 1,
      },
    ],
    status: "active",
    updatedAt: new Date(),
  },
  {
    customerId: ObjectId("670000000000000000000020"),
    items: [
      {
        productId: ObjectId(),
        sku: "HUB-019",
        name: "Hub USB-C",
        price: Double(450),
        quantity: 1,
      },
    ],
    status: "active",
    updatedAt: new Date("2024-01-01T10:00:00Z"),
  },
]);
print(">>> 20 carritos insertados.");
