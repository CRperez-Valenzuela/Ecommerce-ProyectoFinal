const arrayOrders = [
    {
        "id": 1,
        "statuspago": "completado",
        "statusenvio": 5658,
        "fecha": "2024-08-17T11:34:49.620Z",
        "total": 1000,
        "shoes": [
            {
                "id": 1,
                "name": "Air Kyrie Flytrap 6",
                "brand": "Nike",
                "price": 170000,
                "gender": "Hombre",
                "sport": "Basketball",
                "image": "https://res.cloudinary.com/dbkg9dzwt/image/upload/v1722457827/1_esksyk.jpg",
                "description": "Zapatilla de basquet NBA",
                "stock": true,
                "enable": true,
                "orderitem": {
                    "orderid": 1,
                    "shoeid": 1,
                    "quantity": 20
                }
            },
            {
                "id": 2,
                "name": "UltraBoost 21",
                "brand": "Adidas",
                "price": 180000,
                "gender": "Unisex",
                "sport": "Running",
                "image": "https://res.cloudinary.com/dbkg9dzwt/image/upload/v1723847532/kappiemfexd9vccklskq.jpg",
                "description": "Zapatilla de running",
                "stock": true,
                "enable": true,
                "orderitem": {
                    "orderid": 1,
                    "shoeid": 2,
                    "quantity": 10
                }
            }
        ]
    },
    {
        "id": 2,
        "statuspago": "completado",
        "statusenvio": 5659,
        "fecha": "2024-08-18T14:22:30.120Z",
        "total": 1500,
        "shoes": [
            {
                "id": 3,
                "name": "Metcon 7",
                "brand": "Nike",
                "price": 200000,
                "gender": "Mujer",
                "sport": "CrossFit",
                "image": "https://res.cloudinary.com/dbkg9dzwt/image/upload/v1722457828/9_vplovm.jpg",
                "description": "Zapatilla para CrossFit",
                "stock": true,
                "enable": true,
                "orderitem": {
                    "orderid": 2,
                    "shoeid": 3,
                    "quantity": 15
                }
            },
            {
                "id": 4,
                "name": "SuperRep Go 3",
                "brand": "Nike",
                "price": 220000,
                "gender": "Hombre",
                "sport": "Training",
                "image": "https://res.cloudinary.com/dbkg9dzwt/image/upload/v1722457828/8_asb8fc.jpg",
                "description": "Zapatilla de entrenamiento",
                "stock": true,
                "enable": true,
                "orderitem": {
                    "orderid": 2,
                    "shoeid": 4,
                    "quantity": 12
                }
            }
        ]
    },
    {
        "id": 3,
        "statuspago": "completado",
        "statusenvio": 5660,
        "fecha": "2024-08-19T09:15:43.450Z",
        "total": 2000,
        "shoes": [
            {
                "id": 5,
                "name": "AlphaEdge 4D",
                "brand": "Adidas",
                "price": 250000,
                "gender": "Unisex",
                "sport": "Running",
                "image": "https://res.cloudinary.com/dbkg9dzwt/image/upload/v1722457827/2_pgnji8.jpg",
                "description": "Zapatilla con tecnología 4D",
                "stock": true,
                "enable": true,
                "orderitem": {
                    "orderid": 3,
                    "shoeid": 5,
                    "quantity": 18
                }
            },
            {
                "id": 1,
                "name": "Air Kyrie Flytrap 6",
                "brand": "Nike",
                "price": 170000,
                "gender": "Hombre",
                "sport": "Basketball",
                "image": "https://res.cloudinary.com/dbkg9dzwt/image/upload/v1722457827/5_ckvt4u.jpg",
                "description": "Zapatilla de basquet NBA",
                "stock": true,
                "enable": true,
                "orderitem": {
                    "orderid": 3,
                    "shoeid": 1,
                    "quantity": 20
                }
            }
        ]
    },
    {
        "id": 4,
        "statuspago": "completado",
        "statusenvio": 5661,
        "fecha": "2024-08-20T17:50:20.730Z",
        "total": 2500,
        "shoes": [
            {
                "id": 2,
                "name": "UltraBoost 21",
                "brand": "Adidas",
                "price": 180000,
                "gender": "Unisex",
                "sport": "Running",
                "image": "https://res.cloudinary.com/dbkg9dzwt/image/upload/v1723509863/xmhyicqz3co3btwwxe3d.jpg",
                "description": "Zapatilla de running",
                "stock": true,
                "enable": true,
                "orderitem": {
                    "orderid": 4,
                    "shoeid": 2,
                    "quantity": 25
                }
            },
            {
                "id": 3,
                "name": "Metcon 7",
                "brand": "Nike",
                "price": 200000,
                "gender": "Mujer",
                "sport": "CrossFit",
                "image": "https://res.cloudinary.com/dbkg9dzwt/image/upload/v1722457828/7_bswghj.jpg",
                "description": "Zapatilla para CrossFit",
                "stock": true,
                "enable": true,
                "orderitem": {
                    "orderid": 4,
                    "shoeid": 3,
                    "quantity": 22
                }
            }
        ]
    },
    {
        "id": 5,
        "statuspago": "completado",
        "statusenvio": 5662,
        "fecha": "2024-08-21T13:42:15.610Z",
        "total": 3000,
        "shoes": [
            {
                "id": 4,
                "name": "SuperRep Go 3",
                "brand": "Nike",
                "price": 220000,
                "gender": "Hombre",
                "sport": "Training",
                "image": "https://res.cloudinary.com/dbkg9dzwt/image/upload/v1722457836/24_owysto.jpg",
                "description": "Zapatilla de entrenamiento",
                "stock": true,
                "enable": true,
                "orderitem": {
                    "orderid": 5,
                    "shoeid": 4,
                    "quantity": 12
                }
            },
            {
                "id": 5,
                "name": "AlphaEdge 4D",
                "brand": "Adidas",
                "price": 250000,
                "gender": "Unisex",
                "sport": "Running",
                "image": "https://res.cloudinary.com/dbkg9dzwt/image/upload/v1722630953/26_qvzqpw.jpg",
                "description": "Zapatilla con tecnología 4D",
                "stock": true,
                "enable": true,
                "orderitem": {
                    "orderid": 5,
                    "shoeid": 5,
                    "quantity": 18
                }
            }
        ]
    }
]


module.exports = arrayOrders