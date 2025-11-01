{
  $jsonSchema: {
    bsonType: 'object',
    required: [
      'name',
      'email',
      'createdAt'
    ],
    properties: {
      name: {
        bsonType: 'string',
        description: 'debe ser una cadena y es obligatorio'
      },
      email: {
        bsonType: 'string',
        pattern: '^.+@.+\\..+$',
        description: 'debe ser un email válido y es obligatorio'
      },
      addresses: {
        bsonType: 'array',
        description: 'debe ser un array de direcciones',
        items: {
          bsonType: 'object',
          required: [
            'alias',
            'street',
            'city'
          ],
          properties: {
            alias: {
              bsonType: 'string'
            },
            street: {
              bsonType: 'string'
            },
            city: {
              bsonType: 'string'
            }
          }
        }
      },
      createdAt: {
        bsonType: 'date',
        description: 'debe ser una fecha y es obligatorio'
      }
    }
  }
}