
const router  = require('express-promise-router')();
const userController = require('../controllers/user.controller');

// ==> Definindo as rotas do CRUD - 'Product':

// ==> Rota responsável por criar um novo 'Product': (POST): localhost:3000/api/products
//router.post('/users', userController.createUser);

router.get('/users', userController.listAllUsers);
router.get('/users/:id',userController.findUserId)
router.post('/add', userController.insereUser);

module.exports = router;