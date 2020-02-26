const Ticket = require('../models/ticket')
const Flight = require('../models/flight')

module.exports = {
    new: newTicket,
    create,
    delete: deleteTicket,

}

function newTicket(req,res){
    Flight.findById(`${req.params.id}`,function(err,flight){
        Ticket.find({flight: req.params.id},function(err,tickets){
            res.render('tickets/new',{
                title: 'Add Tickets',
                flight,
                tickets
            })

        })
    })
    
}
function deleteTicket(req,res){
    console.log(req.params)
    Ticket.findByIdAndDelete(req.params.ticketId,function(err,r){
        console.log(err)
        res.redirect(`/`)
    })
}

function create(req,res){
    req.body.flight = req.params.id
    console.log(req.body)
    ticket = new Ticket(req.body)
    ticket.save(function(err){
        console.log(err)

    })
    
    res.redirect(`/flights/${req.params.id}`)
}







// // CURRENTLY ABLE TO ADD A TICKET TO FLIGHT
// ADD BUTTON TO ADD TICKETS
// DISPLAY TICKETS
// DELETE TICKETS
