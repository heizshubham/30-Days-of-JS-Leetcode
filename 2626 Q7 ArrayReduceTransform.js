// Array.reduce method... executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
// The reducer function takes four arguments: accumulator, currentValue, currentIndex, sourceArray.
// Syntax: array.reduce(function(accumulator, currentValue, currentIndex, array), initialValue)

// example of reduce method:


// let arr = [1, 2, 3, 4, 5]
// let sum = arr.reduce(adNum)

// function adNum(a,b){
//     console.log(a)
//     console.log(b)

//     console.log()
//     return a + b
// }

// console.log(sum)  // output : 15

//synatx of reduce method:
// array.reduce(function(total, currentValue, currentIndex, arr))


// ----------------------------------------------------------------



var reduce = function(nums, fn, init) {
    let total = init // initial value that is total
    for(let i=0; i<nums.length; i++){  // iterating through the array
        total = fn(total, nums[i])    // applying the function fn on total and current element of array
    }
    return total    // returning the final accumulated value
};