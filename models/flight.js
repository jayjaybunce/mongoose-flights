const mongoose = require('mongoose')
const Schema = mongoose.Schema




const destinationSchema = new Schema({
    airport: {
        type: String,
        required: true
    },
    arrival: {
        type: Date,
        required: true
    }
})


const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American','Southwest','United'],
        required: true
    },
    flightNo: {
        type: Number,
        min: 10,
        max: 9999,
        required: true
    },
    departs: {
        type: Date,
        default: getDate(),
        required: true
    },
    airport: {
        type: String,
        enum: ['DIA','ATX','LAX','SAN','SEA','AUS'],
        default: 'SAN'
    },
    destinations: [destinationSchema]
},{
    timestamps: true
})

function getDate(){ 
    let d = Date.now()
    d+= 365*24*60*60000 -(24*60*60000)
    return d
}
module.exports = mongoose.model(
    'Flight',
    flightSchema
)
mongoose.set('useFindAndModify', false);