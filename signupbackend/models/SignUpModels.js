const mongoose = require('mongoose')

const signUpTemplate = new mongoose.Schema({
    fullName: {
      
    },
    username: {
   
    },
    email: {
   
    },
    password: {
      
    },
    date: {
        type: Date,
        default:Date.now
    }
})

module.exports = mongoose.model('mytable', signUpTemplate)