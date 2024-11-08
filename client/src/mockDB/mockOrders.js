const mockOrders = [
//     {
//       "id": 1,
//       "userid": 1,
//       "statuspago": "MercadoPago",
//       "statusenvio": 1, // Ejemplo: 1 para 'Shipped', 2 para 'Pending', 3 para 'Completed'
//       "fecha": "2024-06-01T00:00:00.000Z",
//       "total": 1800 // Precio de Zapatilla A
//     },
//     {
//       "id": 2,
//       "userid": 2,
//       "statuspago": "MercadoPago",
//       "statusenvio": 2,
//       "fecha": "2024-06-05T00:00:00.000Z",
//       "total": 2200 // Precio de Zapatilla B
//     },
//     {
//       "id": 3,
//       "userid": 3,
//       "statuspago": "MercadoPago",
//       "statusenvio": 1,
//       "fecha": "2024-06-10T00:00:00.000Z",
//       "total": 1500 // Precio de Zapatilla C
//     },
//     {
//       "id": 4,
//       "userid": 4,
//       "statuspago": "MercadoPago",
//       "statusenvio": 3,
//       "fecha": "2024-06-15T00:00:00.000Z",
//       "total": 2600 // Precio de Zapatilla D
//     },
//     {
//       "id": 5,
//       "userid": 5,
//       "statuspago": "MercadoPago",
//       "statusenvio": 2,
//       "fecha": "2024-06-20T00:00:00.000Z",
//       "total": 2000 // Precio de Zapatilla E
//     },
//     {
//       "id": 6,
//       "userid": 6,
//       "statuspago": "MercadoPago",
//       "statusenvio": 1,
//       "fecha": "2024-07-01T00:00:00.000Z",
//       "total": 2800 // Precio de Zapatilla F
//     },
//     {
//       "id": 7,
//       "userid": 7,
//       "statuspago": "MercadoPago",
//       "statusenvio": 3,
//       "fecha": "2024-07-05T00:00:00.000Z",
//       "total": 2200 // Precio de Zapatilla G
//     },
//     {
//       "id": 8,
//       "userid": 8,
//       "statuspago": "MercadoPago",
//       "statusenvio": 2,
//       "fecha": "2024-07-10T00:00:00.000Z",
//       "total": 1700 // Precio de Zapatilla H
//     },
//     {
//       "id": 9,
//       "userid": 9,
//       "statuspago": "MercadoPago",
//       "statusenvio": 1,
//       "fecha": "2024-07-15T00:00:00.000Z",
//       "total": 1900 // Precio de Zapatilla I
//     },
//     {
//       "id": 10,
//       "userid": 10,
//       "statuspago": "MercadoPago",
//       "statusenvio": 3,
//       "fecha": "2024-07-20T00:00:00.000Z",
//       "total": 2300 // Precio de Zapatilla J
//     },
//     {
//       "id": 11,
//       "userid": 11,
//       "statuspago": "MercadoPago",
//       "statusenvio": 2,
//       "fecha": "2024-08-01T00:00:00.000Z",
//       "total": 2500 // Precio de Zapatilla K
//     },
//     {
//       "id": 12,
//       "userid": 12,
//       "statuspago": "MercadoPago",
//       "statusenvio": 1,
//       "fecha": "2024-08-05T00:00:00.000Z",
//       "total": 2200 // Precio de Zapatilla L
//     },
//     {
//       "id": 13,
//       "userid": 13,
//       "statuspago": "MercadoPago",
//       "statusenvio": 3,
//       "fecha": "2024-08-10T00:00:00.000Z",
//       "total": 2700 // Precio de Zapatilla M
//     },
//     {
//       "id": 14,
//       "userid": 14,
//       "statuspago": "MercadoPago",
//       "statusenvio": 2,
//       "fecha": "2024-08-12T00:00:00.000Z",
//       "total": 2400 // Precio de Zapatilla N
//     },
//     {
//       "id": 15,
//       "userid": 15,
//       "statuspago": "MercadoPago",
//       "statusenvio": 1,
//       "fecha": "2024-08-15T00:00:00.000Z",
//       "total": 2100 // Precio de Zapatilla O
//     },
//     {
//       "id": 16,
//       "userid": 16,
//       "statuspago": "MercadoPago",
//       "statusenvio": 3,
//       "fecha": "2024-08-18T00:00:00.000Z",
//       "total": 2600 // Precio de Zapatilla P
//     },
//     {
//       "id": 17,
//       "userid": 17,
//       "statuspago": "MercadoPago",
//       "statusenvio": 2,
//       "fecha": "2024-08-20T00:00:00.000Z",
//       "total": 2300 // Precio de Zapatilla Q
//     },
//     {
//       "id": 18,
//       "userid": 18,
//       "statuspago": "MercadoPago",
//       "statusenvio": 1,
//       "fecha": "2024-08-22T00:00:00.000Z",
//       "total": 2000 // Precio de Zapatilla R
//     },
//     {
//       "id": 19,
//       "userid": 19,
//       "statuspago": "MercadoPago",
//       "statusenvio": 3,
//       "fecha": "2024-08-25T00:00:00.000Z",
//       "total": 2700 // Precio de Zapatilla S
//     },
//     {
//       "id": 20,
//       "userid": 20,
//       "statuspago": "MercadoPago",
//       "statusenvio": 2,
//       "fecha": "2024-08-28T00:00:00.000Z",
//       "total": 2500 // Precio de Zapatilla T
//     }


{
    "statuspago": "Pagado",
    "statusenvio": 1,
    "fecha": "2024-06-15T10:00:00Z",
    "total": 140000,
    "shoes": [
      {
        "shoe": {
          "name": "Buzzer",
          "brand": "Under Armor",
          "price": 140000,
          "gender": "Hombre",
          "sport": "Basketball",
          "image": "https://res.cloudinary.com/dbkg9dzwt/image/upload/v1722457827/2_pgnji8.jpg"
        },
        "quantity": 1
      }
    ]
  },
  {
    "statuspago": "Pagado",
    "statusenvio": 2,
    "fecha": "2024-06-22T12:30:00Z",
    "total": 96800,
    "shoes": [
      {
        "shoe": {
          "name": "Questar",
          "brand": "Adidas",
          "price": 96800,
          "gender": "Mujer",
          "sport": "Running",
          "image": "https://res.cloudinary.com/dbkg9dzwt/image/upload/v1722457828/7_bswghj.jpg"
        },
        "quantity": 1
      }
    ]
  },
  {
    "statuspago": "Pagado",
    "statusenvio": 3,
    "fecha": "2024-07-01T15:45:00Z",
    "total": 120000,
    "shoes": [
      {
        "shoe": {
          "name": "Softride Sway",
          "brand": "Puma",
          "price": 120000,
          "gender": "Mujer",
          "sport": "Running",
          "image": "https://res.cloudinary.com/dbkg9dzwt/image/upload/v1722457827/5_ckvt4u.jpg"
        },
        "quantity": 1
      }
    ]
  },
  {
    "statuspago": "Pagado",
    "statusenvio": 1,
    "fecha": "2024-07-10T09:00:00Z",
    "total": 68000,
    "shoes": [
      {
        "shoe": {
          "name": "Predator Club Fg",
          "brand": "Adidas",
          "price": 68000,
          "gender": "Hombre",
          "sport": "Football",
          "image": "https://res.cloudinary.com/dbkg9dzwt/image/upload/v1722457834/21_ep7l2b.jpg"
        },
        "quantity": 1
      }
    ]
  },
  {
    "statuspago": "Pagado",
    "statusenvio": 2,
    "fecha": "2024-07-18T11:15:00Z",
    "total": 155000,
    "shoes": [
      {
        "shoe": {
          "name": "Renew Run 3",
          "brand": "Nike",
          "price": 155000,
          "gender": "Hombre",
          "sport": "Running",
          "image": "https://res.cloudinary.com/dbkg9dzwt/image/upload/v1722630953/27_z1mlqd.jpg"
        },
        "quantity": 1
      }
    ]
  },
  {
    "statuspago": "Pagado",
    "statusenvio": 3,
    "fecha": "2024-07-25T14:30:00Z",
    "total": 144000,
    "shoes": [
      {
        "shoe": {
          "name": "Vapor Lite 2",
          "brand": "Nike",
          "price": 144000,
          "gender": "Mujer",
          "sport": "Tennis",
          "image": "https://res.cloudinary.com/dbkg9dzwt/image/upload/v1722457828/12_ofh7pg.jpg"
        },
        "quantity": 1
      }
    ]
  },
  {
    "statuspago": "Pagado",
    "statusenvio": 1,
    "fecha": "2024-07-10T11:10:00Z",
    "total": 68000,
    "shoes": [
      {
        "shoe": {
          "name": "Predator Club Fg",
          "brand": "Adidas",
          "price": 68000,
          "gender": "Hombre",
          "sport": "Football",
          "image": "https://res.cloudinary.com/dbkg9dzwt/image/upload/v1722457834/21_ep7l2b.jpg"
        },
        "quantity": 1
      }
    ]
  },
  {
    "statuspago": "Pagado",
    "statusenvio": 1,
    "fecha": "2024-08-01T08:00:00Z",
    "total": 88900,
    "shoes": [
      {
        "shoe": {
          "name": "Artis II",
          "brand": "Topper",
          "price": 88900,
          "gender": "Hombre",
          "sport": "Football",
          "image": "https://res.cloudinary.com/dbkg9dzwt/image/upload/v1722457828/3_bwix95.jpg"
        },
        "quantity": 1
      }
    ]
  },
  {
    "statuspago": "Pagado",
    "statusenvio": 2,
    "fecha": "2024-08-10T10:45:00Z",
    "total": 103000,
    "shoes": [
      {
        "shoe": {
          "name": "Ligra 7",
          "brand": "Adidas",
          "price": 103000,
          "gender": "Unisex",
          "sport": "Tennis",
          "image": "https://res.cloudinary.com/dbkg9dzwt/image/upload/v1722457827/6_of4onj.jpg"
        },
        "quantity": 1
      }
    ]
  },
  {
    "statuspago": "Pagado",
    "statusenvio": 3,
    "fecha": "2024-08-15T12:00:00Z",
    "total": 210000,
    "shoes": [
      {
        "shoe": {
          "name": "Terrex Ax4",
          "brand": "Adidas",
          "price": 210000,
          "gender": "Hombre",
          "sport": "Trekking",
          "image": "https://res.cloudinary.com/dbkg9dzwt/image/upload/v1722457836/23_lvwilp.jpg"
        },
        "quantity": 1
      }
    ]
  },
  {
    "statuspago": "Pendiente",
    "statusenvio": 1,
    "fecha": "2024-06-12T13:00:00Z",
    "total": 122000,
    "shoes": [
      {
        "shoe": {
          "name": "Grove High",
          "brand": "Topper",
          "price": 122000,
          "gender": "Hombre",
          "sport": "Trekking",
          "image": "https://res.cloudinary.com/dbkg9dzwt/image/upload/v1722457836/24_owysto.jpg"
        },
        "quantity": 1
      }
    ]
  },
  {
    "statuspago": "Pagado",
    "statusenvio": 2,
    "fecha": "2024-06-20T16:30:00Z",
    "total": 116000,
    "shoes": [
      {
        "shoe": {
          "name": "Revolution 6 Next Nature",
          "brand": "Nike",
          "price": 116000,
          "gender": "Unisex",
          "sport": "Running",
          "image": "https://res.cloudinary.com/dbkg9dzwt/image/upload/v1722632738/25_c2m7ea.jpg"
        },
        "quantity": 1
      }
    ]
  },
  {
    "statuspago": "Pagado",
    "statusenvio": 3,
    "fecha": "2024-07-05T17:15:00Z",
    "total": 66000,
    "shoes": [
      {
        "shoe": {
          "name": "Playmaker",
          "brand": "Puma",
          "price": 66000,
          "gender": "Mujer",
          "sport": "Basketball",
          "image": "https://res.cloudinary.com/dbkg9dzwt/image/upload/v1723509863/xmhyicqz3co3btwwxe3d.jpg"
        },
        "quantity": 1
      }
    ]
  },
  {
    "statuspago": "Pagado",
    "statusenvio": 1,
    "fecha": "2024-07-14T09:30:00Z",
    "total": 161300,
    "shoes": [
      {
        "shoe": {
          "name": "Air Kyrie Flytrap 6",
          "brand": "Nike",
          "price": 161300,
          "gender": "Hombre",
          "sport": "Basketball",
          "image": "https://res.cloudinary.com/dbkg9dzwt/image/upload/v1722457827/1_esksyk.jpg"
        },
        "quantity": 2
      }
    ]
  },
  {
    "statuspago": "Pagado",
    "statusenvio": 2,
    "fecha": "2024-07-22T11:00:00Z",
    "total": 115000,
    "shoes": [
      {
        "shoe": {
          "name": "Magnetico Select 2.0 Fg",
          "brand": "Under Armor",
          "price": 115000,
          "gender": "Hombre",
          "sport": "Football",
          "image": "https://res.cloudinary.com/dbkg9dzwt/image/upload/v1722457827/4_lwv8hd.jpg"
        },
        "quantity": 1
      }
    ]
  },
  {
    "statuspago": "Pagado",
    "statusenvio": 3,
    "fecha": "2024-07-30T12:30:00Z",
    "total": 68000,
    "shoes": [
      {
        "shoe": {
          "name": "Tie Break III",
          "brand": "Topper",
          "price": 68000,
          "gender": "Mujer",
          "sport": "Tennis",
          "image": "https://res.cloudinary.com/dbkg9dzwt/image/upload/v1722457829/13_ob7fln.jpg"
        },
        "quantity": 1
      }
    ]
  },
  {
    "statuspago": "Pagado",
    "statusenvio": 3,
    "fecha": "2024-07-30T12:30:00Z",
    "total": 62000,
    "shoes": [
      {
        "shoe": {
          "name": "Cover IV",
          "brand": "Topper",
          "price": 62000,
          "gender": "Hombre",
          "sport": "Tennis",
          "image": "https://res.cloudinary.com/dbkg9dzwt/image/upload/v1722457828/11_ako0co.jpg"
        },
        "quantity": 1
      }
    ]
  },
]
export default mockOrders




/*
Pendiente: La compra ha sido realizada, pero aún no se ha procesado.
Procesando: La compra está siendo preparada para el envío o el pago está en curso.
Enviado: El pedido ha sido enviado al cliente.
Entregado: El cliente ha recibido el pedido.
Cancelado: La compra ha sido cancelada y no se ha completado.
Devuelto: El cliente ha devuelto el pedido después de haberlo recibido.
*/