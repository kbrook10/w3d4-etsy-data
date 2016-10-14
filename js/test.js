var prices = [{pr: 10, matl: 'Jack'},
{pr: 10, matl: 'wood, copper, leather, cotton'},
{pr: 20, matl: 'tin, pvc'},
{pr: 30, matl: 'cotton'},
{pr: 40, matl: 'wood, copper, tin'}]

var threeMore = prices.filter(function(item){
    return item.matl.length > 2
})

console.log(threeMore)
