let arr = [{price: 10.99}, {price: 5.99},{price: 29.99}];

function calculate(arr){
    let total = 0;
    for (let i = 0; i < arr.length; i++){
        total += arr[i].price;
    }
    return total;
}
let totalCost = calculate(arr)

console.log("Total cost:", totalCost.toFixed(2));