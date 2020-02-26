const express = require('express')
const router = express.Router()
const ticketsCtrl = require('../controllers/tickets')


router.delete('/tickets/:ticket-id',function(req,res){
    console.log('IS THIS WORKING')
})
router.delete('/id:/tickets/:ticket-id',function(req,res){
    console.log('IS THIS WORKING')
})
router.get('/flights/:id/tickets/new',ticketsCtrl.new)
router.post('/flights/:id/tickets',ticketsCtrl.create)


module.exports = router;