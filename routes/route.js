const express= require('express');
const router= express.Router();
const controller= require('../controllers/dweetController');

router.post('/dweet/create',controller.createDweet);
router.get('/dweet',controller.fetchAll);
router.get('/dweet/:id',controller.findById);
router.post('/dweet/:id/update',controller.updateById);
router.post('/dweet/:id/delete',controller.deleteById);

module.exports= router;