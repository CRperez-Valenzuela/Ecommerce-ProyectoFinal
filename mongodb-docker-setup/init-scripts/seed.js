
const sequelize = require('../../back/db'); 
const { Sequelize } = require('sequelize');
const Shoe = require('../../back/models/shoe')(sequelize, Sequelize.DataTypes); 

const seedData = async () => {
  try {
    await sequelize.sync({ force: true }); // Sincroniza la base de datos y elimina las tablas existentes
    console.log('Base de datos sincronizada');

    // Datos de ejemplo
    const shoes = [
        {
            "ID": 1,
            "name": "Kyrie Flytrap 6",
            "brand": "Nike",
            "size": [43],
            "price": 161300,
            "gender": "Hombre",
            "sport": "Basketball",
            "stock": true,
            "image": "https://res.cloudinary.com/dbkg9dzwt/image/upload/v1722457827/1_esksyk.jpg",
            "description": "Vestibulum sed tortor sit amet odio sodales ultricies..."
          },
          {
            "ID": 2,
            "name": "Buzzer",
            "brand": "Under Armor",
            "size": [42, 43, 44],
            "price": 140000,
            "gender": "Hombre",
            "sport": "Basketball",
            "stock": true,
            "image": "https://res.cloudinary.com/dbkg9dzwt/image/upload/v1722457827/2_pgnji8.jpg",
            "description": "Vestibulum sed tortor sit amet odio sodales ultricies. Etiam tincidunt, justo ut molestie consequat, sapien lacus molestie arcu, laoreet consequat nisl nisi eget est. Cras ut libero gravida, elementum nisl nec, sagittis nisl. Etiam pulvinar, nibh id pretium facilisis, odio dolor hendrerit dui, condimentum tincidunt leo ligula bibendum justo. Cras iaculis hendrerit odio, sed dapibus odio semper id. Ut condimentum eros aliquet ligula bibendum volutpat."
        },
        {
            "ID": 3,
            "name": "Artis II",
            "brand": "Topper",
            "size": [37, 38, 39, 40, 41, 42, 43, 44, 45],
            "price": 88900,
            "gender": "Mujer",
            "sport": "Football",
            "stock": true,
            "image": "https://res.cloudinary.com/dbkg9dzwt/image/upload/v1722457828/3_bwix95.jpg",
            "description": "Vestibulum sed tortor sit amet odio sodales ultricies. Etiam tincidunt, justo ut molestie consequat, sapien lacus molestie arcu, laoreet consequat nisl nisi eget est. Cras ut libero gravida, elementum nisl nec, sagittis nisl. Etiam pulvinar, nibh id pretium facilisis, odio dolor hendrerit dui, condimentum tincidunt leo ligula bibendum justo. Cras iaculis hendrerit odio, sed dapibus odio semper id. Ut condimentum eros aliquet ligula bibendum volutpat."
        },
        {
            "ID": 4,
            "name": "Magnetico Select 2.0 Fg",
            "brand": "Under Armor",
            "size": [42, 44, 45],
            "price": 115000,
            "gender": "Hombre",
            "sport": "Football",
            "stock": true,
            "image": "https://res.cloudinary.com/dbkg9dzwt/image/upload/v1722457827/4_lwv8hd.jpg",
            "description": "Vestibulum sed tortor sit amet odio sodales ultricies. Etiam tincidunt, justo ut molestie consequat, sapien lacus molestie arcu, laoreet consequat nisl nisi eget est. Cras ut libero gravida, elementum nisl nec, sagittis nisl. Etiam pulvinar, nibh id pretium facilisis, odio dolor hendrerit dui, condimentum tincidunt leo ligula bibendum justo. Cras iaculis hendrerit odio, sed dapibus odio semper id. Ut condimentum eros aliquet ligula bibendum volutpat."
        },
        {
            "ID": 5,
            "name": "Softride Sway",
            "brand": "Puma",
            "size": [34, 35],
            "price": 120000,
            "gender": "Mujer",
            "sport": "Running",
            "stock": true,
            "image": "https://res.cloudinary.com/dbkg9dzwt/image/upload/v1722457827/5_ckvt4u.jpg",
            "description": "Vestibulum sed tortor sit amet odio sodales ultricies. Etiam tincidunt, justo ut molestie consequat, sapien lacus molestie arcu, laoreet consequat nisl nisi eget est. Cras ut libero gravida, elementum nisl nec, sagittis nisl. Etiam pulvinar, nibh id pretium facilisis, odio dolor hendrerit dui, condimentum tincidunt leo ligula bibendum justo. Cras iaculis hendrerit odio, sed dapibus odio semper id. Ut condimentum eros aliquet ligula bibendum volutpat."
        },
        {
            "ID": 6,
            "name": "Ligra 7",
            "brand": "Adidas",
            "size": [39, 45],
            "price": 103000,
            "gender": "Unisex",
            "sport": "Tennis",
            "stock": true,
            "image": "https://res.cloudinary.com/dbkg9dzwt/image/upload/v1722457827/6_of4onj.jpg",
            "description": "Vestibulum sed tortor sit amet odio sodales ultricies. Etiam tincidunt, justo ut molestie consequat, sapien lacus molestie arcu, laoreet consequat nisl nisi eget est. Cras ut libero gravida, elementum nisl nec, sagittis nisl. Etiam pulvinar, nibh id pretium facilisis, odio dolor hendrerit dui, condimentum tincidunt leo ligula bibendum justo. Cras iaculis hendrerit odio, sed dapibus odio semper id. Ut condimentum eros aliquet ligula bibendum volutpat."
        },
        {
            "ID": 7,
            "name": "Questar",
            "brand": "Adidas",
            "size": [34, 35, 36, 38],
            "price": 96800,
            "gender": "Mujer",
            "sport": "Running",
            "stock": true,
            "image": "https://res.cloudinary.com/dbkg9dzwt/image/upload/v1722457828/7_bswghj.jpg",
            "description": "Vestibulum sed tortor sit amet odio sodales ultricies. Etiam tincidunt, justo ut molestie consequat, sapien lacus molestie arcu, laoreet consequat nisl nisi eget est. Cras ut libero gravida, elementum nisl nec, sagittis nisl. Etiam pulvinar, nibh id pretium facilisis, odio dolor hendrerit dui, condimentum tincidunt leo ligula bibendum justo. Cras iaculis hendrerit odio, sed dapibus odio semper id. Ut condimentum eros aliquet ligula bibendum volutpat."
        },
        {
            "ID": 8,
            "name": "Zoom Vapor Cage 4 Rafa",
            "brand": "Nike",
            "size": [39, 41, 42, 44],
            "price": 257000,
            "gender": "Hombre",
            "sport": "Tennis",
            "stock": true,
            "image": "https://res.cloudinary.com/dbkg9dzwt/image/upload/v1722457828/8_asb8fc.jpg",
            "description": "Vestibulum sed tortor sit amet odio sodales ultricies. Etiam tincidunt, justo ut molestie consequat, sapien lacus molestie arcu, laoreet consequat nisl nisi eget est. Cras ut libero gravida, elementum nisl nec, sagittis nisl. Etiam pulvinar, nibh id pretium facilisis, odio dolor hendrerit dui, condimentum tincidunt leo ligula bibendum justo. Cras iaculis hendrerit odio, sed dapibus odio semper id. Ut condimentum eros aliquet ligula bibendum volutpat."
        },
        {
            "ID": 9,
            "name": "Gondor II",
            "brand": "Topper",
            "size": [36, 37, 38, 40, 42, 43],
            "price": 87900,
            "gender": "Unisex",
            "sport": "Trekking",
            "stock": true,
            "image": "https://res.cloudinary.com/dbkg9dzwt/image/upload/v1722457828/9_vplovm.jpg",
            "description": "Vestibulum sed tortor sit amet odio sodales ultricies. Etiam tincidunt, justo ut molestie consequat, sapien lacus molestie arcu, laoreet consequat nisl nisi eget est. Cras ut libero gravida, elementum nisl nec, sagittis nisl. Etiam pulvinar, nibh id pretium facilisis, odio dolor hendrerit dui, condimentum tincidunt leo ligula bibendum justo. Cras iaculis hendrerit odio, sed dapibus odio semper id. Ut condimentum eros aliquet ligula bibendum volutpat."
        },
        {
            "ID": 10,
            "name": "Terrex Soulstride",
            "brand": "Adidas",
            "size": [44, 45],
            "price": 101500,
            "gender": "Hombre",
            "sport": "Trekking",
            "stock": true,
            "image": "https://res.cloudinary.com/dbkg9dzwt/image/upload/v1722457828/10_hoss8t.jpg",
            "description": "Vestibulum sed tortor sit amet odio sodales ultricies. Etiam tincidunt, justo ut molestie consequat, sapien lacus molestie arcu, laoreet consequat nisl nisi eget est. Cras ut libero gravida, elementum nisl nec, sagittis nisl. Etiam pulvinar, nibh id pretium facilisis, odio dolor hendrerit dui, condimentum tincidunt leo ligula bibendum justo. Cras iaculis hendrerit odio, sed dapibus odio semper id. Ut condimentum eros aliquet ligula bibendum volutpat."
        },
        {
            "ID": 11,
            "name": "Cover IV",
            "brand": "Topper",
            "size": [40, 41, 42, 43],
            "price": 62000,
            "gender": "Hombre",
            "sport": "Tennis",
            "stock": true,
            "image": "https://res.cloudinary.com/dbkg9dzwt/image/upload/v1722457828/11_ako0co.jpg",
            "description": "Vestibulum sed tortor sit amet odio sodales ultricies. Etiam tincidunt, justo ut molestie consequat, sapien lacus molestie arcu, laoreet consequat nisl nisi eget est. Cras ut libero gravida, elementum nisl nec, sagittis nisl. Etiam pulvinar, nibh id pretium facilisis, odio dolor hendrerit dui, condimentum tincidunt leo ligula bibendum justo. Cras iaculis hendrerit odio, sed dapibus odio semper id. Ut condimentum eros aliquet ligula bibendum volutpat."
        },
        {
            "ID": 12,
            "name": "Vapor Lite 2",
            "brand": "Nike",
            "size": [36, 37, 38, 39, 40],
            "price": 144000,
            "gender": "Mujer",
            "sport": "Tennis",
            "stock": true,
            "image": "https://res.cloudinary.com/dbkg9dzwt/image/upload/v1722457828/12_ofh7pg.jpg",
            "description": "Vestibulum sed tortor sit amet odio sodales ultricies. Etiam tincidunt, justo ut molestie consequat, sapien lacus molestie arcu, laoreet consequat nisl nisi eget est. Cras ut libero gravida, elementum nisl nec, sagittis nisl. Etiam pulvinar, nibh id pretium facilisis, odio dolor hendrerit dui, condimentum tincidunt leo ligula bibendum justo. Cras iaculis hendrerit odio, sed dapibus odio semper id. Ut condimentum eros aliquet ligula bibendum volutpat."
        },
        {
            "ID": 13,
            "name": "Tie Break III",
            "brand": "Topper",
            "size": [38, 39, 40],
            "price": 68000,
            "gender": "Mujer",
            "sport": "Tennis",
            "inStock": true,
            "image": "https://res.cloudinary.com/dbkg9dzwt/image/upload/v1722457833/17_nibgph.jpg",
            "description": "Vestibulum sed tortor sit amet odio sodales ultricies. Etiam tincidunt, justo ut molestie consequat, sapien lacus molestie arcu, laoreet consequat nisl nisi eget est. Cras ut libero gravida, elementum nisl nec, sagittis nisl. Etiam pulvinar, nibh id pretium facilisis, odio dolor hendrerit dui, condimentum tincidunt leo ligula bibendum justo. Cras iaculis hendrerit odio, sed dapibus odio semper id. Ut condimentum eros aliquet ligula bibendum volutpat."
        },
        {
            "ID": 14,
            "name": "Rod Ii",
            "brand": "Topper",
            "size": [40, 41, 42, 43, 44],
            "price": 78000,
            "gender": "Hombre",
            "sport": "Tennis",
            "inStock": true,
            "image": "https://res.cloudinary.com/dbkg9dzwt/image/upload/v1722457833/18_nbe3k0.jpg",
            "description": "Vestibulum sed tortor sit amet odio sodales ultricies. Etiam tincidunt, justo ut molestie consequat, sapien lacus molestie arcu, laoreet consequat nisl nisi eget est. Cras ut libero gravida, elementum nisl nec, sagittis nisl. Etiam pulvinar, nibh id pretium facilisis, odio dolor hendrerit dui, condimentum tincidunt leo ligula bibendum justo. Cras iaculis hendrerit odio, sed dapibus odio semper id. Ut condimentum eros aliquet ligula bibendum volutpat."
        },
        {
            "ID": 15,
            "name": "Gondor II Black",
            "brand": "Topper",
            "size": [40, 41, 42, 43],
            "price": 78000,
            "gender": "Hombre",
            "sport": "Trekking",
            "inStock": true,
            "image": "https://res.cloudinary.com/dbkg9dzwt/image/upload/v1722457834/19_cucm8g.jpg",
            "description": "Vestibulum sed tortor sit amet odio sodales ultricies. Etiam tincidunt, justo ut molestie consequat, sapien lacus molestie arcu, laoreet consequat nisl nisi eget est. Cras ut libero gravida, elementum nisl nec, sagittis nisl. Etiam pulvinar, nibh id pretium facilisis, odio dolor hendrerit dui, condimentum tincidunt leo ligula bibendum justo. Cras iaculis hendrerit odio, sed dapibus odio semper id. Ut condimentum eros aliquet ligula bibendum volutpat."
        },
        {
            "ID": 16,
            "name": "Prospect Neo Force",
            "brand": "Puma",
            "size": [40, 41, 42],
            "price": 78000,
            "gender": "Hombre",
            "sport": "Running",
            "inStock": true,
            "image": "https://res.cloudinary.com/dbkg9dzwt/image/upload/v1722457834/20_mfglae.jpg",
            "description": "Vestibulum sed tortor sit amet odio sodales ultricies. Etiam tincidunt, justo ut molestie consequat, sapien lacus molestie arcu, laoreet consequat nisl nisi eget est. Cras ut libero gravida, elementum nisl nec, sagittis nisl. Etiam pulvinar, nibh id pretium facilisis, odio dolor hendrerit dui, condimentum tincidunt leo ligula bibendum justo. Cras iaculis hendrerit odio, sed dapibus odio semper id. Ut condimentum eros aliquet ligula bibendum volutpat."
        },
        {
            "ID": 17,
            "name": "Predator Club Fg",
            "brand": "Adidas",
            "size": [40, 41, 42, 43],
            "price": 105000,
            "gender": "Hombre",
            "sport": "Football",
            "inStock": true,
            "image": "https://res.cloudinary.com/dbkg9dzwt/image/upload/v1722457834/21_ep7l2b.jpg",
            "description": "Vestibulum sed tortor sit amet odio sodales ultricies. Etiam tincidunt, justo ut molestie consequat, sapien lacus molestie arcu, laoreet consequat nisl nisi eget est. Cras ut libero gravida, elementum nisl nec, sagittis nisl. Etiam pulvinar, nibh id pretium facilisis, odio dolor hendrerit dui, condimentum tincidunt leo ligula bibendum justo. Cras iaculis hendrerit odio, sed dapibus odio semper id. Ut condimentum eros aliquet ligula bibendum volutpat."
        },
        {
            "ID": 18,
            "name": "Stingray Iii Mach 1 Fg",
            "brand": "Topper",
            "size": [40, 41, 42, 43],
            "price": 80000,
            "gender": "Hombre",
            "sport": "Football",
            "inStock": true,
            "image": "https://res.cloudinary.com/dbkg9dzwt/image/upload/v1722457835/22_eqsy1q.jpg",
            "description": "Vestibulum sed tortor sit amet odio sodales ultricies. Etiam tincidunt, justo ut molestie consequat, sapien lacus molestie arcu, laoreet consequat nisl nisi eget est. Cras ut libero gravida, elementum nisl nec, sagittis nisl. Etiam pulvinar, nibh id pretium facilisis, odio dolor hendrerit dui, condimentum tincidunt leo ligula bibendum justo. Cras iaculis hendrerit odio, sed dapibus odio semper id. Ut condimentum eros aliquet ligula bibendum volutpat."
        },
        {
            "ID": 19,
            "name": "Terrex Ax4",
            "brand": "Adidas",
            "size": [40, 41, 42, 43],
            "price": 210000,
            "gender": "Unisex",
            "sport": "Trekking",
            "inStock": true,
            "image": "https://res.cloudinary.com/dbkg9dzwt/image/upload/v1722457836/23_lvwilp.jpg",
            "description": "Vestibulum sed tortor sit amet odio sodales ultricies. Etiam tincidunt, justo ut molestie consequat, sapien lacus molestie arcu, laoreet consequat nisl nisi eget est. Cras ut libero gravida, elementum nisl nec, sagittis nisl. Etiam pulvinar, nibh id pretium facilisis, odio dolor hendrerit dui, condimentum tincidunt leo ligula bibendum justo. Cras iaculis hendrerit odio, sed dapibus odio semper id. Ut condimentum eros aliquet ligula bibendum volutpat."
        },
        {
            "ID": 20,
            "name": "Grove High",
            "brand": "Topper",
            "size": [39, 40, 41, 42, 43],
            "price": 122000,
            "gender": "Unisex",
            "sport": "Trekking",
            "inStock": true,
            "image": "https://res.cloudinary.com/dbkg9dzwt/image/upload/v1722457836/24_owysto.jpg",
            "description": "Vestibulum sed tortor sit amet odio sodales ultricies. Etiam tincidunt, justo ut molestie consequat, sapien lacus molestie arcu, laoreet consequat nisl nisi eget est. Cras ut libero gravida, elementum nisl nec, sagittis nisl. Etiam pulvinar, nibh id pretium facilisis, odio dolor hendrerit dui, condimentum tincidunt leo ligula bibendum justo. Cras iaculis hendrerit odio, sed dapibus odio semper id. Ut condimentum eros aliquet ligula bibendum volutpat."
        },
        {
            "ID": 21,
            "name": "Ever 2.0",
            "brand": "Topper",
            "size": [40, 41, 42, 43],
            "price": 90000,
            "gender": "Unisex",
            "sport": "Trekking",
            "inStock": true,
            "image": "https://res.cloudinary.com/dbkg9dzwt/image/upload/v1722457836/25_tnwkgw.jpg",
            "description": "Vestibulum sed tortor sit amet odio sodales ultricies. Etiam tincidunt, justo ut molestie consequat, sapien lacus molestie arcu, laoreet consequat nisl nisi eget est. Cras ut libero gravida, elementum nisl nec, sagittis nisl. Etiam pulvinar, nibh id pretium facilisis, odio dolor hendrerit dui, condimentum tincidunt leo ligula bibendum justo. Cras iaculis hendrerit odio, sed dapibus odio semper id. Ut condimentum eros aliquet ligula bibendum volutpat."
        },
        {
            "ID": 22,
            "name": "Ever 2.0 Light",
            "brand": "Topper",
            "size": [40,41,42,43],
            "price": 90000,
            "gender": "Unisex",
            "sport": "Trekking",
            "stock": true,
            "image": "https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwc54c2b3a/products/TO25807/TO25807-1.JPG",
            "description": "Vestibulum sed tortor sit amet odio sodales ultricies. Etiam tincidunt, justo ut molestie consequat, sapien lacus molestie arcu, laoreet consequat nisl nisi eget est. Cras ut libero gravida, elementum nisl nec, sagittis nisl. Etiam pulvinar, nibh id pretium facilisis, odio dolor hendrerit dui, condimentum tincidunt leo ligula bibendum justo. Cras iaculis hendrerit odio, sed dapibus odio semper id. Ut condimentum eros aliquet ligula bibendum volutpat."
        },
        {
            "ID": 23,
            "name": "Terrex Ax3",
            "brand": "Adidas",
            "size": [38,39],
            "price": 122000,
            "gender": "Mujer",
            "sport": "Trekking",
            "stock": true,
            "image": "https://res.cloudinary.com/dbkg9dzwt/image/upload/v1722457838/27_awwj4y.jpg",
            "description": "Vestibulum sed tortor sit amet odio sodales ultricies. Etiam tincidunt, justo ut molestie consequat, sapien lacus molestie arcu, laoreet consequat nisl nisi eget est. Cras ut libero gravida, elementum nisl nec, sagittis nisl. Etiam pulvinar, nibh id pretium facilisis, odio dolor hendrerit dui, condimentum tincidunt leo ligula bibendum justo. Cras iaculis hendrerit odio, sed dapibus odio semper id. Ut condimentum eros aliquet ligula bibendum volutpat."
        },
        {
            "ID": 24,
            "name": "First Wave",
            "brand": "Topper",
            "size": [36,37,38,39],
            "price": 89000000,
            "gender": "Mujer",
            "sport": "Running",
            "stock": true,
            "image": "https://res.cloudinary.com/dbkg9dzwt/image/upload/v1722457838/28_yhqzpr.jpg",
            "description": "Vestibulum sed tortor sit amet odio sodales ultricies. Etiam tincidunt, justo ut molestie consequat, sapien lacus molestie arcu, laoreet consequat nisl nisi eget est. Cras ut libero gravida, elementum nisl nec, sagittis nisl. Etiam pulvinar, nibh id pretium facilisis, odio dolor hendrerit dui, condimentum tincidunt leo ligula bibendum justo. Cras iaculis hendrerit odio, sed dapibus odio semper id. Ut condimentum eros aliquet ligula bibendum volutpat."
        },
        {
            "ID": 25,
            "name": "Revolution 6 Next Nature",
            "brand": "Nike",
            "size": [40,41,42,43],
            "price": 116000,
            "gender": "Unisex",
            "sport": "Running",
            "stock": true,
            "image": "https://res.cloudinary.com/dbkg9dzwt/image/upload/v1722632738/25_c2m7ea.jpg",
            "description": "Vestibulum sed tortor sit amet odio sodales ultricies. Etiam tincidunt, justo ut molestie consequat, sapien lacus molestie arcu, laoreet consequat nisl nisi eget est. Cras ut libero gravida, elementum nisl nec, sagittis nisl. Etiam pulvinar, nibh id pretium facilisis, odio dolor hendrerit dui, condimentum tincidunt leo ligula bibendum justo. Cras iaculis hendrerit odio, sed dapibus odio semper id. Ut condimentum eros aliquet ligula bibendum volutpat."
        },
        {
            "ID": 26,
            "name": "Softride Sophia 2",
            "brand": "Puma",
            "size": [37,38,39],
            "price": 850000,
            "gender": "Mujer",
            "sport": "Running",
            "stock": true,
            "image": "https://res.cloudinary.com/dbkg9dzwt/image/upload/v1722630953/26_qvzqpw.jpg",
            "description": "Vestibulum sed tortor sit amet odio sodales ultricies. Etiam tincidunt, justo ut molestie consequat, sapien lacus molestie arcu, laoreet consequat nisl nisi eget est. Cras ut libero gravida, elementum nisl nec, sagittis nisl. Etiam pulvinar, nibh id pretium facilisis, odio dolor hendrerit dui, condimentum tincidunt leo ligula bibendum justo. Cras iaculis hendrerit odio, sed dapibus odio semper id. Ut condimentum eros aliquet ligula bibendum volutpat."
        },
        {
            "ID": 27,
            "name": "Renew Run 3",
            "brand": "Nike",
            "size": [40,41,42,43],
            "price": 155000,
            "gender": "Hombre",
            "sport": "Running",
            "stock": true,
            "image": "https://res.cloudinary.com/dbkg9dzwt/image/upload/v1722630953/27_z1mlqd.jpg",
            "description": "Vestibulum sed tortor sit amet odio sodales ultricies. Etiam tincidunt, justo ut molestie consequat, sapien lacus molestie arcu, laoreet consequat nisl nisi eget est. Cras ut libero gravida, elementum nisl nec, sagittis nisl. Etiam pulvinar, nibh id pretium facilisis, odio dolor hendrerit dui, condimentum tincidunt leo ligula bibendum justo. Cras iaculis hendrerit odio, sed dapibus odio semper id. Ut condimentum eros aliquet ligula bibendum volutpat."
        },
        {
            "ID": 28,
            "name": "G.t. Jump 2",
            "brand": "Nike",
            "size": [40,41,42,43],
            "price": 330000,
            "gender": "Hombre",
            "sport": "Basketball",
            "stock": true,
            "image": "https://res.cloudinary.com/dbkg9dzwt/image/upload/v1722630954/28_qcutcq.jpg",
            "description": "Vestibulum sed tortor sit amet odio sodales ultricies. Etiam tincidunt, justo ut molestie consequat, sapien lacus molestie arcu, laoreet consequat nisl nisi eget est. Cras ut libero gravida, elementum nisl nec, sagittis nisl. Etiam pulvinar, nibh id pretium facilisis, odio dolor hendrerit dui, condimentum tincidunt leo ligula bibendum justo. Cras iaculis hendrerit odio, sed dapibus odio semper id. Ut condimentum eros aliquet ligula bibendum volutpat."
        },
        {
            "ID": 29,
            "name": "Air Zoom G.t Jump 2",
            "brand": "Nike",
            "size": [40,41,42,43],
            "price": 350000,
            "gender": "Hombre",
            "sport": "Basketball",
            "stock": true,
            "image": "https://res.cloudinary.com/dbkg9dzwt/image/upload/v1722457838/29_ors74d.jpg",
            "description": "Vestibulum sed tortor sit amet odio sodales ultricies. Etiam tincidunt, justo ut molestie consequat, sapien lacus molestie arcu, laoreet consequat nisl nisi eget est. Cras ut libero gravida, elementum nisl nec, sagittis nisl. Etiam pulvinar, nibh id pretium facilisis, odio dolor hendrerit dui, condimentum tincidunt leo ligula bibendum justo. Cras iaculis hendrerit odio, sed dapibus odio semper id. Ut condimentum eros aliquet ligula bibendum volutpat."
        },
        {
            "ID": 30,
            "name": "LeBron XX",
            "brand": "Nike",
            "size": [40,41,42,43],
            "price": 251000,
            "gender": "Hombre",
            "sport": "Basketball",
            "stock": true,
            "image": "https://res.cloudinary.com/dbkg9dzwt/image/upload/v1722457839/30_emekjg.jpg",
            "description": "Vestibulum sed tortor sit amet odio sodales ultricies. Etiam tincidunt, justo ut molestie consequat, sapien lacus molestie arcu, laoreet consequat nisl nisi eget est. Cras ut libero gravida, elementum nisl nec, sagittis nisl. Etiam pulvinar, nibh id pretium facilisis, odio dolor hendrerit dui, condimentum tincidunt leo ligula bibendum justo. Cras iaculis hendrerit odio, sed dapibus odio semper id. Ut condimentum eros aliquet ligula bibendum volutpat."
        }
        
    ];

    // Insertar datos en la tabla
    await Shoe.bulkCreate(shoes);
    console.log('Datos insertados correctamente');
  } catch (error) {
    console.error('Error al insertar datos:', error);
  } finally {
    await sequelize.close(); // Cierra la conexión
  }
};

seedData();
