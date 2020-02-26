const Flight = require('../models/flight')
const Ticket = require('../models/ticket')


let deletedFlights =[];

function index(req,res){
    
    Flight.find({}).sort({departs: 1}).exec(function(err,flights){
        res.render('flights/index',{
            title: 'Flights',
            flights,
            deletedFlights

        })
    })
    
}

function newFlight(req,res){
    res.render('flights/new',{
        title: 'Add A Flight',
        error: '',
        tempFlight: new Flight(),
    })
    
}
function show(req,res){
    Flight.findById(req.params.id).exec(function(err,flight){
        Ticket.find({flight: flight._id},function(err,tickets){
            flight.destinations = flight.destinations.sort(function(a,b){
                if(a.arrival > b.arrival){
                    return 1;
                }else{
                    return -1
                }
            })
            if(err) return res.redirect(`flights`)
            res.render('flights/show',{
                flight,
                tickets
                
            })
        })
    })

}
function edit(req,res){
    Flight.findById(req.params.id).exec(function(err,flight){
        res.render('flights/edit',{
            flight,
            tempFlight: new Flight(),
            error: ''
        })
    })
}

function create(req,res){
    if(req.body.departs==='') delete req.body.departs
    
    const flight = new Flight(req.body);
    flight.save(function(err){
        if(err){
            return res.render('flights/new',{
               error: 'Invalid Input - Try again',
               tempFlight: new Flight()
           })
            
        }else{
            res.redirect('/flights')
        }
    })
}
function update(req,res){
    if(req.body.departs==='') delete req.body.departs
    Flight.findByIdAndUpdate(req.params.id,req.body).exec(function(err){
        console.log(err)
    })
    
    res.redirect('/')
    
}

function deleteFlight(req,res){
    Flight.findByIdAndDelete(req.params.id).exec(function(err,flight){
        deletedFlights.push(flight)
        
    })
    
    res.redirect('/')
}

module.exports = {
    index,
    new: newFlight,
    create,
    show,
    edit,
    update,
    delete: deleteFlight,
    deletedFlights,
    
}

// FIND AN ELEMENT IN DB BY OBJECTID db.flights.find({"_id":ObjectId("5e51b52b0873bff52ef2def8")})