// Below are three ways to create an Array

var invites = ['Matt', 'Susan', 'Jessica', 'John'] //<-- This is the standard way to make lists

var tasks = new Array(3)
tasks[0] = 'Buy food'
tasks[1] = 'Feed pets'
tasks[2] = 'Cook food'

var inbox = new Array('Water Bill', 'Pay Check', 'Greeting Card')

//End of how to create Arrays
//<------------------------->

//How to add/ remove elements to array
//<-------------------------->
inbox[3] = 'You have rich uncle that wants to give you money.' //<-- Giving expicit value

//end
tasks.push('Do homework') //<-- This adds array element to the end of the array
tasks.pop() //<-- Pulls array element off the end of the list
// tasks[0] = 'Watch Hulu' //<-- This will override the original value if something is already in this position

//beginning
tasks.unshift('Watch Netflix') //<-- This pushes the new array element to the beginning
var thingIGotRidOf = tasks.shift() //<--Gets rid of the array element at the beginning and re-indexes the position of the elements in the array (e.g. this can't take any values)

// console.log(tasks)

//middle
var payCheck = inbox.slice(1,3) //<--Takes out element in array
// var payCheck = []
// payCheck[0] = inbox[1]
// payCheck[1] = inbox[2]


// console.log(payCheck)
inbox.splice(1,0, 'You are Hired', 'Job Offer') //<--Go into array and splice things out in array Ex. splice(valaue1, ) (e.g. value1 = where to begin what slot, value2 = what to remove, value 3 = list of things to add)

// delete inbox[0] //<--leaves a gap
// delete inbox <--should be able to delete variable
// console.log(inbox)

//Count things in the array list
// //<-------------------------->
// inbox[inbox.length]= 'Invite To Spotify'
console.log(inbox.length)
console.log(inbox)

//Find things in array
//<------------------------->
var hasJobOffer = inbox.includes('Job Offer') // <--This returns a boolean as it must be an exact match
// console.log(hasJobOffer)

var jobOfferIndex = inbox.indexOf('Job Offer')// <--This returns where in the array this element is found
var jobOfferIndex = inbox.indexOf('Job Salary') // < --This returns -1 if it can't find the element in array

inbox.push('Job Salary')
// if (inbox.indexOf('Job Salary') === -1){
//     console.log('No salary yet.')
// }
// else{
//     console.log('It is finally here!')
// }
// console.log(jobOfferIndex)


// console.log(inbox)

//This searches for matches inside an array
//<------------------------->

var matches = inbox.find(function(item){ //<--This finds the first match in an array and then stops
    return item.includes('Job')
})

// function checkForJob(item){ //<--This is a functional interators
//         return item.includes('Job')
//     }
// var matches = inbox.filter(checkForJob)

var matches = inbox.filter(function(item){ //<--This provides an array of all the matches because of 'filter' (preferred choice to use)
        return item.includes('Job')
})

// console.log(matches)

//This writes out all of the items in the array
//<------------------------->

// var matches = [] //<-- This creates list for matches
// for ( var i = 0; i < inbox.length; i++){ //<--This is an anonymous function
//     // console.log(i+ '. ' + inbox[i])
//     var hasJob = checkForJob(inbox[i])
//     if (hasJob){
//         matches.push(inbox[i])
//     }
// }
// console.log(matches)

//Maps Reduce and Sorting section
//<------------------------->
// inbox = inbox.reverse() //<-- permanently reverses the inbox
// console.log(inbox)


var fruit = ['Apple', 'Banana', 'Cherry', 'Watermelon']
//Want to uppercase all items in fruit array
fruit.forEach(function(item){
    // console.log(item.toUpperCase())
})

//Map transforms an array of items, one item at a time (e.g. have to assign map to new variable)
fruit = fruit.map(function(item,i){
    if( i === 2){
    return `<section>${i} - ${item.toUpperCase()}</section>`
    }
    else{
    return `<div>${i} - ${item}</div>`
    }

})

// console.log(fruit)

//Using REDUCE
//<------------------------->

//Uses the reduce with the array
var prices = [7.98, 14.99, 2.30, 12.80]
//Want to total the price array and then take the average
var total = prices.reduce(function(previous, current){
    // return previous + current //<-- Adds two elements at a time
    return previous + current
}, 0)
var avgPrice1 = total/ prices.length

// console.log(avgPrice1)

//Uses the reduce with the objects
var prices = [
    {price: 7.98},
    {price: 14.99},
    {price: 2.30},
    {price: 12.80}
]
//Want to total the price array and then take the average
var total = prices.reduce(function(previous, current){
    // return previous + current //<-- Adds two elements at a time
    return {price: previous.price + current.price}
}, {price: 0})
var avgPrice = total.price / prices.length

// console.log(total)

// console.log(avgPrice)

//End of lesson
//<------------------------->
