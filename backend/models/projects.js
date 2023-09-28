const mongoose = require('mongoose')
const projectSchema = mongoose.Schema({
        "Title" : {type : String },
        "Technologies" : {type: String },
        "Frontend" : {type: String },
        "Backend" : {type: String },
        "Databases" : {type: String },
        "Infrastructure" : {type: String },
        "Availability":{type: String}
})

module.exports = mongoose.model('Project', projectSchema)