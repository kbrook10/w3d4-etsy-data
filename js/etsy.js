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



//(2) Question:
//(2) Solution:

/*Questions:
a)What am i doing
b)How am i doing it
c)Why am i doing it this way*/
