const { Router } = require('express');

const router = Router();

const { getProdByCodprod, getProdByCodAuxiliar } = require('./controllers');

router.get('/product/codprod/:id', getProdByCodprod);
router.get('/product/codbarras/:id', getProdByCodAuxiliar);

module.exports = router;