{
  $jsonSchema: {
    bsonType: 'object',
    required: [
      'orderNumber',
      'customerId',
      'items',
      'shippingDetails',
      'total',
      'status',
      'createdAt'
    ],
    properties: {
      orderNumber: {
        bsonType: 'string'
      },
      customerId: {
        bsonType: 'objectId'
      },
      items: {
        bsonType: 'array',
        minItems: 1,
        items: {
          bsonType: 'object',
          required: [
            'productId',
            'name',
            'price',
            'quantity'
          ],
          properties: {
            productId: {
              bsonType: 'objectId'
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
      shippingDetails: {
        bsonType: 'object',
        required: [
          'address',
          'city'
        ],
        properties: {
          recipientName: {
            bsonType: 'string'
          },
          address: {
            bsonType: 'string'
          },
          city: {
            bsonType: 'string'
          }
        }
      },
      total: {
        bsonType: 'double'
      },
      status: {
        'enum': [
          'Pagado',
          'Enviado',
          'Entregado',
          'Cancelado'
        ]
      },
      createdAt: {
        bsonType: 'date'
      }
    }
  }
}