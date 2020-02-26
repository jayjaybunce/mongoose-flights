const Flight = require('../models/flight')





function create(req,res){
    Flight.findById(req.params.id,function(err,flight){
        
        if (err) return console.log(err)
        flight.destinations.push(req.body)
        flight.save(function(err){
            if (err) return console.log(err,"error when saving")
        })
        res.redirect(`/flights/${req.params.id}`)
    })
}



module.exports = {
    create,
}