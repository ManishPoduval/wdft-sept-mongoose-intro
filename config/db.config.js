const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/bootcamp', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('Yayyyyyy database connected')
    })
    .catch(() => {
        console.log('You messed up!')
    })


    