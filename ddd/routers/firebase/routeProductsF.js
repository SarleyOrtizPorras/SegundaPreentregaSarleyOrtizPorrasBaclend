const { getProducto, postProducto, updateProducto, deleteProducto } = require('../../controller/firebase/controlerProductsF');

const { Router } = require('express');
const validateAdmin = require('../../middlewares/validAdmin');

const admin = true;

const productosFbRouter = Router();

productosFbRouter.get('/:id?', getProducto);
productosFbRouter.post('/', validateAdmin(admin), postProducto);
productosFbRouter.put('/:id', validateAdmin(admin), updateProducto);
productosFbRouter.delete('/:id', validateAdmin(admin), deleteProducto);

module.exports = productosFbRouter;