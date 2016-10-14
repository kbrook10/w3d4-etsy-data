// var accounting = require('accounting')
//Test to see what the data looks like in Browser
// console.log(items) <-- displays in the Browser console with drop downs for each object in the array
//<----------------------------->


//(1)Question: Show me how to calculate the average price of all items. Please console.log the average.
//(1)Solution: The average price is $23.63

/*Questions:
a)What am i doing
Search an array that has 25 objects...Within the array objects, find the price property...Tally up all prices with the 'reduce' method...Then use the 'length' property to divide the sum total by the amount of prices...
b)How am i doing it
(1)Identify the list
(2)Identify the object property name for prices
(3)List all of the price values
(4)Loop through the various price values
(5)Add the prices values together and convert to Number
(6)ID the amount of prices
(6)Divide the total price value by amount of prices that were in the array
c)Why am i doing it this way*/
//feels right

//(1) console.log(items)
//(2) price
//(3) skipped
//(4) & (5) can combine -> use reduce method
var total = items.reduce(function(previous, current){
    return {price: previous.price + current.price}
}, {price: 0})
total = total.price
//(6)ID the amount of prices in the array using length
// console.log(items.length)
//(7) divide the total amount by the amount of prices and round to two decimals
var avgPrice = total/ items.length
//Final Solution
console.log('The average price is $' +avgPrice.toFixed(2))

//End of Problem
//<-------------------------------->



//(2) Question: Show me how to get an array of items that cost between $14.00 and $18.00 USD
//(2) Solution: "Items that cost between $14.00 USD and $18.00 USD:"
/*[
 {
    title: "1970s Coors Banquet Glass Beer Pitcher",
    ...
 },
 {
    title: "The Three Broomsticks Customizable Beer Stein Mug, Harry Potter Inspired, hogsmeade village, harry potter gift, three broomsticks mug",
    ...
 },
 {
    title: "Hand Painted Colorful Feather Glass",
    ...
 }
]*/


/*Questions:
a)What am i doing
(1) Create an array that filters out a list of items that cost between a particular price range
(2) ID the object property that shows the price
(3) ID the object property that shows the title
(4) Create a filter that only captures items that are greater or equal to than 14 and less than or equal to 18
(5) Create an array of these titles
b)How am i doing it
~filter out based on price range
~ID titles of prices that match range
~create an array
c)Why am i doing it this way*/

//Combine the steps (1 - 4)
var matches = items.filter(function(item){
     return item.price >= 14 && item.price <= 18
})
//(5)
console.log('Items that cost between $14.00 USD and $18.00 USD: ', matches)


//End of Problem
//<-------------------------------->

//(3)Question: Show me how find the item with a "GBP" currency code and print its name and price. Please console.log the one you find.
//(3)Solution: 1970s Schlitz Malt Liquor Glass Beer Pitcher costs £18

//Questions:
/*a) What am i doing?
(1) Search array
(2) ID a property with the value of GBP
(3) Use the object that is retrieved to return the name and price properties
(4)Write out the finding
b) How am i doing it?
~need to filter array and search for GBP value in property
~need to use index possibly of the value returned
c) Why am i doing it this way
*/

//steps ( 1 - 2)Find property value in array that matchs GBP
var matchGBP = items.filter(function(item){
    return item.currency_code === 'GBP'
})
//(3 - 4)
console.log(matchGBP[0].title + accounting.formatMoney(matchGBP[0].price, " £", 0))


//End of Problem
//<-------------------------------->

//(4)Question: Show me how to find which items are made of wood. Please console.log the ones you find.
//(4)Solution:
/*SALE Mid Century Siesta Ware White Mug with Anchor - Set of 3 is made of wood.
Bottle cap catcher personalized. Man cave gift for him- Wooden Beer pub sign - Groomsmen wedding Gift is made of wood.
Medium Size, Welcome To Our Firepit-Where Friends And Marshmallows Get Toasted At The Same Time-Painted Wood Sign-Custom Colors is made of wood.
Magnetic Wall Mount Bottle Opener Barware Set - Stainless Steel or Black - Personalized if you like! is made of wood.
Engraved Pocket Knife, Personalized Groomsmen Gift, Ring Bearer Gift, Graduation Gift, 4 Knives is made of wood.
*/

//Questions:
/*a) What am i doing?
(1)Search array objects that review materials
(2)Search the material property for the word wood and return all objects with...
(3)Loop through the objects to obtain the titles
(4)Place titles on new line
(5)Write the result to the console.log
(*)
b) How am i doing it?
~return filtered array of items that match condition

c) Why am i doing it this way
*/
//steps (1 - 2)
var woodMade = items.filter(function(item){
    return item.materials.includes('wood')
})
//steps (3)
var woodTitle = woodMade.map(function(item){
    return item.title
})
//steps (4 - 5)
console.log(woodTitle.join('\n'))


//End of Problem
//<-------------------------------->

//(5)Question: Show me how to find which items are made of eight or more materials. Please console.log the ones you find.
//(5)Solution:
/*
Qty of 2 Groomsmen Gift - Stainless Steel Personalized Bottle Opener - NO Capcatcher has 9 materials:
wall mount bottle opener
wedding
man cave
christmas gift
guy gift
fathers day
home bar
beer
bar

The Three Broomsticks Customizable Beer Stein Mug, Harry Potter  Inspired, hogsmeade village, harry potter gift, three broomsticks mug  has 13 materials:

glass
sandblast cabinet
vinyl
beer glass
pint glass
etched pint glass
etched glass
etched beer glass
16 oz pint
beer gift
etched harry potter glass
the three broomsticks glass
personalized harry potter glass
*/


//Questions:
/*a) What am i doing?
(1)Search within the array objects for the object property material
(2)Count the length of the array elements withint the object property material
(3)Obtain the objects that have an object property material length greater than (8) eight
(4) Return the title property of the objects, the count of materials, and the list of materials.
(5) Concatenate to Add the title, then ' has ', then the length of materials, then ' materials:' and finally the list of materials
b) How am i doing it?
c) Why am i doing it this way
*/
//Steps (1 - 3)
var eightMore = items.filter(function(item){
    return item.materials.length > 8
})
//Steps (4 - 5)
var eightMoreTitles = eightMore.map(function(item){
    console.log(item.title + ' has ' + item.materials.length + ' materials: \n ' + item.materials.join(' \n '))
})
// console.log(eightMoreTitles)


//End of Problem
//<-------------------------------->


//(6)Question: Show me how to calculate how many items were made by their sellers
//(6)Solution: 18 were made by their sellers

//Questions:
/*a) What am i doing?
() Search through the array objects to find the property 'who_made' is equal to 'i_did'
() Count up the total amount of objects that have the property: who_made and value: i_did
() Take that length and concatenate it with 'were made by their sellers'
()
()
b) How am i doing it?
c) Why am i doing it this way
*/

var selfMade = items.filter(function(item){
    return item.who_made === 'i_did'
})

console.log(selfMade.length + ' were made by their sellers')

//End of Problem
//<-------------------------------->
