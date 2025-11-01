{
  $jsonSchema: {
    bsonType: 'object',
    required: [
      'customerId',
      'items',
      'status',
      'updatedAt'
    ],
    properties: {
      customerId: {
        bsonType: 'objectId'
      },
      items: {
        bsonType: 'array',
        maxItems: 100,
        items: {
          bsonType: 'object',
          required: [
            'productId',
            'sku',
            'name',
            'price',
            'quantity'
          ],
          properties: {
            productId: {
              bsonType: 'objectId'
            },
            sku: {
              bsonType: 'string'
            },
            name: {
              bsonType: 'string'
            },
            price: {
              bsonType: 'double'
            },
            quantity: {
              bsonType: 'int',
              minimum: 1
            }
          }
        }
      },
      status: {
        'enum': [
          'active',
          'abandoned',
          'converted'
        ]
      },
      updatedAt: {
        bsonType: 'date'
      }
    }
  }
}