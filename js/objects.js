//Objects
//<------------------------->

//How to create Object
var pizza = new Object()
    pizza.meat = 'Sausage'
    pizza.cheese = 'Cheddar'
    pizza.veggies = 'Olives'

var pizza = {                                   //<-- This is the literal way (e.g. this is more common)
    meat: 'Sausage',
    cheese: 'Cheddar',
    veggies: 'Olives'
}
// console.log(pizza.meat)
var topping = 'cheese'
// console.log(pizza[topping])

//Wanting to loop through all properties in Object
var props = Object.keys(pizza)
props.forEach(function(prop){
    // console.log(pizza[prop])
})
// console.log(props)

var movies = [{
    title: 'Star Wars',
    genre: 'Sci Fi',
    year: 1977,
    directors: [
        {
            name: 'George Lucas'
        },
        {
            name: 'Jar Jar'
        }
    ]
}, {
    title: 'Forest Gump',
    genre: 'Drama',
    year: 1995,
    directors: [
        {
            name: 'Robert Zemecas'
        }
    ]
}]

//Use this for homework
movies.forEach(function(movie){

    var directors = movie.directors.map(function(director){
        return director.name
    })
    directors = directors.join(', ')
    console.log(movie.title + ' - ' + movie.genre + ' (' + movie.year + ') - Directed by: ' + directors /*movie.directors[0].name*/)
})

// var movie = {
//     title: 'Star Wars',
//     genre: 'Sci Fi',
//     year: 1977
// }


// var title = 'Star Wars'
// var genre = 'Sci Fi'
// var year = 1977


// var movie = {
//     title: 'Forest Gump',
//     genre: 'Drama',
//     year: 1995
// }

//End of lesson
//<------------------------->
