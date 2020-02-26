var express = require('express');
var router = express.Router();
const flightsCtrl = require('../controllers/flights')
const Flight = require('../models/flight')
const ticketsCtrl = require('../controllers/tickets')
/* GET users listing. */
router.get('/', flightsCtrl.index);
router.get('/new',flightsCtrl.new)
router.post('/',flightsCtrl.create)
router.get('/:id',flightsCtrl.show)
router.get('/:id/edit',flightsCtrl.edit)
router.put('/:id',flightsCtrl.update)
router.delete('/:id',flightsCtrl.delete)
router.delete('/:id/tickets/:ticketId',ticketsCtrl.delete)
module.exports = router;
