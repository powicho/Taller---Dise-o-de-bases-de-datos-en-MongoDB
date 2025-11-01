use("ecommerceTareaTaller");
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
  {
    _id: ObjectId("670000000000000000000003"),
    name: "Sofia Reyes",
    email: "sofia.reyes@example.com",
    addresses: [
      {
        alias: "Casa",
        street: "Boulevard de los Sueños 789",
        city: "Ciudad Capital",
      },
    ],
    createdAt: new Date(),
  },
  {
    _id: ObjectId("670000000000000000000004"),
    name: "Carlos Peña",
    email: "carlos.pena@example.com",
    addresses: [
      { alias: "Casa", street: "Calle Luna 101", city: "Pueblo Nuevo" },
    ],
    createdAt: new Date(),
  },
  {
    _id: ObjectId("670000000000000000000005"),
    name: "Elena Morales",
    email: "elena.morales@example.com",
    addresses: [
      { alias: "Oficina", street: "Plaza Central 202", city: "Metropolis" },
    ],
    createdAt: new Date(),
  },
  {
    _id: ObjectId("670000000000000000000006"),
    name: "Javier Solis",
    email: "javier.solis@example.com",
    addresses: [
      { alias: "Casa", street: "Ruta del Sol 303", city: "Ciudad Capital" },
    ],
    createdAt: new Date(),
  },
  {
    _id: ObjectId("670000000000000000000007"),
    name: "Laura Jimenez",
    email: "laura.jimenez@example.com",
    addresses: [
      {
        alias: "Casa",
        street: "Pasaje de las Flores 404",
        city: "Pueblo Nuevo",
      },
    ],
    createdAt: new Date(),
  },
  {
    _id: ObjectId("670000000000000000000008"),
    name: "David Ortiz",
    email: "david.ortiz@example.com",
    addresses: [
      {
        alias: "Trabajo",
        street: "Centro Comercial Norte 505",
        city: "Metropolis",
      },
    ],
    createdAt: new Date(),
  },
  {
    _id: ObjectId("670000000000000000000009"),
    name: "Maria Romero",
    email: "maria.romero@example.com",
    addresses: [
      { alias: "Casa", street: "Calle del Rio 606", city: "Ciudad Capital" },
    ],
    createdAt: new Date(),
  },
  {
    _id: ObjectId("670000000000000000000010"),
    name: "Pedro Castillo",
    email: "pedro.castillo@example.com",
    addresses: [
      { alias: "Oficina", street: "Edificio Central 707", city: "Metropolis" },
    ],
    createdAt: new Date(),
  },
  {
    _id: ObjectId("670000000000000000000011"),
    name: "Isabel Guzman",
    email: "isabel.guzman@example.com",
    addresses: [
      {
        alias: "Casa",
        street: "Colonia Las Palmeras 808",
        city: "Pueblo Nuevo",
      },
    ],
    createdAt: new Date(),
  },
  {
    _id: ObjectId("670000000000000000000012"),
    name: "Fernando Vega",
    email: "fernando.vega@example.com",
    addresses: [
      { alias: "Trabajo", street: "Zona Industrial 909", city: "Metropolis" },
    ],
    createdAt: new Date(),
  },
  {
    _id: ObjectId("670000000000000000000013"),
    name: "Gabriela Soto",
    email: "gabriela.soto@example.com",
    addresses: [
      {
        alias: "Casa",
        street: "Residenciales El Bosque 111",
        city: "Ciudad Capital",
      },
    ],
    createdAt: new Date(),
  },
  {
    _id: ObjectId("670000000000000000000014"),
    name: "Ricardo Flores",
    email: "ricardo.flores@example.com",
    addresses: [
      { alias: "Casa", street: "Calle ancha 222", city: "Pueblo Nuevo" },
    ],
    createdAt: new Date(),
  },
  {
    _id: ObjectId("670000000000000000000015"),
    name: "Patricia Luna",
    email: "patricia.luna@example.com",
    addresses: [
      { alias: "Oficina", street: "Torre Empresarial 333", city: "Metropolis" },
    ],
    createdAt: new Date(),
  },
  {
    _id: ObjectId("670000000000000000000016"),
    name: "Miguel Angel Roca",
    email: "miguel.roca@example.com",
    addresses: [
      {
        alias: "Casa",
        street: "Avenida Las Americas 444",
        city: "Ciudad Capital",
      },
    ],
    createdAt: new Date(),
  },
  {
    _id: ObjectId("670000000000000000000017"),
    name: "Daniela Perez",
    email: "daniela.perez@example.com",
    addresses: [
      {
        alias: "Casa",
        street: "Calle de los Arboles 555",
        city: "Pueblo Nuevo",
      },
    ],
    createdAt: new Date(),
  },
  {
    _id: ObjectId("670000000000000000000018"),
    name: "Jorge Vargas",
    email: "jorge.vargas@example.com",
    addresses: [
      {
        alias: "Trabajo",
        street: "Parque Tecnologico 666",
        city: "Metropolis",
      },
    ],
    createdAt: new Date(),
  },
  {
    _id: ObjectId("670000000000000000000019"),
    name: "Veronica Cruz",
    email: "veronica.cruz@example.com",
    addresses: [
      {
        alias: "Casa",
        street: "Villa de las Flores 777",
        city: "Ciudad Capital",
      },
    ],
    createdAt: new Date(),
  },
  {
    _id: ObjectId("670000000000000000000020"),
    name: "Oscar Mendoza",
    email: "oscar.mendoza@example.com",
    addresses: [
      {
        alias: "Oficina",
        street: "Centro de Negocios 888",
        city: "Metropolis",
      },
    ],
    createdAt: new Date(),
  },
]);
print(">>> 20 clientes insertados.");
