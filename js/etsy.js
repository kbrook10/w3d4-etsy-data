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
(3) Use that index array object index to capture the name and price
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
//(3)
console.log(matchGBP[0].title + &#163 + matchGBP[0].price)



//End of Problem
//<-------------------------------->

//(4)Question:
//(4)Solution:

//Questions:
/*a) What am i doing?
b) How am i doing it?
c) Why am i doing it this way
*/

//End of Problem
//<-------------------------------->

//(5)Question:
//(5)Solution:

//Questions:
/*a) What am i doing?
b) How am i doing it?
c) Why am i doing it this way
*/

//End of Problem
//<-------------------------------->


//(6)Question:
//(6)Solution:

//Questions:
/*a) What am i doing?
b) How am i doing it?
c) Why am i doing it this way
*/

//End of Problem
//<-------------------------------->
