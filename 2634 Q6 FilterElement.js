// 2634. Filter Elements from Array

// filter method creates a new array with all elements that pass the test implemented by the provided function.
// syntax: array.filter(function(currentValue, index, array))

// example of filter method:

// const ages = [19, 12, 23, 21, 5]
// const result = ages.filter(checkAdult)

// function checkAdult(age) {
//   return age >= 18
// }

// console.log(ages)   // output: [ 19, 12, 23, 21, 5 ]
// console.log(result) // output: [ 19, 23, 21 ]




// without using filter method, we have to implement our own filter function

var filter = function(arr, fn) {
    let newarr = []  // empty array
    for(let i = 0; i < arr.length; i++){
        // evaluating truth value
        if(fn(arr[i], i)){
            newarr.push(arr[i])  // we use push method to add anything in the array
        }
    }
    return newarr
};
