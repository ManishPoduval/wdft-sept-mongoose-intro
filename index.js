const mongoose = require('mongoose');

// this line makes sure you run the code in that js file
require('./config/db.config')

let Student = require('./models/Student.model')

// ---------Creating a document----------------------  
// Student.create({name: 'Sumi1', country: 'Japan'})
//     .then((response) => {
//         console.log('Data was added', response)
//     })
//     .catch((err) => {
//         console.log('Something went wrong!', err)
//     })

// Student.insertMany([{name: 'Jorge'}, {name: 'Goncalo'}])
//     .then((response) => {
//         console.log('Data was added', response)
//     })
//     .catch(() => {
//         console.log('Something went wrong!')
//     })

// ---------Finding a document----------------------  


// Student.findById('5f7ee7b5a8f01e2d80fb66b8')
//     .then((response) => {
//         console.log('Data is', response)
//     })
//     .catch(() => {
//         console.log('Something went wrong!')
//     })

//----------------Updating a document-------------------
// Student.updateOne( {name: 'Jorge'} , { $set: {age: 99} } )
//         .then((response) => {
//             console.log('Old Data is', response)
//         })
//         .catch(() => {
//             console.log('Something went wrong!')
//         })


// Student.findByIdAndUpdate('5f7eea75230ed031c06172f9', { $set : {age: 25}})
//         .then((response) => {
//             console.log('Old Data is', response)
//         })
//         .catch(() => {
//             console.log('Something went wrong!')
//         })


//----------------Deleting a document-------------------

// Student.deleteOne( {name: 'Jorge'} )
//         .then((response) => {
//             console.log('Data is', response)
//         })
//         .catch(() => {
//             console.log('Something went wrong!')
//         })

// Student.deleteMany( {age: 25} )
//         .then((response) => {
//             console.log('Data is', response)
//         })
//         .catch(() => {
//             console.log('Something went wrong!')
//         })       


//----------------USING PROMISES-------------------

// let createPromise = Student.create({name: 'Sumi1', country: 'Japan'})
// createPromise
//     .then((response) => {
//         console.log('Data was added', response)
//     })
//     .catch((err) => {
//         console.log('Something went wrong!', err)
//     })

// let insertPromise = Student.insertMany([{name: 'Jorge'}, {name: 'Goncalo'}])
// insertPromise
//     .then((response) => {
//         console.log('Data was added', response)
//     })
//     .catch(() => {
//         console.log('Something went wrong!')
//     })

//ensures that the creation is done and only then you update
// Promise.all([createPromise, insertPromise]) 
//     .then(() => {
//        // Update some student only after youve created successfully 
//        Student.updateOne( {name: 'Sumi1'} , { $set: {age: 99} } )
//        .then((response) => {
//            console.log('Old Data is', response)  
//        })
//        .catch(() => {
//            console.log('Something went wrong!')
//        })   
//     })


// PLEASE TRY
// HW: use deleteOne and delete a doc by _id
//Student.deleteOne()




