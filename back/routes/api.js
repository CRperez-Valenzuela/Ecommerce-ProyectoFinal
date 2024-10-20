// api.
var express = require('express');
var router = express.Router();
var shoesController = require('../controllers/product/shoeController');
var sizesController = require('../controllers/product/sizeController');
var usersController = require('../controllers/product/userController');
var authController = require('../controllers/product/authController');
var paymentController = require('../controllers/product/paymentController');
var { User, Shoe, Size, ShoeSizes, sequelize } = require('../models'); // Importa los modelos configurados con Sequelize
var adresseController = require("../controllers/product/adressesController");
var orderController = require("../controllers/product/orderController");

//orders
router.get('/order', orderController.getAllOrder)
router.get('/order/:id', orderController.getOrderById);
router.post('/order/', orderController.createOrder);
router.put('/order/:id', orderController.updateOrder);
router.delete('/order/:id', orderController.deleteOrder);
router.get('/ordershoe', orderController.getAllOrdershoe)
router.post('/createorder', paymentController.createOrder )

//addresses
router.post('/adresses', adresseController.createAddress);
router.get('/adresses', adresseController.getAllAddresses);
router.post('/adresses', adresseController.createAddress);
router.put('/adresses/:id', adresseController.updateAddress);
router.delete('/adresses/:id', adresseController.deleteAddress);
router.get('/useraddresses', usersController.getAllUserAddresses);
router.post('/useraddresses', usersController.createUserAddress);

//zapatillas
router.get('/shoes', shoesController.getAllShoes);
router.get('/shoes/id/:id', shoesController.getShoeById);
router.post('/shoes', shoesController.createShoe);
router.put('/shoes/:id', shoesController.updateShoe);
router.delete('/shoes/:id', shoesController.deleteShoe);
router.get('/shoes/filter', shoesController.filterShoes);
router.get('/shoes/:id/sizes', shoesController.getShoeSizes);

// tallas
router.get('/sizes', sizesController.getAllSizes);
router.get('/sizes/:id', sizesController.getSizeById);
router.post('/sizes', sizesController.createSize);
router.put('/sizes/:id', sizesController.updateSize);
router.delete('/sizes/:id', sizesController.deleteSize);

//Users
router.get('/users', usersController.getAllUsers);
router.post('/register', usersController.register);
router.post('/users/login', usersController.login);
router.post('/auth/google', authController.googleAuth);
router.get('/users/:id', usersController.getUserProfile);
router.put('/users/:id', usersController.updateUserProfile);
router.delete('/users/:id', usersController.deleteUser);
router.get('/usersshoe', usersController.getAllUserShoe);
router.post('/usersshoe', usersController.createUsershoe);
router.post('/adressuser', usersController.createAddressUser);
router.delete('/usersshoe/:id', usersController.deleteUsersshoe);




router.get('/shoesizes', async function(req, res, next) {
    try {
        const shoesizes = await ShoeSizes.findAll();
        res.json(shoesizes);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Error en el servidor');
    }
});
module.exports = router;
